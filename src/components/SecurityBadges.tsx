
import { Lock, Shield, FileText } from "lucide-react";

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
    }
  ];

  return (
    <section className="py-16 bg-zs-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-zs-navy mb-4">
            Security & Compliance
          </h2>
          <p className="text-xl text-gray-600">
            Built for government and enterprise requirements
          </p>
        </div>
        
        <div className="flex gap-6 justify-center items-start mt-16 text-center">
          {badges.map((badge, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md max-w-xs">
              <div className="text-4xl mb-4">{badge.emoji}</div>
              <h3 className="text-lg font-semibold text-zs-navy">
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
