import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { local } from "@/lib/media";
import { CLINIC } from "@/lib/clinic";

const reasons = [
  {
    title: "Compassionate & Care",
    body: "Our approach goes beyond treatment — we provide compassionate care that ensures every patient feels comfortable, understood and supported throughout their dental journey.",
  },
  {
    title: "Advanced Technology",
    body: "From digital imaging to modern, minimally-invasive tools, we invest in the technology that makes your treatment faster, safer and more precise.",
  },
  {
    title: "Comprehensive Services",
    body: "Preventive, cosmetic, orthodontic and endodontic care all under one roof — so your whole family can be cared for in one trusted place.",
  },
  {
    title: "Our Honesty & Trust",
    body: "We only recommend what you truly need, explain every option clearly, and earn the long-term trust our patients place in us.",
  },
  {
    title: "Patient-Centered Care",
    body: "Your comfort and goals guide every decision. We listen first, then build a plan around you — not the other way around.",
  },
];

export function WhyChooseUs() {
  const [open, setOpen] = useState(0);

  return (
    <section id="why" className="bg-white py-20 md:py-28">
      <div className="container-site mx-auto px-5 md:px-10">
        <Reveal className="max-w-3xl">
          <SectionLabel>Why Choose Us</SectionLabel>
          <h2 className="display-lg mt-5 text-ink">
            We Treat You Like Family — Because Your{" "}
            <span className="text-teal">Smile Matters Most</span>
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-body">
            At {CLINIC.name}, we combine expertise, compassion and modern technology to
            create a dental experience that patients truly value.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Accordion */}
          <Reveal className="divide-y divide-border">
            {reasons.map((reason, i) => {
              const isOpen = open === i;
              return (
                <div key={reason.title}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-3 py-5 text-left"
                  >
                    <span className="text-teal" aria-hidden="true">
                      ✳
                    </span>
                    <span
                      className={`flex-1 font-display text-lg font-semibold transition-colors ${
                        isOpen ? "text-brand" : "text-ink"
                      }`}
                    >
                      {reason.title}
                    </span>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border text-brand">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 pl-7 pr-4 text-sm leading-relaxed text-body">
                          {reason.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </Reveal>

          {/* Photo */}
          <Reveal delay={1} className="relative">
            <div className="overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={local.clinic}
                alt={`The clinical team at ${CLINIC.name}`}
                loading="lazy"
                className="h-[420px] w-full object-cover lg:h-[560px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
