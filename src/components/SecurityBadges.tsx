
import { Lock, Shield, FileText, Server } from "lucide-react";

const SecurityBadges = () => {
  const badges = [
    {
      icon: Lock,
      label: "SOC 2 (in progress)",
      emoji: "🔒"
    },
    {
      icon: Shield,
      label: "AES-256 Encryption",
      emoji: "🛡️"
    },
    {
      icon: FileText,
      label: "CJIS-Aligned Workflows",
      emoji: "📄"
    },
    {
      icon: Server,
      label: "FedRAMP-ready Architecture",
      emoji: "🏛️"
    }
  ];

  return (
    <section className="py-16 bg-navy-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-navy mb-4">
            Security & Compliance
          </h2>
          <p className="text-xl text-neutral-90">
            Designed for compliance. Built for peace of mind.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          {badges.map((badge, index) => (
            <div key={index} className="bg-cloud-white rounded-xl p-4 shadow-sm text-center mx-auto w-full">
              <div className="text-3xl mb-3">{badge.emoji}</div>
              <h3 className="text-sm md:text-base font-semibold text-primary-navy leading-tight">
                {badge.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecurityBadges;
