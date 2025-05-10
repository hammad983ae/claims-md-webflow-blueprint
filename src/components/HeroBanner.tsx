
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

interface HeroBannerProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
});

const HeroBanner = ({ title, subtitle, ctaText, ctaLink }: HeroBannerProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      form.reset();
      toast({
        title: "Contact request submitted",
        description: "Thank you! We'll be in touch soon.",
      });
    }, 1000);
  }

  return (
    <div className="relative bg-gradient-to-r from-claimsBlue to-indigo-900 overflow-hidden pt-28">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=2000" 
          alt="Medical billing background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-claimsBlue/90 to-indigo-900/90"></div>
      </div>
      
      {/* Abstract background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMCAwaDY0MGwtMTQwIDE0MEgwVjB6IiAvPjxwYXRoIGQ9Ik02NDAgMGg2NDBWMTQwSDUwMEw2NDAgMHoiIC8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay"></div>
      
      {/* Animated gradient blobs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-claimsOrange/20 rounded-full filter blur-3xl animate-blob"></div>
      <div className="absolute -bottom-32 -right-24 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      
      <div className="container-custom relative z-10 py-32 md:py-38">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 mb-10 animate-fade-in animation-delay-300">
              {subtitle}
            </p>
            
            <div className="animate-fade-in animation-delay-600 group hidden lg:block">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-claimsOrange to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-medium px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <Link to={ctaLink} className="flex items-center">
                  {ctaText}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="animate-fade-in animation-delay-300">
            <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-claimsBlue mb-6 text-center">Get Started Today</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Full Name" 
                            className="h-12 text-base" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input 
                            placeholder="Email Address" 
                            type="email" 
                            className="h-12 text-base" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full h-12 bg-gradient-to-r from-claimsBlue to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-lg font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span>Request Free Consultation</span>
                    )}
                  </Button>
                  
                  <p className="text-center text-xs text-gray-500 mt-4">
                    By submitting this form, you agree to our <Link to="/privacy-policy" className="text-claimsBlue hover:underline">Privacy Policy</Link>.
                  </p>
                </form>
              </Form>
            </div>

            <div className="mt-6 flex justify-center lg:hidden">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-claimsOrange to-orange-600 hover:from-orange-500 hover:to-orange-700 text-white font-medium px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                asChild
              >
                <Link to={ctaLink} className="flex items-center">
                  {ctaText}
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60" className="w-full text-white">
          <path fill="currentColor" fillOpacity="1" d="M0,32L120,37.3C240,43,480,53,720,53.3C960,53,1200,43,1320,37.3L1440,32L1440,60L1320,60C1200,60,960,60,720,60C480,60,240,60,120,60L0,60Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroBanner;
