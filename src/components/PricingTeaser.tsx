
import { Button } from "@/components/ui/button";

const PricingTeaser = () => {
  return (
    <section id="pricing" className="py-20 bg-cloud-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-matte-grey max-w-2xl mx-auto">
            Choose the option that fits your needs
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Demo */}
          <div className="bg-cloud-white rounded-xl border-2 border-navy-10 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="bg-primary-navy text-cloud-white rounded-xl px-4 py-2 inline-block mb-6">
              <h3 className="text-xl font-bold">Free Demo</h3>
            </div>
            <p className="text-matte-grey mb-6 text-lg">
              City-wide abandoned-vehicle scan, 14 days.
            </p>
            <Button className="w-full bg-accent-orange hover:bg-brand-gradient text-cloud-white font-semibold py-3 rounded-xl">
              Request Demo
            </Button>
          </div>
          
          {/* Paid Pilot */}
          <div className="bg-gradient-to-br from-navy-10 to-navy-10/50 rounded-xl border-2 border-primary-navy/20 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="bg-primary-navy text-cloud-white rounded-xl px-4 py-2 inline-block mb-6">
              <h3 className="text-xl font-bold">Paid Pilot</h3>
            </div>
            <p className="text-matte-grey mb-6 text-lg">
              Full access, dedicated support, data export.
            </p>
            <Button className="w-full bg-primary-navy hover:bg-navy-70 text-cloud-white font-semibold py-3 rounded-xl">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
