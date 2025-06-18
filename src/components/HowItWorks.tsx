
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: "🔄",
      title: "Ingest",
      description: "Fresh satellite and aerial imagery is automatically processed from multiple high-resolution sources.",
      color: "#3b82f6" // blue
    },
    {
      icon: "🔍",
      title: "Detect",
      description: "AI algorithms analyze imagery to identify code violations with precision and speed.",
      color: "#10b981" // green
    },
    {
      icon: "✅",
      title: "Verify",
      description: "Boots on the ground confirm detected violations and capture authentic photos for your staff.",
      color: "#f59e0b" // amber
    },
    {
      icon: "📤",
      title: "Export",
      description: "Violation alerts are formatted and delivered to your enforcement workflow systems.",
      color: "#ef4444" // red
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-navy-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
            How It Works
          </h2>
          <p className="text-xl text-neutral-90 max-w-2xl mx-auto">
            Four simple steps to transform aerial imagery into actionable code enforcement data
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-navy text-cloud-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                {index + 1}
              </div>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-16 left-full items-center justify-center w-8 z-10">
                  <ArrowRight className="h-6 w-6 text-primary-navy" />
                </div>
              )}
              
              <div className="relative bg-cloud-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center z-10 w-full h-full flex flex-col">
                <div 
                  className="w-20 h-20 mx-auto mb-6 rounded-xl flex items-center justify-center text-4xl"
                  style={{ backgroundColor: step.color }}
                >
                  {step.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-primary-navy mb-3">
                  {step.title}
                </h3>
                
                <p className="text-neutral-90 leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
