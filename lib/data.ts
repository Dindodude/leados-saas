import { mockDashboards, mockLeads, mockScripts } from "@/lib/mock-data";
import type { Dashboard, Lead, ScriptTemplate } from "@/lib/types";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function getDashboards(): Promise<Dashboard[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return mockDashboards;

  const { data, error } = await supabase
    .from("dashboards")
    .select("id,name,slug,source,description")
    .order("created_at", { ascending: false });

  if (error || !data) return mockDashboards;

  return data.map((row) => ({
    id: row.id,
    name: row.name,
    slug: row.slug,
    source: row.source ?? "Manual",
    description: row.description ?? "",
    formEndpoint: `/api/forms/${row.id}`,
    leadCount: 0,
    uncheckedWhatsappCount: 0
  }));
}

export async function getDashboardById(id: string): Promise<Dashboard | null> {
  const dashboards = await getDashboards();
  return dashboards.find((dashboard) => dashboard.id === id) ?? null;
}

export async function getLeadsByDashboardId(dashboardId: string): Promise<Lead[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) {
    return mockLeads.filter((lead) => lead.dashboardId === dashboardId);
  }

  const { data, error } = await supabase
    .from("leads")
    .select("*")
    .eq("dashboard_id", dashboardId)
    .order("created_at", { ascending: false });

  if (error || !data) {
    return mockLeads.filter((lead) => lead.dashboardId === dashboardId);
  }

  return data.map((row) => ({
    id: row.id,
    dashboardId: row.dashboard_id,
    name: row.name,
    niche: row.niche,
    phone: row.phone ?? "",
    address: row.address ?? "",
    city: row.city ?? "",
    status: row.status,
    priority: row.priority,
    whatsappStatus: row.whatsapp_status,
    notes: row.notes ?? "",
    source: row.source ?? "Manual",
    createdAt: row.created_at
  }));
}

export async function getScriptTemplates(): Promise<ScriptTemplate[]> {
  const supabase = await createSupabaseServerClient();
  if (!supabase) return mockScripts;

  const { data, error } = await supabase
    .from("script_templates")
    .select("id,title,stage,body")
    .order("created_at", { ascending: true });

  if (error || !data) return mockScripts;
  return data;
}
