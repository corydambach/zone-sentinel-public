import { CheckCircle, Clock } from "lucide-react";

const Features = () => {
  const liveFeatures = [
    "Abandoned vehicle detection",
    "High-resolution satellite imagery processing",
    "Automated violation alerts",
    "Real-time processing pipeline"
  ];

  const comingSoonFeatures = [
    "Illegal dumping detection",
    "Unsafe structure identification", 
    "Overgrown lot monitoring",
    "Comprehensive violation dashboard",
    "Mobile enforcement app",
    "Advanced reporting analytics"
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zs-navy mb-4">
            Features & Capabilities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with abandoned vehicle detection today, expand to full code enforcement coverage in Q4 2025
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Live Today */}
          <div className="bg-gradient-to-br from-zs-orange/5 to-zs-orange/10 rounded-xl p-8 border border-zs-orange/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-zs-orange rounded-xl flex items-center justify-center mr-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-zs-navy">Live Today</h3>
            </div>
            
            <ul className="space-y-4">
              {liveFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-zs-orange mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Coming Soon */}
          <div className="bg-gradient-to-br from-zs-purple/5 to-zs-purple/10 rounded-xl p-8 border border-zs-purple/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-zs-purple rounded-xl flex items-center justify-center mr-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-zs-navy">Coming Q4 2025</h3>
            </div>
            
            <ul className="space-y-4">
              {comingSoonFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <Clock className="h-5 w-5 text-zs-purple mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
