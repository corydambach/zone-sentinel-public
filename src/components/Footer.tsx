
const Footer = () => {
  return <footer id="contact" className="bg-primary-navy py-16 border-t border-navy-70">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Centered Logo */}
          <div className="mb-4">
            <img src="/lovable-uploads/cee72ce9-b982-4887-acd8-d6c77d180a5e.png" alt="ZoneSentinel Logo" className="h-24 md:h-28 w-auto max-w-[360px] md:max-w-[500px] mx-auto opacity-80 hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Tagline */}
          <p className="text-matte-grey-light text-lg max-w-2xl mx-auto leading-relaxed">
            Automatically flag code violations from above — AI-powered satellite scans, no fieldwork required.
          </p>
        </div>
        
        <div className="border-t border-navy-70 pt-8 mt-12 text-center">
          <p className="text-matte-grey-light text-sm">
            © 2024 ZoneSentinel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;
