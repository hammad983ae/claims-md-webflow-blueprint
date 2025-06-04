
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { motion } from '@/components/ui/motion';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { sendFormToEmail } from '@/lib/utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceName: '',
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
    
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await sendFormToEmail({
        ...formData,
        formType: 'Contact Page Form',
        timestamp: new Date().toISOString(),
        source: 'Contact Page'
      });

      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us! We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        practiceName: '',
        message: ''
      });
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

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (800) 640-6409",
      description: "Call us during business hours"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@claimsmd.com",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Las Vegas, NV",
      description: "Main Office Address"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 5:00 PM",
      description: "Saturday & Sunday: Closed"
    }
  ];

  return (
    <Layout metaPage="contactUs">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-claimsBlue via-blue-700 to-blue-900 text-white pt-24 pb-16 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
        </div>

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-heading">
                Contact
                <span className="block text-claimsOrange">ClaimsMD</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                We're here to help you optimize your medical billing and revenue cycle management. Get in touch with our expert team today.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-claimsOrange" />
                  <span className="text-lg">Quick Response Time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-claimsOrange" />
                  <span className="text-lg">Expert Consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-claimsOrange" />
                  <span className="text-lg">Personalized Solutions</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-claimsOrange hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Schedule Free Consultation
                </Button>
                <Button 
                  variant="outline" 
                  className="border-2 border-claimsOrange text-claimsOrange hover:bg-claimsOrange hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300"
                >
                  Call Now
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Young female healthcare professional"
                  className="rounded-2xl shadow-2xl w-full h-auto max-w-lg mx-auto"
                />
                {/* Floating Contact Cards */}
                <div className="absolute -top-4 -left-4 bg-white text-claimsBlue rounded-xl p-4 shadow-lg">
                  <div className="text-sm font-bold">24/7</div>
                  <div className="text-xs">Support</div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-claimsOrange text-white rounded-xl p-4 shadow-lg">
                  <div className="text-sm font-bold">Free</div>
                  <div className="text-xs">Consultation</div>
                </div>
              </div>
              
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-claimsOrange/20 to-blue-500/20 rounded-2xl blur-3xl transform scale-110"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-claimsBlue mb-6 font-heading">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Choose the best way to reach us. Our team is ready to assist you with any questions about our medical billing services.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="bg-claimsBlue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <info.icon className="h-8 w-8 text-claimsBlue" />
                </div>
                <h3 className="text-xl font-bold text-claimsBlue mb-3">
                  {info.title}
                </h3>
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  {info.details}
                </p>
                <p className="text-gray-600">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-claimsBlue mb-6 font-heading">
                Send Us a Message
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. We're excited to learn about your practice and how we can help.
              </p>
              
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-claimsBlue mb-4">
                  What to Expect:
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-claimsOrange rounded-full mt-2"></div>
                    <span>Free consultation within 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-claimsOrange rounded-full mt-2"></div>
                    <span>Personalized revenue cycle analysis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-claimsOrange rounded-full mt-2"></div>
                    <span>Custom solution recommendations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-claimsOrange rounded-full mt-2"></div>
                    <span>No obligation proposal</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required 
                      className="w-full"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required 
                      className="w-full"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    className="w-full"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required 
                    className="w-full"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Practice Name
                  </label>
                  <Input 
                    type="text" 
                    name="practiceName"
                    value={formData.practiceName}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Enter your practice name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How can we help you? *
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required 
                    className="w-full h-32"
                    placeholder="Tell us about your practice and billing needs..."
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-claimsBlue hover:bg-blue-800 text-white py-3 text-lg font-semibold"
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
                    'Send Message'
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
