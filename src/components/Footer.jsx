export default function Footer({ serviceAreas }) {
  return (
    <footer className="bg-tealDark text-cream border-t border-cream/20 px-4 py-6 text-[11px] leading-snug">
      <div className="max-w-screen-lg mx-auto flex flex-col gap-3">
        <div className="text-cream/80">
          “We are not a broker or property manager. We don’t negotiate leases
          and we don’t collect rent. We are a licensed contractor providing
          in-unit STR support and readiness services for owners in Atlantic
          City, Ventnor, Margate, and Longport.”
        </div>

        <div className="text-cream/50 whitespace-nowrap">
          {serviceAreas}
        </div>
      </div>
    </footer>
  );
}
