import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import DashboardPreview from "@/components/landing/DashboardPreview";
import Statistics from "@/components/landing/Statistics";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Features />
      <DashboardPreview />
      <Statistics />
      <CTA />
      <Footer />
    </>
  );
}