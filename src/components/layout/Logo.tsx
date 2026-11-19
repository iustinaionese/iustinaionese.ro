import Link from "next/link";
import { clsx } from "@/lib/clsx";

export function Logo({
  className,
  showName = true,
  onClick,
}: {
  className?: string;
  showName?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}) {
  return (
    <Link
      href="/"
      aria-label="Iustin Aionese — acasă"
      onClick={onClick}
      className={clsx("group inline-flex items-center gap-2.5", className)}
    >
      <span className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-[0.7rem] border border-border-strong bg-bg-elev">
        <span className="font-display text-[0.95rem] font-medium leading-none text-fg">
          IA
        </span>
        <span className="absolute -bottom-3 left-1/2 h-5 w-8 -translate-x-1/2 rounded-full bg-accent/40 blur-md transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
      </span>
      {showName && (
        <span className="flex flex-col gap-1 leading-none">
          <span className="font-display text-[1.02rem] tracking-tight text-fg">
            Iustin Aionese
          </span>
          <span className="hidden font-mono-accent text-[0.6rem] uppercase tracking-[0.2em] text-fg-muted sm:block">
            Product Engineer
          </span>
        </span>
      )}
    </Link>
  );
}
