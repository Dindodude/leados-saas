import type { Lead } from "@/lib/types";

const statusClassMap: Record<Lead["status"], string> = {
  "Not Contacted": "muted",
  Contacted: "info",
  Interested: "success",
  "Free Trial": "accent",
  Closed: "success",
  "Not Interested": "danger"
};

export function LeadTable({ leads }: { leads: Lead[] }) {
  return (
    <div className="card table-card">
      <div className="section-head">
        <h2>Leads</h2>
        <span>{leads.length} total</span>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>City</th>
              <th>Phone</th>
              <th>Status</th>
              <th>WhatsApp</th>
              <th>Source</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td>{lead.niche}</td>
                <td>{lead.city || "-"}</td>
                <td>{lead.phone || "-"}</td>
                <td>
                  <span className={`pill ${statusClassMap[lead.status]}`}>{lead.status}</span>
                </td>
                <td>{lead.whatsappStatus === "yes" ? "Has WA" : lead.whatsappStatus === "no" ? "No WA" : "Unknown"}</td>
                <td>{lead.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
