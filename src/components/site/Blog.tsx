import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { ArrowButton } from "./ArrowButton";
import { local } from "@/lib/media";

interface Post {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  cta: string;
  href: string;
  image: string;
  gradient: string;
}

const posts: Post[] = [
  {
    category: "Workshop · Aesthetics",
    title: "Basic Aesthetic Training Program — 3-Day Hands-On Workshop",
    excerpt:
      "Learn PRP, Mesotherapy, Microneedling, Chemical Peels, Hydrafacial & IV Glutathione. Open to MBBS/BDS/DPT graduates. Happening in July First Week at Aziz Dental and Aesthetic Clinic, Mirpur Khas.",
    date: "July 2026 · First Week",
    cta: "Register via WhatsApp",
    href: "https://wa.me/923111696729",
    image: local.serviceAesthetic,
    gradient: "linear-gradient(135deg, #1a2a5e, #c9a84c)",
  },
  {
    category: "Clinical Workshop · Endodontics",
    title: "Root to Restoration — Live Demonstration Clinical Workshop",
    excerpt:
      "Dr. Tariq Aziz Memon (CEO, Aziz Dental Clinic) conducts a live root canal demonstration. In collaboration with PADS External Relations Committee. Held at Aziz Dental Clinic, Mirpurkhas.",
    date: "Friday, 15th May 2026 · 10:00 AM – 12:30 PM",
    cta: "Learn More",
    href: "https://www.instagram.com/aziz_dental_clinic/",
    image: local.serviceGeneral,
    gradient: "linear-gradient(135deg, #4a0e6e, #9b59b6)",
  },
  {
    category: "Tips · Oral Health",
    title: "5 Signs You Need to Visit a Dentist Right Now",
    excerpt:
      "Most people wait too long before seeing a dentist. Dr. Tariq breaks down the 5 warning signs you should never ignore — from tooth sensitivity to gum bleeding.",
    date: "General Health Tip",
    cta: "Read More",
    href: "https://www.instagram.com/aziz_dental_clinic/",
    image: local.serviceCosmetic,
    gradient: "linear-gradient(135deg, #0D2E2E, #2E9E9E)",
  },
];

function PostCard({ post, index }: { post: Post; index: number }) {
  return (
    <Reveal delay={index} className="h-full">
      <a
        href={post.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-elegant"
      >
        {/* Dentistry-field photo (brand gradient as fallback) with category pill bottom-left */}
        <div className="relative h-44 overflow-hidden" style={{ background: post.gradient }}>
          <img
            src={post.image}
            alt={post.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(180deg, rgba(13,46,46,0) 55%, rgba(13,46,46,0.45) 100%)",
            }}
            aria-hidden="true"
          />
          <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand">
            {post.category}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-medium text-muted-foreground">{post.date}</p>
          <h3 className="mt-2 line-clamp-2 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-brand">
            {post.title}
          </h3>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-body">{post.excerpt}</p>
          <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-teal">
            {post.cta}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </a>
    </Reveal>
  );
}

export function Blog() {
  return (
    <section id="blog" className="bg-white py-20 md:py-28">
      <div className="container-site mx-auto px-5 md:px-10">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel>Stories and Tips</SectionLabel>
            <h2 className="display-lg mt-5 text-ink">Stories and Tips From Around the World</h2>
          </div>
          <div className="shrink-0">
            <ArrowButton href="#blog" variant="primary">
              See All
            </ArrowButton>
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <PostCard key={post.title} post={post} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
