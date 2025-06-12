
import { Linkedin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Privacy", href: "#privacy" }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-zs-navy py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href.substring(1))}
                  className="block text-white/70 hover:text-zs-orange transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Contact</h3>
            <a 
              href="mailto:info@zonesentinel.com"
              className="text-white/70 hover:text-zs-orange transition-colors duration-300"
            >
              info@zonesentinel.com
            </a>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <a 
              href="https://linkedin.com/company/zonesentinel" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white/70 hover:text-zs-orange transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 mr-2" />
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 ZoneSentinel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
