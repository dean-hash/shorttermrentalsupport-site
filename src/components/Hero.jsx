import React from "react";

export default function Hero() {
  const onScrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    if (window.plausible) window.plausible("CTA Click", { props: { target: "Contact" } });
  };
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Short-Term Rental Support</h1>
        <p className="text-lg text-gray-600 mb-8">Real help for hosts & owners—setup, pricing, guest issues, and more.</p>
        <div className="flex gap-3 justify-center">
          <a href="tel:+18889987464" className="px-6 py-3 rounded-xl border border-gray-300 hover:bg-gray-50">Call Now</a>
          <button onClick={onScrollToContact} className="px-6 py-3 rounded-xl bg-black text-white hover:opacity-90">Get Help Now</button>
        </div>
      </div>
    </section>
  );
}