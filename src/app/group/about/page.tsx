import { Header } from "@/components/organisms/Header";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { getSiteContent } from "@/lib/site-content";

export default async function AboutPage() {
  const {
    siteBrand,
    siteNavigation,
    siteVenueLinks,
    siteGroupLinks,
    siteHeaderExtras,
    siteFooter,
    aboutPage,
    beliefItems,
    leadershipCards,
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
                {aboutPage.eyebrow}
              </span>
              <h1 className="text-5xl md:text-7xl font-display leading-[0.9] tracking-tighter text-deep-night">
                {aboutPage.titleLead}
                <br />
                <span className="italic opacity-40">
                  {aboutPage.titleAccent}
                </span>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lg md:text-xl font-sans font-medium leading-relaxed max-w-sm text-deep-night/60">
                {aboutPage.body}
              </p>
            </div>
          </div>

          {/* Who we are / What we believe */}
          <section className="py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
            {/* Who we are */}
            <div className="bg-white p-12 md:p-16 rounded-[3rem] border border-deep-night/10 shadow-sm">
              <h2 className="text-3xl font-display tracking-tight text-deep-night mb-8">
                {aboutPage.whoHeading}
              </h2>
              <div className="space-y-5 text-base leading-7 text-deep-night/70 font-sans">
                <p>{aboutPage.whoBody1}</p>
                <p>{aboutPage.whoBody2}</p>
                <p>{aboutPage.whoBody3}</p>
              </div>
            </div>

            {/* What we believe */}
            <div className="bg-deep-night text-warm-ivory p-12 md:p-16 rounded-[3rem] border border-white/10 shadow-sm">
              <h2 className="text-3xl font-display tracking-tight text-warm-ivory mb-8">
                {aboutPage.believeHeading}
              </h2>
              <ul className="space-y-6">
                {beliefItems.map((belief, i) => (
                  <li
                    key={i}
                    className="text-base leading-7 text-warm-ivory/70 font-sans border-b border-white/10 pb-6 last:border-0 last:pb-0">
                    {belief}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Leadership */}
          <section className="py-40 border-t border-deep-night/5">
            <div className="mb-16">
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-lion-gold mb-8 block">
                {aboutPage.leadershipEyebrow}
              </span>
              <h2 className="text-4xl md:text-5xl font-display tracking-tight text-deep-night mb-4">
                {aboutPage.leadershipHeading}
              </h2>
              <p className="text-lg text-deep-night/60 font-sans max-w-2xl">
                {aboutPage.leadershipBody}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {leadershipCards.map((person, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-[3rem] border border-deep-night/10 shadow-sm hover:shadow-xl transition-shadow group">
                  <span className="text-[10px] font-black tracking-[0.3em] uppercase text-lion-gold mb-4 block">
                    {person.role}
                  </span>
                  <h3 className="text-2xl font-display tracking-tight text-deep-night mb-4 group-hover:text-lion-gold transition-colors">
                    {person.name}
                  </h3>
                  <p className="text-sm leading-7 text-deep-night/60 font-sans">
                    {person.bio}
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
