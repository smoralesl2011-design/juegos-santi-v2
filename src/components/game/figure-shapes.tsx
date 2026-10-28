/**
 * Hand-drawn cartoon shapes. They are kept as a second option for figures that
 * have no image file: add `Shape: AppleShape` to an entry in `figure-data.ts`.
 * Every current figure uses a PNG from `public/figures/` instead.
 */
import type { SVGProps } from "react";

const INK = "hsl(var(--figure-ink))";

type ShapeProps = SVGProps<SVGSVGElement>;

export const AppleShape = (props: ShapeProps) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path d="M54 30c-3-9 0-16 8-20" stroke={INK} strokeWidth="6" strokeLinecap="round" fill="none" />
    <path
      d="M60 18c9-9 20-8 20-8s1 11-8 17-12-9-12-9z"
      fill="hsl(var(--figure-leaf))"
      stroke={INK}
      strokeWidth="6"
      strokeLinejoin="round"
    />
    <path
      d="M50 32C39 20 14 23 14 47c0 23 16 41 36 41s36-18 36-41c0-24-25-27-36-15z"
      fill="hsl(var(--figure-apple))"
      stroke={INK}
      strokeWidth="6"
      strokeLinejoin="round"
    />
    <ellipse
      cx="34"
      cy="48"
      rx="7"
      ry="11"
      fill="hsl(0 0% 100% / 0.42)"
      transform="rotate(-18 34 48)"
    />
  </svg>
);

export const StarShape = (props: ShapeProps) => (
  <svg viewBox="0 0 100 100" {...props}>
    <path
      d="M50 12 60.6 39.4 89.9 41 67.1 59.6 74.7 88 50 72 25.3 88 32.9 59.6 10.1 41 39.4 39.4z"
      fill="hsl(var(--figure-star))"
      stroke={INK}
      strokeWidth="6"
      strokeLinejoin="round"
    />
    <circle cx="41" cy="50" r="3.4" fill={INK} />
    <circle cx="59" cy="50" r="3.4" fill={INK} />
    <path
      d="M43 58c3 4.5 11 4.5 14 0"
      stroke={INK}
      strokeWidth="3.4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export const BearShape = (props: ShapeProps) => (
  <svg viewBox="0 0 100 100" {...props}>
    <circle cx="23" cy="26" r="14" fill="hsl(var(--figure-bear))" stroke={INK} strokeWidth="6" />
    <circle cx="77" cy="26" r="14" fill="hsl(var(--figure-bear))" stroke={INK} strokeWidth="6" />
    <circle cx="23" cy="27" r="7" fill="hsl(var(--figure-bear-light))" />
    <circle cx="77" cy="27" r="7" fill="hsl(var(--figure-bear-light))" />
    <ellipse
      cx="50"
      cy="55"
      rx="36"
      ry="33"
      fill="hsl(var(--figure-bear))"
      stroke={INK}
      strokeWidth="6"
    />
    <ellipse cx="50" cy="68" rx="19" ry="14" fill="hsl(var(--figure-cream))" />
    <circle cx="38" cy="49" r="4" fill={INK} />
    <circle cx="62" cy="49" r="4" fill={INK} />
    <ellipse cx="50" cy="62" rx="5.5" ry="4" fill={INK} />
    <path
      d="M43 70c2.5 3.5 11.5 3.5 14 0"
      stroke={INK}
      strokeWidth="3.4"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);
