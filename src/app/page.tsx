import { homeData } from "@/data/home";
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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-warm-ivory text-deep-night">
      <Header
        brand={homeData.brand}
        navigation={homeData.navigation}
        menuCta={homeData.header.cta}
        venueLinks={homeData.portfolio.items}
        groupTitle={homeData.header.groupTitle}
        groupLinks={homeData.groupLinks}
        overlayCrmHeading={homeData.header.overlayCrmHeading}
        overlayCrmAction={homeData.header.overlayCrmAction}
        contact={homeData.footer.contact}
        footerLinks={homeData.footer.bottomLinks}
        copyright={homeData.footer.copyright}
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
        brand={homeData.brand}
        navigation={homeData.navigation}
        venueLinks={homeData.portfolio.items}
        groupLinks={homeData.groupLinks}
        footer={homeData.footer}
      />
    </div>
  );
}
