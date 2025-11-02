// TODO: Update these constants before going live.
// Edit BRAND_NAME, SERVICE_AREAS, PIERRE_PHONE, PIERRE_EMAIL once Pierre signs off.
const BRAND_NAME = "SHORT TERM RENTAL SUPPORT";
const SERVICE_AREAS = "ATLANTIC CITY • VENTNOR • MARGATE • LONGPORT";
const PIERRE_PHONE = "(888) 998-7464";
const PIERRE_EMAIL = "pierre@shorttermrentalsupport.com";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import WhyUs from "./components/WhyUs.jsx";
import Pricing from "./components/Pricing.jsx";
import ContactBlock from "./components/ContactBlock.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="bg-tealDark text-cream flex flex-col min-h-screen">
      <Header
        brandName={BRAND_NAME}
        serviceAreas={SERVICE_AREAS}
        phone={PIERRE_PHONE}
      />

      <main className="flex-1 flex flex-col gap-12 px-4 py-8 max-w-screen-lg w-full mx-auto">
        <Hero
          phone={PIERRE_PHONE}
          serviceAreas={SERVICE_AREAS}
        />
        <Services />
        <WhyUs serviceAreas={SERVICE_AREAS} />
        <Pricing />
        <ContactBlock
          phone={PIERRE_PHONE}
          email={PIERRE_EMAIL}
        />
      </main>

      <Footer serviceAreas={SERVICE_AREAS} />
    </div>
  );
}
