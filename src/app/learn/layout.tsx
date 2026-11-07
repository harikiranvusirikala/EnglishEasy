import { TabBar } from "@/components/learn/TabBar";

// The app shell for every learning screen: a centred column and the bottom tab bar.
export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-xl pb-[calc(4.5rem+env(safe-area-inset-bottom))]">
      {children}
      <TabBar />
    </div>
  );
}
