import { Instagram } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ArrowButton } from "./ArrowButton";
import { XLogo } from "./XLogo";
import { local, unsplash } from "@/lib/media";
import { CLINIC, whatsappLink } from "@/lib/clinic";

interface Member {
  name: string;
  role: string;
  /** Secondary muted line under the role (e.g. "CEO, Aziz Dental Clinic"). */
  ceo?: string;
  /** Teal credentials line shown under the role. */
  credentials?: string;
  image: string;
  /** Optional second photo — crossfades in on hover. */
  imageAlt?: string;
  instagram: string;
  highlight?: boolean;
}

const team: Member[] = [
  {
    name: CLINIC.doctor,
    role: CLINIC.role,
    ceo: "CEO, Aziz Dental Clinic",
    credentials: "B.D.S, MSc Ortho, CHPE, MHPE, C-Endo",
    image: local.drTariq,
    imageAlt: local.drTariqAlt,
    instagram: CLINIC.instagram,
    highlight: true,
  },
  {
    name: "Dr. Ayesha Khan",
    role: "Dental Hygienist",
    image: unsplash.staffFemale,
    instagram: CLINIC.instagram,
  },
  {
    name: "Dr. Hamza Ali",
    role: "Dental Assistant",
    image: unsplash.staffHygienist,
    instagram: CLINIC.instagram,
  },
];

function MemberCard({ member, index }: { member: Member; index: number }) {
  return (
    <Reveal
      delay={index}
      className="group relative h-[460px] overflow-hidden rounded-3xl bg-brand-deep"
    >
      {/* Primary photo */}
      <img
        src={member.image}
        alt={`${member.name}, ${member.role} at ${CLINIC.name}`}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
      />
      {/* Hover crossfade photo (only if a second photo exists) */}
      {member.imageAlt && (
        <img
          src={member.imageAlt}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-top opacity-0 transition-opacity duration-[400ms] ease-in group-hover:opacity-100"
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(13,46,46,0) 45%, rgba(13,46,46,0.35) 100%)",
        }}
        aria-hidden="true"
      />
      {/* floating name card */}
      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl bg-white/95 px-5 py-4 shadow-soft backdrop-blur">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-tight text-ink">{member.name}</h3>
          <p className="truncate text-sm text-body">{member.role}</p>
          {member.ceo && (
            <p className="truncate text-xs text-muted-foreground">{member.ceo}</p>
          )}
          {member.credentials && (
            <p className="mt-0.5 text-[11px] font-medium leading-snug text-teal">
              {member.credentials}
            </p>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on Instagram`}
            className="grid h-8 w-8 place-items-center rounded-full bg-light-teal text-brand transition-colors hover:bg-brand hover:text-white"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="#"
            aria-label={`${member.name} on X`}
            className="grid h-8 w-8 place-items-center rounded-full bg-light-teal text-brand transition-colors hover:bg-brand hover:text-white"
          >
            <XLogo className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export function Team() {
  return (
    <section id="team" className="bg-light-teal py-20 md:py-28">
      <div className="container-site mx-auto px-5 md:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionLabel>Our Team</SectionLabel>
          <h2 className="display-lg mt-5 text-ink">
            Our <span className="text-teal">Experts</span> in Oral Health
          </h2>
          <p className="mt-4 text-base leading-relaxed text-body">
            Each member of our clinical staff is not only highly qualified but deeply
            passionate about helping patients achieve healthier, happier smiles.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <MemberCard key={member.name} member={member} index={i} />
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <ArrowButton href={whatsappLink("Hi, I'd like to know more about your dental team.")} variant="primary" external>
            View All Doctors
          </ArrowButton>
        </Reveal>
      </div>
    </section>
  );
}
