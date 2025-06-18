
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const availableFeatures = [
    {
      title: "Geospatial Search",
      description: "Instantly zoom to any parcel, block, or coordinate. Filter by zoning class, imagery date, or open cases so staff land on the right spot—no GIS expertise required."
    },
    {
      title: "AI-Assisted Violation Detection", 
      description: "Computer-vision models scan new aerial and street-level imagery to flag abandoned vehicles, illegal structures, and debris. >90 % precision/recall in pilots slashes manual review to edge cases only."
    },
    {
      title: "Eyewitness Confirmation",
      description: "Field inspectors—or even residents—tap a secure link to confirm a flagged location, upload photos, and leave notes. Inputs sync back to the case file and retrain the model, tightening accuracy over time."
    },
    {
      title: "Multi-Platform Export",
      description: "One-click export to Esri, GovOS, Excel, or any system via REST/GeoJSON. ZoneSentinel slots into your current workflow instead of replacing it."
    },
    {
      title: "Violation Issuance",
      description: "Generate pre-filled notice letters, set compliance deadlines, and schedule re-inspections in a single step. Templates mirror your municipal code to keep every citation airtight."
    }
  ];

  const comingSoonFeatures = [
    {
      feature: "Unpermitted Construction",
      whatWeCatch: "New additions, accessory dwellings, extra driveways, and solar installs that never pulled a permit",
      whyItMatters: "Recovers lost permit revenue, enforces zoning limits, and reduces downstream liability before projects finish."
    },
    {
      feature: "Fire-Life Safety Hazards",
      whatWeCatch: "Blocked hydrants, missing fire escapes, rooftop propane tanks, and other code-red risks",
      whyItMatters: "Lets fire marshals pinpoint high-risk sites and issue orders before an incident triggers lawsuits."
    },
    {
      feature: "Storm-Water Compliance",
      whatWeCatch: "Illegal grading, filled wetlands, or paved areas that exceed impervious-surface caps",
      whyItMatters: "Protects waterways, meets MS4 requirements, and captures impact-fee dollars the city is owed."
    },
    {
      feature: "Vacant & Blighted Properties",
      whatWeCatch: "Long-term unoccupied structures, broken windows, collapsing roofs, and unsecured entries",
      whyItMatters: "Accelerates receivership actions, curbs squatting, and stabilizes neighborhoods' tax base."
    },
    {
      feature: "Impervious-Surface Audits",
      whatWeCatch: "Driveway expansions, parking-lot creep, and patio builds hidden from tax rolls",
      whyItMatters: "Automates fee recalculations for storm-water utility bills, adding guaranteed recurring revenue."
    }
  ];

  return (
    <section id="features" className="py-16 bg-navy-10">
      <div className="container mx-auto px-4">
        {/* Features Available Today */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4 font-inter">
            Features Available Today
          </h2>
          <p className="text-xl text-matte-grey max-w-3xl mx-auto">
            Start using ZoneSentinel's abandoned vehicle detection with these powerful tools
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
          {availableFeatures.map((feature, index) => (
            <Card key={index} className="border-0 shadow-sm bg-cloud-white hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="p-6 text-center h-full flex flex-col">
                <h3 className="text-lg font-bold text-primary-navy mb-4 font-inter">{feature.title}</h3>
                <p className="text-matte-grey leading-relaxed flex-grow text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Coming Q4 2025 */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4 font-inter">
            Coming Q4 2025
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto">
            <table className="w-full bg-cloud-white rounded-xl shadow-sm">
              <thead>
                <tr className="border-b border-navy-10">
                  <th className="text-left p-4 font-bold text-primary-navy">Feature</th>
                  <th className="text-left p-4 font-bold text-primary-navy">What We Catch</th>
                  <th className="text-left p-4 font-bold text-primary-navy">Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                {comingSoonFeatures.map((feature, index) => (
                  <tr key={index} className="border-b border-navy-10 last:border-b-0 opacity-75">
                    <td className="p-4 font-semibold text-primary-navy">{feature.feature}</td>
                    <td className="p-4 text-matte-grey text-sm">{feature.whatWeCatch}</td>
                    <td className="p-4 text-matte-grey text-sm">{feature.whyItMatters}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
