
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: (
        <svg viewBox="0 0 24 24" strokeWidth="1.5" width="48" height="48" color="#081A2F">
          <defs><style>{`.cls-6376396cc3a86d32eae6f101-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}`}</style></defs>
          <rect className="cls-6376396cc3a86d32eae6f101-1" x="10.09" y="1.5" width="3.82" height="12.41" rx="1.91"></rect>
          <rect className="cls-6376396cc3a86d32eae6f101-1" x="1.5" y="4.36" width="4.77" height="7.64"></rect>
          <rect className="cls-6376396cc3a86d32eae6f101-1" x="17.73" y="4.36" width="4.77" height="7.64"></rect>
          <line className="cls-6376396cc3a86d32eae6f101-1" x1="7.23" y1="8.18" x2="10.09" y2="8.18"></line>
          <line className="cls-6376396cc3a86d32eae6f101-1" x1="16.77" y1="8.18" x2="13.91" y2="8.18"></line>
          <path className="cls-6376396cc3a86d32eae6f101-1" d="M16.05,17A5.72,5.72,0,0,1,8,17"></path>
          <path className="cls-6376396cc3a86d32eae6f101-1" d="M18.75,19.7a9.54,9.54,0,0,1-13.5,0"></path>
          <line className="cls-6376396cc3a86d32eae6f101-1" x1="12" y1="15.82" x2="12" y2="13.91"></line>
        </svg>
      ),
      title: "Ingest",
      description: "Fresh satellite and aerial imagery is automatically processed from multiple high-resolution sources.",
      color: "#3b82f6" // blue
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" strokeWidth="1.5" width="48" height="48" color="#081A2F">
          <defs><style>{`.cls-6374f543b67f094e4896c5ca-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}`}</style></defs>
          <polyline className="cls-6374f543b67f094e4896c5ca-1" points="23.45 11.04 21.55 11.04 18.68 17.73 17.73 17.73 17.73 6.27 16.77 6.27 12.96 22.5 12 22.5 12 1.5 11.04 1.5 7.23 17.73 6.27 17.73 6.27 6.27 6.27 6.27 5.32 6.27 2.46 11.04 0.55 11.04"></polyline>
        </svg>
      ),
      title: "Detect",
      description: "AI algorithms analyze imagery to identify code violations with precision and speed.",
      color: "#10b981" // green
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" strokeWidth="1.5" width="48" height="48" color="#081A2F">
          <defs><style>{`.cls-637630c1c3a86d32eae6f01a-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}`}</style></defs>
          <circle className="cls-637630c1c3a86d32eae6f01a-1" cx="5.8" cy="5.82" r="4.3"></circle>
          <circle className="cls-637630c1c3a86d32eae6f01a-1" cx="18.2" cy="5.82" r="4.3"></circle>
          <path className="cls-637630c1c3a86d32eae6f01a-1" d="M9.4,3.5a3.82,3.82,0,0,1,5.2,0"></path>
          <line className="cls-637630c1c3a86d32eae6f01a-1" x1="22.5" y1="23.48" x2="22.5" y2="6.3"></line>
        </svg>
      ),
      title: "Verify",
      description: "Boots on the ground confirm detected violations and capture authentic photos for your staff.",
      color: "#f59e0b" // amber
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" strokeWidth="1.5" width="48" height="48" color="#081A2F">
          <defs><style>{`.cls-637b8d40f95e86b59c57a2ca-1{fill:none;stroke:currentColor;stroke-miterlimit:10;}`}</style></defs>
          <path className="cls-637b8d40f95e86b59c57a2ca-1" d="M13.17,6.72h-.65V5.4a3.94,3.94,0,0,0-1.15-2.79A3.88,3.88,0,0,0,8.59,1.45H8.45a3.91,3.91,0,0,0-3.29,2l-.09.18A4.56,4.56,0,0,0,4.68,5.4h0a3.23,3.23,0,0,0-2.31,1,3.31,3.31,0,0,0-1,2.33.66.66,0,0,0,0,.14A3.28,3.28,0,0,0,4.67,12h8.5A2.64,2.64,0,0,0,15,11.23a2.75,2.75,0,0,0,.76-1.69,1.09,1.09,0,0,0,0-.18A2.63,2.63,0,0,0,13.17,6.72Z"></path>
          <rect className="cls-637b8d40f95e86b59c57a2ca-1" x="13.87" y="14.87" width="8.63" height="3.84" rx="1.92"></rect>
          <rect className="cls-637b8d40f95e86b59c57a2ca-1" x="13.87" y="18.71" width="8.63" height="3.84" rx="1.92"></rect>
          <polyline className="cls-637b8d40f95e86b59c57a2ca-1" points="13.87 20.63 8.11 20.63 8.11 12"></polyline>
          <line className="cls-637b8d40f95e86b59c57a2ca-1" x1="13.87" y1="16.79" x2="8.11" y2="16.79"></line>
        </svg>
      ),
      title: "Export",
      description: "Violation alerts are formatted and delivered to your enforcement workflow systems.",
      color: "#ef4444" // red
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-navy-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-navy mb-4">
            How It Works
          </h2>
          <p className="text-xl text-neutral-90 max-w-2xl mx-auto">
            Four simple steps to transform aerial imagery into actionable code enforcement data
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Step number */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary-navy text-cloud-white rounded-full flex items-center justify-center text-sm font-bold z-20">
                {index + 1}
              </div>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-16 left-full items-center justify-center w-8 z-10">
                  <ArrowRight className="h-6 w-6 text-primary-navy" />
                </div>
              )}
              
              <div className="relative bg-cloud-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 text-center z-10 w-full h-full flex flex-col">
                <div className="w-20 h-20 mx-auto mb-6 rounded-xl flex items-center justify-center">
                  {step.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-primary-navy mb-3">
                  {step.title}
                </h3>
                
                <p className="text-neutral-90 leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
