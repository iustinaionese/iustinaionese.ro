import { ImageResponse } from "next/og";

export const alt = "Iustin Aionese — Product Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Social share card (Open Graph + Twitter fallback). ASCII-only copy so it
 * renders correctly with the default font regardless of diacritic coverage.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0a0b",
          color: "#f6f3ee",
          padding: "76px 84px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            fontSize: 26,
            letterSpacing: 6,
            color: "#a39c93",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 16,
              height: 16,
              borderRadius: 999,
              background: "#ff6a3d",
            }}
          />
          <div style={{ display: "flex" }}>PRODUCT ENGINEER · STUDIO</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 700, lineHeight: 1.02 }}>
            Iustin Aionese
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 40,
              color: "#a39c93",
              lineHeight: 1.25,
              maxWidth: 920,
            }}
          >
            Sisteme digitale complete, de la idee la lansare.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
          }}
        >
          <div style={{ display: "flex", gap: 16, color: "#e4b974" }}>
            <div style={{ display: "flex" }}>Funnels</div>
            <div style={{ display: "flex", color: "#6f6962" }}>·</div>
            <div style={{ display: "flex" }}>Platforms</div>
            <div style={{ display: "flex", color: "#6f6962" }}>·</div>
            <div style={{ display: "flex" }}>Payments</div>
            <div style={{ display: "flex", color: "#6f6962" }}>·</div>
            <div style={{ display: "flex" }}>Automation</div>
            <div style={{ display: "flex", color: "#6f6962" }}>·</div>
            <div style={{ display: "flex" }}>AI</div>
          </div>
          <div style={{ display: "flex", color: "#f6f3ee" }}>iustinaionese.ro</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
