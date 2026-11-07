"use client";

import { useEffect } from "react";
import { startErrorReporting } from "@/lib/report-error";
import { flushReports } from "@/lib/reports";

/** Behind every learning screen: reports uncaught errors, and sends problem reports that were queued offline. Shows nothing. */
export function ReportingShell() {
  useEffect(() => {
    const stop = startErrorReporting();
    const flush = () => void flushReports();
    flush();
    window.addEventListener("online", flush);
    return () => {
      stop();
      window.removeEventListener("online", flush);
    };
  }, []);
  return null;
}
