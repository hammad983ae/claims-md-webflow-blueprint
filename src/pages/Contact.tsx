
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    practice: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        practice: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-claimsBlue to-indigo-900 py-20">
        <div className="container-custom relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Let's discuss how ClaimsMD can help optimize your medical billing process and increase your revenue.
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMCAwaDE5Mi4xMUw4NDIgMTQwSDBWMHoiIC8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl">
                <h2 className="text-2xl font-bold text-claimsBlue mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="practice">Practice Name</Label>
                      <Input 
                        id="practice"
                        name="practice"
                        value={formData.practice}
                        onChange={handleChange}
                        placeholder="Your Practice Name"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs..."
                      rows={5}
                      required
                      className="min-h-32"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-claimsBlue hover:bg-blue-800 transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 mb-6 transition-all hover:shadow-xl">
                <h2 className="text-2xl font-bold text-claimsBlue mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-claimsBlue/10 p-3 rounded-full mr-4">
                      <Mail className="text-claimsBlue" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-700">Email Us</h3>
                      <a href="mailto:info@claimsmd.com" className="text-claimsBlue hover:underline">
                        info@claimsmd.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-claimsBlue/10 p-3 rounded-full mr-4">
                      <Phone className="text-claimsBlue" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-700">Call Us</h3>
                      <a href="tel:+18001234567" className="text-claimsBlue hover:underline">
                        +1 (800) 123-4567
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-claimsBlue/10 p-3 rounded-full mr-4">
                      <MapPin className="text-claimsBlue" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-700">Our Office</h3>
                      <address className="not-italic text-gray-600">
                        1234 Medical Plaza Dr.<br />
                        Suite 500<br />
                        Los Angeles, CA 90001
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-claimsBlue/10 p-3 rounded-full mr-4">
                      <Clock className="text-claimsBlue" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-700">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 8:00 AM - 6:00 PM<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-claimsBlue to-indigo-800 rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Get a Free Consultation</h3>
                <p className="mb-6">Schedule a no-obligation consultation with our billing experts to discuss your practice's needs.</p>
                <Button className="bg-white text-claimsBlue hover:bg-gray-100" asChild>
                  <a href="tel:+18001234567">Call Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-gray-100 py-16">
        <div className="container-custom">
          <div className="bg-gray-300 h-96 rounded-xl flex items-center justify-center">
            <p className="text-gray-600">Google Map would be embedded here</p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto mt-10 space-y-6">
            {[
              {
                question: "How quickly can you implement your medical billing services?",
                answer: "We can typically implement our services within 2-4 weeks, depending on the size and complexity of your practice."
              },
              {
                question: "What specialties do you work with?",
                answer: "We work with a wide range of medical specialties including cardiology, orthopedics, primary care, mental health, pediatrics, and more."
              },
              {
                question: "How do your services improve collection rates?",
                answer: "Our comprehensive approach includes claim scrubbing, denial management, and patient eligibility verification to ensure clean claims and maximize reimbursement."
              },
              {
                question: "Do you offer custom solutions for different practice sizes?",
                answer: "Yes, we customize our billing solutions based on your practice size, specialty, and specific needs to ensure optimal results."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-claimsBlue mb-2">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
