import { Header } from "@/components/organisms/Header";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { getSiteContent } from "@/lib/site-content";

export default async function CapabilitiesPage() {
  const {
    siteBrand,
    siteNavigation,
    siteVenueLinks,
    siteGroupLinks,
    siteHeaderExtras,
    siteFooter,
    capabilitiesPage,
    capabilityCards,
    valueSteps,
  } = await getSiteContent();

  return (
    <div className="flex min-h-screen flex-col bg-warm-ivory text-deep-night">
      <Header
        brand={siteBrand}
        navigation={siteNavigation}
        menuCta={siteHeaderExtras.menuCta}
        venueLinks={siteVenueLinks}
        groupTitle={siteHeaderExtras.groupTitle}
        groupLinks={siteGroupLinks}
        overlayMainDirLabel={siteHeaderExtras.overlayMainDirLabel}
        overlayVenuesLabel={siteHeaderExtras.overlayVenuesLabel}
        overlayCrmHeading={siteHeaderExtras.overlayCrmHeading}
        overlayCrmAction={siteHeaderExtras.overlayCrmAction}
        contact={siteHeaderExtras.contact}
        footerLinks={siteHeaderExtras.footerLinks}
        copyright={siteHeaderExtras.copyright}
      />

      <main className="grow bg-warm-ivory min-h-screen pt-40">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-20">
            <div className="lg:col-span-7">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase mb-8 block text-lion-gold">
                {capabilitiesPage.eyebrow}
              </span>
              <h1 className="text-5xl md:text-7xl font-display leading-[0.9] tracking-tighter text-deep-night">
                {capabilitiesPage.titleLead}
                <br />
                <span className="italic opacity-40">
                  {capabilitiesPage.titleAccent}
                </span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg md:text-xl font-sans font-medium leading-relaxed max-w-sm text-deep-night/60">
                {capabilitiesPage.body}
              </p>
            </div>
          </div>

          {/* Capabilities grid */}
          <section className="py-24 mb-16">
            <div className="grid gap-8 md:grid-cols-2">
              {capabilityCards.map((cap, i) => (
                <div
                  key={i}
                  className="bg-white p-10 rounded-[3rem] border border-deep-night/10 shadow-sm hover:shadow-xl transition-shadow">
                  <h3 className="text-3xl font-display text-deep-night mb-5 tracking-tight">
                    {cap.title}
                  </h3>
                  <p className="text-sm leading-7 text-deep-night/60 font-sans">
                    {cap.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* How value is created */}
          <section className="py-24 mb-40 border-t border-deep-night/5">
            <div className="mb-16 max-w-3xl">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-lion-gold mb-8 block">
                {capabilitiesPage.valueEyebrow}
              </span>
              <h2 className="text-5xl md:text-6xl font-display tracking-tight text-deep-night mb-6">
                {capabilitiesPage.valueHeading}
              </h2>
              <p className="text-lg text-deep-night/60 font-sans">
                {capabilitiesPage.valueBody}
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-4">
              {valueSteps.map((s, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-[3rem] border border-deep-night/10 shadow-sm hover:shadow-xl transition-shadow">
                  <div className="text-sm font-semibold uppercase tracking-[0.22em] text-lion-gold mb-4">
                    {s.step}
                  </div>
                  <h3 className="text-xl font-display text-deep-night mb-4 tracking-tight">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-7 text-deep-night/60 font-sans">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <SiteFooter
        brand={siteBrand}
        navigation={siteNavigation}
        venueLinks={siteVenueLinks}
        groupLinks={siteGroupLinks}
        footer={siteFooter}
      />
    </div>
  );
}
