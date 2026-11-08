// Makes the site's pictures: `npm run images`. Run it again after changing src/app/icon.svg or the preview's words.
// - From src/app/icon.svg: favicon.ico (16, 32 and 48 px), apple-icon.png (180 px, square, since iPhones round
//   the corners themselves) and the installable app's icons in public/icons (192, 512 and a maskable 512).
// - src/app/opengraph-image.png (1200 x 630, under 300 KB): the link preview WhatsApp, search results and
//   social sites show; docs/social-preview.png (1280 x 640): GitHub's social preview, the same drawing.
// - src/components/landing/images/*.webp: the landing page's phone screens, from docs/screenshots/ (e2e/capture.spec.ts).
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
function brandCard(width: number, height: number, margin: number, shot: string): string {
  const text = (x: number, y: number, size: number, weight: number, fill: string, content: string, font = FONT, anchor = "start") =>
    `<text x="${x}" y="${y}" font-family="${font}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${content}</text>`;
  const top = margin;
  const phoneW = 300;
  const phoneH = height - 2 * margin;
  const phoneX = width - margin - phoneW;
  const phoneY = margin;
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
  ${pill(margin, "100% free", 150)}${pill(margin + 164, "Telugu help", 170)}${pill(margin + 348, "No typing", 150)}${pill(margin + 512, "Open source", 176)}

  <g filter="url(#shadow)">
    <rect x="${phoneX}" y="${phoneY}" width="${phoneW}" height="${phoneH}" rx="40" fill="#1c1917"/>
    <rect x="${phoneX + 10}" y="${phoneY + 10}" width="${phoneW - 20}" height="${phoneH - 20}" rx="32" fill="#fbf8f3"/>
  </g>
  <clipPath id="screen"><rect x="${phoneX + 10}" y="${phoneY + 10}" width="${phoneW - 20}" height="${phoneH - 20}" rx="32"/></clipPath>
  <!-- A status bar above the app (time, the camera, signal and battery), so the camera never covers the screen's top row. -->
  ${text(phoneX + 34, phoneY + 34, 13, 700, "#1c1917", "9:41")}
  <rect x="${phoneX + phoneW / 2 - 34}" y="${phoneY + 18}" width="68" height="20" rx="10" fill="#1c1917"/>
  <g fill="#1c1917" transform="translate(${phoneX + phoneW - 76} ${phoneY + 23})">
    <rect x="0" y="8" width="3" height="4" rx="1"/><rect x="4.5" y="5.5" width="3" height="6.5" rx="1"/><rect x="9" y="3" width="3" height="9" rx="1"/><rect x="13.5" y="0.5" width="3" height="11.5" rx="1"/>
    <rect x="21" y="1" width="18" height="10" rx="2.5" fill="none" stroke="#1c1917" stroke-width="1.2"/><rect x="23" y="3" width="13" height="6" rx="1.2"/>
  </g>
  <image x="${phoneX + 10}" y="${phoneY + 46}" width="${phoneW - 20}" height="${phoneH - 56}" preserveAspectRatio="xMidYMin slice" clip-path="url(#screen)" href="${shot}"/>
</svg>`;
}

/** As small a PNG as looks the same: chat apps skip big link previews (WhatsApp's limit is about 300 KB). */
const smallPng = (svg: string) => sharp(Buffer.from(svg)).png({ palette: true, quality: 90, effort: 10 }).toBuffer();
// The phone in the pictures shows a real screen: a question answered right (docs/screenshots/, from e2e/capture.spec.ts).
const question = dataUrl("image/png", await sharp("docs/screenshots/question.png").resize({ width: 560 }).png().toBuffer());
await writeFile("src/app/opengraph-image.png", await smallPng(brandCard(1200, 630, 64, question)));
// GitHub's social preview (Settings → General → Social preview): 1280 x 640, 80 px safe area (GitHub's template).
await writeFile("docs/social-preview.png", await smallPng(brandCard(1280, 640, 80, question)));

// The landing page's pictures: phone screens from docs/screenshots/ as WebP, 640 px wide (shown at up to 320 CSS px).
await mkdir("src/components/landing/images", { recursive: true });
for (const name of ["home", "explain", "question", "tiles", "speak", "roleplay", "complete", "journey"]) {
  await writeFile(`src/components/landing/images/${name}.webp`, await sharp(`docs/screenshots/${name}.png`).resize({ width: 640 }).webp({ quality: 82, effort: 6 }).toBuffer());
}
// docs/screenshots/ stays small: the screenshots are kept as palette PNGs (they are flat colours and text).
for (const name of ["home", "explain", "question", "tiles", "speak", "roleplay", "complete", "journey"]) {
  const file = `docs/screenshots/${name}.png`;
  const small = await sharp(file).png({ palette: true, quality: 92, effort: 10 }).toBuffer();
  if (small.length < (await readFile(file)).length) await writeFile(file, small);
}
console.log("Wrote favicon.ico, apple-icon.png, opengraph-image.png in src/app, the app icons in public/icons, docs/social-preview.png and the landing pictures");
