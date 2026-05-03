import { Container } from "@/components/atoms/Container";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { FeatureCard } from "@/components/molecules/FeatureCard";

type CapabilitiesSectionProps = {
  capabilities: {
    label: string;
    title: string;
    body: string;
    cards: Array<{
      icon: "chart" | "building" | "sparkles" | "store";
      title: string;
      description: string;
    }>;
  };
};

export function CapabilitiesSection({
  capabilities,
}: CapabilitiesSectionProps) {
  return (
    <section
      id="capabilities"
      className="scroll-mt-24 overflow-hidden bg-warm-ivory py-40 md:scroll-mt-28">
      <Container>
        <SectionHeading
          label={capabilities.label}
          title={capabilities.title}
          description={capabilities.body}
          className="mb-20"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {capabilities.cards.map((card, index) => (
            <FeatureCard
              key={`capability-${index}`}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
