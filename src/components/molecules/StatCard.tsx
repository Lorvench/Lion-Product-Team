type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="min-w-0 text-center">
      <div className="mb-3 text-4xl leading-none text-lion-gold sm:text-5xl md:mb-4 md:text-6xl lg:text-7xl">
        {value}
      </div>
      <div className="text-[10px] font-black uppercase tracking-[0.2em] text-warm-ivory/40">
        {label}
      </div>
    </div>
  );
}
