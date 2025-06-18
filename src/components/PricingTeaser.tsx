
import { Button } from "@/components/ui/button";

const PricingTeaser = () => {
  return (
    <section id="pricing" className="py-20 bg-cloud-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Intro paragraph */}
          <div className="text-center mb-16">
            <p className="text-lg text-matte-grey max-w-4xl mx-auto leading-relaxed">
              Cities earn real money every time they clear an abandoned vehicle— Pennsylvania alone allows a $500 fine plus disposal fees for every car, and many municipalities recoup even more through towing charges and public auctions. Modern GovTech buyers, meanwhile, gravitate toward flexible SaaS models—either flat-rate subscriptions or pay-for-performance contracts. ZoneSentinel's pricing taps both trends, giving you instant revenue upside with zero capital outlay.
            </p>
          </div>

          {/* Unlock Revenue section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
              Unlock Revenue—No Up-Front Cost, No Risk
            </h2>
            <p className="text-xl text-matte-grey">
              Automated detections fund themselves: we cover the bill until your city starts collecting fines.
            </p>
          </div>

          {/* Two Ways to Pay */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-primary-navy mb-8 text-center">Two Ways to Pay</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full bg-navy-10 rounded-xl shadow-sm">
                <thead>
                  <tr className="border-b border-primary-navy/20">
                    <th className="text-left p-6 font-bold text-primary-navy"></th>
                    <th className="text-center p-6 font-bold text-primary-navy">All-Access Subscription</th>
                    <th className="text-center p-6 font-bold text-primary-navy">Pay-Per-Recovery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-primary-navy/10">
                    <td className="p-6 font-semibold text-primary-navy">Best for</td>
                    <td className="p-6 text-matte-grey text-center">Cities that want a predictable annual budget</td>
                    <td className="p-6 text-matte-grey text-center">Teams that prefer "only pay when you win"</td>
                  </tr>
                  <tr className="border-b border-primary-navy/10">
                    <td className="p-6 font-semibold text-primary-navy">What you get</td>
                    <td className="p-6 text-matte-grey text-center">Unlimited abandoned-vehicle detections, weekly imagery refresh, API access</td>
                    <td className="p-6 text-matte-grey text-center">Every verified vehicle delivered with field photos & GPS, no cap</td>
                  </tr>
                  <tr className="border-b border-primary-navy/10">
                    <td className="p-6 font-semibold text-primary-navy">Billing</td>
                    <td className="p-6 text-matte-grey text-center">Fixed monthly/annual fee tied to population band (no usage limits)</td>
                    <td className="p-6 text-matte-grey text-center">Flat fee only when a violation is confirmed in the field</td>
                  </tr>
                  <tr className="border-b border-primary-navy/10">
                    <td className="p-6 font-semibold text-primary-navy">ROI snapshot</td>
                    <td className="p-6 text-matte-grey text-center">Recover your subscription after the first 8-10 tows per month (typical fine & auction proceeds)</td>
                    <td className="p-6 text-matte-grey text-center">Pure upside—projected 10× return on every detection you act on</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-primary-navy">Cancellation</td>
                    <td className="p-6 text-matte-grey text-center">30-day, no-penalty opt-out</td>
                    <td className="p-6 text-matte-grey text-center">Stop any time; pay nothing when detections drop to zero</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Why Cities Choose ZoneSentinel */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-primary-navy mb-6 text-center">Why Cities Choose ZoneSentinel</h3>
            <div className="space-y-4 max-w-4xl mx-auto">
              <div className="flex items-start space-x-3">
                <span className="text-accent-orange font-bold text-lg">•</span>
                <p className="text-matte-grey"><strong>Fast Cashflow:</strong> Every vehicle we flag can net $500+ in fines, towing and auction revenue.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent-orange font-bold text-lg">•</span>
                <p className="text-matte-grey"><strong>No Procurement Headaches:</strong> Cloud SaaS, FedRAMP-ready architecture fits existing IT rules.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent-orange font-bold text-lg">•</span>
                <p className="text-matte-grey"><strong>Risk-Free Option:</strong> Performance-based pricing is an established SaaS model that aligns vendor incentives with customer results.</p>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-accent-orange font-bold text-lg">•</span>
                <p className="text-matte-grey"><strong>Budget-Friendly Subscription:</strong> A flat rate simplifies grants and annual budgeting—proven scalable across hundreds of gov customers.</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
      </div>
    </section>
  );
};

export default PricingTeaser;
