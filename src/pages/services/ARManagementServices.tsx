
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';

const ARManagementServices = () => {
  return (
    <Layout>
      <ServiceDetail
        title="A/R Management Services"
        description="Specialized accounts receivable management services focused on resolving aging accounts and improving cash flow."
        features={[
          "Aging A/R analysis and work-down",
          "Targeted intervention for high-value claims",
          "Payer-specific follow-up strategies",
          "Recovery of old or written-off balances",
          "Pattern analysis for denial prevention",
          "Staff education on A/R best practices",
          "Cash acceleration programs"
        ]}
        benefits={[
          "Significant reduction in days in A/R",
          "Recovery of previously uncollected revenue",
          "Improved cash flow and financial stability",
          "Enhanced staff efficiency in collections",
          "Greater visibility into A/R performance",
          "Systematic approach to preventing future backlogs"
        ]}
        faqs={[
          {
            question: "Can you help with a backlog of aging claims?",
            answer: "Yes, we specialize in helping practices address backlogs of aging claims through targeted interventions and specialized follow-up strategies."
          },
          {
            question: "How quickly can we expect to see results?",
            answer: "Most clients see initial improvements within 30-45 days, with significant reduction in aging A/R within 90 days of implementation."
          }
        ]}
      />
    </Layout>
  );
};

export default ARManagementServices;
