import { Container } from "@/components/atoms/Container";

type MarketThesisSectionProps = {
  marketThesis: {
    label: string;
    title: string;
    body: string;
    thesisBullets: string[];
    featuredEyebrow: string;
    featuredTitle: string;
    featuredBody: string;
    bullets: string[];
  };
};

export function MarketThesisSection({
  marketThesis,
}: MarketThesisSectionProps) {
  return (
    <>
      {/* Market Thesis — dark background */}
      <section
        id="thesis"
        className="scroll-mt-24 bg-deep-night py-24 text-warm-ivory md:scroll-mt-28 md:py-32 xl:py-40">
        <Container>
          <div className="grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
            {/* Left card */}
            <div className="rounded-[3rem] border border-white/10 bg-white/5 p-8 sm:p-10 xl:p-12">
              <span className="mb-8 block text-[10px] font-black uppercase tracking-[0.3em] text-lion-gold">
                {marketThesis.label}
              </span>
              <h3 className="mb-8 font-display text-4xl tracking-tight sm:text-5xl">
                {marketThesis.title}
              </h3>
              <p className="font-sans text-base leading-7 text-warm-ivory/70">
                {marketThesis.body}
              </p>
            </div>

            {/* Right card — numbered bullets */}
            <div className="rounded-[3rem] border border-lion-gold/20 bg-lion-gold/10 p-8 sm:p-10 xl:p-12">
              <div className="space-y-6">
                {marketThesis.thesisBullets.map((bullet, index) => (
                  <div
                    key={`thesis-numbered-${index}`}
                    className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-deep-night text-base font-bold text-lion-gold">
                      {index + 1}
                    </div>
                    <p className="font-sans text-base leading-7 text-warm-ivory/90">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Tantalizers / Featured growth move — warm ivory background */}
      <section className="bg-warm-ivory py-24 md:py-32 xl:py-40">
        <Container>
          <div className="overflow-hidden rounded-[3rem] bg-deep-night text-white">
            <div className="grid gap-8 p-8 sm:p-10 md:p-16 lg:grid-cols-[0.85fr,1.15fr] lg:items-center">
              <div className="space-y-6">
                <div className="text-xs font-semibold uppercase tracking-[0.28em] text-lion-gold">
                  {marketThesis.featuredEyebrow}
                </div>
                <h3 className="font-display text-4xl tracking-tight md:text-5xl">
                  {marketThesis.featuredTitle}
                </h3>
                <p className="font-sans text-base leading-7 text-warm-ivory/70">
                  {marketThesis.featuredBody}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {marketThesis.bullets.map((bullet, index) => (
                  <div
                    key={`featured-bullet-${index}`}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm leading-7 text-warm-ivory/80">
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
