"use client";

import { useState } from "react";
import { clsx } from "@/lib/clsx";
import { Play } from "@/components/ui/icons";

/**
 * Self-hosted video with a click-to-play poster.
 *
 * Until the user clicks, only the poster image is shown (the video file is not
 * fetched). On click it mounts a native `<video>` with controls and autoplays.
 * No third-party branding, no redirects — full control over the player chrome.
 */
export function VideoPlayer({
  src,
  poster,
  title,
  playLabel,
  className,
  fit = "cover",
}: {
  src: string;
  poster: string;
  title: string;
  playLabel: string;
  className?: string;
  fit?: "cover" | "contain";
}) {
  const fitClass = fit === "contain" ? "object-contain" : "object-cover";
  const [active, setActive] = useState(false);

  return (
    <div className={clsx("relative h-full w-full overflow-hidden bg-black", className)}>
      {active ? (
        <video
          className={clsx("absolute inset-0 h-full w-full", fitClass)}
          src={src}
          poster={poster}
          title={title}
          controls
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
          autoPlay
          playsInline
          preload="metadata"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={playLabel}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt=""
            aria-hidden
            loading="lazy"
            className={clsx(
              "absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105",
              fitClass,
            )}
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" />
          <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-[#160a05] shadow-[0_18px_50px_-12px_var(--glow)] transition-transform duration-300 group-hover:scale-110">
            <Play className="ml-0.5 h-7 w-7" />
          </span>
        </button>
      )}
    </div>
  );
}
