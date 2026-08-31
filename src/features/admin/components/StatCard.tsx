import type { LucideIcon } from "lucide-react";

type Props = {
  label: string;
  value: number | string;
  icon: LucideIcon;
};

export default function StatCard({ label, value, icon: Icon }: Props) {
  return (
    <div className="rounded-[var(--card-corner-radius)] border border-black/[var(--card-border-opacity)] bg-white p-5 shadow-[var(--card-shadow-horizontal-offset)_var(--card-shadow-vertical-offset)_var(--card-shadow-blur-radius)_rgba(10,10,10,var(--card-shadow-opacity))]">
      <div className="flex items-center gap-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="font-heading text-[24px] font-bold leading-none text-secondary-900">
            {value}
          </p>
          <p className="mt-1 font-body text-[12.5px] text-muted-foreground">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}
