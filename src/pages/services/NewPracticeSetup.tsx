
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';


const NewPracticeSetup = () => {
  const setupSteps = [
    {
      title: "Initial Consultation",
      description: "We begin by understanding your vision, goals, and specific needs. This includes discussing your practice specialty, target patient base, and services, and identifying your priorities and timeline for launch."
    },
    {
      title: "Credentialing and Enrollment",
      description: "We handle the credentialing and enrollment process to ensure you can bill insurance companies from day one. This includes submitting applications to Medicare, Medicaid, and private payers, obtaining your National Provider Identifier (NPI) and tax ID, and ensuring compliance with payer-specific requirements."
    },
    {
      title: "Billing System Setup",
      description: "We set up a customized billing system tailored to your practice's needs, including selecting and implementing practice management software, configuring electronic health records (EHR) and billing software, and integrating systems for seamless operations."
    },
    {
      title: "Revenue Cycle Management (RCM)",
      description: "We establish efficient RCM processes to maximize your revenue, including patient eligibility verification, claims submission and follow-up, denial management and appeals, and payment posting and reconciliation."
    },
    {
      title: "Compliance and Training",
      description: "We ensure your practice meets all regulatory requirements and provide training for your staff, including HIPAA compliance and documentation standards, coding and billing best practices, and ongoing support to address compliance changes."
    },
    {
      title: "Ongoing Support",
      description: "Our partnership doesn't end once your practice is up and running. We provide ongoing support to monitor and optimize your revenue cycle, address any challenges or changes in your practice, and ensure long-term success and growth."
    }
  ];

  const setupBenefits = [
    "Launch your practice efficiently with minimal delays through our streamlined setup process",
    "Implement best practices from day one to ensure efficiency, compliance, and financial stability",
    "Avoid common startup billing pitfalls with expert guidance and proven processes",
    "Maximize revenue potential from the beginning with properly configured billing systems",
    "Ensure regulatory compliance from the start to reduce risks of penalties or delays",
    "Build scalable processes for future growth that can adapt as your practice expands"
  ];

  const targetAudience = [
    "New healthcare providers looking to launch their practice with confidence and avoid costly mistakes",
    "Specialty practices needing setup tailored to their specialty's unique requirements and billing needs",
    "Group practices requiring seamless setup for multiple providers and locations",
    "Practices transitioning to independence from employment to private practice with ease",
    "International Medical Graduates (IMGs) navigating the complexities of setting up a practice in the U.S."
  ];

  const setupFAQs = [
    {
      question: "How long does it take to set up a new practice with ClaimsMD?",
      answer: "The timeline varies depending on your practice's needs, but most practices are ready to open within 60-90 days of starting the process."
    },
    {
      question: "What services are included in new practice setup?",
      answer: "Our services include credentialing, billing system setup, revenue cycle management, compliance, and ongoing support."
    },
    {
      question: "Can you help with selecting practice management software?",
      answer: "Yes, we'll help you choose and implement the best software for your practice's needs."
    },
    {
      question: "Do you provide training for my staff?",
      answer: "Absolutely. We offer comprehensive training on billing, coding, and compliance to ensure your staff is prepared."
    },
    {
      question: "How do I get started with ClaimsMD's new practice setup services?",
      answer: "Simply contact us to schedule a free consultation. We'll discuss your goals and create a customized plan for your practice."
    },
    {
      question: "How far in advance should we engage your services before opening?",
      answer: "Ideally, we recommend engaging our services 3-6 months before your planned opening date to ensure adequate time for credentialing, system setup, and training."
    },
    {
      question: "Can you assist with location selection and office setup?",
      answer: "While our primary focus is on the operational and billing aspects, we do provide consulting on location factors that impact billing and reimbursement."
    }
  ];

  return (
    <Layout metaPage="newPracticeSetup">
      <ServiceDetail
        title="New Practice Setup"
        subtitle="Launch Your Practice with Confidence"
        description="Starting a new healthcare practice is an exciting venture, but it also comes with its fair share of challenges. From navigating complex regulations to setting up efficient billing systems, the process can feel overwhelming. That's where ClaimsMD comes in. We specialize in new practice setup services designed to help you launch your practice smoothly and successfully. From credentialing and billing system setup to compliance and revenue cycle management, we handle the details so you can focus on providing exceptional patient care. Let us help you build a strong foundation for your practice's success."
        image="/images/services/beautiful-woman-working-office.jpg"
        features={[
          "EHR and practice management system selection assistance",
          "Workflow design and optimization",
          "Staff training and education",
          "Payer enrollment and contracting",
          "Compliance program setup",
          "Fee schedule development",
          "Financial policy creation",
          "Credentialing and enrollment services",
          "Revenue cycle management implementation"
        ]}
        benefits={setupBenefits}
        steps={setupSteps}
        targetAudience={targetAudience}
        faqs={setupFAQs}
      />
    </Layout>
  );
};

export default NewPracticeSetup;
