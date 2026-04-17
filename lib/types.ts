export type LeadStatus =
  | "Not Contacted"
  | "Contacted"
  | "Interested"
  | "Free Trial"
  | "Closed"
  | "Not Interested";

export type Priority = "hot" | "warm" | "cold";

export type WhatsAppStatus = "unknown" | "yes" | "no";

export type Dashboard = {
  id: string;
  name: string;
  slug: string;
  source: string;
  description: string;
  formEndpoint: string;
  leadCount: number;
  uncheckedWhatsappCount: number;
};

export type Lead = {
  id: string;
  dashboardId: string;
  name: string;
  niche: string;
  phone: string;
  address: string;
  city: string;
  status: LeadStatus;
  priority: Priority;
  whatsappStatus: WhatsAppStatus;
  notes: string;
  source: string;
  createdAt: string;
};

export type ScriptTemplate = {
  id: string;
  title: string;
  stage: "first-message" | "follow-up" | "reactivation" | "closing";
  body: string;
};
