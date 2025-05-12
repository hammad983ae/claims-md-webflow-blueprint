
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';
import MPF from '../../Assets/Medical Professional Focus.jpeg';
const ReputationManagement = () => {
  return (
    <Layout>
      <ServiceDetail
        title="Reputation Management"
        description="Comprehensive reputation management services to build and maintain your practice's online presence and patient trust."
        image= {MPF}
        features={[
          "Online review monitoring and management",
          "Patient satisfaction survey implementation",
          "Social media presence management",
          "Review response strategy development",
          "Reputation recovery services",
          "Competitive analysis",
          "Online visibility enhancement"
        ]}
        benefits={[
          "Improve patient acquisition through positive online presence",
          "Address negative feedback professionally and effectively",
          "Build trust with prospective patients",
          "Differentiate your practice in a competitive market",
          "Convert satisfied patients into advocates",
          "Gain valuable insights from patient feedback"
        ]}
        faqs={[
          {
            question: "How do you handle negative reviews?",
            answer: "We implement a strategic response protocol that addresses concerns professionally while protecting patient privacy, and we work to resolve the underlying issues when possible."
          },
          {
            question: "Which review platforms do you monitor?",
            answer: "We monitor all major healthcare review platforms including Google, Healthgrades, Vitals, WebMD, Yelp, and Facebook, as well as any specialty-specific platforms relevant to your practice."
          }
        ]}
      />
    </Layout>
  );
};

export default ReputationManagement;
