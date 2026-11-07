// Makes the site's pictures: `npm run images`. Run it again after changing src/app/icon.svg or the preview's words.
// - From src/app/icon.svg: favicon.ico (16, 32 and 48 px), apple-icon.png (180 px, square, since iPhones round
//   the corners themselves) and the installable app's icons in public/icons (192, 512 and a maskable 512).
// - src/app/opengraph-image.png (1200 x 630, under 300 KB): the link preview WhatsApp, search results and
//   social sites show.
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

/** The link preview: the icon, the name, the headline in English and Telugu, and what it is. */
function preview(width: number, height: number): string {
  const text = (x: number, y: number, size: number, weight: number, fill: string, content: string, font = FONT) =>
    `<text x="${x}" y="${y}" font-family="${font}" font-size="${size}" font-weight="${weight}" fill="${fill}">${content}</text>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="paper" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f0fdfa"/><stop offset="1" stop-color="#fafaf9"/></linearGradient>
    <radialGradient id="glow"><stop offset="0" stop-color="#99f6e4" stop-opacity="0.8"/><stop offset="1" stop-color="#99f6e4" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#paper)"/>
  <circle cx="1060" cy="120" r="380" fill="url(#glow)"/>
  <image x="80" y="80" width="96" height="96" href="${dataUrl("image/svg+xml", icon)}"/>
  ${text(200, 148, 44, 700, "#0f766e", "EnglishEasy")}
  ${text(80, 300, 76, 800, "#1c1917", "Speak English")}
  ${text(80, 392, 76, 800, TEAL, "with confidence")}
  ${text(80, 478, 46, 600, "#44403c", "ఆత్మవిశ్వాసంతో ఇంగ్లీష్ మాట్లాడండి", TELUGU_FONT)}
  ${text(80, 560, 28, 400, "#57534e", "Free daily lessons with Telugu help. No typing.")}
</svg>`;
}

/** As small a PNG as looks the same: chat apps skip big link previews (WhatsApp's limit is about 300 KB). */
await writeFile("src/app/opengraph-image.png", await sharp(Buffer.from(preview(1200, 630))).png({ palette: true, quality: 90, effort: 10 }).toBuffer());
console.log("Wrote favicon.ico, apple-icon.png, opengraph-image.png in src/app and the app icons in public/icons");
