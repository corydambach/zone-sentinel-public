import { Download, Search, Upload } from "lucide-react";

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
      icon: Download,
      title: "Export",
      description: "Violation alerts are formatted and delivered to your enforcement workflow systems."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-zs-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zs-navy mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Three simple steps to transform aerial imagery into actionable code enforcement data
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-zs-orange to-zs-purple transform translate-x-4 z-0" />
              )}
              
              <div className="relative bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300 text-center z-10">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-zs-orange to-zs-purple rounded-xl flex items-center justify-center">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-zs-navy mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
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
