export default function Pricing() {
  const row = "flex flex-col bg-tealDark/40 border border-cream/20 rounded-lg p-4";

  return (
    <section className="text-cream">
      <h2 className="text-xl font-bold mb-4">Pricing Snapshot</h2>
      <div className="grid sm:grid-cols-2 gap-4 text-sm leading-snug">
        <div className={row}>
          <div className="font-semibold text-cream">
            Free 10-Min Call (new clients)
          </div>
          <div className="text-cream/80">
            Quick call to understand the property, current setup, and where the
            operational or compliance pressure points are.
          </div>
        </div>

        <div className={row}>
          <div className="font-semibold text-cream">
            $149 Pre-Inspection / Readiness Walkthrough
          </div>
          <div className="text-cream/80">
            Room-by-room review, safety basics, local-contact planning, and a
            practical list of what needs attention first.
          </div>
        </div>

        <div className={row}>
          <div className="font-semibold text-cream">
            Flat Monthly Local Contact Coverage Starting at $99/mo
          </div>
          <div className="text-cream/80">
            Includes local-contact designation, 24/7 availability, and Atlantic
            City one-hour in-person response support. No revenue share. No
            percentage of payouts.
          </div>
        </div>

        <div className={row}>
          <div className="font-semibold text-cream">
            Repairs, Labor &amp; Materials Billed Separately
          </div>
          <div className="text-cream/80">
            Repair labor, materials, installations, and non-emergency work are
            quoted separately so owners pay for the work they actually need.
          </div>
        </div>
      </div>
    </section>
  );
}
