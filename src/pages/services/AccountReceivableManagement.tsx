
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';
import Confifent from '../../Assets/Confident Dentist.jpeg';

const AccountReceivableManagement = () => {
  const arSteps = [
    {
      title: "AR Analysis",
      description: "We begin by conducting a comprehensive analysis of your accounts receivable to identify aging claims (30, 60, 90, and 120+ days), common reasons for delays (e.g., coding errors, missing information, payer issues), and trends and patterns in outstanding claims."
    },
    {
      title: "Claim Resolution",
      description: "Our team of certified billing experts works diligently to resolve outstanding claims by correcting errors and resubmitting claims, following up with payers to expedite payments, and filing appeals with supporting documentation when necessary."
    },
    {
      title: "Proactive Prevention",
      description: "We don't just resolve outstanding claims – we help prevent them. Our prevention strategies include implementing process improvements to reduce errors, providing staff training on coding and billing best practices, and conducting regular audits to identify potential issues."
    },
    {
      title: "Detailed Reporting",
      description: "We provide comprehensive reports that include aging AR breakdown (30, 60, 90, and 120+ days), resolved claims and recovered revenue, and recommendations for reducing future AR issues."
    },
    {
      title: "Ongoing Support",
      description: "Our team is always available to address your AR management needs and provide ongoing support to ensure long-term success."
    }
  ];

  const arBenefits = [
    "Improve cash flow through timely resolution of outstanding claims ensuring a steady stream of revenue",
    "Reduce administrative burden by handling time-consuming and resource-intensive AR management tasks",
    "Minimize revenue loss by preventing unresolved claims from becoming write-offs and lost revenue",
    "Enhance compliance by helping you stay compliant with payer requirements and regulations",
    "Advanced technology using state-of-the-art AR management tools to track, analyze, and resolve outstanding claims",
    "Expert team including certified medical coders, billing specialists, and AR management experts with years of healthcare industry experience"
  ];

  const targetAudience = [
    "Small practices looking to recover lost revenue and reduce administrative burdens",
    "Multi-specialty clinics needing to address AR issues across multiple specialties",
    "Large healthcare organizations seeking to streamline AR management for high claim volumes",
    "Practices with high AR balances wanting to identify and resolve the root causes of outstanding claims",
    "New practices looking to establish best practices to minimize AR issues from the start"
  ];

  const arFAQs = [
    {
      question: "How much revenue can I recover with AR management services?",
      answer: "The amount of recoverable revenue depends on your practice's aging AR and the root causes of outstanding claims. On average, practices recover 5-10% of their total AR through effective management."
    },
    {
      question: "How long does it take to resolve outstanding claims?",
      answer: "The timeline for resolving outstanding claims varies depending on the complexity of the issue. Most claims are resolved within 30-60 days."
    },
    {
      question: "Can you help prevent future AR issues?",
      answer: "Yes, our proactive prevention strategies are designed to reduce your aging AR and prevent future issues through process improvements, staff training, and regular audits."
    },
    {
      question: "Do you work with all payers?",
      answer: "Yes, we have experience working with Medicare, Medicaid, and all major private insurance payers."
    },
    {
      question: "How do I get started with ClaimsMD's AR management services?",
      answer: "Simply contact us to schedule a free consultation. We'll analyze your current AR and develop a customized plan to meet your needs."
    },
    {
      question: "What is your approach to aging accounts?",
      answer: "We prioritize accounts based on age, amount, and probability of collection, focusing first on high-value claims that are 30-60 days old to maximize recovery potential."
    },
    {
      question: "How do you measure success in A/R management?",
      answer: "We track key metrics including days in A/R, collection rate, aging bucket percentages, and cash flow improvement to measure success and provide transparent reporting."
    }
  ];

  return (
    <Layout metaPage="arServices">
      <ServiceDetail
        title="Account Receivable Management"
        subtitle="Optimize Your Cash Flow and Reduce Outstanding Claims"
        description="We specialize in accounts receivable management services that help healthcare practices maintain healthy cash flow and reduce outstanding balances. Our comprehensive approach ensures timely collections while maintaining positive patient relationships."
        image="/images/services/account-receivable-management.jpg"
        features={[
          "Comprehensive aging account analysis and prioritization",
          "Proactive follow-up on unpaid claims with systematic tracking",
          "Payer-specific collection strategies tailored to each insurer",
          "Account reconciliation and detailed financial reporting",
          "Cash flow optimization and payment acceleration",
          "Patient payment plan management and coordination",
          "Small balance resolution and efficient cleanup processes",
          "Advanced AR tracking and management technology",
          "Regular audits to identify and prevent future AR issues"
        ]}
        benefits={arBenefits}
        steps={arSteps}
        targetAudience={targetAudience}
        faqs={arFAQs}
      />
    </Layout>
  );
};

export default AccountReceivableManagement;
