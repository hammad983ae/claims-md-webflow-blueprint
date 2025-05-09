
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';

const HealthcareDigitalMarketing = () => {
  return (
    <Layout>
      <ServiceDetail
        title="Healthcare Digital Marketing"
        description="Specialized digital marketing strategies designed specifically for healthcare practices to attract new patients and grow your practice."
        features={[
          "Healthcare-specific SEO optimization",
          "HIPAA-compliant content marketing",
          "Medical practice website development",
          "Patient acquisition campaigns",
          "Social media management for healthcare",
          "Reputation management integration",
          "Marketing ROI tracking and analysis"
        ]}
        benefits={[
          "Increase new patient acquisition",
          "Build brand awareness in your service area",
          "Educate patients about your services",
          "Improve online visibility and search rankings",
          "Develop thought leadership in your specialty",
          "Track and measure marketing effectiveness"
        ]}
        faqs={[
          {
            question: "How do you ensure HIPAA compliance in marketing?",
            answer: "We implement strict protocols for all marketing activities including content review processes, secure data handling, proper consent management, and staff training on HIPAA-compliant marketing practices."
          },
          {
            question: "What digital channels work best for healthcare practices?",
            answer: "The most effective channels vary by specialty and target patient demographics, but typically include a combination of search engine optimization, content marketing, targeted social media, and strategic review management."
          }
        ]}
      />
    </Layout>
  );
};

export default HealthcareDigitalMarketing;
