export default function Pricing() {
  const row = "flex flex-col bg-tealDark/40 border border-cream/20 rounded-lg p-4";

  return (
    <section className="text-cream">
      <h2 className="text-xl font-bold mb-4">Pricing Snapshot</h2>
      <div className="grid sm:grid-cols-2 gap-4 text-sm leading-snug">
        <div className={row}>
          <div className="font-semibold text-cream">
            Free 10-Min Readiness Check (new clients)
          </div>
          <div className="text-cream/80">
            Quick walk-through. “Here’s what would get you dinged by guests tonight.”
          </div>
        </div>

        <div className={row}>
          <div className="font-semibold text-cream">
            $149 Full Readiness &amp; SCO Prep Walkthrough
          </div>
          <div className="text-cream/80">
            Room-by-room checklist, compliance basics, local-contact plan.
          </div>
        </div>

        <div className={row}>
          <div className="font-semibold text-cream">
            Monthly Lite: Starting at $199/mo + parts
          </div>
          <div className="text-cream/80">
            Ongoing check-ins, minor emergency fixes, turnover eyes-on.
          </div>
        </div>

        <div className={row}>
          <div className="font-semibold text-cream">
            Monthly Plus: Custom monthly retainer for full in-unit ops/comms
          </div>
          <div className="text-cream/80">
            On-call local problem solver — guest coordination, access, vendor wrangling.
            Simple monthly autopay (ACH or card). You keep your payouts.
          </div>
        </div>
      </div>
    </section>
  );
}
