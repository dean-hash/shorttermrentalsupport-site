import { useId, useState } from "react";

export default function ContactBlock({ phone, email, address, hicNumber }) {
  const telHref = "tel:" + phone.replace(/\D/g, "");
  const formId = useId();

  const [name, setName] = useState("");
  const [propertyAddress, setPropertyAddress] = useState("");
  const [bestContactMethod, setBestContactMethod] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const isValidEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || "").trim());

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "idle", message: "" });

    const trimmedName = name.trim();
    const trimmedBestContactMethod = bestContactMethod.trim();
    const trimmedPropertyAddress = propertyAddress.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || trimmedName.length < 2) {
      setStatus({ type: "error", message: "Please enter your name." });
      return;
    }

    if (!trimmedPropertyAddress) {
      setStatus({ type: "error", message: "Please enter the property address." });
      return;
    }

    if (!trimmedBestContactMethod) {
      setStatus({
        type: "error",
        message: "Please tell us the best way to reach you (text/call/email)."
      });
      return;
    }

    if (!trimmedMessage || trimmedMessage.length < 10) {
      setStatus({
        type: "error",
        message: "Please include a short message (at least 10 characters)."
      });
      return;
    }

    const bestEmailMatch = trimmedBestContactMethod.match(
      /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i
    );
    const contactEmail = bestEmailMatch?.[0] || "";

    if (contactEmail && !isValidEmail(contactEmail)) {
      setStatus({
        type: "error",
        message: "The email in your contact method doesn't look valid."
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          propertyAddress: trimmedPropertyAddress,
          bestContactMethod: trimmedBestContactMethod,
          message: trimmedMessage,
          company
        })
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus({
          type: "error",
          message:
            data?.error ||
            "Something went wrong sending your message. Please try again."
        });
        return;
      }

      setStatus({
        type: "success",
        message: "Thanks — we received your request and will reach out shortly."
      });
      setName("");
      setPropertyAddress("");
      setBestContactMethod("");
      setMessage("");
      setCompany("");
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again in a moment."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="text-cream">
      <h2 className="text-xl font-bold mb-4">Request a Free 10-Min Call</h2>

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
          <div className="text-cream/80">
            Lives and works locally in Atlantic City: {address}
          </div>
          <div className="text-cream/80">
            NJ HIC #{hicNumber}
          </div>
        </div>

        <form
          className="bg-tealDark/40 border border-cream/20 rounded-lg p-4 grid gap-3"
          onSubmit={handleSubmit}
        >
          <div className="hidden">
            <label htmlFor={`${formId}-company`}>Company</label>
            <input
              id={`${formId}-company`}
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              autoComplete="off"
              tabIndex={-1}
            />
          </div>

          <div className="grid gap-1">
            <label className="text-cream/80 text-xs">Name</label>
            <input
              className="bg-tealDark text-cream text-sm border border-cream/30 rounded px-2 py-2 outline-none focus:border-safetyOrange"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-cream/80 text-xs">
              Property Address
            </label>
            <input
              className="bg-tealDark text-cream text-sm border border-cream/30 rounded px-2 py-2 outline-none focus:border-safetyOrange"
              placeholder="123 Boardwalk Ave, AC"
              value={propertyAddress}
              onChange={(e) => setPropertyAddress(e.target.value)}
              autoComplete="street-address"
            />
          </div>

          <div className="grid gap-1">
            <label className="text-cream/80 text-xs">
              Best Contact Method
            </label>
            <input
              className="bg-tealDark text-cream text-sm border border-cream/30 rounded px-2 py-2 outline-none focus:border-safetyOrange"
              placeholder="Text / Call / Email"
              value={bestContactMethod}
              onChange={(e) => setBestContactMethod(e.target.value)}
            />
          </div>

          <div className="grid gap-1">
            <label className="text-cream/80 text-xs">Message</label>
            <textarea
              className="bg-tealDark text-cream text-sm border border-cream/30 rounded px-2 py-2 outline-none focus:border-safetyOrange min-h-[96px] resize-y"
              placeholder="How can we help?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {status.type !== "idle" ? (
            <p
              className={
                status.type === "success"
                  ? "text-[12px] text-cream"
                  : "text-[12px] text-safetyOrange"
              }
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          ) : null}

          <button
            className="bg-safetyOrange text-tealDark font-semibold text-sm px-4 py-2 rounded shadow-sm hover:opacity-90 transition w-max disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Request a Free 10-Min Call"}
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
