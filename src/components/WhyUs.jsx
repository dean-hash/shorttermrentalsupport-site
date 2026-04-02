export default function WhyUs({ serviceAreas, hicNumber }) {
  return (
    <section className="text-cream">
      <h2 className="text-xl font-bold mb-4">Why Owners Trust Pierre</h2>
      <ul className="space-y-2 text-sm leading-snug">
        <li>• 40+ years of hands-on repair, maintenance, and building systems work.</li>
        <li>• Embry-Riddle training plus aircraft maintenance background rooted in precision.</li>
        <li>• Managed hotel properties with 150+ rooms and understands guest-facing operations.</li>
        <li>• Former NYC building super who handled whole-property issues himself.</li>
        <li>• Registered NJ Home Improvement Contractor (HIC #{hicNumber}).</li>
        <li>• {serviceAreas}</li>
        <li>• You keep your payouts. No revenue share.</li>
      </ul>
    </section>
  );
}
