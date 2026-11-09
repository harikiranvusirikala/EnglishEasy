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

/** The live site, shown on the previews (GitHub's card links to github.com, so this says where to try the app). */
const SITE_HOST = "learn-english-in-telugu.vercel.app";
/** What it is, in three short lines: English learned through Telugu, how a lesson goes, and that it is free. */
const DESCRIPTION_LINES = ["Learn spoken English with the help of Telugu.", "Short daily lessons you hear, tap and speak.", "Free and open source, with no ads."];

/** A phone with a real screen: a frame, a drawn status bar (so the camera never covers the app), the screenshot; tilted `angle` degrees. */
function phone(id: string, x: number, y: number, w: number, h: number, shot: string, angle: number): string {
  const text = (tx: number, ty: number, content: string) => `<text x="${tx}" y="${ty}" font-family="${FONT}" font-size="12" font-weight="700" fill="#1c1917">${content}</text>`;
  return `<g transform="rotate(${angle} ${x + w / 2} ${y + h / 2})">
  <g filter="url(#shadow)">
    <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="36" fill="#1c1917"/>
    <rect x="${x + 9}" y="${y + 9}" width="${w - 18}" height="${h - 18}" rx="28" fill="#fbf8f3"/>
  </g>
  <clipPath id="${id}"><rect x="${x + 9}" y="${y + 9}" width="${w - 18}" height="${h - 18}" rx="28"/></clipPath>
  ${text(x + 30, y + 32, "9:41")}
  <rect x="${x + w / 2 - 30}" y="${y + 17}" width="60" height="18" rx="9" fill="#1c1917"/>
  <g fill="#1c1917" transform="translate(${x + w - 70} ${y + 21})">
    <rect x="0" y="8" width="3" height="4" rx="1"/><rect x="4.5" y="5.5" width="3" height="6.5" rx="1"/><rect x="9" y="3" width="3" height="9" rx="1"/><rect x="13.5" y="0.5" width="3" height="11.5" rx="1"/>
    <rect x="21" y="1" width="18" height="10" rx="2.5" fill="none" stroke="#1c1917" stroke-width="1.2"/><rect x="23" y="3" width="13" height="6" rx="1.2"/>
  </g>
  <image x="${x + 9}" y="${y + 42}" width="${w - 18}" height="${h - 51}" preserveAspectRatio="xMidYMin slice" clip-path="url(#${id})" href="${shot}"/>
</g>`;
}

/**
 * The brand card: the icon and name, the headline in English and Telugu, what it is in three lines, the site's
 * address, and two tilted phones like the
 * landing page's hero (Home behind, a lesson question answered right in front). Everything that matters stays
 * `margin` px in from every edge (GitHub's social preview template asks for 80 px; chat apps may crop the sides).
 */
function brandCard(width: number, height: number, margin: number, back: string, front: string, shotAspect: number): string {
  const text = (x: number, y: number, size: number, weight: number, fill: string, content: string, font = FONT, anchor = "start") =>
    `<text x="${x}" y="${y}" font-family="${font}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${content}</text>`;
  const top = margin;
  // The two phones share the space right of the text (it ends about 700 px in): the front one overlaps the back one
  // by a third and sits lower. Each is as wide as its whole screenshot needs (status bar 42 px, 9 px frame).
  const room = width - margin - (margin + 700);
  const drop = Math.round(height * 0.08);
  const phoneH = Math.min(height - 2 * margin - drop, Math.round(((room / 1.62 - 18) / shotAspect) + 51));
  const phoneW = Math.round((phoneH - 51) * shotAspect) + 18;
  const frontX = width - margin - phoneW;
  const backX = frontX - Math.round(phoneW * 0.62);
  const backY = Math.round((height - phoneH - drop) / 2);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <radialGradient id="glow"><stop offset="0" stop-color="#99f6e4" stop-opacity="0.7"/><stop offset="1" stop-color="#99f6e4" stop-opacity="0"/></radialGradient>
    <radialGradient id="sun"><stop offset="0" stop-color="#fde68a" stop-opacity="0.8"/><stop offset="1" stop-color="#fde68a" stop-opacity="0"/></radialGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="18" stdDeviation="20" flood-color="#0f766e" flood-opacity="0.22"/></filter>
  </defs>
  <rect width="${width}" height="${height}" fill="#fbf8f3"/>
  <circle cx="${(backX + frontX + phoneW) / 2}" cy="${height / 2}" r="${height * 0.62}" fill="url(#glow)"/>
  <circle cx="${margin + 40}" cy="${height - 40}" r="220" fill="url(#sun)"/>

  <image x="${margin}" y="${top}" width="72" height="72" href="${dataUrl("image/svg+xml", icon)}"/>
  ${text(margin + 92, top + 50, 40, 800, "#1c1917", 'English<tspan fill="#0f766e">Easy</tspan>')}
  ${text(margin, top + 158, 60, 800, "#1c1917", "Speak English")}
  ${text(margin, top + 228, 60, 800, TEAL, "with confidence")}
  ${text(margin, top + 286, 34, 600, "#57534e", "ఆత్మవిశ్వాసంతో ఇంగ్లీష్ మాట్లాడండి", TELUGU_FONT)}
  ${DESCRIPTION_LINES.map((line, i) => text(margin, top + 348 + i * 31, 23, 400, "#57534e", line)).join("")}
  ${text(margin, top + 466, 20, 600, TEAL, SITE_HOST)}

  ${phone("back", backX, backY, phoneW, phoneH, back, -3)}
  ${phone("front", frontX, backY + drop, phoneW, phoneH, front, 3)}
</svg>`;
}

/** As small a PNG as looks the same: chat apps skip big link previews (WhatsApp's limit is about 300 KB). */
const smallPng = (svg: string) => sharp(Buffer.from(svg)).png({ palette: true, quality: 90, effort: 10 }).toBuffer();
// The phones show real screens, as on the landing page: Home behind, a question answered right in front
// (docs/screenshots/, from e2e/capture.spec.ts).
const screen = async (name: string) => sharp(`docs/screenshots/${name}.png`).resize({ width: 460 }).png().toBuffer();
const questionPng = await screen("question");
const questionSize = await sharp(questionPng).metadata();
const shotAspect = (questionSize.width ?? 1) / (questionSize.height ?? 1);
const question = dataUrl("image/png", questionPng);
const home = dataUrl("image/png", await screen("home"));
await writeFile("src/app/opengraph-image.png", await smallPng(brandCard(1200, 630, 64, home, question, shotAspect)));
// GitHub's social preview (Settings → General → Social preview): 1280 x 640, 80 px safe area (GitHub's template).
await writeFile("docs/social-preview.png", await smallPng(brandCard(1280, 640, 80, home, question, shotAspect)));

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
