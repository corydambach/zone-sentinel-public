
const FAQ = () => {
  const faqs = [
    {
      question: "How fresh is your imagery?",
      answer: "Typically < 30 cm resolution captured in the last 90 days."
    },
    {
      question: "What's the false-positive rate?",
      answer: "< 1.5 % in pilots."
    },
    {
      question: "How do we receive violation data?",
      answer: "CSV download, REST API, or Open311."
    },
    {
      question: "Is citizen privacy protected?",
      answer: "We blur faces & plates by default; no PII stored."
    },
    {
      question: "Can we start with one neighborhood?",
      answer: "Yes, custom AOIs supported."
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
