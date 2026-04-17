import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LeadOS SaaS",
  description: "A real SaaS CRM for outreach, dashboards, instant forms, and AI-powered scripting."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
