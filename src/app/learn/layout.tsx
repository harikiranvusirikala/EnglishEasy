import { AppHeader } from "@/components/learn/AppHeader";
import { ProgressSync } from "@/components/learn/ProgressSync";
import { ReminderShell } from "@/components/learn/Reminder";
import { ReportingShell } from "@/components/learn/ReportingShell";
import { PwaShell } from "@/components/learn/PwaShell";
import { ShellDialogs } from "@/components/learn/ShellDialogs";
import { TabBar } from "@/components/learn/TabBar";
import { course } from "@/content/course";
import { writtenDayIds } from "@/content/load";

// The app shell for every learning screen: the header from 768 px (logo, tabs, theme, account), the
// screen itself, and the bottom tab bar on phones. Each screen sets its own width.
export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      <div className="pb-[calc(5.5rem+env(safe-area-inset-bottom))] md:pb-16">{children}</div>
      <TabBar />
      <ShellDialogs />
      <ProgressSync />
      <ReportingShell />
      <ReminderShell />
      <PwaShell course={course} written={writtenDayIds()} />
    </>
  );
}
