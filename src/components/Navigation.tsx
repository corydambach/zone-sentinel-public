
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "how-it-works", "features", "pricing", "faq", "contact"];
      const scrollPosition = window.scrollY + 100;

      // Update active section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
        }
      }

      // Update navbar transparency
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close mobile menu after navigation
  };

  const navItems = [
    { label: "How It Works", id: "how-it-works" },
    { label: "Features", id: "features" },
    { label: "Pricing", id: "pricing" },
    { label: "FAQ", id: "faq" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-zs-navy-10/90 backdrop-blur-md border-b border-zs-gray-40/50' 
        : 'bg-zs-cloud-white border-b border-zs-gray-40'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo - smaller size */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img 
              src="/lovable-uploads/bab7bf8e-bd9f-4bfe-8029-3a34406adb9f.png" 
              alt="ZoneSentinel" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-zs-primary-navy hover:text-zs-accent-orange transition-colors duration-300 font-medium relative ${
                  activeSection === item.id ? "text-zs-accent-orange" : ""
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-zs-accent-orange" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="text-zs-primary-navy hover:text-zs-accent-orange p-2">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`text-left text-lg font-medium transition-colors duration-300 ${
                        activeSection === item.id 
                          ? "text-zs-accent-orange" 
                          : "text-zs-primary-navy hover:text-zs-accent-orange"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
