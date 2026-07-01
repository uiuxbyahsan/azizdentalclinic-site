import { Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ArrowButton } from "./ArrowButton";
import { local } from "@/lib/media";
import { whatsappLink } from "@/lib/clinic";

interface Service {
  number: string;
  name: string;
  description: string;
  tags: string[];
  image: string;
}

const services: Service[] = [
  {
    number: "01",
    name: "Preventive Dentistry",
    description:
      "Early care and regular checkups are the key to avoiding serious dental issues. We help you maintain strong, healthy teeth and gums for life.",
    tags: ["Checkups", "Cleanings", "Oral Health", "Whitening"],
    image: local.serviceGeneral,
  },
  {
    number: "02",
    name: "Cosmetic Dentistry",
    description:
      "Whitening, veneers and bonding to improve the appearance of your teeth — helping you achieve a brighter, more confident smile.",
    tags: ["Teeth Whitening", "Dental Veneers", "Smile Makeover", "Cosmetic Bonding"],
    image: local.serviceCosmetic,
  },
  {
    number: "03",
    name: "Orthodontics",
    description:
      "Braces and clear aligners thoughtfully planned to gently straighten your teeth and align your bite — for every age.",
    tags: ["Braces", "Clear Aligners", "Retainers"],
    image: local.serviceOrtho,
  },
  {
    number: "04",
    name: "Endodontics (C-Endo)",
    description:
      "Gentle, modern root canal treatment that relieves pain and saves your natural tooth — performed with certified endodontic care.",
    tags: ["Root Canal", "Pulp Therapy", "Pain Relief"],
    image: local.serviceAesthetic,
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal
      delay={index}
      className="group flex h-full w-[300px] shrink-0 snap-start flex-col overflow-hidden rounded-3xl border border-border bg-white shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elegant sm:w-[340px]"
    >
      {/* Photo */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 font-display text-sm font-bold text-brand">
          [{service.number}]
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-ink">{service.name}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-body">{service.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1.5 rounded-full bg-light-teal px-3 py-1.5 text-xs font-medium text-brand"
            >
              <Check className="h-3 w-3 text-teal" strokeWidth={3} />
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <ArrowButton
            href={whatsappLink(`Hi, I'd like to know more about ${service.name}.`)}
            variant="secondary"
            external
            className="py-1.5 pl-5 text-sm"
          >
            View Details
          </ArrowButton>
        </div>
      </div>
    </Reveal>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <div className="container-site mx-auto px-5 md:px-10">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="display-lg mt-5 text-ink">
              Comprehensive Dental Care for <span className="text-teal">Every Smile</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-body">
              We combine expertise, compassion and modern technology to create a dental
              experience that patients across Mirpur Khas truly value.
            </p>
          </div>
          <div className="shrink-0">
            <ArrowButton href="#services" variant="primary">
              See All Services
            </ArrowButton>
          </div>
        </Reveal>
      </div>

      <div className="mt-14">
        <div className="no-scrollbar flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto px-5 pb-4 md:px-10 [scroll-padding-left:1.25rem] md:[scroll-padding-left:2.5rem]">
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
          <div className="w-1 shrink-0" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
