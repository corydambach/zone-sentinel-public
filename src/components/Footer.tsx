
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zs-navy py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">ZoneSentinel</h3>
            <p className="text-white/70">Satellite-Speed Code Enforcement</p>
          </div>
          
          <div className="flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a 
                href="#privacy" 
                className="text-white/70 hover:text-zs-orange transition-colors duration-300"
              >
                Privacy
              </a>
              <a 
                href="#terms" 
                className="text-white/70 hover:text-zs-orange transition-colors duration-300"
              >
                Terms
              </a>
            </nav>
            
            <a 
              href="#linkedin" 
              className="text-white/70 hover:text-zs-purple transition-colors duration-300 p-2 rounded-lg hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2024 ZoneSentinel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
