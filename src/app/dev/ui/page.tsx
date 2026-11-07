import { notFound } from "next/navigation";
import { Gallery } from "./Gallery";

// The component gallery: every kit component in every state, in both Learn in modes. A 404 unless
// `next dev` or ENABLE_DEV_PAGES=1 (Playwright's web server sets it); on Vercel it is built as a 404.
export default function DevUiPage() {
  if (process.env.NODE_ENV !== "development" && process.env.ENABLE_DEV_PAGES !== "1") notFound();
  return <Gallery />;
}
