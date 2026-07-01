import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { SectionLabel } from "./SectionLabel";
import { local, unsplash } from "@/lib/media";

interface Stat {
  value: number | null;
  staticValue?: string;
  suffix?: string;
  label: string;
  body: string;
  image: string;
}

const stats: Stat[] = [
  {
    value: 85,
    suffix: "%",
    label: "Healthy Habits",
    body: "We're proud to help our community stay ahead of dental issues with preventive care.",
    image: unsplash.storyKidCare,
  },
  {
    value: 92,
    suffix: "%",
    label: "Comfort & Care",
    body: "Patients say they feel less anxious during their visits with us.",
    image: unsplash.storyComfort,
  },
  {
    value: null,
    staticValue: "3/4",
    label: "Trusted by Community",
    body: "New patients come to us through word-of-mouth referrals from families.",
    image: unsplash.storyCommunity,
  },
  {
    value: 7,
    suffix: " Min",
    label: "Quick Response",
    body: "Just a short wait on average before you're comfortably in the chair.",
    image: unsplash.storyFast,
  },
  {
    value: 15,
    suffix: "+ Yrs",
    label: "Years of Care",
    body: "Over a decade caring for the smiles of families across Mirpur Khas.",
    image: local.drTariq,
  },
];

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  return (
    <Reveal
      delay={index}
      className="group relative h-[400px] w-[280px] shrink-0 snap-start overflow-hidden rounded-3xl bg-brand-deep sm:w-[300px]"
    >
      <img
        src={stat.image}
        alt={stat.label}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,46,46,0.15) 0%, rgba(13,46,46,0.55) 55%, rgba(8,32,32,0.92) 100%)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-5xl font-bold leading-none text-white">
            {stat.value !== null ? (
              <Counter value={stat.value} suffix={stat.suffix} />
            ) : (
              stat.staticValue
            )}
          </span>
          <span className="text-sm font-semibold text-white/90">{stat.label}</span>
        </div>
        {/* dashed teal divider */}
        <div className="my-4 border-t border-dashed border-teal/70" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-white/70">{stat.body}</p>
      </div>
    </Reveal>
  );
}

export function Stats() {
  return (
    <section id="story" className="bg-cream py-20 md:py-28">
      <div className="container-site mx-auto px-5 md:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <SectionLabel>Our Story</SectionLabel>
          <h2 className="display-lg mt-5 text-ink">
            Redefining Dental Care with Trust, Innovation in{" "}
            <span className="text-teal">Dental Wellness</span>
          </h2>
        </Reveal>
      </div>

      {/* Horizontally scrollable stat cards */}
      <div className="mt-14">
        <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 md:px-10 [scroll-padding-left:1.25rem] md:[scroll-padding-left:2.5rem]">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
          {/* trailing spacer so last card isn't flush to edge */}
          <div className="w-1 shrink-0" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
