export default function WhyUs({ serviceAreas }) {
  return (
    <section className="text-cream">
      <h2 className="text-xl font-bold mb-4">Why Owners Call Us</h2>
      <ul className="space-y-2 text-sm leading-snug">
        <li>• We’re 5–10 minutes away.</li>
        <li>• You keep your payouts.</li>
        <li>• Licensed contractor, not random gig labor.</li>
        <li>• {serviceAreas}</li>
        <li>• Simple monthly autopay (ACH or card).</li>
      </ul>
    </section>
  );
}
