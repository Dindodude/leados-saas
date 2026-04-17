import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <div className="marketing-shell">
        <header className="marketing-nav">
          <div className="brand-inline">
            <div className="brand-badge">L</div>
            <div>
              <div className="brand-title">LeadOS SaaS</div>
              <div className="brand-subtitle">Dashboards, instant forms, AI, and outreach CRM</div>
            </div>
          </div>
          <div className="cta-row">
            <Link href="/app" className="button">Open App</Link>
          </div>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow">From static file to real SaaS</div>
            <h1>Run outreach across multiple dashboards, forms, and devices.</h1>
            <p>
              LeadOS SaaS upgrades your original HTML CRM into a full-stack app with shared data, dashboard routing,
              webhook ingestion for instant forms, and AI-assisted scripts.
            </p>
            <div className="cta-row">
              <Link href="/app" className="button">Enter SaaS Workspace</Link>
              <a href="#features" className="button-secondary">See What Is Included</a>
            </div>
            <div className="metric-grid">
              <div className="metric">
                <strong>Multi</strong>
                <span>Separate dashboards per campaign, client, or source</span>
              </div>
              <div className="metric">
                <strong>Live</strong>
                <span>Backend-ready data instead of browser-only local storage</span>
              </div>
              <div className="metric">
                <strong>Forms</strong>
                <span>Webhook target for Meta instant forms and custom bridges</span>
              </div>
              <div className="metric">
                <strong>AI</strong>
                <span>Generate first messages, follow-ups, and personalized hooks</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="eyebrow">MVP Blueprint</div>
            <h2>What this scaffold already supports</h2>
            <ul>
              <li>Auth-ready Next.js app shell</li>
              <li>Dashboard model and routing</li>
              <li>Lead table and pipeline surface</li>
              <li>Instant forms ingestion endpoint</li>
              <li>AI script generation route</li>
              <li>Supabase schema for production setup</li>
            </ul>
          </div>
        </section>

        <section id="features" className="feature-strip">
          <article className="card feature">
            <div className="eyebrow">Dashboards</div>
            <h3>Create a new board for every source</h3>
            <p>Separate Google Places imports, Meta instant forms, inbound lead magnets, or client workspaces.</p>
          </article>
          <article className="card feature">
            <div className="eyebrow">Automation</div>
            <h3>Ingest instant form leads automatically</h3>
            <p>Use the per-dashboard webhook endpoint to route new form submissions straight into the right workspace.</p>
          </article>
          <article className="card feature">
            <div className="eyebrow">AI</div>
            <h3>Generate scripts from lead context</h3>
            <p>Send niche, city, stage, and notes into the AI route for tailored first messages and follow-ups.</p>
          </article>
        </section>
      </div>
    </main>
  );
}
