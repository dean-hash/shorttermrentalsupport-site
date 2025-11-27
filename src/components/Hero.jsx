import React from "react";

export default function Hero({ phone, serviceAreas }) {
  const onScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    if (window.plausible) window.plausible("CTA Click", { props: { target: "Contact" } });
  };
  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
          Local Contractor-Led STR Support
        </h1>
        <p className="text-lg sm:text-xl text-cream/90 max-w-2xl mb-6">
          Same-day fixes, turnover quality, and compliance prep for short-term rentals.
        </p>
        <p className="text-safetyOrange font-bold text-sm sm:text-base mb-6 uppercase tracking-wide">
          FREE 10-Min STR Readiness Check for new clients.
        </p>

        <ul className="mt-4 space-y-2 text-sm leading-snug mb-8">
          <li>• You keep your payouts.</li>
          <li>• Licensed contractor, 5–10 minutes away.</li>
          <li>• {serviceAreas}</li>
        </ul>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="text-xl font-bold text-cream">
            Call/Text {phone}
          </div>
          <button
            onClick={onScrollToContact}
            className="inline-block bg-safetyOrange text-tealDark font-bold px-6 py-3 rounded shadow hover:opacity-90 transition"
          >
            Request Free Readiness Check
          </button>
        </div>
      </div>
    </section>
  );
}