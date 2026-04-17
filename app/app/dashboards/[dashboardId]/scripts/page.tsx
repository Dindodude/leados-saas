import { ScriptLibrary } from "@/components/script-library";
import { getDashboardById, getScriptTemplates } from "@/lib/data";

type ScriptsPageProps = {
  params: Promise<{ dashboardId: string }>;
};

export default async function DashboardScriptsPage({ params }: ScriptsPageProps) {
  const { dashboardId } = await params;
  const dashboard = await getDashboardById(dashboardId);
  const scripts = await getScriptTemplates();

  return (
    <>
      <section className="page-title card">
        <div className="eyebrow">Script Library</div>
        <h1>{dashboard?.name ?? "Dashboard"} scripts</h1>
        <p>
          These templates are the backend-ready version of your current script system. Store them per dashboard, team, or
          campaign and let AI generate personalized variants.
        </p>
      </section>
      <ScriptLibrary scripts={scripts} />
    </>
  );
}
