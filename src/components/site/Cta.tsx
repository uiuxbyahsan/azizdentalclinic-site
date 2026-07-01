import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ArrowButton } from "./ArrowButton";
import { whatsappLink, BOOK_MESSAGE } from "@/lib/clinic";

export function Cta() {
  return (
    <section id="contact" className="bg-cream px-5 py-10 md:px-10 md:py-16">
      <div className="container-site relative mx-auto overflow-hidden rounded-[2.5rem] bg-brand px-6 py-20 text-center md:py-28">
        {/* radial teal glow */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(60% 80% at 50% 50%, rgba(46,158,158,0.35) 0%, rgba(46,158,158,0) 65%)",
          }}
        />
        <Reveal className="relative mx-auto max-w-3xl">
          <div className="flex justify-center">
            <SectionLabel tone="light">Get In Touch</SectionLabel>
          </div>
          <h2 className="display-lg mt-6 text-white">
            Let's Talk Teeth—We're
            <br />
            <span className="text-teal">Just a Smile Away</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70">
            Your health journey starts with one simple step — we're here to guide you.
          </p>
          <div className="mt-9 flex justify-center">
            <ArrowButton href={whatsappLink(BOOK_MESSAGE)} variant="light" external>
              Get Started
            </ArrowButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
