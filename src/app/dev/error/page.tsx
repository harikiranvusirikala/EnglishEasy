import { notFound } from "next/navigation";
import { connection } from "next/server";
import { ThrowOnRender } from "./ThrowOnRender";

// A page that always fails, so the error screen and the error report can be checked (e2e). A 404 unless
// `next dev` or ENABLE_DEV_PAGES=1, like /dev/ui. Rendered per request so `next build` never prerenders the throw.
export default async function DevErrorPage() {
  await connection();
  if (process.env.NODE_ENV !== "development" && process.env.ENABLE_DEV_PAGES !== "1") notFound();
  return <ThrowOnRender />;
}
