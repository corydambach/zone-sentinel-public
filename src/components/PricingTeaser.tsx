
import { Button } from "@/components/ui/button";

const PricingTeaser = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-zs-navy mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the option that fits your needs
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Demo */}
          <div className="bg-white rounded-xl border-2 border-gray-200 p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-zs-purple text-white rounded-xl px-4 py-2 inline-block mb-6">
              <h3 className="text-xl font-bold">Free Demo</h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              City-wide abandoned-vehicle scan, 14 days.
            </p>
            <Button className="w-full bg-gradient-to-r from-zs-orange to-zs-purple hover:from-zs-orange/90 hover:to-zs-purple/90 text-white font-semibold py-3 rounded-xl">
              Request Demo
            </Button>
          </div>
          
          {/* Paid Pilot */}
          <div className="bg-gradient-to-br from-zs-purple/5 to-zs-purple/10 rounded-xl border-2 border-zs-purple/20 p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-zs-purple text-white rounded-xl px-4 py-2 inline-block mb-6">
              <h3 className="text-xl font-bold">Paid Pilot</h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              Full access, dedicated support, data export.
            </p>
            <Button className="w-full bg-zs-purple hover:bg-zs-purple/90 text-white font-semibold py-3 rounded-xl">
              Get Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
