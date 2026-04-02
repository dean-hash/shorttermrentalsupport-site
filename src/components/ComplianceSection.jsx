export default function ComplianceSection() {
  const itemBase =
    "bg-tealDark/40 border border-cream/20 rounded-lg p-4 flex flex-col gap-2";
  const linkClass =
    "inline-flex w-max items-center gap-1 font-semibold text-safetyOrange underline decoration-safetyOrange underline-offset-4 hover:opacity-90";

  return (
    <section className="text-cream">
      <div className="max-w-screen-lg">
        <p className="text-safetyOrange font-bold text-xs sm:text-sm uppercase tracking-[0.18em] mb-3">
          Atlantic City compliance support
        </p>

        <h2 className="text-xl font-bold mb-4">
          24/7 local contact coverage for the 1-hour rule
        </h2>

        <div className="max-w-3xl mb-6">
          <p className="text-sm sm:text-base text-cream/85 leading-relaxed">
            Atlantic City requires a local contact who can respond in person
            within one hour, 24/7. For out-of-town owners, that is hard to
            manage. Pierre provides local on-call support for complaints, guest
            issues, access problems, urgent property situations, and readiness
            concerns.
          </p>
          <a
            href="https://ecode360.com/15210484"
            target="_blank"
            rel="noreferrer"
            className={`${linkClass} mt-2`}
          >
            View official Atlantic City code requirement
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="max-w-3xl mb-6">
          <p className="text-sm sm:text-base text-cream/85 leading-relaxed">
            The same Atlantic City code says violations may lead to fines up to
            $2,000 per violation, with repeated adjudicated violations risking
            license revocation.
          </p>
          <a
            href="https://ecode360.com/15210484"
            target="_blank"
            rel="noreferrer"
            className={`${linkClass} mt-2`}
          >
            See official penalty language
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-sm leading-snug">
          <div className={itemBase}>
            <h3 className="font-semibold text-cream">
              What this monthly coverage is built for
            </h3>
            <ul className="space-y-2 text-cream/80">
              <li>• 24/7 local contact availability</li>
              <li>• In-person Atlantic City response within one hour</li>
              <li>• Noise complaints, guest issues, and access problems</li>
              <li>• Urgent on-site triage from an experienced operator</li>
            </ul>
          </div>

          <div className={itemBase}>
            <h3 className="font-semibold text-cream">
              Security camera compliance is another major requirement
            </h3>
            <p className="text-cream/80">
              Atlantic City also requires operational external video recording
              devices covering entrances and surrounding areas, with recordings
              preserved for 60 days and proper notice to renters.
            </p>
            <a
              href="https://ecode360.com/15210484"
              target="_blank"
              rel="noreferrer"
              className={linkClass}
            >
              See camera requirement in city code
              <span aria-hidden="true">↗</span>
            </a>
            <p className="text-cream/80">
              Pierre handles camera setup, placement, troubleshooting, and
              compliance-ready on-site work before peak season.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
