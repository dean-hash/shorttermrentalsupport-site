export default function Hero({ phone, serviceAreas }) {
  const telHref = "tel:" + phone.replace(/\D/g, "");

  return (
    <section className="text-cream">
      <h1 className="text-2xl font-extrabold leading-snug">
        Local Contractor-Led STR Support
      </h1>

      <p className="mt-3 text-cream/90 text-base leading-relaxed">
        Same-day fixes, turnover quality, and compliance prep for short-term rentals.
      </p>

      <p className="mt-2 text-safetyOrange font-semibold text-sm">
        FREE 10-Min STR Readiness Check for new clients.
      </p>

      <ul className="mt-4 space-y-2 text-sm leading-snug">
        <li>• You keep your payouts.</li>
        <li>• Licensed contractor, 5–10 minutes away.</li>
        <li>• {serviceAreas}</li>
      </ul>

      <div className="mt-5 flex flex-col sm:flex-row sm:items-center gap-3">
        <div className="text-lg font-bold">
          Call/Text{" "}
          <a href={telHref} className="underline decoration-safetyOrange underline-offset-4">
            {phone}
          </a>
        </div>

        <a
          href={telHref}
          className="inline-block bg-safetyOrange text-tealDark font-semibold text-sm px-4 py-2 rounded shadow-sm hover:opacity-90 transition w-max"
        >
          Request Free Readiness Check
        </a>
      </div>
    </section>
  );
}
