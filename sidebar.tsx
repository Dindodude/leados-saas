import Link from "next/link";

type SidebarProps = {
  dashboardId?: string;
};

export function Sidebar({ dashboardId }: SidebarProps) {
  const pipelineHref = dashboardId ? `/app/dashboards/${dashboardId}` : "/app";
  const scriptsHref = dashboardId ? `/app/dashboards/${dashboardId}/scripts` : "/app/dashboards";
  const formsHref = dashboardId ? `/app/dashboards/${dashboardId}/forms` : "/app/dashboards";

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
        <Link href={pipelineHref as any}>Pipeline</Link>
        <Link href={scriptsHref as any}>Scripts</Link>
        <Link href={formsHref as any}>Instant Forms</Link>
      </nav>
    </aside>
  );
}
