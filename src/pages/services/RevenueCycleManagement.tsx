
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';
import DEP from '../../Assets/Doctor Engaging with Patient.jpeg';

const RevenueCycleManagement = () => {
  return (
    <Layout>
      <ServiceDetail
        title="Revenue Cycle Management"
        description="Comprehensive revenue cycle management to optimize financial performance and patient experience."
        image= {DEP}
        features={[
          "End-to-end revenue cycle oversight",
          "Key performance indicator monitoring",
          "Process optimization and workflow redesign",
          "Integrated eligibility verification",
          "Coding and charge capture improvement",
          "Denial prevention strategies",
          "Complete accounts receivable management"
        ]}
        benefits={[
          "Increase net collections through improved processes",
          "Reduce operational costs through efficiency",
          "Minimize revenue leakage at every step",
          "Improve patient financial experience",
          "Gain comprehensive visibility into financial performance",
          "Adapt quickly to changing payer requirements"
        ]}
        faqs={[
          {
            question: "How is RCM different from standard medical billing?",
            answer: "While medical billing focuses primarily on claims submission and payment posting, RCM is a comprehensive approach that optimizes every step from patient registration through final payment, including pre-visit, point-of-service, and post-visit processes."
          },
          {
            question: "What metrics do you track for RCM performance?",
            answer: "We track key metrics including net collection rate, days in A/R, first-pass claim rate, denial rate, cost to collect, and patient satisfaction with billing processes."
          }
        ]}
      />
    </Layout>
  );
};

export default RevenueCycleManagement;
