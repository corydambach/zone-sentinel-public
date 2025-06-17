
const FAQ = () => {
  const faqs = [
    {
      question: "What is ZoneSentinel?",
      answer: "A GIS-powered platform that flags municipal code violations—starting with abandoned vehicles—using aerial imagery and AI."
    },
    {
      question: "Where does your imagery come from?",
      answer: "Commercial 30 cm satellite + periodic drone passes licensed from our data partners; all feeds are refreshed at least twice a month in pilot cities."
    },
    {
      question: "How accurate is the AI detection?",
      answer: "In live pilots we average 92% precision / 88% recall for abandoned-vehicle tagging; on-street verification closes the remaining gap."
    },
    {
      question: "Is my data secure?",
      answer: "All uploads and wait-list emails are encrypted in transit (TLS 1.3). No personal info is shared outside ZoneSentinel."
    },
    {
      question: "What does it cost?",
      answer: "Beta access is free. Final pricing will be tiered by parcel count and API calls—think < $0.05 per property per year."
    },
    {
      question: "When will full code-violation coverage launch?",
      answer: "Q4 2025: illegal dumps, unsafe structures, overgrown lots, and more. Join the wait-list to get notified first."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-navy-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-neutral-90 max-w-2xl mx-auto">
            Everything you need to know about ZoneSentinel
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-cloud-white rounded-xl shadow-sm p-6 mb-4 group">
              <summary className="font-semibold text-primary-navy text-lg cursor-pointer list-none flex items-center justify-between">
                {faq.question}
                <span className="text-accent-orange group-open:rotate-45 transition-transform duration-200">+</span>
              </summary>
              <div className="mt-4 text-neutral-90 leading-relaxed">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
