// ===== EDIT ME: replace placeholders only with verified school information =====
export const site = {
  name: "Shining Star International School",
  tagline: "Learn, Grow & Shine",
  instagramHandle: "@shiningstarinternational8",
  instagramUrl: "https://www.instagram.com/shiningstarinternational8/?hl=en",
  mapsUrl: "https://www.google.com/maps/place/Shining+Star+International+School/@28.7328546,77.0393652,17z/",
  // Unverified: left blank on purpose. Fill in after confirming with the school.
  address: "", phone: "", email: "", hours: "",
};
export const nav = [
  { label: "Home", href: "#home" }, { label: "About Us", href: "#about" }, { label: "Academics", href: "#academics" },
  { label: "Facilities", href: "#facilities" }, { label: "Activities", href: "#activities" },
  { label: "Gallery", href: "#gallery" }, { label: "Contact", href: "#contact" },
];
export type GalleryItem = { src: string; alt: string; caption: string; category: "Campus" | "Classrooms" | "Activities" | "Events" | "Celebrations"; tall?: boolean; wide?: boolean };
// Drop real, authorized photos in /public/images using these filenames (.jpg). Until then, branded placeholders show.
export const gallery: GalleryItem[] = [
  { src: "/images/gallery-1.jpg", alt: "School campus", caption: "Our campus", category: "Campus", tall: true },
  { src: "/images/gallery-2.jpg", alt: "Students in a classroom", caption: "Classroom discoveries", category: "Classrooms" },
  { src: "/images/gallery-3.jpg", alt: "Art activity", caption: "Art and creativity", category: "Activities", wide: true },
  { src: "/images/gallery-4.jpg", alt: "Annual event", caption: "School events", category: "Events" },
  { src: "/images/gallery-5.jpg", alt: "Festival celebration", caption: "Cultural celebrations", category: "Celebrations", tall: true },
  { src: "/images/gallery-6.jpg", alt: "Group project", caption: "Group projects", category: "Classrooms" },
  { src: "/images/gallery-7.jpg", alt: "Sports day", caption: "Sports and movement", category: "Activities" },
  { src: "/images/gallery-8.jpg", alt: "Student performance", caption: "Student performances", category: "Events", wide: true },
  { src: "/images/gallery-9.jpg", alt: "School garden", caption: "Campus moments", category: "Campus" },
];
