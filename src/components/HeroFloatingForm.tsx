
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send, User, Mail, Phone, MessageSquare, X } from 'lucide-react';
import { sendFormToEmail } from '@/lib/utils';

interface HeroFloatingFormProps {
  isVisible: boolean;
  onClose: () => void;
}

const HeroFloatingForm = ({ isVisible, onClose }: HeroFloatingFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Send form data to info@claimsmd.com
      await sendFormToEmail({
        ...formData,
        formType: 'Hero Contact Form',
        timestamp: new Date().toISOString(),
        source: 'Hero Section Floating Form'
      });

      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your interest! We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      
      onClose();
    } catch (error) {
      console.error('Error sending form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div>
            <h3 className="text-xl font-bold text-claimsBlue">Get Started Today</h3>
            <p className="text-gray-600 text-sm">Let's discuss your medical billing needs</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleInputChange}
                className="pl-10"
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10"
                required
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleInputChange}
                className="pl-10"
              />
            </div>

            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Textarea
                name="message"
                placeholder="Tell us about your practice and billing needs... *"
                value={formData.message}
                onChange={handleInputChange}
                className="pl-10 min-h-[100px]"
                required
              />
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-claimsBlue to-blue-600 hover:from-blue-600 hover:to-blue-700"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </div>
        </form>

        {/* Footer */}
        <div className="px-6 pb-6">
          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to be contacted by ClaimsMD regarding your medical billing needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroFloatingForm;
