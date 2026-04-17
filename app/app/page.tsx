import { DashboardCard } from "@/components/dashboard-card";
import { getDashboards } from "@/lib/data";

export default async function AppOverviewPage() {
  const dashboards = await getDashboards();

  return (
    <>
      <section className="page-title card">
        <div className="eyebrow">SaaS Overview</div>
        <h1>One CRM, multiple dashboards.</h1>
        <p>
          This is the control center for the real SaaS version of LeadOS. Each dashboard can connect to a different lead
          source, team, or funnel.
        </p>
      </section>

      <section className="stats-grid">
        <div className="stat card">
          <strong>{dashboards.length}</strong>
          <span>Active dashboards</span>
        </div>
        <div className="stat card">
          <strong>{dashboards.reduce((sum, item) => sum + item.leadCount, 0)}</strong>
          <span>Total leads</span>
        </div>
        <div className="stat card">
          <strong>{dashboards.reduce((sum, item) => sum + item.uncheckedWhatsappCount, 0)}</strong>
          <span>WhatsApp checks pending</span>
        </div>
      </section>

      <section className="dashboard-grid">
        {dashboards.map((dashboard) => (
          <DashboardCard key={dashboard.id} dashboard={dashboard} />
        ))}
      </section>
    </>
  );
}
