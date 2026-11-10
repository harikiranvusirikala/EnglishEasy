/**
 * The checkpoint certificate as a picture (CURRICULUM §2b), drawn on the phone with a canvas: nothing is uploaded.
 * 1080 × 1350 (a portrait picture that WhatsApp shows whole). Browser only.
 */
export type CertificateText = { name: string | null; checkpoint: number; title: string; line: string; date: string; host: string };

const W = 1080;
const H = 1350;
const FONT = "-apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

/** Lines of `text` that fit `max` pixels wide in the canvas's current font. */
function wrap(ctx: CanvasRenderingContext2D, text: string, max: number): string[] {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(" ")) {
    const next = line ? `${line} ${word}` : word;
    if (ctx.measureText(next).width > max && line) {
      lines.push(line);
      line = word;
    } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

function loadImage(src: string): Promise<HTMLImageElement | null> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });
}

export async function drawCertificate(t: CertificateText): Promise<Blob | null> {
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.fillStyle = "#fffdf7";
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = "#e8d9b0";
  ctx.lineWidth = 6;
  ctx.strokeRect(40, 40, W - 80, H - 80);
  ctx.strokeStyle = "#f0e2bd";
  ctx.lineWidth = 3;
  ctx.strokeRect(64, 64, W - 128, H - 128);

  const icon = await loadImage("/icons/icon-512.png");
  if (icon) ctx.drawImage(icon, W / 2 - 80, 130, 160, 160);
  ctx.textAlign = "center";
  const text = (s: string, y: number, size: number, weight: number, color: string) => {
    ctx.font = `${weight} ${size}px ${FONT}`;
    ctx.fillStyle = color;
    ctx.fillText(s, W / 2, y);
  };
  text("EnglishEasy", 350, 48, 800, "#0b4f49");
  text("CERTIFICATE", 450, 38, 800, "#92400e");
  let y = 560;
  if (t.name) {
    text(t.name, y, 76, 800, "#1c1917");
    y += 70;
    text("has completed", y, 38, 400, "#57534e");
  } else text("Completed", y, 44, 600, "#57534e");
  y += 100;
  text(`Checkpoint ${t.checkpoint} · ${t.title}`, y, 52, 700, "#0f766e");
  ctx.font = `400 40px ${FONT}`;
  ctx.fillStyle = "#57534e";
  y += 90;
  for (const line of wrap(ctx, t.line, W - 260)) {
    ctx.fillText(line, W / 2, y);
    y += 56;
  }
  text(t.date, H - 220, 34, 600, "#78716c");
  text(t.host, H - 130, 36, 700, "#0f766e");
  return new Promise((resolve) => canvas.toBlob((b) => resolve(b), "image/png"));
}

/** Shares the picture through the phone's share sheet (WhatsApp, Gallery…); `false` when sharing files is not possible. */
export async function sharePicture(blob: Blob, fileName: string, message: string): Promise<boolean> {
  const file = new File([blob], fileName, { type: "image/png" });
  if (typeof navigator === "undefined" || !navigator.canShare?.({ files: [file] })) return false;
  try {
    await navigator.share({ files: [file], text: message });
    return true;
  } catch {
    return true; // the learner closed the share sheet: nothing more to do
  }
}
