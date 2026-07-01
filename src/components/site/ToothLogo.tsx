interface ToothLogoProps {
  className?: string;
  /** Stroke / fill color. Defaults to currentColor so it inherits text color. */
  color?: string;
}

/**
 * Clean, modern tooth mark built inline as SVG — no external image dependency.
 * Inherits `currentColor` by default so it adapts to dark/light placements.
 */
export function ToothLogo({ className, color = "currentColor" }: ToothLogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M16 4.6c-2-1.7-4.3-2.4-6.6-2C6 3.2 4 6 4 9.7c0 2.2.5 3.7 1 5.6.4 1.5.7 3 .9 5 .2 1.9.4 3.7 1 5.3.4 1.1 1 2 2 2 1.2 0 1.6-1.1 2-2.6.4-1.6.7-3.4 1.4-4.7.6-1.1 1.3-1.7 2.7-1.7s2.1.6 2.7 1.7c.7 1.3 1 3.1 1.4 4.7.4 1.5.8 2.6 2 2.6 1 0 1.6-.9 2-2 .6-1.6.8-3.4 1-5.3.2-2 .5-3.5.9-5 .5-1.9 1-3.4 1-5.6 0-3.7-2-6.5-5.4-7.1-2.3-.4-4.6.3-6.6 2Z"
        fill={color}
        stroke={color}
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}
