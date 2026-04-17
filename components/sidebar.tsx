import Link from "next/link";

type SidebarProps = {
  dashboardId?: string;
};

export function Sidebar({ dashboardId }: SidebarProps) {
  const dashboardBase = dashboardId ? `/app/dashboards/${dashboardId}` : "/app";

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-badge">L</div>
        <div>
          <div className="brand-title">LeadOS SaaS</div>
          <div className="brand-subtitle">Multi-dashboard CRM</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        <Link href="/app">Overview</Link>
        <Link href="/app/dashboards">Dashboards</Link>
        <Link href={`${dashboardBase}`}>Pipeline</Link>
        <Link href={`${dashboardBase}/scripts`}>Scripts</Link>
        <Link href={`${dashboardBase}/forms`}>Instant Forms</Link>
      </nav>
    </aside>
  );
}
