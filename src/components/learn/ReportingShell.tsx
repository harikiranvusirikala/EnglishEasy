"use client";

import { useEffect } from "react";
import { flushFeedback } from "@/lib/feedback";
import { startErrorReporting } from "@/lib/report-error";
import { flushReports } from "@/lib/reports";

/** Behind every learning screen: reports uncaught errors, and sends problem reports and feedback that were queued offline. Shows nothing. */
export function ReportingShell() {
  useEffect(() => {
    const stop = startErrorReporting();
    const flush = () => {
      void flushReports();
      void flushFeedback();
    };
    flush();
    window.addEventListener("online", flush);
    return () => {
      stop();
      window.removeEventListener("online", flush);
    };
  }, []);
  return null;
}
