import { Button } from "@/components/atoms/Button";
import { MartiniIcon } from "@/components/atoms/Icons";

type ClosingCtaSectionProps = {
  closingCta: {
    titleLead: string;
    titleAccent: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

export function ClosingCtaSection({ closingCta }: ClosingCtaSectionProps) {
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-deep-night py-24 text-center md:scroll-mt-28 md:py-32 xl:py-40">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <MartiniIcon className="mx-auto mb-10 h-14 w-14 animate-pulse text-lion-gold md:mb-12 md:h-16 md:w-16" />
        <h2 className="mb-10 text-[2.85rem] leading-[0.92] tracking-tighter text-warm-ivory text-balance sm:text-6xl md:mb-12 md:text-8xl">
          {closingCta.titleLead}
          <br />
          <span className="italic text-lion-gold">
            {closingCta.titleAccent}
          </span>
        </h2>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <Button href="#footer" variant="gold" size="lg" className="w-full sm:w-auto">
            {closingCta.primaryCta}
          </Button>
          <Button
            href="#footer"
            variant="outline-light"
            size="lg"
            className="w-full sm:w-auto">
            {closingCta.secondaryCta}
          </Button>
        </div>
      </div>
    </section>
  );
}
