
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';
import PWP from '../../Assets/Pregnant Woman at Prenatal Examination.jpeg';

const PatientEligibilityVerification = () => {
  const eligibilitySteps = [
    {
      title: "Collect Patient Information",
      description: "We gather essential patient details, including patient demographics (name, date of birth, contact information) and insurance information (policy number, group number, payer details)."
    },
    {
      title: "Verify Insurance Coverage",
      description: "Using advanced technology and direct connections to payer databases, we verify active coverage status, effective dates of coverage, and plan-specific benefits and limitations."
    },
    {
      title: "Confirm Eligibility for Specific Services",
      description: "We ensure the patient's insurance covers the services you plan to provide by checking covered procedures and treatments, pre-authorization requirements, and co-pays, deductibles, and co-insurance details."
    },
    {
      title: "Provide Clear and Actionable Reports",
      description: "We deliver easy-to-understand reports that include verification status (eligible or ineligible), patient responsibility (co-pays, deductibles, etc.), and any additional requirements (e.g., pre-authorizations)."
    },
    {
      title: "Ongoing Support",
      description: "Our team is available to address any questions or concerns related to patient eligibility, ensuring a seamless experience for your practice and your patients."
    }
  ];

  const eligibilityBenefits = [
    "Prevent claim denials by verifying coverage before services are rendered, reducing the risk of rejections due to ineligible patients or lapsed coverage",
    "Improve patient satisfaction through clear communication about coverage and out-of-pocket costs, leading to fewer billing surprises",
    "Save time and resources by automating the verification process, freeing up your staff to focus on patient care and other critical tasks",
    "Maximize revenue by ensuring accurate eligibility upfront, minimizing delays in reimbursements and improving cash flow",
    "Advanced technology with state-of-the-art verification tools that integrate seamlessly with your practice management system",
    "Expertise you can trust from our team of billing specialists with in-depth knowledge of insurance policies and payer requirements"
  ];

  const targetAudience = [
    "Small practices looking to save time and resources by automating eligibility verification",
    "Multi-specialty clinics needing to ensure accurate coverage verification across a wide range of services",
    "Large healthcare organizations seeking to streamline the verification process for high patient volumes",
    "New practices wanting to establish best practices from the start to avoid costly errors",
    "Practices with high denial rates looking to reduce denials and improve revenue cycle efficiency"
  ];

  const eligibilityFAQs = [
    {
      question: "How quickly can ClaimsMD verify patient eligibility?",
      answer: "Our advanced technology allows us to verify eligibility in real time, ensuring you have the information you need before providing services."
    },
    {
      question: "Do you verify eligibility for all insurance plans?",
      answer: "Yes, we verify eligibility for Medicare, Medicaid, and all major private insurance plans."
    },
    {
      question: "What happens if a patient's coverage is inactive?",
      answer: "If a patient's coverage is inactive, we notify your practice immediately and provide guidance on next steps, such as discussing payment options with the patient."
    },
    {
      question: "Can your system integrate with our practice management software?",
      answer: "Yes, our verification tools are designed to integrate seamlessly with most practice management systems."
    },
    {
      question: "How does eligibility verification improve patient satisfaction?",
      answer: "By verifying coverage upfront, we help you provide clear and accurate information about patient responsibilities, reducing billing surprises and improving satisfaction."
    },
    {
      question: "How far in advance should eligibility verification be performed?",
      answer: "We recommend verifying eligibility 2-3 days before scheduled appointments for most services, and 5-7 days before high-cost procedures."
    },
    {
      question: "What information do you need to verify eligibility?",
      answer: "We typically need the patient's name, date of birth, insurance ID number, group number (if applicable), and the anticipated service codes."
    }
  ];

  return (
    <Layout metaPage="services">
      <ServiceDetail
        title="Patient Eligibility Verification"
        subtitle="Ensure Accurate Reimbursements from the Start"
        description="At ClaimsMD, we understand that the foundation of a smooth revenue cycle begins with accurate patient eligibility verification. Verifying a patient's insurance coverage before providing services is critical to avoiding claim denials, reducing administrative headaches, and ensuring timely reimbursements. With ever-changing insurance policies and complex payer requirements, manually verifying patient eligibility can be time-consuming and prone to errors. That's why ClaimsMD offers a streamlined, technology-driven solution to handle this process for you – so you can focus on delivering exceptional patient care."
        image={PWP}
        features={[
          "Real-time insurance verification with direct payer connections",
          "Patient benefit explanation and coverage confirmation",
          "Coverage confirmation for specific procedures and treatments",
          "Pre-authorization assistance and requirement identification",
          "Patient responsibility estimation for co-pays and deductibles",
          "Insurance card scanning and verification technology",
          "Secondary insurance identification and verification",
          "Integration with practice management systems",
          "Comprehensive eligibility reporting and documentation"
        ]}
        benefits={eligibilityBenefits}
        steps={eligibilitySteps}
        targetAudience={targetAudience}
        faqs={eligibilityFAQs}
      />
    </Layout>
  );
};

export default PatientEligibilityVerification;
