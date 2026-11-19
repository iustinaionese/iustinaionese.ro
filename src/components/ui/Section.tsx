import { clsx } from "@/lib/clsx";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  /** remove default vertical padding */
  flush?: boolean;
}

export function Section({ id, className, children, flush }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        "relative w-full",
        !flush && "py-20 sm:py-24 lg:py-28",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={clsx("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "eyebrow inline-flex items-center gap-2 before:h-px before:w-6 before:bg-accent/70 before:content-['']",
        className,
      )}
    >
      {children}
    </span>
  );
}
