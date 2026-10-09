import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SchoolHighlights from "@/components/SchoolHighlights";
import AboutSection from "@/components/AboutSection";
import AcademicsSection from "@/components/AcademicsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import GallerySection from "@/components/GallerySection";
import WhyParents from "@/components/WhyParents";
import InstagramSection from "@/components/InstagramSection";
import AdmissionsCTA from "@/components/AdmissionsCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-2 focus:text-navy"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <SchoolHighlights />
        <AboutSection />
        <AcademicsSection />
        <FacilitiesSection />
        <ActivitiesSection />
        <GallerySection />
        <WhyParents />
        <InstagramSection />
        <AdmissionsCTA />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
