"use client";

import { ErrorScreen } from "@/components/ErrorScreen";

export default function Error({ error }: { error: unknown }) {
  return <ErrorScreen error={error} />;
}
