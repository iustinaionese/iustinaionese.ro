"use client";

import { VideoPlayer } from "@/components/ui/VideoPlayer";
import { WhatsApp } from "@/components/ui/icons";
import { clsx } from "@/lib/clsx";

// Shared by the home Testimonials section and the case-study pages.

function Avatar({ name }: { name: string }) {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border-strong bg-bg-elev-2 font-display text-lg text-accent">
      {name.charAt(0)}
    </span>
  );
}

function NoteBadge({ note }: { note: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1 font-mono-accent text-[0.62rem] text-fg-faint">
      <WhatsApp className="h-3.5 w-3.5 text-whatsapp" />
      {note}
    </span>
  );
}

export function TestimonialCard({
  quote,
  name,
  role,
  note,
  featured,
  className,
}: {
  quote: string;
  name: string;
  role: string;
  /** Source badge (e.g. "via WhatsApp"); omitted when not accurate. */
  note?: string;
  featured?: boolean;
  className?: string;
}) {
  return (
    <figure
      className={clsx(
        "relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-bg-elev/40 p-7 sm:p-9",
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute right-6 top-2 font-display text-[7rem] leading-none text-accent/10"
      >
        &rdquo;
      </span>
      <blockquote
        className={clsx(
          "relative font-display leading-snug text-fg",
          featured ? "text-2xl sm:text-[1.9rem]" : "text-xl sm:text-2xl",
        )}
      >
        {quote}
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-3">
        <Avatar name={name} />
        <div className="flex-1">
          <div className="font-medium text-fg">{name}</div>
          <div className="font-mono-accent text-xs text-fg-muted">{role}</div>
        </div>
        {note ? <NoteBadge note={note} /> : null}
      </figcaption>
    </figure>
  );
}

export function VideoTestimonialCard({
  src,
  poster,
  name,
  role,
  note,
  playLabel,
}: {
  src: string;
  poster: string;
  name: string;
  role: string;
  /** Source badge (e.g. "via WhatsApp"); omitted when not accurate. */
  note?: string;
  playLabel: string;
}) {
  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-bg-elev/40">
      {/* White band so the video doesn't bleed to the card's top edge */}
      <div className="px-4 pt-4">
        <div className="relative mx-auto aspect-[9/16] w-full max-w-[380px] overflow-hidden rounded-xl">
          <VideoPlayer
            src={src}
            poster={poster}
            title={`${name} — ${role}`}
            playLabel={playLabel}
          />
        </div>
      </div>
      <figcaption className="flex items-center gap-3 p-6">
        <Avatar name={name} />
        <div className="flex-1">
          <div className="font-medium text-fg">{name}</div>
          <div className="font-mono-accent text-xs text-fg-muted">{role}</div>
        </div>
        {note ? <NoteBadge note={note} /> : null}
      </figcaption>
    </figure>
  );
}
