import { notFound } from "next/navigation";
import { ThrowOnRender } from "./ThrowOnRender";

// A page that always fails, so the error screen and the error report can be checked (e2e). A 404 unless
// `next dev` or ENABLE_DEV_PAGES=1, like /dev/ui.
export default function DevErrorPage() {
  if (process.env.NODE_ENV !== "development" && process.env.ENABLE_DEV_PAGES !== "1") notFound();
  return <ThrowOnRender />;
}
