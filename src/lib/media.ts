// Local assets bundled by Vite.
import heroImg from "@/assets/hero.jpg";
import clinicImg from "@/assets/clinic.jpg";
import drTariqImg from "@/assets/dr-tariq.jpg";
import drTariqAltImg from "@/assets/dr-tariq-2.png";
import serviceGeneral from "@/assets/service-general.jpg";
import serviceCosmetic from "@/assets/service-cosmetic.jpg";
import serviceOrtho from "@/assets/service-ortho.jpg";
import serviceAesthetic from "@/assets/service-aesthetic.jpg";

export const local = {
  hero: heroImg,
  clinic: clinicImg,
  // Dr. Tariq Aziz Memon — real photos (primary clinical shot + casual hover portrait).
  drTariq: drTariqImg,
  drTariqAlt: drTariqAltImg,
  serviceGeneral,
  serviceCosmetic,
  serviceOrtho,
  serviceAesthetic,
};

// Unsplash helper — keeps a consistent crop/quality across the site.
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const unsplash = {
  // Dental clinic backgrounds
  heroDental: u("1629909613654-28e377c37b09", 2000),
  storyKidCare: u("1588776814546-1ffcf47267a5"),
  storyCouple: u("1612531386530-97286d97c2d2"),
  storyComfort: u("1606811841689-23dfddce3e95"),
  storyCommunity: u("1581056771107-24ca5f033842"),
  storyFast: u("1609840114035-3c981b782dfe"),
  // Team placeholders (staff 2 & 3)
  staffFemale: u("1594824476967-48c8b964273f", 900),
  staffHygienist: u("1559839734-2b71ea197ec2", 900),
  // Why-choose-us
  whyTeam: u("1551601651-2a8555f1a136", 1200),
  // Blog
  blogMyths: u("1606265752439-1f18756aa8ed", 900),
  blogFloss: u("1559757175-5700dde675bc", 900),
  blogBrushing: u("1607613009820-a29f7bb81c04", 900),
  // Testimonial avatars
  avatar1: u("1507003211169-0a1dd7228f2d", 200),
  avatar2: u("1494790108377-be9c29b29330", 200),
  avatar3: u("1500648767791-00dcc994a43e", 200),
};
