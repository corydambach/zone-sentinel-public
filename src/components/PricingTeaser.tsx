
import { Button } from "@/components/ui/button";

const PricingTeaser = () => {
  return (
    <section id="pricing" className="py-20 bg-cloud-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-neutral-90 max-w-2xl mx-auto">
            Choose the option that fits your needs
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Demo */}
          <div className="bg-cloud-white rounded-xl border-2 border-neutral-40 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="bg-deep-purple text-cloud-white rounded-xl px-4 py-2 inline-block mb-6">
              <h3 className="text-xl font-bold">Free Demo</h3>
            </div>
            <p className="text-neutral-90 mb-6 text-lg">
              City-wide abandoned-vehicle scan, 14 days.
            </p>
            <Button className="w-full bg-brand-gradient hover:opacity-90 text-cloud-white font-semibold py-3 rounded-xl">
              Request Demo
            </Button>
          </div>
          
          {/* Paid Pilot */}
          <div className="bg-gradient-to-br from-deep-purple/5 to-deep-purple/10 rounded-xl border-2 border-deep-purple/20 p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="bg-deep-purple text-cloud-white rounded-xl px-4 py-2 inline-block mb-6">
              <h3 className="text-xl font-bold">Paid Pilot</h3>
            </div>
            <p className="text-neutral-90 mb-6 text-lg">
              Full access, dedicated support, data export.
            </p>
            <Button className="w-full bg-deep-purple hover:bg-deep-purple/90 text-cloud-white font-semibold py-3 rounded-xl">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
