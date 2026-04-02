export default function Services() {
  const cardBase =
    "bg-tealDark/40 border border-cream/20 rounded-lg p-4 flex flex-col gap-2";

  return (
    <section className="text-cream">
      <h2 className="text-xl font-bold mb-4">Core Services</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className={cardBase}>
          <h3 className="font-semibold text-cream">Local Contact, Compliance &amp; Readiness</h3>
          <p className="text-sm text-cream/80 leading-snug">
            On-call local coverage for Atlantic City STR owners who need a real
            person to respond to complaints, access issues, urgent property
            situations, pre-inspection walkthroughs, safety-item checks, and
            local-contact planning before a city or guest problem happens.
          </p>
        </div>

        <div className={cardBase}>
          <h3 className="font-semibold text-cream">Repairs, Handyman &amp; Systems Work</h3>
          <p className="text-sm text-cream/80 leading-snug">
            Locks, leaks, heaters, HVAC issues, electrical, plumbing, drywall,
            tile, flooring, fixture swaps, cameras, and the everyday property
            problems owners need handled quickly.
          </p>
        </div>

        <div className={cardBase}>
          <h3 className="font-semibold text-cream">Security Camera Install &amp; Setup</h3>
          <p className="text-sm text-cream/80 leading-snug">
            Exterior camera installation, positioning, troubleshooting, and
            readiness work to help owners meet Atlantic City recording and
            notice requirements.
          </p>
        </div>

        <div className={cardBase}>
          <h3 className="font-semibold text-cream">Cleaning, Turnover &amp; Guest-Ready Support</h3>
          <p className="text-sm text-cream/80 leading-snug">
            Turnover cleaning availability through trusted local help, plus
            cleaner coordination, unit checks, and guest-ready oversight during
            busy booking periods.
          </p>
        </div>
      </div>
    </section>
  );
}
