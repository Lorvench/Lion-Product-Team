type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="min-w-0 text-center">
      <div className="mb-3 text-3xl leading-none text-lion-gold sm:text-4xl md:mb-4 md:text-5xl lg:text-[3.25rem]">
        {value}
      </div>
      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-warm-ivory/40">
        {label}
      </div>
    </div>
  );
}
