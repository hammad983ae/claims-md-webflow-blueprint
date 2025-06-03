
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';
import HPP from '../../Assets/Healthcare Professional Portrait.jpeg';

const HealthcareDigitalMarketing = () => {
  const marketingSteps = [
    {
      title: "Strategy Development",
      description: "We begin by understanding your practice's goals, target audience, and competitive landscape. We develop a customized digital marketing strategy that includes SEO, content marketing, social media, and paid advertising components tailored to your specialty and market."
    },
    {
      title: "Website Optimization",
      description: "Your website is the foundation of your digital presence. We optimize your site for search engines, ensure mobile responsiveness, improve user experience, and integrate features like online appointment scheduling and patient portals."
    },
    {
      title: "Content Creation",
      description: "We create valuable, educational content that positions your practice as a trusted authority. This includes blog posts, patient guides, videos, infographics, and email newsletters that educate patients and showcase your expertise."
    },
    {
      title: "Search Engine Marketing",
      description: "We implement both SEO strategies for long-term visibility and PPC campaigns for immediate results. This includes keyword research, local SEO optimization, targeted advertising, and continuous performance monitoring and optimization."
    },
    {
      title: "Social Media Management",
      description: "We help you connect with patients on platforms like Facebook, Instagram, and LinkedIn through engaging content, targeted advertising, community management, and reputation monitoring to build trust and attract new patients."
    },
    {
      title: "Analytics and Optimization",
      description: "We provide detailed reporting and analytics to track campaign performance, measure ROI, identify opportunities for improvement, and continuously optimize your marketing strategy for better results."
    }
  ];

  const marketingBenefits = [
    "Increase online visibility through search engine optimization and strategic marketing campaigns to reach more potential patients",
    "Build trust and credibility with professional website design, positive review management, and educational content marketing",
    "Attract new patients through targeted advertising, local SEO, and engaging social media presence in your service area",
    "Retain existing patients with email marketing, patient portals, and ongoing communication through digital channels",
    "Stay competitive by maintaining a strong online presence that stands out in the crowded healthcare marketplace",
    "Measurable results through data-driven campaigns with clear ROI tracking and performance analytics"
  ];

  const targetAudience = [
    "New practices looking to build a strong online presence from the start to attract patients and establish credibility",
    "Established practices wanting to enhance visibility and patient engagement to stay competitive in the digital age",
    "Specialty practices needing to highlight expertise and attract patients seeking specialized care and treatments",
    "Multi-location practices requiring consistent online presence and local marketing across all practice locations",
    "Practices with limited marketing resources wanting to outsource digital marketing to experts while focusing on patient care"
  ];

  const marketingFAQs = [
    {
      question: "How long does it take to see results from digital marketing?",
      answer: "While some strategies like PPC can drive immediate traffic, SEO and content marketing typically take 3-6 months to show significant results."
    },
    {
      question: "Do you work with all specialties?",
      answer: "Yes, we have experience working with practices across all specialties, including primary care, cardiology, orthopedics, and more."
    },
    {
      question: "Can you help improve my online reviews?",
      answer: "Absolutely. Our reputation management services include strategies to encourage positive reviews and address negative feedback."
    },
    {
      question: "How do you measure the success of digital marketing campaigns?",
      answer: "We use advanced analytics tools to track key metrics like website traffic, conversion rates, and patient acquisition costs."
    },
    {
      question: "How do I get started with ClaimsMD's digital marketing services?",
      answer: "Simply contact us to schedule a free consultation. We'll discuss your goals and create a customized plan for your practice."
    },
    {
      question: "How do you ensure HIPAA compliance in marketing?",
      answer: "We implement strict protocols for all marketing activities including content review processes, secure data handling, proper consent management, and staff training on HIPAA-compliant marketing practices."
    },
    {
      question: "What digital channels work best for healthcare practices?",
      answer: "The most effective channels vary by specialty and target patient demographics, but typically include a combination of search engine optimization, content marketing, targeted social media, and strategic review management."
    }
  ];

  return (
    <Layout metaPage="services">
      <ServiceDetail
        title="Healthcare Digital Marketing"
        subtitle="Grow Your Practice and Connect with Patients"
        description="In today's digital-first world, having a strong online presence is no longer optional – it's essential. Patients are increasingly turning to the internet to find healthcare providers, read reviews, and make informed decisions about their care. If your practice isn't visible online, you could be missing out on valuable opportunities to attract and retain patients. At ClaimsMD, we specialize in Healthcare Digital Marketing Services designed to help you connect with patients, build trust, and grow your practice. From search engine optimization (SEO) to social media marketing, we create customized strategies that align with your goals and drive measurable results."
        image={HPP}
        features={[
          "Healthcare-specific SEO optimization",
          "HIPAA-compliant content marketing",
          "Medical practice website development",
          "Patient acquisition campaigns",
          "Social media management for healthcare",
          "Reputation management integration",
          "Marketing ROI tracking and analysis",
          "Pay-per-click (PPC) advertising",
          "Local search optimization and Google My Business management"
        ]}
        benefits={marketingBenefits}
        steps={marketingSteps}
        targetAudience={targetAudience}
        faqs={marketingFAQs}
      />
    </Layout>
  );
};

export default HealthcareDigitalMarketing;
