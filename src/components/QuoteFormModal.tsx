
import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Check, Send, User, Mail, Phone, Building, Users, DollarSign, MessageSquare } from "lucide-react";

// Create a form schema with validation
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  businessName: z.string().min(1, { message: "Please enter a valid business name" }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  monthlyBilling: z.string().optional(),
  providers: z.string().optional(),
  totalAR: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type QuoteFormValues = z.infer<typeof formSchema>;

interface QuoteFormModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function QuoteFormModal({ open, onOpenChange }: QuoteFormModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  
  // Initialize the form with default values
  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      businessName: "",
      email: "",
      phone: "",
      monthlyBilling: "",
      providers: "",
      totalAR: "",
      message: "",
    },
  });

  // Form submission handler
  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Send email to info@claimsmd.net
      console.log("Sending quote request to info@claimsmd.net:", data);
      
      // In a real implementation, you would use an API endpoint or email service
      // For now, we'll simulate a successful submission
      setTimeout(() => {
        console.log("Form submitted:", data);
        setIsSubmitting(false);
        setIsSuccess(true);
        
        toast({
          title: "Quote Request Submitted",
          description: "Thank you! Your request has been sent to info@claimsmd.net. We'll get back to you shortly.",
          duration: 5000,
        });
        
        // Reset form state after 2 seconds
        setTimeout(() => {
          setIsSuccess(false);
          form.reset();
          onOpenChange(false);
        }, 2000);
      }, 1000);
    } catch (error) {
      console.error("Error sending form:", error);
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again later.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[550px] p-6 overflow-auto max-h-[90vh] bg-white rounded-xl">
        <DialogHeader className="pb-4 border-b">
          <DialogTitle className="text-2xl font-bold text-claimsBlue">Request a Free Quote</DialogTitle>
          <DialogDescription className="text-gray-600">
            Fill out this form and our team will contact you to discuss your medical billing needs.
          </DialogDescription>
        </DialogHeader>
        
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Thank You!</h3>
            <p className="text-gray-600 text-center">
              Your quote request has been submitted successfully. <br />
              Our team will contact you shortly.
            </p>
          </div>
        ) : (
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 mt-4">
              {/* Name and Business Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input placeholder="John Smith" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="businessName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Business Name</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input placeholder="Your Practice Name" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input placeholder="email@example.com" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input placeholder="+1 (123) 456 7890" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Monthly Billing and # of Providers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="monthlyBilling"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Monthly Billing</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input placeholder="Approximate amount" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="providers"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel># of Providers</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input placeholder="Number of providers" className="pl-10" {...field} />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              {/* Total AR */}
              <FormField
                control={form.control}
                name="totalAR"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Total AR</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input placeholder="Total accounts receivable" className="pl-10" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Message <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Textarea 
                          placeholder="Please describe your medical billing needs..." 
                          className="pl-10 min-h-[120px]" 
                          {...field} 
                        />
                      </div>
                    </FormControl>
                    <FormDescription className="text-xs text-gray-500">
                      Tell us about your practice and current billing challenges.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter className="pt-2">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => onOpenChange(false)}
                  className="mr-2"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="bg-gradient-to-r from-claimsBlue to-blue-600 hover:from-blue-600 hover:to-blue-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Submit Request
                      <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default QuoteFormModal;
