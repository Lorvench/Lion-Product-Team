import { Header } from "@/components/organisms/Header";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { ArrowRightIcon } from "@/components/atoms/Icons";
import { getSiteContent } from "@/lib/site-content";

export default async function GrowthPage() {
  const {
    siteBrand,
    siteNavigation,
    siteVenueLinks,
    siteGroupLinks,
    siteHeaderExtras,
    siteFooter,
    growthPage,
    growthPlayItems,
    growthWhyNowItems,
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

      <main className="grow bg-warm-ivory min-h-screen">
        {/* ── Hero ───────────────────────────────────────────────────── */}
        <section className="pt-40 pb-24 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase mb-8 block text-lion-gold">
                {growthPage.eyebrow}
              </span>
              <h1 className="text-5xl md:text-7xl font-display leading-[0.9] tracking-tighter text-deep-night">
                {growthPage.titleLead}
                <br />
                <span className="text-lion-gold italic">
                  {growthPage.titleAccent}
                </span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg md:text-xl font-sans font-medium leading-relaxed text-deep-night/60">
                {growthPage.body}
              </p>
            </div>
          </div>
        </section>

        {/* ── Where Lion can credibly play ───────────────────────────── */}
        <section className="pb-6 max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] border border-deep-night/10 shadow-sm p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-display tracking-tight text-deep-night mb-8">
              {growthPage.playHeading}
            </h2>
            <ul className="space-y-3">
              {growthPlayItems.map((item, i) => (
                <li
                  key={i}
                  className="rounded-2xl border border-deep-night/8 bg-warm-ivory/40 px-6 py-4 text-base leading-7 text-deep-night/70 font-sans">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Why now ────────────────────────────────────────────────── */}
        <section className="py-6 max-w-7xl mx-auto px-6">
          <div className="rounded-[3rem] border border-lion-gold/20 bg-warm-ivory p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-display tracking-tight text-deep-night mb-8">
              {growthPage.whyHeading}
            </h2>
            <div className="space-y-5">
              {growthWhyNowItems.map((para, i) => (
                <p
                  key={i}
                  className="text-base leading-7 text-deep-night/70 font-sans">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Example ───────────────────────────────────────── */}
        <section className="py-24 max-w-7xl mx-auto px-6 border-t border-deep-night/5 mt-16">
          <div className="mb-10">
            <span className="text-[10px] font-black tracking-[0.3em] uppercase text-lion-gold mb-6 block">
              {growthPage.featuredEyebrow}
            </span>
            <h2 className="text-4xl md:text-6xl font-display tracking-tight text-deep-night mb-5 max-w-3xl">
              {growthPage.featuredHeading}
            </h2>
            <p className="text-base text-deep-night/60 font-sans max-w-xl leading-relaxed">
              {growthPage.featuredBody}
            </p>
          </div>

          {/* Signal card */}
          <div className="bg-white rounded-[3rem] border border-deep-night/10 shadow-sm p-10 md:p-14">
            <div className="grid gap-10 lg:grid-cols-3">
              <div>
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-lion-gold mb-4 block">
                  {growthPage.featuredCardEyebrow}
                </span>
                <h3 className="text-2xl font-display tracking-tight text-deep-night leading-snug">
                  {growthPage.featuredCardHeading}
                </h3>
              </div>
              <div>
                <p className="text-base leading-7 text-deep-night/70 font-sans">
                  {growthPage.featuredCardCol2}
                </p>
              </div>
              <div>
                <p className="text-base leading-7 text-deep-night/70 font-sans">
                  {growthPage.featuredCardCol3}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────────────────────── */}
        <section className="py-32 text-center max-w-7xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-display tracking-tighter text-deep-night mb-12">
            {growthPage.ctaLead}
            <br />
            <span className="text-lion-gold italic">
              {growthPage.ctaAccent}
            </span>
          </h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-deep-night text-warm-ivory text-[10px] font-black tracking-widest uppercase px-10 py-5 rounded-full hover:bg-lion-gold hover:text-deep-night transition-all">
            {growthPage.ctaButton}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </section>
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
