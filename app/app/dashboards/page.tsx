import { DashboardCard } from "@/components/dashboard-card";
import { getDashboards } from "@/lib/data";

export default async function DashboardsPage() {
  const dashboards = await getDashboards();

  return (
    <>
      <section className="page-title card">
        <div className="eyebrow">Dashboards</div>
        <h1>Create separate pipelines by source.</h1>
        <p>
          Use a dedicated dashboard for every campaign or client so inbound forms, CSV imports, AI scripts, and pipeline
          metrics stay clean.
        </p>
      </section>
      <section className="dashboard-grid">
        {dashboards.map((dashboard) => (
          <DashboardCard key={dashboard.id} dashboard={dashboard} />
        ))}
      </section>
      <section className="card empty-state">
        <h3>Next backend step</h3>
        <p>
          Add a dashboard creation form backed by Supabase so users can create workspaces without touching code. The schema
          in this project already supports it.
        </p>
      </section>
    </>
  );
}
