import type { SVGProps } from "react";

/** LoBot LLC mark: a robot head profile built from circuit traces & nodes. */
export function LoBotMark({ className = "h-9 w-9", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="lobot-g" x1="8" y1="6" x2="56" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="currentColor" />
          <stop offset="1" stopColor="#5eead4" />
        </linearGradient>
        <linearGradient id="lobot-neck" x1="20" y1="40" x2="34" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#99f6e4" />
          <stop offset="1" stopColor="#0d9488" />
        </linearGradient>
      </defs>
      {/* head outline */}
      <path
        d="M20 14c4-4 10-6 16-6 10 0 18 7 19 16 .3 3 2.5 4 3.5 6.5S58 35 56 36l-1 1 .5 5c.2 2-1.4 3.6-3.4 3.4L46 45l-1 7"
        stroke="url(#lobot-g)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* ear */}
      <path d="M15 22a8 8 0 0 0 0 14" stroke="url(#lobot-g)" strokeWidth="2.6" strokeLinecap="round" />
      {/* neck plate */}
      <path d="M22 38v20l14-6V42z" fill="url(#lobot-neck)" opacity="0.9" />
      {/* circuit traces */}
      <g stroke="url(#lobot-g)" strokeWidth="2.2" strokeLinecap="round">
        <path d="M8 20h10l3 3" />
        <path d="M26 26h8l6-6" />
        <path d="M34 26l4 6h6" />
        <path d="M30 30v6l4 4h6" />
      </g>
      <g fill="none" stroke="url(#lobot-g)" strokeWidth="2.2">
        <circle cx="6.5" cy="20" r="2" />
        <circle cx="23.5" cy="26" r="3" />
        <circle cx="42" cy="18.5" r="2.6" />
        <circle cx="46.5" cy="32" r="2.6" />
        <circle cx="30" cy="30" r="2.4" />
      </g>
    </svg>
  );
}

export function LoBotLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LoBotMark className="h-9 w-9 text-slate-700 dark:text-white" />
      <span className="text-lg font-extrabold tracking-tight">
        <span className="text-slate-900 dark:text-white">LoBot</span>{" "}
        <span className="text-brand-500 dark:text-brand-300">LLC</span>
      </span>
    </span>
  );
}

/** TecnoIndicator app icon: teal pulse line in a dark rounded square. */
export function TecnoLogo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="tecno-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#0f2a33" />
          <stop offset="1" stopColor="#0a1a22" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="46" height="46" rx="11" fill="url(#tecno-bg)" stroke="#2dd4bf" strokeOpacity="0.55" strokeWidth="1.5" />
      <path
        d="M10 25h7l3.5-9 6 17 3.5-8H38"
        fill="none"
        stroke="#2dd4bf"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ filter: "drop-shadow(0 0 3px rgba(45,212,191,0.8))" }}
      />
    </svg>
  );
}

export function GithubIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

type IconProps = { className?: string };
const base = (d: string) =>
  function Icon({ className = "h-5 w-5" }: IconProps) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
        <path d={d} />
      </svg>
    );
  };

export const SunIcon = base("M12 3v2m0 14v2M5.6 5.6l1.4 1.4m10 10 1.4 1.4M3 12h2m14 0h2M5.6 18.4 7 17m10-10 1.4-1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z");
export const MoonIcon = base("M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z");
export const MonitorIcon = base("M3 5h18v11H3zM8 20h8M12 16v4");
export const GlobeIcon = base("M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm-9-9h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z");
export const ChevronDown = base("m6 9 6 6 6-6");
export const MenuIcon = base("M4 6h16M4 12h16M4 18h16");
export const CloseIcon = base("M6 6l12 12M18 6 6 18");
export const CopyIcon = base("M9 9h11v11H9zM5 15H4V4h11v1");
export const CheckIcon = base("m5 12 5 5L20 7");
export const ArrowRight = base("M5 12h14m-6-6 6 6-6 6");
export const ArrowLeft = base("M19 12H5m6 6-6-6 6-6");
export const MailIcon = base("M3 6h18v12H3zm0 0 9 7 9-7");
export const ExternalIcon = base("M14 4h6v6m0-6L10 14M18 14v6H4V6h6");
