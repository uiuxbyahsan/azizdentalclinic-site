import { Facebook, Linkedin, Instagram, MapPin } from "lucide-react";
import { ToothLogo } from "./ToothLogo";
import { ArrowButton } from "./ArrowButton";
import { XLogo } from "./XLogo";
import { CLINIC, whatsappLink, BOOK_MESSAGE } from "@/lib/clinic";

const nav = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#story" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
];

const legal = [
  { label: "Terms & Conditions", href: "#" },
  { label: "Cookies", href: "#" },
  { label: "Licenses", href: "#" },
  { label: "404", href: "/404" },
];

const socials = [
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "X (Twitter)", href: "#", Icon: XLogo },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Instagram", href: CLINIC.instagram, Icon: Instagram },
];

export function Footer() {
  return (
    <footer className="bg-cream">
      <div className="container-site mx-auto px-5 pb-10 pt-16 md:px-10">
        {/* Top: logo + contact */}
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <a href="#top" className="flex items-center gap-3" aria-label={`${CLINIC.name} home`}>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-brand">
              <ToothLogo className="h-6 w-6" color="#ffffff" />
            </span>
            <span className="font-display text-2xl font-bold tracking-tight text-ink">
              Aziz <span className="text-teal">Dental</span> Clinic
            </span>
          </a>
          <div className="text-left md:text-right">
            <a
              href={`tel:${CLINIC.phone}`}
              className="block font-display text-2xl font-bold tracking-tight text-ink transition-colors hover:text-brand md:text-3xl"
            >
              {CLINIC.phoneDisplay}
            </a>
            <a
              href={`mailto:${CLINIC.email}`}
              className="mt-1 block text-lg text-body transition-colors hover:text-brand md:text-xl"
            >
              {CLINIC.email}
            </a>
          </div>
        </div>

        <div className="my-10 h-px w-full bg-border" />

        {/* Columns */}
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4">
          <div className="col-span-2 lg:col-span-1">
            <p className="max-w-xs text-sm leading-relaxed text-body">
              Advanced technology, a caring team, and treatments designed to keep your smile
              healthy for life.
            </p>
            <p className="mt-4 flex items-start gap-2 text-sm text-body">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal" />
              {CLINIC.address}
            </p>
            <div className="mt-6">
              <ArrowButton href={whatsappLink(BOOK_MESSAGE)} variant="primary" external>
                Get Appointment
              </ArrowButton>
            </div>
          </div>

          <FooterCol title="Navigation" items={nav} />
          <FooterCol title="Legal" items={legal} />

          <div>
            <h3 className="text-sm font-semibold text-ink">Follow Us</h3>
            <ul className="mt-4 space-y-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-2.5 text-sm text-body transition-colors hover:text-brand"
                  >
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-light-teal text-brand">
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    {label === "Instagram" ? CLINIC.instagramHandle : label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} All rights reserved. {CLINIC.name}</p>
          <a href="#" className="transition-colors hover:text-brand">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-ink">{title}</h3>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="text-sm text-body transition-colors hover:text-brand">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
