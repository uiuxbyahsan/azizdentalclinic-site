import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarCheck, Siren, Clock } from "lucide-react";
import { ArrowButton } from "./ArrowButton";
import { CLINIC, whatsappLink, BOOK_MESSAGE } from "@/lib/clinic";
import { unsplash } from "@/lib/media";

const EASE = [0.22, 1, 0.36, 1] as const;

const infoItems = [
  {
    icon: CalendarCheck,
    title: "Get An Appointment",
    body: "Ready for a healthier smile? Book your visit today.",
  },
  {
    icon: Siren,
    title: "Emergency Contact",
    body: `Call: ${CLINIC.phoneDisplay}  ·  ${CLINIC.email}`,
  },
  {
    icon: Clock,
    title: "Working Hours",
    body: `${CLINIC.hoursWeekday}  ·  ${CLINIC.hoursWeekend}`,
  },
];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-brand-deep"
    >
      {/* Parallax background image */}
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 z-0"
        aria-hidden="true"
      >
        <img
          src={unsplash.heroDental}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>
      {/* Mobile: simple uniform overlay for legibility on small screens */}
      <div
        className="absolute inset-0 z-0 md:hidden"
        aria-hidden="true"
        style={{ background: "rgba(0,0,0,0.6)" }}
      />
      {/* Desktop: darker on the left (text contrast) fading to lighter on the right (shows the clinic photo) */}
      <div
        className="absolute inset-0 z-0 hidden md:block"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 60%, rgba(0,0,0,0.1) 100%)",
        }}
      />

      {/* Headline block — left-aligned */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 flex flex-1 items-center pt-28 pr-6 pl-6 md:pr-10 md:[padding-left:clamp(2rem,8vw,120px)]"
      >
        <div className="max-w-[600px] text-left">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="display-xl text-white"
          >
            Trusted Dental Care
            <br />
            for Every Generation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/80"
          >
            We combine modern technology with heartfelt service to ensure every generation
            smiles confidently.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className="mt-9"
          >
            <ArrowButton href={whatsappLink(BOOK_MESSAGE)} variant="light" external>
              Book Appointment
            </ArrowButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Info bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.45, ease: EASE }}
        className="relative z-10 border-t border-white/10 bg-brand-deep/55 backdrop-blur-md"
      >
        <div className="container-site mx-auto grid grid-cols-1 divide-y divide-white/10 px-5 md:grid-cols-3 md:divide-x md:divide-y-0 md:px-10">
          {infoItems.map((item) => (
            <div key={item.title} className="flex items-start gap-4 py-6 md:px-7 md:first:pl-0">
              <span className="mt-0.5 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-white/20 text-teal">
                <item.icon className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div>
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-white/65">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
