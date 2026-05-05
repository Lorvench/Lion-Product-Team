import { ClosingCtaSection } from "@/components/organisms/ClosingCtaSection";
import { GroupStorySection } from "@/components/organisms/GroupStorySection";
import { HeroSection } from "@/components/organisms/HeroSection";
import { CapabilitiesSection } from "@/components/organisms/CapabilitiesSection";
import { MarketSection } from "@/components/organisms/MarketSection";
import { MarketThesisSection } from "@/components/organisms/MarketThesisSection";
import { PortfolioSection } from "@/components/organisms/PortfolioSection";
import { TechnologySection } from "@/components/organisms/TechnologySection";
import { getSiteContent } from "@/lib/site-content";

export default async function Home() {
  const siteContent = await getSiteContent();
  const home = siteContent.homeData;

  return (
    <main className="flex-1 bg-warm-ivory text-deep-night">
      <HeroSection hero={home.hero} />
      <MarketSection marketSignal={home.marketSignal} />
      <CapabilitiesSection capabilities={home.capabilities} />
      <PortfolioSection portfolio={home.portfolio} />
      <MarketThesisSection marketThesis={home.marketThesis} />
      <TechnologySection technology={home.technology} />
      <GroupStorySection groupStory={home.groupStory} />
      <ClosingCtaSection closingCta={home.closingCta} />
    </main>
  );
}
