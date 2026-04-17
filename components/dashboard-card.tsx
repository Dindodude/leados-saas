import Link from "next/link";
import type { Dashboard } from "@/lib/types";

export function DashboardCard({ dashboard }: { dashboard: Dashboard }) {
  return (
    <Link href={`/app/dashboards/${dashboard.id}`} className="card dashboard-card">
      <div className="card-chip">{dashboard.source}</div>
      <h3>{dashboard.name}</h3>
      <p>{dashboard.description}</p>
      <div className="dashboard-stats">
        <div>
          <strong>{dashboard.leadCount}</strong>
          <span>Leads</span>
        </div>
        <div>
          <strong>{dashboard.uncheckedWhatsappCount}</strong>
          <span>WA Checks Left</span>
        </div>
      </div>
      <div className="endpoint-label">{dashboard.formEndpoint}</div>
    </Link>
  );
}
