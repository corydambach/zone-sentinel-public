
const ProblemPromiseProof = () => {
  return (
    <section className="py-16 bg-cloud-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Problem */}
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-6">
            The patrol gap is growing.
          </h2>
          <p className="text-xl text-neutral-90 mb-12 leading-relaxed">
            Code officers can't cover every street. Abandoned vehicles linger for weeks, 
            wasting scarce resources.
          </p>
          
          {/* Promise */}
          <h3 className="text-2xl md:text-3xl font-bold text-primary-navy mb-6">
            ZoneSentinel does the patrol work for you.
          </h3>
          
          {/* Proof */}
          <div className="bg-gradient-to-r from-primary-navy to-accent-orange text-cloud-white rounded-xl p-8 inline-block">
            <p className="text-2xl md:text-3xl font-bold">
              92% precision / 88% recall
            </p>
            <p className="text-lg mt-2 opacity-90">
              in live pilots
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemPromiseProof;
