import { LeadTable } from "@/components/lead-table";
import { getDashboardById, getLeadsByDashboardId } from "@/lib/data";

type DashboardPageProps = {
  params: Promise<{ dashboardId: string }>;
};

export default async function DashboardPage({ params }: DashboardPageProps) {
  const { dashboardId } = await params;
  const dashboard = await getDashboardById(dashboardId);
  const leads = await getLeadsByDashboardId(dashboardId);

  if (!dashboard) {
    return (
      <section className="card empty-state">
        <h1>Dashboard not found</h1>
        <p>Create the dashboard in Supabase or check the route id.</p>
      </section>
    );
  }

  const unchecked = leads.filter((lead) => lead.whatsappStatus === "unknown").length;
  const interested = leads.filter((lead) => lead.status === "Interested" || lead.status === "Free Trial").length;

  return (
    <>
      <section className="page-title card">
        <div className="eyebrow">{dashboard.source}</div>
        <h1>{dashboard.name}</h1>
        <p>{dashboard.description}</p>
      </section>

      <section className="stats-grid">
        <div className="stat card">
          <strong>{leads.length}</strong>
          <span>Total leads</span>
        </div>
        <div className="stat card">
          <strong>{unchecked}</strong>
          <span>WhatsApp checks pending</span>
        </div>
        <div className="stat card">
          <strong>{interested}</strong>
          <span>Interested or trial stage</span>
        </div>
      </section>

      <LeadTable leads={leads} />
    </>
  );
}
