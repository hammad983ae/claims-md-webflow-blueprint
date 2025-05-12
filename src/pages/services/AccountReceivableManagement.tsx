
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';
import Confifent from  '../../Assets/Confident Dentist.jpeg';

const AccountReceivableManagement = () => {
  return (
    <Layout>
      <ServiceDetail
        title="Account Receivable Management"
        description="Proactive management of outstanding claims to improve cash flow and reduce days in A/R."
        image= {Confifent}
        features={[
          "Aging account analysis and prioritization",
          "Proactive follow-up on unpaid claims",
          "Payer-specific collection strategies",
          "Account reconciliation and reporting",
          "Cash flow optimization",
          "Patient payment plan management",
          "Small balance resolution"
        ]}
        benefits={[
          "Reduce average days in A/R",
          "Improve cash flow predictability",
          "Increase collection rates on aging accounts",
          "Free up staff time to focus on patient care",
          "Gain visibility into A/R performance metrics",
          "Implement best practices for collection"
        ]}
        faqs={[
          {
            question: "What is your approach to aging accounts?",
            answer: "We prioritize accounts based on age, amount, and probability of collection, focusing first on high-value claims that are 30-60 days old."
          },
          {
            question: "Do you handle patient collections as well?",
            answer: "Yes, we provide complete A/R management including patient responsibility collections, payment plans, and patient communication."
          },
          {
            question: "How do you measure success in A/R management?",
            answer: "We track key metrics including days in A/R, collection rate, aging bucket percentages, and cash flow improvement to measure success."
          }
        ]}
      />
    </Layout>
  );
};

export default AccountReceivableManagement;
