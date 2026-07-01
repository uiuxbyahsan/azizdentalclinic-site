export const CLINIC = {
  name: "Aziz Dental Clinic",
  doctor: "Dr. Tariq Aziz Memon",
  qualifications: "B.D.S, MSc Ortho, CHPE, MHPE, C-Endo, C-Ortho, Assistant Professor",
  role: "Dentist & Orthodontist",
  // NOTE: replace with the clinic's real number — used in nav, hero & footer CTAs.
  phoneDisplay: "+92 300 0000000",
  phone: "+923000000000",
  whatsapp: "923000000000",
  email: "info@azizdental.com",
  instagram: "https://www.instagram.com/aziz_dental_clinic/",
  instagramHandle: "@aziz_dental_clinic",
  address: "A-7, Behind Milan Lawn, Railway Society, Mirpur Khas 69000",
  city: "Mirpur Khas, Sindh, Pakistan",
  hoursWeekday: "Mon – Fri: 8:00 – 17:00",
  hoursWeekend: "Sat – Sun: 9:30 – 17:30",
} as const;

export const whatsappLink = (text: string) =>
  `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(text)}`;

export const BOOK_MESSAGE = "Hello, I would like to book a dental appointment at Aziz Dental Clinic.";
