import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { ToothLogo } from "./ToothLogo";
import { ArrowButton } from "./ArrowButton";
import { cn } from "@/lib/utils";
import { CLINIC, whatsappLink, BOOK_MESSAGE } from "@/lib/clinic";

const links = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#story" },
  { label: "Services", href: "#services" },
  { label: "Blog", href: "#blog" },
];

const pages = [
  { label: "Our Team", href: "#team" },
  { label: "Why Choose Us", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  useEffect(() => {
    // Read the scroll offset from whichever element is actually scrolling
    // (document.scrollingElement here) and listen in the capture phase so we also
    // catch scroll events that don't bubble if a nested element becomes the scroller.
    const onScroll = () => {
      const y =
        window.scrollY ||
        document.scrollingElement?.scrollTop ||
        document.documentElement.scrollTop ||
        0;
      setScrolled(y > 60);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, true);
    return () => window.removeEventListener("scroll", onScroll, true);
  }, []);

  // Force the "solid" treatment whenever the mobile menu is open (panel is white).
  const solid = scrolled || open;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 top-0 z-[999] w-full"
    >
      <nav
        className="mx-auto flex w-full items-center justify-between gap-6 px-5 md:px-10"
        style={{
          minHeight: solid ? 68 : 84,
          background: solid ? "rgba(255,255,255,0.95)" : "transparent",
          backdropFilter: solid ? "blur(12px)" : "none",
          WebkitBackdropFilter: solid ? "blur(12px)" : "none",
          boxShadow: solid ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        {/* Logo */}
        <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label={`${CLINIC.name} home`}>
          <span
            className={cn(
              "grid h-9 w-9 place-items-center rounded-full transition-colors duration-300",
              solid ? "bg-light-teal" : "bg-white/15",
            )}
          >
            <ToothLogo className="h-5 w-5" color={solid ? "#2E9E9E" : "#ffffff"} />
          </span>
          <span className="font-display text-[17px] font-bold leading-none tracking-tight">
            <span className={cn("transition-colors duration-300", solid ? "text-ink" : "text-white")}>
              Aziz
            </span>{" "}
            <span className={cn("transition-colors duration-300", solid ? "text-teal" : "text-white")}>
              Dental Clinic
            </span>
          </span>
        </a>

        {/* Center links */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "group relative text-[15px] font-medium transition-colors duration-300",
                solid ? "text-ink/80 hover:text-brand" : "text-white/90 hover:text-white",
              )}
            >
              {l.label}
              <span
                className={cn(
                  "absolute -bottom-1.5 left-0 h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-full",
                  solid ? "bg-teal" : "bg-white",
                )}
              />
            </a>
          ))}
          {/* Pages dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <button
              className={cn(
                "flex items-center gap-1 text-[15px] font-medium transition-colors duration-300",
                solid ? "text-ink/80 hover:text-brand" : "text-white/90 hover:text-white",
              )}
              aria-expanded={pagesOpen}
              aria-haspopup="true"
            >
              Pages
              <ChevronDown
                className={`h-4 w-4 transition-transform ${pagesOpen ? "rotate-180" : ""}`}
              />
            </button>
            <AnimatePresence>
              {pagesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full z-50 w-52 -translate-x-1/2 pt-3"
                >
                  <div className="overflow-hidden rounded-2xl border border-border bg-white p-2 shadow-elegant">
                    {pages.map((p) => (
                      <a
                        key={p.href}
                        href={p.href}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink/80 transition-colors hover:bg-light-teal hover:text-brand"
                      >
                        {p.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop CTA — outline on transparent, solid dark on scroll */}
        <div className="hidden shrink-0 lg:block">
          <a
            href={whatsappLink(BOOK_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group inline-flex items-center gap-2.5 rounded-full py-2 pl-5 pr-2 text-[14px] font-medium transition-all duration-300 hover:-translate-y-0.5",
              solid
                ? "border border-transparent bg-brand text-white hover:bg-brand-deep"
                : "border border-white/70 bg-transparent text-white hover:bg-white/10",
            )}
          >
            Get Appointment
            <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-brand transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
            </span>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn(
            "grid h-11 w-11 place-items-center rounded-full border transition-colors duration-300 lg:hidden",
            solid ? "border-transparent bg-light-teal text-brand" : "border-white/50 text-white",
          )}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white shadow-elegant lg:hidden"
          >
            <div className="flex flex-col gap-1 px-5 pb-5 pt-2">
              {[...links, ...pages].map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-[15px] font-medium text-ink/80 transition-colors hover:bg-light-teal hover:text-brand"
                >
                  {l.label}
                </a>
              ))}
              <ArrowButton
                href={whatsappLink(BOOK_MESSAGE)}
                variant="primary"
                external
                className="mt-3 justify-center"
              >
                Get Appointment
              </ArrowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
