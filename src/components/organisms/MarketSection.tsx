import { Container } from "@/components/atoms/Container";
import { SparklesIcon } from "@/components/atoms/Icons";
import { SignalChip } from "@/components/molecules/SignalChip";

type MarketSectionProps = {
  marketSignal: {
    badge: string;
    title: string;
    body: string;
    chips: string[];
  };
};

export function MarketSection({ marketSignal }: MarketSectionProps) {
  return (
    <section
      id="market"
      className="scroll-mt-24 overflow-hidden bg-deep-night py-24 text-warm-ivory md:scroll-mt-28 md:py-32 xl:py-40">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:items-end lg:gap-10">
          <div className="min-w-0 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-lion-gold/30 bg-lion-gold/10 px-6 py-3 text-sm text-lion-gold">
              <SparklesIcon className="h-5 w-5" />
              <span>{marketSignal.badge}</span>
            </div>

            <div className="space-y-6">
              <h2 className="max-w-4xl text-4xl tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                {marketSignal.title}
              </h2>
              <p className="max-w-2xl text-base leading-7 text-warm-ivory/70 md:text-lg md:leading-8">
                {marketSignal.body}
              </p>
            </div>
          </div>

          <div className="min-w-0 rounded-4xl border border-white/10 bg-white/5 p-6 sm:p-8 xl:rounded-[3rem] xl:p-10">
            <div className="grid gap-4 sm:grid-cols-2">
              {marketSignal.chips.map((chip, index) => (
                <SignalChip key={`market-chip-${index}`}>{chip}</SignalChip>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
