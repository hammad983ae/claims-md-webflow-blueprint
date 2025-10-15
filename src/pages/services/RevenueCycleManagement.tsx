
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';


const RevenueCycleManagement = () => {
  const rcmSteps = [
    {
      title: "Patient Registration and Eligibility Verification",
      description: "We start by ensuring accurate patient information and verifying insurance eligibility, including collecting and validating patient demographics, confirming insurance coverage and benefits, and identifying any pre-authorization requirements."
    },
    {
      title: "Charge Entry and Coding",
      description: "Our certified coders ensure accurate and compliant coding, including assigning appropriate ICD-10, CPT, and HCPCS codes, reviewing documentation to support billed services, and minimizing coding errors that could lead to denials."
    },
    {
      title: "Claims Submission and Follow-Up",
      description: "We handle the entire claims process, including submitting claims electronically for faster processing, tracking claims to ensure timely payment, and following up on unpaid or denied claims."
    },
    {
      title: "Payment Posting and Reconciliation",
      description: "We ensure accurate and timely payment posting, including reconciling payments with billed amounts, identifying and resolving underpayments or discrepancies, and posting patient payments and adjustments."
    },
    {
      title: "Denial Management and Appeals",
      description: "We proactively manage denials to recover lost revenue, including identifying the root causes of denials, implementing corrective actions to prevent future denials, and filing appeals with supporting documentation."
    },
    {
      title: "Patient Billing and Collections",
      description: "We provide clear and professional patient statements, including generating easy-to-understand bills, offering flexible payment options for patients, and managing collections with sensitivity and professionalism."
    },
    {
      title: "Reporting and Analytics",
      description: "We provide detailed reports and analytics to help you monitor and optimize your revenue cycle, including key performance indicators (KPIs) such as days in AR, denial rates, and collection rates, insights into trends and areas for improvement, and customized recommendations to enhance financial performance."
    }
  ];

  const rcmBenefits = [
    "Increase net collections through improved processes that maximize revenue and ensure you receive every dollar you're owed",
    "Reduce operational costs through efficiency by streamlining processes and reducing administrative burdens",
    "Minimize revenue leakage at every step through proactive management and error prevention",
    "Improve patient financial experience with clear communication and flexible payment options",
    "Gain comprehensive visibility into financial performance with detailed reporting and analytics",
    "Adapt quickly to changing payer requirements with expert knowledge and ongoing support"
  ];

  const targetAudience = [
    "Small practices looking to streamline their revenue cycle and maximize revenue with limited resources",
    "Multi-specialty clinics needing to manage complex billing processes across multiple specialties",
    "Large healthcare organizations seeking to optimize RCM for high patient volumes and diverse services",
    "New practices wanting to establish efficient billing processes from the start",
    "Practices facing financial challenges needing to identify and resolve issues impacting their revenue"
  ];

  const rcmFAQs = [
    {
      question: "How is RCM different from standard medical billing?",
      answer: "While medical billing focuses primarily on claims submission and payment posting, RCM is a comprehensive approach that optimizes every step from patient registration through final payment, including pre-visit, point-of-service, and post-visit processes."
    },
    {
      question: "What metrics do you track for RCM performance?",
      answer: "We track key metrics including net collection rate, days in A/R, first-pass claim rate, denial rate, cost to collect, and patient satisfaction with billing processes."
    },
    {
      question: "How much can I improve my revenue with RCM services?",
      answer: "Many practices see a 10-20% increase in revenue by optimizing their revenue cycle with our services."
    },
    {
      question: "How quickly can you start managing my revenue cycle?",
      answer: "We can typically onboard your practice and begin managing your revenue cycle within 2-4 weeks."
    },
    {
      question: "Do you work with all specialties?",
      answer: "Yes, we have experience working with practices across all specialties, including primary care, cardiology, orthopedics, and more."
    },
    {
      question: "Can you help reduce my denial rates?",
      answer: "Absolutely. Our denial management strategies are designed to identify and resolve the root causes of denials, reducing your denial rates significantly."
    },
    {
      question: "How do I get started with ClaimsMD's RCM services?",
      answer: "Simply contact us to schedule a free consultation. We'll assess your current revenue cycle and create a customized plan for your practice."
    }
  ];

  return (
    <Layout metaPage="revenueCycleManagement">
      <ServiceDetail
        title="Revenue Cycle Management"
        subtitle="Optimize Your Practice's Financial Health"
        description="We specialize in Revenue Cycle Management (RCM) services that streamline your entire billing process from patient registration to final payment collection. Our comprehensive approach ensures maximum revenue recovery while minimizing administrative burden."
        image="/images/services/revenue-cycle-management.png"
        features={[
          "End-to-end revenue cycle oversight from registration to final payment",
          "Key performance indicator monitoring and reporting",
          "Process optimization and workflow redesign for maximum efficiency",
          "Integrated eligibility verification and pre-authorization management",
          "Coding and charge capture improvement services",
          "Denial prevention strategies and proactive management",
          "Complete accounts receivable management and follow-up",
          "Patient billing and collections with compassionate approach",
          "Advanced analytics and customized reporting solutions"
        ]}
        benefits={rcmBenefits}
        steps={rcmSteps}
        targetAudience={targetAudience}
        faqs={rcmFAQs}
      />
    </Layout>
  );
};

export default RevenueCycleManagement;
