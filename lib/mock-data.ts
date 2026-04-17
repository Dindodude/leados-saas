import type { Dashboard, Lead, ScriptTemplate } from "@/lib/types";

export const mockDashboards: Dashboard[] = [
  {
    id: "dash-auto-ontario",
    name: "Ontario Auto Shops",
    slug: "ontario-auto-shops",
    source: "Google Places CSV",
    description: "Primary outreach board for Ontario mechanics, tire shops, and detailers.",
    formEndpoint: "/api/forms/dash-auto-ontario",
    leadCount: 148,
    uncheckedWhatsappCount: 92
  },
  {
    id: "dash-fitness-leads",
    name: "Fitness Instant Forms",
    slug: "fitness-instant-forms",
    source: "Meta Instant Forms",
    description: "Inbound lead board for personal trainers and fitness clients.",
    formEndpoint: "/api/forms/dash-fitness-leads",
    leadCount: 37,
    uncheckedWhatsappCount: 14
  }
];

export const mockLeads: Lead[] = [
  {
    id: "lead-1",
    dashboardId: "dash-auto-ontario",
    name: "1000 Islands Mobile Tire",
    niche: "Tire Shop",
    phone: "+1 613-555-0148",
    address: "Kingston, ON, Canada",
    city: "Kingston",
    status: "Not Contacted",
    priority: "warm",
    whatsappStatus: "unknown",
    notes: "Imported from Google Places. Tire-service mobile business.",
    source: "CSV Import",
    createdAt: "2026-04-17T15:10:00.000Z"
  },
  {
    id: "lead-2",
    dashboardId: "dash-fitness-leads",
    name: "Jaskaran Singh Personal Training",
    niche: "Personal Trainer",
    phone: "+1 647-555-0192",
    address: "Oakville, ON, Canada",
    city: "Oakville",
    status: "Contacted",
    priority: "hot",
    whatsappStatus: "yes",
    notes: "Meta lead form from free consultation campaign.",
    source: "Instant Form",
    createdAt: "2026-04-17T16:00:00.000Z"
  },
  {
    id: "lead-3",
    dashboardId: "dash-auto-ontario",
    name: "Zen Mobile Auto Spa",
    niche: "Car Detailing",
    phone: "+1 705-500-6042",
    address: "Kenora, ON, Canada",
    city: "Kenora",
    status: "Interested",
    priority: "hot",
    whatsappStatus: "yes",
    notes: "Website found. Good candidate for reels before/after offer.",
    source: "CSV Import",
    createdAt: "2026-04-16T12:00:00.000Z"
  }
];

export const mockScripts: ScriptTemplate[] = [
  {
    id: "script-1",
    title: "First Message - Direct",
    stage: "first-message",
    body: "Hey {business}, I checked out your {niche} business in {city} and already have 2 short-form ideas that could help bring in more local customers. Want me to send them over?"
  },
  {
    id: "script-2",
    title: "First Message - Casual",
    stage: "first-message",
    body: "Hey {firstName}, quick one. I had an idea for how {business} could get more attention in {city} with reels. Want me to send it over?"
  },
  {
    id: "script-3",
    title: "Follow-Up - Soft",
    stage: "follow-up",
    body: "Hey {business}, just bumping this in case it got buried. I still have those ideas for your page if you want me to send them over."
  },
  {
    id: "script-4",
    title: "Reactivation",
    stage: "reactivation",
    body: "Hey {firstName}, not sure if now is a better time, but I still had that growth idea for {business}. Want me to send it over?"
  },
  {
    id: "script-5",
    title: "Close With Trial",
    stage: "closing",
    body: "If it helps, we can start with a free trial so you can see the quality and the results before committing to anything long-term."
  }
];
