import Image from "next/image";
import { eventConfig } from "@/config/event";
import { Building2 } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", size = "md" }: LogoProps) {
  // If logoSrc is configured and non-empty, render the real logo
  if (eventConfig.logoSrc && eventConfig.logoSrc.trim() !== "") {
    const heightClass =
      size === "sm"
        ? "h-10 sm:h-11"
        : size === "lg"
        ? "h-16 sm:h-20"
        : "h-12 sm:h-14";

    return (
      <div className={`relative flex items-center ${heightClass} ${className}`}>
        <Image
          src={eventConfig.logoSrc}
          alt={eventConfig.logoAlt || eventConfig.locationName}
          width={240}
          height={80}
          className="h-full w-auto object-contain transition-all"
          priority
        />
      </div>
    );
  }

  // Fallback placeholder with official styling
  const sizeClasses = {
    sm: "h-10 sm:h-11 px-3 py-1.5 text-xs gap-1.5",
    md: "h-12 sm:h-14 px-4 py-2 text-sm gap-2.5",
    lg: "h-16 sm:h-20 px-5 py-3 text-base gap-3",
  };

  return (
    <div
      className={`inline-flex items-center rounded-xl border border-primary-border bg-surface-subtle font-medium text-primary select-none ${sizeClasses[size]} ${className}`}
      title="Logo Penyelenggara"
    >
      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/80 text-primary shadow-subtle shrink-0">
        <Building2 className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
      </div>
      <div className="flex flex-col text-left leading-none">
        <span className="font-semibold text-text-main text-xs sm:text-sm tracking-tight">
          IDN Boarding School
        </span>
        <span className="text-[10px] text-text-subtle font-normal mt-0.5 hidden sm:inline">
          SMP–SMK IDN
        </span>
      </div>
    </div>
  );
}
