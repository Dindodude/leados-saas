import { Sidebar } from "@/components/sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="app-shell app-layout">
        <Sidebar />
        <div className="app-content">{children}</div>
      </div>
    </main>
  );
}
