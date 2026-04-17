import type { ScriptTemplate } from "@/lib/types";

export function ScriptLibrary({ scripts }: { scripts: ScriptTemplate[] }) {
  return (
    <div className="script-grid">
      {scripts.map((script) => (
        <article key={script.id} className="card script-card">
          <div className="card-chip">{script.stage}</div>
          <h3>{script.title}</h3>
          <p>{script.body}</p>
        </article>
      ))}
    </div>
  );
}
