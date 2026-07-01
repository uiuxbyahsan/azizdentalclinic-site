import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: ReactNode;
  className?: string;
  /** "dark" for light backgrounds (default), "light" for dark backgrounds. */
  tone?: "dark" | "light";
}

/**
 * Eyebrow pill above section headings, e.g. "✳ Our Services".
 * Rounded-full, bordered, small caps-ish label with an asterisk prefix.
 */
export function SectionLabel({ children, className, tone = "dark" }: SectionLabelProps) {
  const toneClass =
    tone === "light"
      ? "border-white/25 text-white/85"
      : "border-brand/20 text-brand";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-xs font-medium tracking-wide",
        toneClass,
        className,
      )}
    >
      <span aria-hidden="true" className="text-teal">
        ✳
      </span>
      {children}
    </span>
  );
}
