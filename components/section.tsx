import { ReactNode } from "react";

type SectionProps = {
  id?: string;
  title?: string;
  kicker?: string;
  children: ReactNode;
  className?: string;
  compact?: boolean;
};

export function Section({
  id,
  title,
  kicker,
  children,
  className,
  compact = false,
}: SectionProps) {
  const padding = compact ? "py-6 sm:py-8" : "py-12 sm:py-16";
  return (
    <section id={id} className={`${padding} ${className ?? ""}`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6">
        {(kicker || title) && (
          <div className="flex flex-col gap-2">
            {kicker && (
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                {kicker}
              </span>
            )}
            {title && (
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                {title}
              </h2>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

