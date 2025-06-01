
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';
import MMI from '../../Assets/Medical Monitor Interaction.jpeg';

const MedicalBillingServices = () => {
  const billingSteps = [
    {
      title: "Claims Submission & Follow-Up",
      description: "We ensure your claims are submitted accurately and on time, with proactive follow-up to resolve any issues quickly. Our team verifies patient eligibility and benefits, ensures accurate coding (ICD-10, CPT, HCPCS), and tracks claims to ensure timely payment."
    },
    {
      title: "Denial Management & Appeals",
      description: "Denied claims can significantly impact your revenue. Our denial management services include identifying the root causes of denials, implementing corrective actions to prevent future denials, and handling the appeals process to recover lost revenue."
    },
    {
      title: "Patient Billing & Collections",
      description: "We provide clear and professional patient statements, along with compassionate collections services to improve patient satisfaction and reduce outstanding balances. This includes generating easy-to-understand patient statements, offering flexible payment options, and managing collections with sensitivity and professionalism."
    },
    {
      title: "Credentialing & Enrollment",
      description: "Proper credentialing and enrollment are essential for receiving reimbursements. Our experts handle provider credentialing with payers, enrollment in Medicare, Medicaid, and private insurance plans, and regular updates to ensure compliance with payer requirements."
    },
    {
      title: "Revenue Cycle Management (RCM)",
      description: "From patient registration to final payment posting, we manage every step of your revenue cycle to optimize efficiency and profitability. Our RCM services include patient eligibility verification, charge entry and coding, payment posting and reconciliation, and accounts receivable (AR) follow-up."
    },
    {
      title: "Compliance Audits & Consulting",
      description: "Staying compliant with healthcare regulations is critical to avoiding penalties and audits. Our compliance services include conducting regular compliance audits, providing training and education for your staff, and offering consulting services to address specific compliance challenges."
    }
  ];

  const outsourcingBenefits = [
    "Maximized Revenue through expertise that ensures accurate coding, timely claims submission, and proactive denial management to minimize revenue leakage",
    "Reduced Administrative Burden by freeing up your staff to focus on patient care while we handle the complexities of medical billing",
    "Improved Compliance to stay up-to-date with the latest regulations and reduce the risk of audits and penalties",
    "Enhanced Patient Satisfaction through streamlined billing processes that lead to fewer billing errors and faster resolutions",
    "Scalable Solutions that grow with your practice, ensuring you always have the support you need",
    "Cutting-edge technology combined with certified billing professionals to deliver results you can count on"
  ];

  const targetAudience = [
    "Small practices looking to maximize revenue and reduce administrative burden",
    "Large healthcare organizations seeking scalable billing solutions",
    "Multi-specialty clinics requiring expertise across different medical specialties",
    "Practices experiencing high denial rates or billing inefficiencies",
    "Healthcare providers wanting to focus more on patient care rather than billing complexities",
    "New practices looking to establish efficient billing processes from the start"
  ];

  const billingFAQs = [
    {
      question: "How much does it cost to outsource medical billing to ClaimsMD?",
      answer: "Our pricing is tailored to the size and needs of your practice. We offer competitive rates and flexible pricing models. Contact us for a customized quote based on your specific requirements."
    },
    {
      question: "Will I lose control over my billing process?",
      answer: "Not at all. We work closely with you to ensure transparency and provide regular reports on your practice's financial performance. You maintain oversight while we handle the day-to-day operations."
    },
    {
      question: "How quickly can ClaimsMD start managing my billing?",
      answer: "We can typically onboard your practice and begin managing your billing within 2-4 weeks, depending on the complexity of your needs and current systems."
    },
    {
      question: "Do you work with practices in all specialties?",
      answer: "Yes, we have experience working with practices across all specialties, including primary care, cardiology, orthopedics, mental health, and many more. Our team understands the unique billing requirements of different specialties."
    },
    {
      question: "Can you work with our existing EHR/PM system?",
      answer: "Yes, our team is experienced with all major Electronic Health Record and Practice Management systems, and we can integrate seamlessly with your existing workflow."
    },
    {
      question: "How quickly can we expect to see improvements?",
      answer: "Most clients see initial improvements within 30-60 days, with significant enhancements to revenue cycle performance within 90 days of implementation."
    },
    {
      question: "What is your clean claims submission rate?",
      answer: "Our average clean claims submission rate exceeds 98%, which is significantly higher than the industry average of 75-85%."
    }
  ];

  return (
    <Layout metaPage="services">
      <ServiceDetail
        title="Medical Billing Services"
        subtitle="Optimize Your Revenue Cycle"
        description="At ClaimsMD, we understand that medical billing is more than just submitting claims – it's the backbone of your practice's financial health. With ever-changing regulations, complex payer requirements, and the constant pressure to maximize revenue, managing medical billing in-house can be overwhelming. As a trusted leader in medical billing services, we provide end-to-end solutions designed to streamline your revenue cycle, reduce administrative burdens, and ensure you get paid accurately and on time."
        image={MMI}
        features={[
          "Complete claims submission and processing with proactive follow-up",
          "Comprehensive denial management and appeals process",
          "Professional patient billing and collections services",
          "Provider credentialing and payer enrollment",
          "Full revenue cycle management from registration to payment",
          "Compliance audits and consulting services",
          "Real-time reporting and analytics dashboard",
          "Integration with existing practice management systems",
          "Dedicated account management and support"
        ]}
        benefits={outsourcingBenefits}
        steps={billingSteps}
        targetAudience={targetAudience}
        faqs={billingFAQs}
      />
    </Layout>
  );
};

export default MedicalBillingServices;
