import { ClosingCtaSection } from "@/components/organisms/ClosingCtaSection";
import { GroupStorySection } from "@/components/organisms/GroupStorySection";
import { Header } from "@/components/organisms/Header";
import { HeroSection } from "@/components/organisms/HeroSection";
import { CapabilitiesSection } from "@/components/organisms/CapabilitiesSection";
import { MarketSection } from "@/components/organisms/MarketSection";
import { MarketThesisSection } from "@/components/organisms/MarketThesisSection";
import { PortfolioSection } from "@/components/organisms/PortfolioSection";
import { SiteFooter } from "@/components/organisms/SiteFooter";
import { TechnologySection } from "@/components/organisms/TechnologySection";
import { getSiteContent } from "@/lib/site-content";

export default async function Home() {
  const {
    siteBrand,
    siteNavigation,
    siteVenueLinks,
    siteGroupLinks,
    siteHeaderExtras,
    siteFooter,
    homeData,
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
        darkHero
      />

      <main className="flex-1 bg-warm-ivory">
        <HeroSection hero={homeData.hero} />
        <MarketSection marketSignal={homeData.marketSignal} />
        <CapabilitiesSection capabilities={homeData.capabilities} />
        <PortfolioSection portfolio={homeData.portfolio} />
        <MarketThesisSection marketThesis={homeData.marketThesis} />
        <TechnologySection technology={homeData.technology} />
        <GroupStorySection groupStory={homeData.groupStory} />
        <ClosingCtaSection closingCta={homeData.closingCta} />
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
