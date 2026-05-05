import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { Container } from "@/components/atoms/Container";
import { Eyebrow } from "@/components/atoms/Eyebrow";
import { ScrollIndicatorButton } from "@/components/molecules/ScrollIndicatorButton";

type HeroSectionProps = {
  hero: {
    label: string;
    titleLead: string;
    titleAccent: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    scrollLabel: string;
    image: string;
  };
};

export function HeroSection({ hero }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative flex min-h-svh w-full items-center justify-center overflow-hidden bg-deep-night">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={hero.image}
          alt="[PLACEHOLDER]"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-deep-night/80 via-deep-night/40 to-deep-night/20" />
      </div>

      <Container className="relative z-10 flex flex-col items-center pb-24 pt-32 text-center sm:pt-36 md:pb-28 md:pt-40">
        <Eyebrow className="mb-8 inline-block text-lion-gold">
          {hero.label}
        </Eyebrow>

        <h1 className="mx-auto mb-8 max-w-5xl text-[2.2rem] leading-[0.9] tracking-tighter text-warm-ivory text-balance sm:text-5xl md:mb-10 lg:text-6xl xl:text-7xl">
          <span className="block">{hero.titleLead}</span>
          <span className="italic opacity-40">{hero.titleAccent}</span>
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-sm leading-7 text-warm-ivory/70 sm:text-base sm:leading-8 md:mb-12 md:text-lg">
          {hero.body}
        </p>

        <div className="flex w-full max-w-xl flex-col justify-center gap-4 sm:flex-row sm:gap-6">
          <Button
            href="#portfolio"
            variant="gold"
            size="md"
            className="w-full sm:w-auto">
            {hero.primaryCta}
          </Button>
          <Button
            href="#contact"
            variant="outline-light"
            size="md"
            className="w-full sm:w-auto">
            {hero.secondaryCta}
          </Button>
        </div>
      </Container>

      <ScrollIndicatorButton
        label={hero.scrollLabel}
        targetId="market"
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
      />
    </section>
  );
}
