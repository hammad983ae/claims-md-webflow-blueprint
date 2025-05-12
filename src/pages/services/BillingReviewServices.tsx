
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';
import CMP from '../../Assets/Confident Medical Professional.jpeg';
const BillingReviewServices = () => {
  return (
    <Layout>
      <ServiceDetail
        title="Billing Review Services"
        description="Thorough evaluation of your current billing operations to identify opportunities for improvement and optimization."
        image= {CMP}
        features={[
          "Comprehensive billing operations assessment",
          "Documentation and coding review",
          "Workflow efficiency analysis",
          "Staff knowledge and performance evaluation",
          "Technology utilization review",
          "Compliance risk assessment",
          "Comparison to industry benchmarks"
        ]}
        benefits={[
          "Identify revenue leakage and recovery opportunities",
          "Streamline billing operations for greater efficiency",
          "Ensure coding accuracy and optimization",
          "Reduce compliance risks through proper documentation",
          "Benchmark performance against industry standards",
          "Develop a roadmap for billing improvements"
        ]}
        faqs={[
          {
            question: "How is a billing review different from a billing audit?",
            answer: "While a billing audit typically focuses on claim accuracy and compliance, our billing review service evaluates the entire billing operation including workflows, staff capabilities, technology utilization, and operational efficiency."
          },
          {
            question: "What deliverables can we expect from a billing review?",
            answer: "Our billing review provides a detailed report with findings, comparative benchmarks, identified opportunities, and a prioritized action plan with specific recommendations for improvement."
          }
        ]}
      />
    </Layout>
  );
};

export default BillingReviewServices;
