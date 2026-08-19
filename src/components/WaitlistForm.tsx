
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      console.log("Submitting email to waitlist:", email);
      
      // Create email content
      const emailSubject = "ZoneSentinel Waitlist Submission";
      const emailBody = `
New waitlist submission:

Email: ${email}
Submitted on: ${new Date().toLocaleString()}
      `.trim();
      
      // Create mailto link
      const mailtoLink = `mailto:david@pinesapholdings.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      toast({
        title: "Email Client Opened",
        description: "Please send the pre-filled email to complete your waitlist submission.",
      });
      
      setEmail("");
    } catch (error) {
      console.error("Waitlist submission error:", error);
      toast({
        title: "Error",
        description: "There was an issue opening your email client. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-primary-navy to-navy-70">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-cloud-white mb-6">
            Get Early Access
          </h2>
          <p className="text-xl text-matte-grey-light mb-8 leading-relaxed">
            Join our waitlist to be the first to access the complete ZoneSentinel violation detection suite when it launches in Q1 2027.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-cloud-white/10 border-matte-grey text-cloud-white placeholder:text-matte-grey-light rounded-xl px-6 py-4 text-lg focus:ring-neon-green focus:border-neon-green"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-neon-green hover:bg-neon-green-hover text-cloud-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isLoading ? "Opening Email..." : "Join Waitlist"}
            </Button>
          </form>
          
          <p className="text-matte-grey-light text-sm mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
