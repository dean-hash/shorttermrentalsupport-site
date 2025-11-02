export default function Services() {
  const cardBase =
    "bg-tealDark/40 border border-cream/20 rounded-lg p-4 flex flex-col gap-2";

  return (
    <section className="text-cream">
      <h2 className="text-xl font-bold mb-4">Core Services</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className={cardBase}>
          <h3 className="font-semibold text-cream">Turnover & Cleaner Coordination</h3>
          <p className="text-sm text-cream/80 leading-snug">
            We verify guest-ready quality and keep cleaners honest.
            Fast response within ~2 miles of Atlantic City / Ventnor.
          </p>
        </div>

        <div className={cardBase}>
          <h3 className="font-semibold text-cream">Emergency Minor Repairs</h3>
          <p className="text-sm text-cream/80 leading-snug">
            Locks, leaks, AC hiccups, broken hinges, TV mounts — handled fast.
            You don’t lose a night over something dumb.
          </p>
        </div>

        <div className={cardBase}>
          <h3 className="font-semibold text-cream">SCO / Compliance Readiness</h3>
          <p className="text-sm text-cream/80 leading-snug">
            Local contact, access, safety basics, Seasonal C.O. prep so you stay
            out of trouble.
          </p>
        </div>

        <div className={cardBase}>
          <h3 className="font-semibold text-cream">Guest-Ready Audit</h3>
          <p className="text-sm text-cream/80 leading-snug">
            We walk the unit before check-in and catch problems before reviews
            do. Less drama in public reviews.
          </p>
        </div>
      </div>
    </section>
  );
}
