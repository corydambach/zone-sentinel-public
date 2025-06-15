

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    waitlistSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background satellite image - raw without any overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')"
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <div className="animate-fade-in">
          {/* Main headline */}
          <h1 className="text-3xl md:text-5xl font-bold text-cloud-white mb-4 leading-tight font-inter">
            Satellite-Speed
            <span className="block text-accent-orange font-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
              Code Enforcement.
            </span>
          </h1>
          
          {/* Sub-lines */}
          <div className="space-y-2 mb-6">
            <p className="text-lg md:text-xl text-cloud-white font-semibold">
              Abandoned-Vehicle Detection — 
              <span className="text-accent-orange" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}> Live Today.</span>
            </p>
            <p className="text-base md:text-lg text-matte-grey-light" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)' }}>
              Full Violation Coverage Launching 
              <span className="text-accent-orange font-semibold" style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.9)' }}> Q4 2025.</span>
            </p>
          </div>
          
          {/* CTA Button - Primary action with neon green */}
          <Button 
            onClick={scrollToWaitlist}
            className="bg-neon-green hover:bg-neon-green-hover text-cloud-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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

