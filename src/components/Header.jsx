import Logo from './Logo.jsx'
export default function Header({ brandName, serviceAreas, phone }) {
  const telHref = "tel:" + phone.replace(/\D/g, "");

  return (
    <header className="bg-tealDark text-cream border-b border-cream/20 px-4 py-4">
      <div className="max-w-screen-lg mx-auto flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        {/* Logo block (left), text centered within block */}
        <Logo serviceAreas={serviceAreas} />

        {/* Call/Text button (right) */}
        <a
          href={telHref}
          className="self-start inline-block bg-safetyOrange text-tealDark font-semibold text-sm px-4 py-2 rounded shadow-sm hover:opacity-90 transition"
        >
          Call/Text {phone}
        </a>
      </div>
    </header>
  );
}
