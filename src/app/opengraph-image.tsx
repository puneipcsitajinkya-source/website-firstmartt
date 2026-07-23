import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const runtime = "edge";
export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a1025 0%, #2e1065 50%, #0f0a1a 100%)",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            FM
          </div>
          <span style={{ fontSize: "36px", fontWeight: 700, color: "#ffffff" }}>
            {siteConfig.name}
          </span>
        </div>
        <p
          style={{
            fontSize: "32px",
            fontWeight: 600,
            color: "#e9d5ff",
            lineHeight: 1.4,
            maxWidth: "900px",
          }}
        >
          {siteConfig.tagline}
        </p>
        <p style={{ fontSize: "20px", color: "#a78bfa", marginTop: "24px" }}>
          Hyperlocal Commerce · AI · Investment Opportunity
        </p>
      </div>
    ),
    { ...size }
  );
}
