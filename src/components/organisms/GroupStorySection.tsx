import { Container } from "@/components/atoms/Container";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { StatCard } from "@/components/molecules/StatCard";

type GroupStorySectionProps = {
  groupStory: {
    label: string;
    title: string;
    action: string;
    stats: Array<{
      value: string;
      label: string;
    }>;
  };
};

export function GroupStorySection({ groupStory }: GroupStorySectionProps) {
  return (
    <section
      id="group"
      className="scroll-mt-24 bg-warm-ivory py-24 text-deep-night md:scroll-mt-28 md:py-32 xl:py-40">
      <Container>
        <SectionHeading
          label={groupStory.label}
          title={groupStory.title}
          actionLabel={groupStory.action}
          actionHref="#contact"
          className="mb-20"
          titleClassName="text-6xl"
        />

        <div className="grid grid-cols-2 gap-8 rounded-4xl bg-deep-night px-6 py-10 sm:gap-10 sm:px-8 sm:py-12 md:grid-cols-4 md:gap-12 md:py-16 xl:rounded-[3rem] xl:px-10 xl:py-24">
          {groupStory.stats.map((stat, index) => (
            <StatCard
              key={`group-stat-${index}`}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
