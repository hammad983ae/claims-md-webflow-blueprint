import React from "react";
// import { Helmet } from "react-helmet";

interface MetaTagsProps {
  page: string;
}

const MetaTags = ({ page }: MetaTagsProps) => {
  const meta: Record<string, { title: string; description: string; keywords: string }> = {
    home: {
      title: "ClaimsMD - Excellence in Revenue Recovery",
      description: "Discover how ClaimsMD accelerates your revenue cycle with expert solutions in eligibility, AR management, denial handling & more.",
      keywords: "ClaimsMD, Revenue Cycle Management, Healthcare Billing Solutions, Denial Management, Credentialing, Medical Practice Setup, Healthcare Marketing"
    },
    services: {
      title: "ClaimsMD - Our Medical Billing Services",
      description: "Explore our comprehensive range of medical billing services designed to maximize your practice's revenue.",
      keywords: "Medical Billing Services, Revenue Cycle Management, AR Services, Healthcare Billing Solutions, Claims Submission, Payment Posting"
    },
    medicalBillingAudit: {
      title: "Medical Billing Audit - ClaimsMD",
      description: "Ensure accurate billing and compliance with our professional medical billing audit services.",
      keywords: "Medical Billing Audit, Healthcare Billing Audit, Compliance Audit, Medical Billing Review"
    },
    patientEligibilityVerification: {
      title: "Patient Eligibility Verification - ClaimsMD",
      description: "Streamline your insurance checks with accurate and fast patient eligibility verification services.",
      keywords: "Patient Eligibility Verification, Insurance Eligibility, Real-time Verification, Insurance Check Services"
    },
    denialManagement: {
      title: "Denial Management - ClaimsMD",
      description: "Reduce denials and maximize revenue with our expert denial management services.",
      keywords: "Denial Management, Claims Rejection Handling, Insurance Denials, Healthcare Billing Denials"
    },
    arManagement: {
      title: "Account Receivable Management - ClaimsMD",
      description: "Accelerate cash flow with our efficient Account Receivable Management services.",
      keywords: "AR Management, Account Receivable Services, Medical Billing Collections, Revenue Recovery"
    },
    credentialing: {
      title: "Credentialing and Enrollment - ClaimsMD",
      description: "Get your providers enrolled and credentialed quickly with our efficient solutions.",
      keywords: "Provider Credentialing, Enrollment Services, Payer Enrollment, CAQH Setup"
    },
    newPracticeSetup: {
      title: "New Practice Setup - ClaimsMD",
      description: "Start your medical practice with our all-in-one setup solutions including billing, credentialing, and marketing.",
      keywords: "New Practice Setup, Start Medical Practice, Healthcare Startup Services, Practice Management"
    },
    reputationManagement: {
      title: "Reputation Management - ClaimsMD",
      description: "Boost your online presence and protect your brand with our reputation management solutions.",
      keywords: "Reputation Management, Online Reviews, Practice Marketing, Healthcare Branding"
    },
    valueAddedServices: {
      title: "Value Added Services - ClaimsMD",
      description: "Enhance your practice operations with our value-added services tailored to your needs.",
      keywords: "Healthcare Support Services, Value Added Medical Services, Billing Enhancement, Practice Solutions"
    },
    revenueCycleManagement: {
      title: "Revenue Cycle Management - ClaimsMD",
      description: "Optimize your entire revenue cycle from patient intake to final payment.",
      keywords: "Revenue Cycle Management, RCM Solutions, Complete Billing Services, Healthcare Revenue"
    },
    arServices: {
      title: "A/R Management Services - ClaimsMD",
      description: "Efficient A/R management services to reduce aging and increase collections.",
      keywords: "AR Services, Account Receivables, Medical Billing AR, Aging Recovery"
    },
    patientBillingAudit: {
      title: "Patient Billing Audit - ClaimsMD",
      description: "Identify errors and improve collections with our patient billing audit solutions.",
      keywords: "Patient Billing Audit, Billing Review, Claim Accuracy, Medical Billing Evaluation"
    },
    billingReview: {
      title: "Billing Review Services - ClaimsMD",
      description: "Ensure billing accuracy and optimize reimbursements through detailed reviews.",
      keywords: "Billing Review Services, Coding Accuracy, Claim Audit, Billing Compliance"
    },
    healthcareMarketing: {
      title: "Healthcare Digital Marketing - ClaimsMD",
      description: "Grow your practice with targeted healthcare digital marketing strategies.",
      keywords: "Healthcare Marketing, Digital Marketing for Doctors, SEO Medical Practice, Online Patient Growth"
    },
    specialties: {
      title: "Medical Billing Specialties - ClaimsMD",
      description: "Tailored billing solutions for every specialty including primary care, cardiology, mental health, and more.",
      keywords: "Specialty Billing, Medical Billing by Specialty, Cardiology Billing, Behavioral Health Billing"
    },
    blog: {
      title: "ClaimsMD Blog - Insights & Updates",
      description: "Stay informed with medical billing insights, news, and tips from the ClaimsMD blog.",
      keywords: "Medical Billing Blog, Healthcare News, Billing Tips, ClaimsMD Insights"
    },
    ceoMessage: {
      title: "Message from the CEO - ClaimsMD",
      description: "Hear directly from our CEO on the vision, mission, and values driving ClaimsMD forward.",
      keywords: "ClaimsMD CEO Message, Leadership Vision, Healthcare Management, Medical Billing Company"
    },
    aboutUs: {
      title: "About Us - ClaimsMD",
      description: "Learn more about ClaimsMD, our mission, vision, and commitment to your success.",
      keywords: "About ClaimsMD, Medical Billing Experts, Healthcare RCM, Company Overview"
    },
    contactUs: {
      title: "Contact Us - ClaimsMD",
      description: "Get in touch with ClaimsMD for customized medical billing solutions and support.",
      keywords: "Contact ClaimsMD, Billing Consultation, Medical Billing Help, RCM Support"
    }
  };

  return (
    <>
      <title>{meta[page]?.title || "ClaimsMD - Medical Billing Solutions"}</title>
      <meta name="description" content={meta[page]?.description || "ClaimsMD provides comprehensive medical billing solutions for healthcare providers."} />
      <meta name="keywords" content={meta[page]?.keywords || "Medical Billing, Healthcare, Revenue Cycle Management"} />
    </>
  );
};

export default MetaTags;
