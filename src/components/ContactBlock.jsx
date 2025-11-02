export default function ContactBlock({ phone, email }) {
  const telHref = "tel:" + phone.replace(/\D/g, "");

  return (
    <section className="text-cream">
      <h2 className="text-xl font-bold mb-4">Get Help / Get Coverage</h2>

      <div className="flex flex-col gap-4 text-sm leading-snug">
        <div>
          <div className="text-lg font-bold">
            Call/Text{" "}
            <a
              href={telHref}
              className="underline decoration-safetyOrange underline-offset-4"
            >
              {phone}
            </a>
          </div>
          <div className="text-cream/80 break-all">
            Email {email}
          </div>
        </div>

        <form
          className="bg-tealDark/40 border border-cream/20 rounded-lg p-4 grid gap-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-1">
            <label className="text-cream/80 text-xs">Name</label>
            <input
              className="bg-tealDark text-cream text-sm border border-cream/30 rounded px-2 py-2 outline-none focus:border-safetyOrange"
              placeholder="Your name"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-cream/80 text-xs">
              Property Address
            </label>
            <input
              className="bg-tealDark text-cream text-sm border border-cream/30 rounded px-2 py-2 outline-none focus:border-safetyOrange"
              placeholder="123 Boardwalk Ave, AC"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-cream/80 text-xs">
              Best Contact Method
            </label>
            <input
              className="bg-tealDark text-cream text-sm border border-cream/30 rounded px-2 py-2 outline-none focus:border-safetyOrange"
              placeholder="Text / Call / Email"
            />
          </div>

          <button
            className="bg-safetyOrange text-tealDark font-semibold text-sm px-4 py-2 rounded shadow-sm hover:opacity-90 transition w-max"
          >
            Request Free Readiness Check
          </button>

          <p className="text-[11px] text-cream/60 leading-snug">
            We provide in-unit STR support and readiness services. You keep your payouts.
            Autopay available (ACH or card) for monthly plans.
          </p>
        </form>
      </div>
    </section>
  );
}
