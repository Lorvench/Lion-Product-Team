import { Container } from "@/components/atoms/Container";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { MetricCard } from "@/components/molecules/MetricCard";

type TechnologySectionProps = {
  technology: {
    label: string;
    titleLead: string;
    titleAccent: string;
    body: string;
    action: string;
    cards: Array<{
      icon: "terminal" | "globe" | "smartphone";
      title: string;
      description: string;
      metric: string;
      caption: string;
      accentClassName: string;
      borderClassName: string;
    }>;
  };
};

export function TechnologySection({ technology }: TechnologySectionProps) {
  return (
    <section
      id="technology"
      className="relative scroll-mt-24 overflow-hidden bg-deep-night py-24 text-warm-ivory md:scroll-mt-28 md:py-32 xl:py-40">
      <div className="pointer-events-none absolute inset-0 opacity-5">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite] rounded-full border border-white sm:h-[680px] sm:w-[680px] xl:h-[800px] xl:w-[800px]" />
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite_reverse] rounded-full border border-lion-gold sm:h-[520px] sm:w-[520px] xl:h-[600px] xl:w-[600px]" />
      </div>

      <Container className="relative z-10">
        <SectionHeading
          label={technology.label}
          title={
            <>
              {technology.titleLead}
              <br />
              <span className="text-lion-gold">{technology.titleAccent}</span>
            </>
          }
          description={technology.body}
          actionLabel={technology.action}
          actionHref="#group"
          theme="dark"
          className="mb-20"
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 xl:gap-10">
          {technology.cards.map((card, index) => (
            <MetricCard
              key={`technology-card-${index}`}
              icon={card.icon}
              title={card.title}
              description={card.description}
              metric={card.metric}
              caption={card.caption}
              accentClassName={card.accentClassName}
              borderClassName={card.borderClassName}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
