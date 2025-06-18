
const PricingTeaser = () => {
  return (
    <section id="pricing" className="py-20 bg-cloud-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
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
                    <th className="text-center p-6 font-bold text-primary-navy"></th>
                    <th className="text-center p-6 font-bold text-primary-navy">All-Access Subscription</th>
                    <th className="text-center p-6 font-bold text-primary-navy">Pay-Per-Recovery</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-primary-navy/10">
                    <td className="p-6 font-semibold text-primary-navy text-center">Best for</td>
                    <td className="p-6 text-matte-grey text-center">Cities that want a predictable annual budget</td>
                    <td className="p-6 text-matte-grey text-center">Teams that prefer "only pay when you win"</td>
                  </tr>
                  <tr className="border-b border-primary-navy/10">
                    <td className="p-6 font-semibold text-primary-navy text-center">What you get</td>
                    <td className="p-6 text-matte-grey text-center">Unlimited abandoned-vehicle detections, weekly imagery refresh, API access</td>
                    <td className="p-6 text-matte-grey text-center">Every verified vehicle delivered with field photos & GPS, no cap</td>
                  </tr>
                  <tr className="border-b border-primary-navy/10">
                    <td className="p-6 font-semibold text-primary-navy text-center">Billing</td>
                    <td className="p-6 text-matte-grey text-center">Fixed monthly/annual fee tied to population band (no usage limits)</td>
                    <td className="p-6 text-matte-grey text-center">Flat fee only when a violation is confirmed in the field</td>
                  </tr>
                  <tr className="border-b border-primary-navy/10">
                    <td className="p-6 font-semibold text-primary-navy text-center">ROI snapshot</td>
                    <td className="p-6 text-matte-grey text-center">Recover your subscription after the first 8-10 tows per month (typical fine & auction proceeds)</td>
                    <td className="p-6 text-matte-grey text-center">Pure upside—projected 10× return on every detection you act on</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-primary-navy text-center">Cancellation</td>
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
            <div className="space-y-4 max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-3">
                <span className="text-accent-orange font-bold text-lg">•</span>
                <p className="text-matte-grey"><strong>Fast Cashflow:</strong> Every vehicle we flag can net $500+ in fines, towing and auction revenue.</p>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-accent-orange font-bold text-lg">•</span>
                <p className="text-matte-grey"><strong>No Procurement Headaches:</strong> Cloud SaaS, FedRAMP-ready architecture fits existing IT rules.</p>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-accent-orange font-bold text-lg">•</span>
                <p className="text-matte-grey"><strong>Risk-Free Option:</strong> Performance-based pricing is an established SaaS model that aligns vendor incentives with customer results.</p>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-accent-orange font-bold text-lg">•</span>
                <p className="text-matte-grey"><strong>Budget-Friendly Subscription:</strong> A flat rate simplifies grants and annual budgeting—proven scalable across hundreds of gov customers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTeaser;
