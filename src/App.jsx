// TODO: Update these constants before going live.
// Edit BRAND_NAME, SERVICE_AREAS, PIERRE_PHONE, PIERRE_EMAIL, PIERRE_ADDRESS, PIERRE_HIC once Pierre signs off.
const BRAND_NAME = "SHORT TERM RENTAL SUPPORT";
const SERVICE_AREAS = "ATLANTIC CITY • VENTNOR • MARGATE • LONGPORT";
const PIERRE_PHONE = "(848) 338-1314";
const PIERRE_EMAIL = "pierre@shorttermrentalsupport.com";
const PIERRE_ADDRESS = "3501 Ventnor Ave, Atlantic City, NJ 08401";
const PIERRE_HIC = "13V12007800";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ComplianceSection from "./components/ComplianceSection.jsx";
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
          address={PIERRE_ADDRESS}
        />
        <ComplianceSection />
        <WhyUs
          serviceAreas={SERVICE_AREAS}
          hicNumber={PIERRE_HIC}
        />
        <Services />
        <Pricing />
        <ContactBlock
          phone={PIERRE_PHONE}
          email={PIERRE_EMAIL}
          address={PIERRE_ADDRESS}
          hicNumber={PIERRE_HIC}
        />
      </main>

      <Footer
        serviceAreas={SERVICE_AREAS}
        address={PIERRE_ADDRESS}
        hicNumber={PIERRE_HIC}
      />
    </div>
  );
}
