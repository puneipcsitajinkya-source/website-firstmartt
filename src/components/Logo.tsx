import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

type LogoProps = {
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  variant?: "light" | "dark";
  className?: string;
};

const sizeMap = {
  sm: { height: 32, text: "text-base" },
  md: { height: 40, text: "text-lg" },
  lg: { height: 52, text: "text-xl" },
};

export function Logo({
  showText = true,
  size = "md",
  variant = "light",
  className = "",
}: LogoProps) {
  const { height, text } = sizeMap[size];
  const textColor =
    variant === "dark"
      ? "text-white group-hover:text-violet-300"
      : "text-slate-900 group-hover:text-violet-700";

  return (
    <Link href="/" className={`group flex items-center gap-3 ${className}`}>
      <Image
        src="/logo.png"
        alt={`${siteConfig.name} logo`}
        width={height * 2}
        height={height}
        priority
        className="object-contain"
        style={{ height, width: "auto" }}
      />
      {showText && (
        <span className={`truncate font-semibold tracking-tight transition ${textColor} ${text}`}>
          {siteConfig.name}
        </span>
      )}
    </Link>
  );
}
