
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import SecurityBadges from "@/components/SecurityBadges";
import PricingTeaser from "@/components/PricingTeaser";
import FAQ from "@/components/FAQ";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <HowItWorks />
      <Features />
      <SecurityBadges />
      <PricingTeaser />
      <FAQ />
      <WaitlistForm />
      <Footer />
    </div>
  );
};

export default Index;
