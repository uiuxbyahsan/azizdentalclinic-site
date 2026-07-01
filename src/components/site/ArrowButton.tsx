import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "light";

interface ArrowButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  /** Open in a new tab. Auto-enabled for http(s) links. */
  external?: boolean;
  ariaLabel?: string;
}

const base =
  "group inline-flex items-center gap-2.5 rounded-full pl-6 pr-2 py-2 text-[15px] font-medium transition-all duration-300 will-change-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2";

const variants: Record<Variant, { pill: string; circle: string }> = {
  // Dark pill, white circle with dark arrow
  primary: {
    pill: "bg-brand text-white hover:bg-brand-deep hover:shadow-elegant",
    circle: "bg-white text-brand",
  },
  // White pill, dark border, dark circle with white arrow
  secondary: {
    pill: "bg-white text-brand border border-brand/25 hover:border-brand hover:shadow-soft",
    circle: "bg-brand text-white",
  },
  // White pill for use on dark backgrounds, dark circle with white arrow
  light: {
    pill: "bg-white text-brand hover:shadow-glow",
    circle: "bg-brand text-white",
  },
};

export function ArrowButton({
  children,
  href = "#",
  onClick,
  variant = "primary",
  className,
  external,
  ariaLabel,
}: ArrowButtonProps) {
  const v = variants[variant];
  const isExternal = external ?? href.startsWith("http");
  const content = (
    <>
      <span>{children}</span>
      <span
        className={cn(
          "grid h-9 w-9 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45",
          v.circle,
        )}
      >
        <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
      </span>
    </>
  );

  if (onClick && href === "#") {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-label={ariaLabel}
        className={cn(base, v.pill, className)}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(base, v.pill, className)}
    >
      {content}
    </a>
  );
}
