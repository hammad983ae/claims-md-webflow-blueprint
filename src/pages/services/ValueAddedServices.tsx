
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';
import CMP from '../../Assets/Confident Medical Professional.jpeg';

const ValueAddedServices = () => {
  return (
    <Layout>
      <ServiceDetail
        title="Value Added Services"
        description="Supplementary services designed to enhance your practice's operational efficiency and financial performance."
        image= {CMP}
        features={[
          "Custom reporting and analytics",
          "Provider productivity analysis",
          "Fee schedule optimization",
          "Contract negotiation assistance",
          "Staff education and training",
          "Technology integration consulting",
          "Patient experience enhancement"
        ]}
        benefits={[
          "Gain deeper insights into practice performance",
          "Identify opportunities for revenue enhancement",
          "Optimize provider productivity and efficiency",
          "Improve staff knowledge and capabilities",
          "Leverage technology effectively",
          "Enhance overall practice value"
        ]}
        faqs={[
          {
            question: "Are these services included in your standard billing packages?",
            answer: "Some basic value-added services are included in our comprehensive packages, while more specialized services are available as add-ons based on your practice's specific needs."
          },
          {
            question: "How do you customize reports for our practice?",
            answer: "We begin with a consultation to understand your key performance indicators and management priorities, then create custom reports and dashboards that deliver actionable insights specific to your goals."
          }
        ]}
      />
    </Layout>
  );
};

export default ValueAddedServices;
