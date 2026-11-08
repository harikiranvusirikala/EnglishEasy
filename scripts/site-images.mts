// Makes the site's pictures: `npm run images`. Run it again after changing src/app/icon.svg or the preview's words.
// - From src/app/icon.svg: favicon.ico (16, 32 and 48 px), apple-icon.png (180 px, square, since iPhones round
//   the corners themselves) and the installable app's icons in public/icons (192, 512 and a maskable 512).
// - src/app/opengraph-image.png (1200 x 630, under 300 KB): the link preview WhatsApp, search results and
//   social sites show; docs/social-preview.png (1280 x 640): GitHub's social preview, the same drawing.
// Text is drawn with the fonts of the machine that runs this (Helvetica Neue and a Telugu font on macOS).
// sharp is Next.js's own image library, installed with it.
import { mkdir, readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const FONT = "Helvetica Neue, Helvetica, Arial, sans-serif";
const TELUGU_FONT = "Noto Sans Telugu, Telugu Sangam MN, Gautami, sans-serif";
const TEAL = "#0f766e";

const icon = await readFile("src/app/icon.svg", "utf8");
const dataUrl = (type: string, data: Buffer | string) => `data:${type};base64,${Buffer.from(data).toString("base64")}`;

/** The icon at `size` px: drawn four times larger, then scaled down, for smooth edges. */
const iconPng = (svg: string, size: number) => sharp(Buffer.from(svg), { density: (72 * size * 4) / 64 }).resize(size, size).png().toBuffer();

/** An .ico file holding PNG images (every browser since 2010 reads them). */
function ico(images: { size: number; png: Buffer }[]): Buffer {
  const header = Buffer.alloc(6 + 16 * images.length);
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(images.length, 4);
  let offset = header.length;
  images.forEach(({ size, png }, i) => {
    const entry = 6 + 16 * i;
    header.writeUInt8(size, entry); // width
    header.writeUInt8(size, entry + 1); // height
    header.writeUInt16LE(1, entry + 4); // colour planes
    header.writeUInt16LE(32, entry + 6); // bits per pixel
    header.writeUInt32LE(png.length, entry + 8);
    header.writeUInt32LE(offset, entry + 12);
    offset += png.length;
  });
  return Buffer.concat([header, ...images.map((image) => image.png)]);
}

const sizes = [16, 32, 48];
await writeFile("src/app/favicon.ico", ico(await Promise.all(sizes.map(async (size) => ({ size, png: await iconPng(icon, size) })))));

// The tile without its rounded corners: iPhones and iPads cut their own.
const square = icon.replace(/(<rect id="tile"[^>]*?) rx="[\d.]+"/, "$1");
if (square === icon) throw new Error('src/app/icon.svg: no <rect id="tile" … rx="…"> to square off');
await writeFile("src/app/apple-icon.png", await iconPng(square, 180));

// The installable app's icons. The maskable one is the square tile with the bubble kept inside the centre
// 80% ("safe zone"), since Android may cut it to a circle.
await mkdir("public/icons", { recursive: true });
await writeFile("public/icons/icon-192.png", await iconPng(icon, 192));
await writeFile("public/icons/icon-512.png", await iconPng(icon, 512));
const maskable = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="${TEAL}"/>
  <image x="76" y="76" width="360" height="360" href="${dataUrl("image/svg+xml", square)}"/>
</svg>`;
await writeFile("public/icons/icon-maskable-512.png", await sharp(Buffer.from(maskable)).png().toBuffer());

/**
 * The brand card: the icon and name, the headline in English and Telugu, what it is, and a phone showing a
 * lesson question. Everything that matters stays `margin` px in from every edge (GitHub's social preview
 * template asks for 80 px; chat apps may crop the link preview's sides).
 */
function brandCard(width: number, height: number, margin: number): string {
  const text = (x: number, y: number, size: number, weight: number, fill: string, content: string, font = FONT, anchor = "start") =>
    `<text x="${x}" y="${y}" font-family="${font}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${content}</text>`;
  const top = margin;
  const phoneW = 300;
  const phoneH = height - 2 * margin;
  const phoneX = width - margin - phoneW;
  const phoneY = margin;
  const option = (y: number, label: string, chosen = false) => `
    <rect x="${phoneX + 28}" y="${y}" width="${phoneW - 56}" height="52" rx="14" fill="${chosen ? "#ecfdf5" : "#ffffff"}" stroke="${chosen ? "#34d399" : "#e7e0d5"}" stroke-width="2"/>
    ${text(phoneX + 48, y + 34, 22, chosen ? 700 : 500, chosen ? "#047857" : "#1c1917", label)}
    ${chosen ? `<path d="M${phoneX + phoneW - 64} ${y + 27}l7 7 13-14" stroke="#047857" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>` : ""}`;
  const pill = (x: number, label: string, w: number) => `
    <rect x="${x}" y="${height - margin - 46}" width="${w}" height="46" rx="23" fill="#e3f3f0"/>
    ${text(x + w / 2, height - margin - 16, 20, 600, "#0b4f49", label, FONT, "middle")}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <radialGradient id="glow"><stop offset="0" stop-color="#99f6e4" stop-opacity="0.7"/><stop offset="1" stop-color="#99f6e4" stop-opacity="0"/></radialGradient>
    <radialGradient id="sun"><stop offset="0" stop-color="#fde68a" stop-opacity="0.8"/><stop offset="1" stop-color="#fde68a" stop-opacity="0"/></radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#0f766e" flood-opacity="0.22"/></filter>
  </defs>
  <rect width="${width}" height="${height}" fill="#fbf8f3"/>
  <circle cx="${phoneX + phoneW / 2}" cy="${height / 2}" r="${height * 0.62}" fill="url(#glow)"/>
  <circle cx="${margin + 40}" cy="${height - 40}" r="220" fill="url(#sun)"/>

  <image x="${margin}" y="${top}" width="72" height="72" href="${dataUrl("image/svg+xml", icon)}"/>
  ${text(margin + 92, top + 50, 40, 800, "#1c1917", 'English<tspan fill="#0f766e">Easy</tspan>')}
  ${text(margin, top + 182, 68, 800, "#1c1917", "Speak English")}
  ${text(margin, top + 262, 68, 800, TEAL, "with confidence")}
  ${text(margin, top + 330, 38, 600, "#57534e", "ఆత్మవిశ్వాసంతో ఇంగ్లీష్ మాట్లాడండి", TELUGU_FONT)}
  ${pill(margin, "Telugu help", 170)}${pill(margin + 184, "Hear every sentence", 236)}${pill(margin + 434, "No typing · Free", 206)}

  <g filter="url(#shadow)">
    <rect x="${phoneX}" y="${phoneY}" width="${phoneW}" height="${phoneH}" rx="40" fill="#1c1917"/>
    <rect x="${phoneX + 10}" y="${phoneY + 10}" width="${phoneW - 20}" height="${phoneH - 20}" rx="32" fill="#fbf8f3"/>
  </g>
  <rect x="${phoneX + 28}" y="${phoneY + 40}" width="${phoneW - 56}" height="12" rx="6" fill="#f3eee6"/>
  <rect x="${phoneX + 28}" y="${phoneY + 40}" width="${(phoneW - 56) * 0.55}" height="12" rx="6" fill="#0f766e"/>
  <rect x="${phoneX + 28}" y="${phoneY + 70}" width="104" height="30" rx="15" fill="#e3f3f0"/>
  ${text(phoneX + 80, phoneY + 91, 17, 700, "#0b4f49", "Practice", FONT, "middle")}
  ${text(phoneX + 28, phoneY + 146, 27, 800, "#1c1917", "Yesterday I ___")}
  ${text(phoneX + 28, phoneY + 180, 27, 800, "#1c1917", "to the market.")}
  ${option(phoneY + 198, "go")}${option(phoneY + 258, "went", true)}${option(phoneY + 318, "will go")}
  <rect x="${phoneX + 28}" y="${phoneY + phoneH - 82}" width="${phoneW - 56}" height="54" rx="16" fill="#0f766e"/>
  ${text(phoneX + phoneW / 2, phoneY + phoneH - 47, 22, 700, "#ffffff", "Continue", FONT, "middle")}
</svg>`;
}

/** As small a PNG as looks the same: chat apps skip big link previews (WhatsApp's limit is about 300 KB). */
const smallPng = (svg: string) => sharp(Buffer.from(svg)).png({ palette: true, quality: 90, effort: 10 }).toBuffer();
await writeFile("src/app/opengraph-image.png", await smallPng(brandCard(1200, 630, 64)));
// GitHub's social preview (Settings → General → Social preview): 1280 x 640, 80 px safe area (GitHub's template).
await writeFile("docs/social-preview.png", await smallPng(brandCard(1280, 640, 80)));
console.log("Wrote favicon.ico, apple-icon.png, opengraph-image.png in src/app, the app icons in public/icons, and docs/social-preview.png");
