
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
      // TODO: Replace with actual API endpoint once backend is ready
      // Example: Connect to Mailchimp, ConvertKit, or custom endpoint
      console.log("Submitting email to waitlist:", email);
      
      // Simulated API call
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      // For now, we'll simulate success since endpoint doesn't exist yet
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll notify you when the full suite launches!",
      });
      
      setEmail("");
    } catch (error) {
      console.error("Waitlist submission error:", error);
      toast({
        title: "Thank you!",
        description: "Your interest has been recorded. We'll be in touch soon!",
      });
      setEmail("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-zs-navy to-zs-purple">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Early Access
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join our waitlist to be the first to access the complete ZoneSentinel violation detection suite when it launches in Q4 2025.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-xl px-6 py-4 text-lg focus:bg-white/20 focus:border-white/40"
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-zs-orange hover:bg-zs-orange/90 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {isLoading ? "Joining..." : "Join Waitlist"}
            </Button>
          </form>
          
          <p className="text-white/70 text-sm mt-4">
            No spam, unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WaitlistForm;
