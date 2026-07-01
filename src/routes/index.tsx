import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Services } from "@/components/site/Services";
import { Team } from "@/components/site/Team";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Testimonials } from "@/components/site/Testimonials";
import { InstagramReels } from "@/components/site/InstagramReels";
import { Blog } from "@/components/site/Blog";
import { Faq } from "@/components/site/Faq";
import { Cta } from "@/components/site/Cta";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aziz Dental Clinic | Trusted Dental Care in Mirpur Khas" },
      {
        name: "description",
        content:
          "Aziz Dental Clinic — trusted family dental care in Mirpur Khas led by Dr. Tariq Aziz Memon. Preventive, cosmetic, orthodontic & endodontic treatment with modern technology and heartfelt service.",
      },
      { property: "og:title", content: "Aziz Dental Clinic | Trusted Dental Care for Every Generation" },
      {
        property: "og:description",
        content:
          "Modern, compassionate dental care for every generation in Mirpur Khas — preventive, cosmetic, orthodontics and root canals with Dr. Tariq Aziz Memon.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="overflow-x-hidden bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Team />
      <WhyChooseUs />
      <Testimonials />
      <InstagramReels />
      <Blog />
      <Faq />
      <Cta />
      <Footer />
    </main>
  );
}
