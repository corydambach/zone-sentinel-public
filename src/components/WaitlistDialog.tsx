
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";

interface WaitlistFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

interface WaitlistDialogProps {
  children: React.ReactNode;
}

const WaitlistDialog = ({ children }: WaitlistDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<WaitlistFormData>({
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const handleSubmit = async (data: WaitlistFormData) => {
    setIsLoading(true);
    
    try {
      console.log("Submitting waitlist form:", data);
      
      // Create email content
      const emailSubject = "ZoneSentinel Waitlist Submission";
      const emailBody = `
New waitlist submission:

Name: ${data.name}
Email: ${data.email}
Company: ${data.company || 'Not provided'}
Message: ${data.message || 'No message provided'}

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
      
      form.reset();
      setIsOpen(false);
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-primary-navy">Join the Waitlist</DialogTitle>
          <DialogDescription>
            Get early access to ZoneSentinel when the full suite launches in Q4 2025.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              rules={{ required: "Name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name *</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              rules={{ 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="your@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your organization" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your code enforcement needs..." 
                      className="min-h-[80px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-neon-green hover:bg-neon-green-hover text-cloud-white font-semibold py-3 rounded-xl"
            >
              {isLoading ? "Opening Email..." : "Join Waitlist"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistDialog;
