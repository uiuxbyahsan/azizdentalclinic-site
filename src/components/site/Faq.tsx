import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ArrowButton } from "./ArrowButton";
import { CLINIC } from "@/lib/clinic";

const faqs = [
  {
    q: "How often should I visit the dentist?",
    a: "We recommend a routine dental checkup every six months to maintain optimal oral health and catch any issues early.",
  },
  {
    q: "Do you offer emergency dental services?",
    a: "Yes. If you're in pain or have had an accident, call us right away and we'll do our best to see you the same day.",
  },
  {
    q: "Are your treatments painful?",
    a: "Your comfort comes first. We use modern, gentle techniques and effective anaesthesia, so most treatments are virtually pain-free.",
  },
  {
    q: "What dental services do you provide?",
    a: "From preventive checkups and cleanings to cosmetic dentistry, orthodontics and certified root canal care — comprehensive treatment under one roof.",
  },
  {
    q: "Do you accept insurance?",
    a: "We offer a range of flexible payment options and can guide you through any insurance claims. Get in touch and we'll help you sort the details.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="bg-cream py-20 md:py-28">
      <div className="container-site mx-auto px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left */}
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="display-lg mt-5 text-ink">
              <span className="text-teal">Questions</span> We Get Often
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-body">
              Answers to your most common questions about dental care and our services.
            </p>

            {/* Call card */}
            <div className="mt-8 flex flex-col gap-5 rounded-3xl bg-white p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-light-teal text-brand">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink">Still have a question?</h3>
                  <p className="mt-1 max-w-xs text-sm leading-relaxed text-body">
                    Our team is ready to assist you with anything you need.
                  </p>
                </div>
              </div>
              <ArrowButton href={`tel:${CLINIC.phone}`} variant="primary" className="shrink-0">
                Make A Call
              </ArrowButton>
            </div>
          </Reveal>

          {/* Right — accordion */}
          <Reveal delay={1} className="divide-y divide-border border-t border-border">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q}>
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 py-6 text-left"
                  >
                    <span
                      className={`flex-1 font-display text-lg font-semibold transition-colors ${
                        isOpen ? "text-brand" : "text-ink"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-border text-brand">
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
                        <p className="pb-6 pr-12 text-sm leading-relaxed text-body">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
