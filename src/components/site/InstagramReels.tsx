import { Play, Instagram, Film } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ToothLogo } from "./ToothLogo";
import { CLINIC } from "@/lib/clinic";

interface Reel {
  title: string;
  views: string;
  gradient: string;
}

const reels: Reel[] = [
  { title: "Root Canal — Pain Free ✅", views: "3.1K", gradient: "linear-gradient(135deg, #0D2E2E 0%, #1a4a4a 100%)" },
  { title: "Braces Before & After 😁", views: "5.7K", gradient: "linear-gradient(135deg, #103b3b 0%, #2E9E9E 100%)" },
  { title: "Kids Dentistry Tips 🦷", views: "2.2K", gradient: "linear-gradient(135deg, #082020 0%, #155454 100%)" },
  { title: "Teeth Whitening in 45 Min", views: "4.8K", gradient: "linear-gradient(135deg, #0D2E2E 0%, #2E9E9E 100%)" },
  { title: "Proper Brushing Technique", views: "1.9K", gradient: "linear-gradient(135deg, #0f3535 0%, #1a4a4a 100%)" },
  { title: "Invisalign vs Braces", views: "6.3K", gradient: "linear-gradient(135deg, #082020 0%, #2E9E9E 100%)" },
];

function ReelCard({ reel }: { reel: Reel }) {
  return (
    <a
      href={CLINIC.instagram}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${reel.title} — watch on Instagram (${reel.views} views)`}
      data-card
      className="group relative aspect-[9/16] w-[200px] shrink-0 snap-start overflow-hidden rounded-2xl border-2 border-transparent transition-all duration-300 hover:scale-[1.03] hover:border-teal sm:w-[230px]"
      style={{ background: reel.gradient }}
    >
      {/* watermark texture */}
      <ToothLogo
        className="absolute -right-6 -top-6 h-32 w-32 opacity-[0.07]"
        color="#ffffff"
      />

      {/* play button */}
      <span className="absolute left-1/2 top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/30 transition-transform duration-300 group-hover:scale-110">
        <Play className="h-5 w-5 translate-x-0.5 fill-white text-white" />
      </span>

      {/* bottom gradient + meta */}
      <div
        className="absolute inset-x-0 bottom-0 p-4"
        style={{
          background: "linear-gradient(180deg, rgba(8,32,32,0) 0%, rgba(8,32,32,0.85) 100%)",
        }}
      >
        <p className="text-sm font-semibold leading-snug text-white">{reel.title}</p>
        <div className="mt-2 flex items-center gap-1.5 text-white/75">
          <Film className="h-3.5 w-3.5" />
          <span className="text-xs font-medium">{reel.views} views</span>
        </div>
      </div>
    </a>
  );
}

export function InstagramReels() {
  return (
    <section id="reels" className="bg-white py-20 md:py-28">
      <div className="container-site mx-auto px-5 md:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Follow Along</SectionLabel>
          <h2 className="display-lg mt-5 text-ink">
            Watch Dr. Tariq <span className="text-teal">in Action</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            Follow {CLINIC.instagramHandle} on Instagram for daily tips, treatment
            walkthroughs, and smile transformations.
          </p>
        </Reveal>
      </div>

      {/* Reels row */}
      <div className="mt-12">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:justify-center md:px-10 [scroll-padding-left:1.25rem]">
          {reels.map((reel) => (
            <ReelCard key={reel.title} reel={reel} />
          ))}
          <div className="w-1 shrink-0 md:hidden" aria-hidden="true" />
        </div>
      </div>

      {/* CTA */}
      <Reveal className="mt-12 flex flex-col items-center gap-3 px-5 text-center">
        <a
          href={CLINIC.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-block rounded-full p-[2px] transition-transform duration-300 hover:-translate-y-0.5"
          style={{ background: "linear-gradient(90deg, #f09433 0%, #e6683c 30%, #dc2743 55%, #cc2366 75%, #bc1888 100%)" }}
        >
          <span className="flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-[15px] font-semibold text-ink">
            <span
              className="grid h-7 w-7 place-items-center rounded-lg text-white"
              style={{ background: "linear-gradient(135deg, #f09433 0%, #dc2743 50%, #bc1888 100%)" }}
            >
              <Instagram className="h-4 w-4" />
            </span>
            Follow on Instagram {CLINIC.instagramHandle}
          </span>
        </a>
        <p className="text-xs text-muted-foreground">
          Content shown is illustrative. Visit Instagram for live posts.
        </p>
      </Reveal>
    </section>
  );
}
