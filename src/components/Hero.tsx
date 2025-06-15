
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    waitlistSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
      {/* Background satellite image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      {/* Brand gradient overlay at 60% opacity */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-orange via-[#BE2E77] to-deep-purple opacity-60" />
      
      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <div className="animate-fade-in">
          {/* Main headline */}
          <h1 className="text-3xl md:text-5xl font-bold text-primary-navy mb-4 leading-tight font-inter">
            Satellite-Speed
            <span className="block bg-brand-gradient bg-clip-text text-transparent">
              Code Enforcement.
            </span>
          </h1>
          
          {/* Sub-lines */}
          <div className="space-y-2 mb-6">
            <p className="text-lg md:text-xl text-primary-navy font-semibold">
              Abandoned-Vehicle Detection — 
              <span className="text-accent-orange"> Live Today.</span>
            </p>
            <p className="text-base md:text-lg text-neutral-90">
              Full Violation Coverage Launching 
              <span className="text-deep-purple font-semibold"> Q4 2025.</span>
            </p>
          </div>
          
          {/* CTA Button */}
          <Button 
            onClick={scrollToWaitlist}
            className="bg-accent-orange hover:bg-gradient-to-r hover:from-accent-orange hover:to-deep-purple text-cloud-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Join the Waitlist
            <ArrowDown className="ml-2 h-5 w-5 animate-pulse-slow" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
