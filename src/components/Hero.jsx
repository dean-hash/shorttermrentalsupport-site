import React from "react";

export default function Hero({ phone, serviceAreas, address }) {
  const onScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    if (window.plausible) window.plausible("CTA Click", { props: { target: "Contact" } });
  };
  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-4">
          Atlantic City 24/7 Local Contact &amp; STR Support
        </h1>
        <p className="text-lg sm:text-xl text-cream/90 max-w-2xl mb-6">
          Pierre Gaston helps short-term rental owners stay guest-ready, handle
          urgent issues fast, and meet Atlantic City local-contact requirements.
        </p>
        <p className="text-safetyOrange font-bold text-sm sm:text-base mb-6 uppercase tracking-wide">
          FREE 10-Min Call for new clients.
        </p>

        <p className="text-base sm:text-lg font-semibold text-safetyOrange mb-6">
          Local means faster response and less overhead.
        </p>

        <ul className="mt-4 space-y-2 text-sm leading-snug mb-8">
          <li>• 24/7 local contact coverage with in-person response in Atlantic City.</li>
          <li>• 40+ years of hands-on repair and property operations experience.</li>
          <li>• Hotel, building, HVAC, electrical, plumbing, and turnover know-how.</li>
          <li>• Lives and works locally in Atlantic City.</li>
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
            Request a Free 10-Min Call
          </button>
        </div>
      </div>
    </section>
  );
}
