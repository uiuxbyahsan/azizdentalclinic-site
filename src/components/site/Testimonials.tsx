import { useCallback, useEffect, useRef, useState } from "react";
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { unsplash } from "@/lib/media";

interface Review {
  name: string;
  location: string;
  quote: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    name: "Ayesha Siddiqui",
    location: "Mirpur Khas",
    quote:
      "Dr. Tariq has been my family's dentist for years. Always professional, gentle, and thorough.",
    avatar: unsplash.avatar2,
  },
  {
    name: "Imran Memon",
    location: "Mirpur Khas",
    quote:
      "Best dental experience in Mirpur Khas! The clinic is clean and the staff is so caring.",
    avatar: unsplash.avatar1,
  },
  {
    name: "Fatima Bukhari",
    location: "Hyderabad",
    quote:
      "My children love coming here. Dr. Tariq makes them feel comfortable every single visit.",
    avatar: unsplash.avatar3,
  },
  {
    name: "Bilal Qureshi",
    location: "Mirpur Khas",
    quote:
      "I was terrified of root canals — but it was completely painless. I can't recommend them enough.",
    avatar: unsplash.avatar1,
  },
  {
    name: "Sana Malik",
    location: "Umerkot",
    quote:
      "Booked a whitening before my wedding and the results were stunning. Thank you, team!",
    avatar: unsplash.avatar2,
  },
];

export function Testimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  const scrollByDir = useCallback((dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-card]");
    const amount = card ? card.offsetWidth + 20 : el.clientWidth * 0.8;
    let next = el.scrollLeft + dir * amount;
    // loop around
    if (dir === 1 && next > el.scrollWidth - el.clientWidth - 4) next = 0;
    if (dir === -1 && el.scrollLeft <= 4) next = el.scrollWidth;
    el.scrollTo({ left: next, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => scrollByDir(1), 4500);
    return () => clearInterval(id);
  }, [paused, scrollByDir]);

  return (
    <section id="reviews" className="bg-brand py-20 md:py-28">
      <div className="container-site mx-auto px-5 md:px-10">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <SectionLabel tone="light">Reviews</SectionLabel>
            <h2 className="display-lg mt-5 text-white">Voices of Trust and Care</h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => scrollByDir(-1)}
              aria-label="Previous review"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-brand"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollByDir(1)}
              aria-label="Next review"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-brand"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </Reveal>
      </div>

      <div
        ref={scrollerRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 md:px-10 [scroll-padding-left:1.25rem] md:[scroll-padding-left:2.5rem]"
      >
        {reviews.map((review) => (
          <article
            key={review.name}
            data-card
            className="flex w-[300px] shrink-0 snap-start flex-col rounded-3xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm sm:w-[360px]"
          >
            <Quote className="h-8 w-8 text-teal" />
            <div className="mt-4 flex gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-teal text-teal" />
              ))}
            </div>
            <p className="mt-4 flex-1 text-[15px] leading-relaxed text-white/85">
              "{review.quote}"
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
              <img
                src={review.avatar}
                alt={review.name}
                loading="lazy"
                className="h-11 w-11 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-white">{review.name}</p>
                <p className="text-xs text-white/55">{review.location}</p>
              </div>
            </div>
          </article>
        ))}
        <div className="w-1 shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}
