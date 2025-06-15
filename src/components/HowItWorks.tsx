
import { Download, Search, Upload, CheckCircle, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "Ingest",
      description: "Fresh satellite and aerial imagery is automatically processed from multiple high-resolution sources."
    },
    {
      icon: Search,
      title: "Detect",
      description: "AI algorithms analyze imagery to identify code violations with precision and speed."
    },
    {
      icon: CheckCircle,
      title: "Verify",
      description: "Boots on the ground confirm detected violations and capture authentic photos for your staff."
    },
    {
      icon: Download,
      title: "Export",
      description: "Violation alerts are formatted and delivered to your enforcement workflow systems."
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
                <div className="hidden md:block absolute top-12 left-full w-8 h-0.5 bg-primary-navy transform translate-x-4 z-0">
                  <ArrowRight className="absolute -top-2 right-0 h-4 w-4 text-primary-navy" />
                </div>
              )}
              
              <div className="relative bg-cloud-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center z-10 w-full h-full flex flex-col">
                <div 
                  className="w-16 h-16 mx-auto mb-6 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #1e3a8a 0%, #f97316 100%)"
                  }}
                >
                  <step.icon className="h-8 w-8 text-cloud-white" />
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
