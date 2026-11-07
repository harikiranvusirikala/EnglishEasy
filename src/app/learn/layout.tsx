import { ProgressSync } from "@/components/learn/ProgressSync";
import { ReportingShell } from "@/components/learn/ReportingShell";
import { PwaShell } from "@/components/learn/PwaShell";
import { ShellDialogs } from "@/components/learn/ShellDialogs";
import { TabBar } from "@/components/learn/TabBar";
import { course } from "@/content/course";
import { writtenDayIds } from "@/content/load";

// The app shell for every learning screen: a centred column and the bottom tab bar.
export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-xl pb-[calc(4.5rem+env(safe-area-inset-bottom))]">
      {children}
      <TabBar />
      <ShellDialogs />
      <ProgressSync />
      <ReportingShell />
      <PwaShell course={course} written={writtenDayIds()} />
    </div>
  );
}
