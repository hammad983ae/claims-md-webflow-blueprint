
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';

const MedicalBillingAudit = () => {
  return (
    <Layout>
      <ServiceDetail
        title="Medical Billing Audit"
        description="Our comprehensive medical billing audit service identifies errors, inefficiencies, and opportunities for improvement in your healthcare organization's billing processes."
        image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1600"
        features={[
          "Complete end-to-end billing process review",
          "Identification of coding and billing errors",
          "Compliance assessment with latest regulations",
          "Documentation gap analysis",
          "Review of claim denials and trends",
          "Analysis of revenue cycle performance metrics",
          "Detailed findings report with actionable insights"
        ]}
        benefits={[
          "Increase revenue by identifying missed billing opportunities",
          "Reduce claim denials by correcting coding issues",
          "Improve compliance and reduce audit risks",
          "Optimize reimbursement rates through improved processes",
          "Benchmark your billing performance against industry standards",
          "Receive actionable recommendations for improvement"
        ]}
        faqs={[
          {
            question: "How long does a medical billing audit take?",
            answer: "A typical medical billing audit takes 2-4 weeks depending on the size of your practice and the volume of claims being reviewed."
          },
          {
            question: "How often should we conduct a billing audit?",
            answer: "We recommend conducting a comprehensive billing audit annually, with quarterly focused reviews of specific high-risk areas."
          },
          {
            question: "What documentation do you need to perform an audit?",
            answer: "We typically require access to your billing system, a sample of medical records, explanation of benefits (EOBs), claim submission data, and denial reports."
          }
        ]}
      />
    </Layout>
  );
};

export default MedicalBillingAudit;
