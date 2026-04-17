import { getDashboardById } from "@/lib/data";

type FormsPageProps = {
  params: Promise<{ dashboardId: string }>;
};

export default async function DashboardFormsPage({ params }: FormsPageProps) {
  const { dashboardId } = await params;
  const dashboard = await getDashboardById(dashboardId);

  return (
    <>
      <section className="page-title card">
        <div className="eyebrow">Instant Forms</div>
        <h1>{dashboard?.name ?? "Dashboard"} intake endpoint</h1>
        <p>
          Connect Meta instant forms or any external lead source to this dashboard through a webhook bridge. Each dashboard
          gets its own endpoint.
        </p>
      </section>

      <section className="split-grid">
        <div className="card">
          <div className="section-head">
            <h2>Webhook Endpoint</h2>
            <span>POST new leads here</span>
          </div>
          <div className="code-line">
            {process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/api/forms/{dashboardId}
          </div>
        </div>
        <div className="card">
          <div className="section-head">
            <h2>Recommended flow</h2>
          </div>
          <ul>
            <li>Meta form hits your webhook bridge</li>
            <li>Bridge validates the payload and dashboard id</li>
            <li>Lead is inserted into `leads` with source `Instant Form`</li>
            <li>Optional AI summary runs and adds script suggestions</li>
          </ul>
        </div>
      </section>
    </>
  );
}
