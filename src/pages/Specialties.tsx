
import Layout from '@/components/Layout';
import { motion } from '@/components/ui/motion';
import { Check, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Specialties = () => {
  const specialties = [
    {
      title: "Primary Care",
      description: "Primary care providers face a high volume of patient visits and diverse billing needs. We help you streamline your billing process by:",
      services: [
        "Managing claims for routine check-ups, immunizations, and chronic care management",
        "Ensuring accurate coding for evaluation and management (E/M) services",
        "Handling patient billing and collections with sensitivity"
      ]
    },
    {
      title: "Cardiology",
      description: "Cardiology billing involves complex procedures and diagnostic tests. Our services include:",
      services: [
        "Accurate coding for echocardiograms, stress tests, and cardiac catheterizations",
        "Managing claims for both invasive and non-invasive procedures",
        "Ensuring compliance with payer-specific guidelines for cardiology services"
      ]
    },
    {
      title: "Orthopedics",
      description: "Orthopedic practices deal with a wide range of surgical and non-surgical procedures. We specialize in:",
      services: [
        "Coding for joint replacements, fractures, and arthroscopic surgeries",
        "Handling claims for physical therapy and durable medical equipment (DME)",
        "Managing pre-authorizations and post-operative care billing"
      ]
    },
    {
      title: "Dermatology",
      description: "Dermatology billing requires expertise in both medical and cosmetic procedures. Our services include:",
      services: [
        "Accurate coding for skin biopsies, Mohs surgery, and laser treatments",
        "Managing claims for both insured and self-pay cosmetic procedures",
        "Ensuring compliance with documentation requirements for dermatology services"
      ]
    },
    {
      title: "Pediatrics",
      description: "Pediatric practices have unique billing needs, from well-child visits to immunizations. We help by:",
      services: [
        "Managing claims for routine check-ups, vaccinations, and developmental screenings",
        "Ensuring accurate coding for pediatric-specific diagnoses and treatments",
        "Handling patient billing with a focus on family-friendly communication"
      ]
    },
    {
      title: "Obstetrics and Gynecology (OB/GYN)",
      description: "OB/GYN billing involves a mix of routine care and complex procedures. Our services include:",
      services: [
        "Accurate coding for prenatal care, deliveries, and gynecological surgeries",
        "Managing claims for ultrasounds, mammograms, and fertility treatments",
        "Ensuring compliance with payer guidelines for OB/GYN services"
      ]
    },
    {
      title: "Mental Health and Behavioral Health",
      description: "Mental health billing requires expertise in both medical and therapeutic services. We specialize in:",
      services: [
        "Coding for psychotherapy, psychiatric evaluations, and medication management",
        "Managing claims for both individual and group therapy sessions",
        "Ensuring compliance with mental health parity laws and payer requirements"
      ]
    },
    {
      title: "Radiology and Imaging",
      description: "Radiology billing involves complex coding for diagnostic tests and imaging services. Our services include:",
      services: [
        "Accurate coding for X-rays, MRIs, CT scans, and ultrasounds",
        "Managing claims for both in-office and outsourced imaging services",
        "Ensuring compliance with documentation and coding standards for radiology"
      ]
    },
    {
      title: "Surgery (General and Specialty)",
      description: "Surgical billing requires precision and attention to detail. We help by:",
      services: [
        "Coding for a wide range of surgical procedures, from minor to major surgeries",
        "Managing pre-authorizations, post-operative care, and follow-up billing",
        "Ensuring compliance with surgical coding and documentation requirements"
      ]
    },
    {
      title: "Chiropractic Care",
      description: "Chiropractic billing involves unique coding and documentation requirements. Our services include:",
      services: [
        "Accurate coding for spinal adjustments, therapeutic exercises, and manual therapy",
        "Managing claims for both insured and self-pay patients",
        "Ensuring compliance with chiropractic-specific payer guidelines"
      ]
    }
  ];

  const whyChooseUs = [
    "Specialized Expertise: Our team has in-depth knowledge of the billing requirements for various specialties",
    "Accurate Coding: We ensure proper use of ICD-10, CPT, and HCPCS codes specific to your specialty",
    "Timely Reimbursements: Our proactive approach minimizes claim denials and delays",
    "Compliance Assurance: We stay up-to-date with specialty-specific regulations to reduce audit risks",
    "Customized Solutions: We tailor our services to meet the unique needs of your practice"
  ];

  const benefits = [
    "Maximize Revenue: Accurate coding and timely claims submission reduce revenue leakage",
    "Reduce Denials: Our expertise in specialty-specific billing minimizes claim rejections",
    "Ensure Compliance: We stay up-to-date with specialty-specific regulations to reduce audit risks",
    "Save Time: Outsourcing your billing allows you to focus on patient care and practice growth"
  ];

  const faqs = [
    {
      question: "Do you have experience working with my specialty?",
      answer: "Yes, our team has extensive experience working with a wide range of specialties, from primary care to surgical subspecialties."
    },
    {
      question: "How do you ensure accurate coding for my specialty?",
      answer: "Our certified coders are trained in specialty-specific coding requirements and stay up-to-date with the latest guidelines."
    },
    {
      question: "Can you help reduce my denial rates?",
      answer: "Absolutely. Our denial management strategies are designed to identify and resolve the root causes of denials, reducing your denial rates significantly."
    },
    {
      question: "How do I get started with ClaimsMD's specialty billing services?",
      answer: "Simply contact us to schedule a free consultation. We'll discuss your needs and create a customized plan for your practice."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes, we provide continuous support to ensure your billing process remains efficient and compliant."
    }
  ];

  return (
    <Layout metaPage="specialties">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-claimsBlue to-indigo-800">
        <div className="container-custom">
          <div className="text-center text-white max-w-4xl mx-auto">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Specialized Medical Billing Services by ClaimsMD
            </motion.h1>
            <motion.h2 
              className="text-xl md:text-2xl font-medium mb-6 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Tailored Solutions for Every Specialty
            </motion.h2>
            <motion.p 
              className="text-lg text-white/90 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              At ClaimsMD, we understand that every healthcare specialty has unique billing requirements, coding challenges, and payer guidelines. Whether you're a primary care physician, a surgeon, or a specialist in a niche field, your billing process needs to be as specialized as the care you provide.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="bg-white text-claimsBlue hover:bg-gray-100" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-claimsBlue mb-4">Why Choose ClaimsMD for Your Specialty Billing Needs?</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Medical billing is not one-size-fits-all. Each specialty comes with its own set of challenges, from complex coding requirements to unique payer rules. Here's why ClaimsMD is the right partner for your specialty:
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((reason, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <Check className="text-claimsBlue mr-4 mt-1" size={20} />
                  <p className="text-gray-700">{reason}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-claimsBlue mb-4">Our Specialties</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              At ClaimsMD, we provide specialized billing services for a wide range of healthcare specialties, including but not limited to:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-claimsBlue mb-3">{specialty.title}</h3>
                    <p className="text-gray-700 mb-4">{specialty.description}</p>
                    <ul className="space-y-2">
                      {specialty.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start">
                          <Check className="text-claimsOrange mr-2 mt-1 flex-shrink-0" size={16} />
                          <span className="text-gray-600 text-sm">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-claimsBlue mb-4">Why Specialized Billing Matters</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Specialized billing ensures that your practice receives the reimbursements you deserve while minimizing claim denials and compliance risks. Here's how ClaimsMD makes a difference:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-l-4 border-claimsBlue"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start">
                  <Check className="text-claimsBlue mr-4 mt-1" size={20} />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-claimsBlue mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-gray-800 hover:text-claimsBlue">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-claimsBlue to-indigo-800">
        <div className="container-custom">
          <div className="text-center text-white max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Specialty Billing?</h2>
            <p className="text-lg mb-8 text-white/90">
              Don't let billing complexities hold your practice back. With ClaimsMD as your partner, you can achieve financial stability, operational efficiency, and peace of mind.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-claimsBlue hover:bg-gray-100" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <div className="flex items-center space-x-4 text-white/90">
                <div className="flex items-center">
                  <Phone size={18} className="mr-2" />
                  <span>(800) 338-9171</span>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="mr-2" />
                  <span>info@claimsmd.net</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Specialties;
