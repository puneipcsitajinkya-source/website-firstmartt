import { ImageResponse } from "next/og";
import { getPostBySlug } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Image({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.title ?? "Blog";
  const description = post?.description ?? siteConfig.description;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #1a1025 0%, #2e1065 60%, #0f0a1a 100%)",
          padding: "60px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #7c3aed, #6d28d9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "20px",
              fontWeight: 700,
            }}
          >
            FM
          </div>
          <span style={{ fontSize: "24px", fontWeight: 600, color: "#a78bfa" }}>
            {siteConfig.name} Blog
          </span>
        </div>
        <div>
          <p
            style={{
              fontSize: "42px",
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.3,
              maxWidth: "1000px",
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontSize: "22px",
              color: "#c4b5fd",
              marginTop: "20px",
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            {description.slice(0, 120)}
            {description.length > 120 ? "..." : ""}
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
