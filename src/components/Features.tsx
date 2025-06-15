

import { MapPin, Filter, FileSpreadsheet, Trash2, Building, Sprout } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const availableFeatures = [
    {
      icon: MapPin,
      title: "Street-Level Map Viewer",
      description: "Interactive mapping interface with satellite overlay and street-level detail for precise violation identification"
    },
    {
      icon: Filter,
      title: "Filter by Block",
      description: "Advanced filtering capabilities to focus enforcement efforts on specific neighborhoods or districts"
    },
    {
      icon: FileSpreadsheet,
      title: "CSV Export",
      description: "One-click export of violation data for integration with existing enforcement workflows and reporting systems"
    }
  ];

  const comingSoonFeatures = [
    {
      icon: Trash2,
      title: "Illegal Dumps",
      description: "Automated detection of unauthorized waste disposal sites"
    },
    {
      icon: Building,
      title: "Unsafe Structures",
      description: "Identification of deteriorating buildings and safety hazards"
    },
    {
      icon: Sprout,
      title: "Overgrown Lots",
      description: "Detection of unmaintained properties and vegetation violations"
    }
  ];

  return (
    <section id="features" className="py-20 bg-navy-10">
      <div className="container mx-auto px-4">
        {/* Features Available Today */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4 font-inter">
            Features Available Today
          </h2>
          <p className="text-xl text-matte-grey max-w-3xl mx-auto">
            Start using ZoneSentinel's abandoned vehicle detection with these powerful tools
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {availableFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-sm bg-cloud-white hover:shadow-lg transition-shadow duration-300 h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-accent-orange rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-cloud-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy mb-4 font-inter">{feature.title}</h3>
                  <p className="text-matte-grey leading-relaxed flex-grow">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Coming Q4 2025 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4 font-inter">
            Coming Q4 2025
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {comingSoonFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-sm bg-cloud-white opacity-75 hover:opacity-90 hover:shadow-lg transition-all duration-300 h-full">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#081A2F' }}>
                    <IconComponent className="h-8 w-8 text-cloud-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary-navy mb-4 font-inter">{feature.title}</h3>
                  <p className="text-matte-grey leading-relaxed flex-grow">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;

