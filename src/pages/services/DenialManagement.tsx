
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';

const DenialManagement = () => {
  return (
    <Layout>
      <ServiceDetail
        title="Denial Management"
        description="Expert handling of claim denials to maximize reimbursements and reduce revenue loss."
        image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1600"
        features={[
          "Comprehensive denial analysis and categorization",
          "Timely appeal filing and follow-up",
          "Root cause identification and resolution",
          "Process improvement recommendations",
          "Denial trend reporting and analytics",
          "Payer-specific appeal strategies",
          "Staff education on denial prevention"
        ]}
        benefits={[
          "Recover lost revenue from denied claims",
          "Reduce future denials through process improvements",
          "Accelerate cash flow with faster appeals resolution",
          "Gain insights into denial patterns and trends",
          "Improve staff understanding of denial prevention",
          "Strengthen payer negotiation position"
        ]}
        faqs={[
          {
            question: "What is your success rate for overturning denials?",
            answer: "Our average success rate for overturning denials is approximately 65-70%, which is well above the industry average."
          },
          {
            question: "How quickly do you begin working on denied claims?",
            answer: "We begin working on denied claims within 24-48 hours of receiving the denial notification to ensure timely appeals."
          },
          {
            question: "Do you handle both technical and clinical denials?",
            answer: "Yes, we handle all types of denials including technical, clinical, authorization-related, and coding-related denials."
          }
        ]}
      />
    </Layout>
  );
};

export default DenialManagement;
