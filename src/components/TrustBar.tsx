import React, { useState } from "react";

interface LogoItem {
  name: string;
  path: string;
  /** Optional CSS transform scale override (e.g. 1.8 to make a logo appear bigger) */
  scale?: number;
}

/* ─── Brand logos (existing) ─────────────────────────────────────── */
const LOGOS: LogoItem[] = [
  { name: "Prospectoo",       path: "/logos/prospectoo.png" },
  { name: "Raaviera Hotels",  path: "/logos/raaviera.png"   },
  { name: "Indian Thali House", path: "/logos/ith.png"      },
  { name: "NMPA",             path: "/logos/nmpa.png"       },
  { name: "Kepchaki Momo",    path: "/logos/momo.png"       },
  { name: "Dribblers FC",     path: "/logos/dribblers.png"  },
  { name: "Royal Wealth",     path: "/logos/wealth.png"     },
  { name: "Whoopers",         path: "/logos/whoopers.png"   },
  { name: "Dragon Tales",     path: "/logos/2.png"          },
  { name: "No Earth B",       path: "/logos/7.png"          },
];

/* ─── University logos ───────────────────────────────────────────── */
const UNIVERSITY_LOGOS: LogoItem[] = [
  { name: "IIM Bodh Gaya",          path: "/logos/universities/15.png" },
  { name: "Amity University",        path: "/logos/universities/16.png" },
  { name: "NMIMS",                   path: "/logos/universities/17.png" },
  { name: "SIES",                    path: "/logos/universities/18.png", scale: 1.8 },
  { name: "DJSCE",                   path: "/logos/universities/19.png" },
  { name: "Jai Hind College",        path: "/logos/universities/20.png" },
];

// Triplicate to guarantee seamless looping on large viewports
const MARQUEE_LOGOS      = [...LOGOS,            ...LOGOS,            ...LOGOS           ];
const MARQUEE_UNI_LOGOS  = [...UNIVERSITY_LOGOS, ...UNIVERSITY_LOGOS, ...UNIVERSITY_LOGOS];

/* ─── Reusable marquee row ───────────────────────────────────────── */
interface MarqueeRowProps {
  logos: LogoItem[];
  reverse?: boolean;
  /** Pass the clicked-index state + setter from the parent section */
  clickedIndex: number | null;
  onLogoClick: (idx: number) => void;
  idPrefix: string;
  /**
   * Animation duration string e.g. "38s".
   * Calculate as: (itemCount × logoWidthPx × 0.5) / targetSpeedPxPerS
   * Both rows share the same targetSpeed so perceived scroll rate is identical.
   */
  duration: string;
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({
  logos,
  reverse = false,
  clickedIndex,
  onLogoClick,
  idPrefix,
  duration,
}) => (
  <div className="relative w-full overflow-hidden py-8 md:py-10">
    {/* Edge fade overlays */}
    <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
    <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

    {/* Marquee track */}
    <div
      className={`flex gap-2 md:gap-3 w-max items-center ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
      style={{
        animationPlayState: clickedIndex !== null ? "paused" : "running",
        animationDuration: duration,
      }}
    >
      {logos.map((logo, idx) => {
        const isClicked  = clickedIndex === idx;
        const isAnyClicked = clickedIndex !== null;

        let styleClasses = "";
        if (isClicked) {
          styleClasses =
            "bg-white border border-zinc-100 shadow-[0_20px_50px_rgba(0,0,0,0.12)] -translate-y-3 scale-115 z-30 opacity-100 px-6 py-4 rounded-2xl";
        } else if (isAnyClicked) {
          styleClasses = "opacity-35 scale-95 z-10 blur-[0.5px]";
        } else {
          styleClasses = "opacity-80 hover:opacity-100 hover:scale-105 hover:-translate-y-1 z-10";
        }

        return (
          <div
            key={`${idPrefix}-${logo.name}-${idx}`}
            id={`${idPrefix}-logo-${idx}`}
            onClick={(e) => {
              e.stopPropagation();
              onLogoClick(idx);
            }}
          className={`h-20 w-36 md:h-24 md:w-44 flex items-center justify-center transition-all duration-500 ease-out cursor-pointer ${styleClasses}`}
          >
            <img
              src={logo.path}
              alt={`${logo.name} logo`}
              className="max-h-full max-w-full object-contain pointer-events-none"
              style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
              loading="lazy"
            />
          </div>
        );
      })}
    </div>
  </div>
);

/* ─── Main section ───────────────────────────────────────────────── */

/**
 * Normalized animation durations so both rows scroll at the same px/s rate.
 *
 * Formula: duration = (tripled_item_count × LOGO_W_PX × 0.5) / TARGET_SPEED_PX_S
 *   LOGO_W_PX  ≈ 176px  (w-44 on md = 11rem at 16px base)
 *   TARGET_SPEED_PX_S = 70 px/s  (smooth, professional pace)
 *
 * Brands (10 logos → 30 tripled):  30 × 176 × 0.5 / 70 ≈ 37.7s → 38s
 * Universities (6 logos → 18 tripled): 18 × 176 × 0.5 / 70 ≈ 22.6s → 23s
 */
const BRAND_DURATION = "38s";
const UNI_DURATION   = "23s";

export const TrustBar: React.FC = React.memo(() => {
  const [clickedBrand, setClickedBrand]   = useState<number | null>(null);
  const [clickedUni,   setClickedUni]     = useState<number | null>(null);

  return (
    <section
      id="clients"
      onClick={() => {
        setClickedBrand(null);
        setClickedUni(null);
      }}
      className="w-full py-16 bg-white border-y border-zinc-200 relative z-20 overflow-hidden select-none"
    >
      <div className="w-full flex flex-col items-center gap-10">

        {/* ── Brands row ── */}
        <div className="w-full flex flex-col items-center gap-6">
          <h3 className="text-zinc-500 text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-center">
            Trusted By Leading Brands
          </h3>

          <MarqueeRow
            logos={MARQUEE_LOGOS}
            reverse={false}
            clickedIndex={clickedBrand}
            onLogoClick={setClickedBrand}
            idPrefix="brand"
            duration={BRAND_DURATION}
          />
        </div>

        {/* Subtle divider */}
        <div className="w-16 h-px bg-zinc-200 mx-auto" />

        {/* ── Universities row ── */}
        <div className="w-full flex flex-col items-center gap-6">
          <h3 className="text-zinc-500 text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] text-center">
            &amp; Universities
          </h3>

          <MarqueeRow
            logos={MARQUEE_UNI_LOGOS}
            reverse={true}
            clickedIndex={clickedUni}
            onLogoClick={setClickedUni}
            idPrefix="uni"
            duration={UNI_DURATION}
          />
        </div>

      </div>
    </section>
  );
});

TrustBar.displayName = "TrustBar";
