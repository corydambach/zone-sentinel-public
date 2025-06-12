
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById('waitlist');
    waitlistSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background satellite image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')"
        }}
      />
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-zs-navy/5 via-transparent to-zs-purple/5" />
      
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="animate-fade-in">
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-zs-navy mb-6 leading-tight">
            Satellite-Speed
            <span className="block bg-gradient-to-r from-zs-orange to-zs-purple bg-clip-text text-transparent">
              Code Enforcement.
            </span>
          </h1>
          
          {/* Sub-lines */}
          <div className="space-y-3 mb-8">
            <p className="text-xl md:text-2xl text-zs-navy font-semibold">
              Abandoned-Vehicle Detection — 
              <span className="text-zs-orange"> Live Today.</span>
            </p>
            <p className="text-lg md:text-xl text-gray-600">
              Full Violation Coverage Launching 
              <span className="text-zs-purple font-semibold"> Q4 2025.</span>
            </p>
          </div>
          
          {/* CTA Button */}
          <Button 
            onClick={scrollToWaitlist}
            className="bg-gradient-to-r from-zs-orange to-zs-purple hover:from-zs-orange/90 hover:to-zs-purple/90 text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
