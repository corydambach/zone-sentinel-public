
const ProblemPromiseProof = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/ff1b2bab-5c71-42db-8dd9-fcec4a88d855.png')"
        }}
      />
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-primary-navy/80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Problem */}
          <h2 className="text-3xl md:text-4xl font-bold text-cloud-white mb-6">
            Your streets shouldn't wait 53 days.
          </h2>
          <p className="text-xl text-cloud-white/90 mb-8 leading-relaxed">
            Philadelphia's 311 logged 39k abandoned-vehicle complaints last year—its #1 quality-of-life issue.<br />
            Each sits curbside for weeks, draining safety, parking, and property values.
          </p>
          
          {/* Proof-point bullets */}
          <div className="text-left max-w-4xl mx-auto mb-8 space-y-3">
            <div className="flex items-start space-x-3">
              <span className="text-accent-orange font-bold text-lg">•</span>
              <p className="text-cloud-white/90">15-17% property-value drain within 150 ft of a derelict car; that's up to $247M lost annually in western-PA municipalities</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-accent-orange font-bold text-lg">•</span>
              <p className="text-cloud-white/90">Average tow + storage costs can top $360 per vehicle—money burned on backlog, not beautification</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-accent-orange font-bold text-lg">•</span>
              <p className="text-cloud-white/90">Seattle police process ~4,200 abandoned-car reports every month; scale matters</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-accent-orange font-bold text-lg">•</span>
              <p className="text-cloud-white/90">Hawaii County now budgets $3.73M a year to clear 1,581 junked vehicles—double 2018 spending</p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-accent-orange font-bold text-lg">•</span>
              <p className="text-cloud-white/90">Derelict cars leak mercury, lead, battery acid and attract rats, raccoons, and illicit activity</p>
            </div>
          </div>
          
          {/* Value promise */}
          <div className="bg-gradient-to-r from-primary-navy to-accent-orange text-cloud-white rounded-xl p-8">
            <p className="text-xl md:text-2xl font-bold leading-relaxed">
              ZoneSentinel pinpoints abandoned cars within days of when they appear, not within days of when they happen to be reported. We slash patrol times to let crews remove hazards before the 311 ticket is filed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemPromiseProof;
