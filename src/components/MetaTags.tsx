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
      title: "Provider Credentialing & Enrollment - ClaimsMD",
      description: "Streamline provider credentialing and payer enrollment with ClaimsMD's expert credentialing services.",
      keywords: "Provider Credentialing, Payer Enrollment, Medical Credentialing, CAQH Setup, Insurance Enrollment"
    },
    newPracticeSetup: {
      title: "New Medical Practice Setup - ClaimsMD",
      description: "Launch your medical practice successfully with ClaimsMD's comprehensive practice setup and billing solutions.",
      keywords: "New Practice Setup, Medical Practice Launch, Practice Management, Healthcare Startup, Billing Setup"
    },
    reputationManagement: {
      title: "Healthcare Reputation Management - ClaimsMD",
      description: "Protect and enhance your medical practice's online reputation with ClaimsMD's reputation management services.",
      keywords: "Reputation Management, Online Reviews, Healthcare Branding, Medical Practice Reputation, Patient Reviews"
    },
    valueAddedServices: {
      title: "Value Added Healthcare Services - ClaimsMD",
      description: "Enhance your practice operations with ClaimsMD's value-added services and specialized healthcare solutions.",
      keywords: "Value Added Services, Healthcare Support, Practice Enhancement, Medical Billing Add-ons, Healthcare Solutions"
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
      title: "Medical Billing Review Services - ClaimsMD",
      description: "Optimize billing accuracy and compliance with ClaimsMD's comprehensive billing review and audit services.",
      keywords: "Billing Review, Medical Billing Audit, Coding Review, Billing Compliance, Revenue Optimization"
    },
    healthcareMarketing: {
      title: "Healthcare Digital Marketing Services - ClaimsMD",
      description: "Grow your medical practice with ClaimsMD's specialized healthcare digital marketing and patient acquisition strategies.",
      keywords: "Healthcare Marketing, Medical Practice Marketing, Digital Marketing for Doctors, Patient Acquisition, Healthcare SEO"
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
    },
    // Legal and Policy Pages
    privacyPolicy: {
      title: "Privacy Policy - ClaimsMD",
      description: "Learn about ClaimsMD's privacy practices and how we protect your personal information and healthcare data.",
      keywords: "Privacy Policy, Data Protection, HIPAA Compliance, Healthcare Privacy, Medical Billing Privacy"
    },
    termsConditions: {
      title: "Terms & Conditions - ClaimsMD",
      description: "Review ClaimsMD's terms and conditions for our medical billing and revenue cycle management services.",
      keywords: "Terms Conditions, Service Agreement, Medical Billing Terms, Healthcare Services Agreement"
    },
    returnPolicy: {
      title: "Return Policy - ClaimsMD",
      description: "Understand ClaimsMD's return and refund policy for our medical billing services and solutions.",
      keywords: "Return Policy, Refund Policy, Service Guarantee, Medical Billing Refunds"
    },
    qualityPolicy: {
      title: "Quality Policy - ClaimsMD",
      description: "Discover ClaimsMD's commitment to quality assurance and excellence in medical billing services.",
      keywords: "Quality Policy, Quality Assurance, Medical Billing Standards, Healthcare Quality, Service Excellence"
    },
    // Company Pages
    whoWeAre: {
      title: "Who We Are - ClaimsMD",
      description: "Meet the ClaimsMD team and learn about our company history, leadership, and commitment to healthcare providers.",
      keywords: "Who We Are, ClaimsMD Team, Company History, Healthcare Leadership, Medical Billing Experts"
    },
    whyClaimsMD: {
      title: "Why Choose ClaimsMD - Medical Billing Excellence",
      description: "Discover why healthcare providers choose ClaimsMD for superior medical billing services and revenue cycle management.",
      keywords: "Why ClaimsMD, Medical Billing Benefits, Healthcare RCM, Choose ClaimsMD, Billing Excellence"
    },
    // Other Pages
    sitemap: {
      title: "Sitemap - ClaimsMD",
      description: "Navigate ClaimsMD's website easily with our comprehensive sitemap of medical billing services and resources.",
      keywords: "Sitemap, Website Navigation, ClaimsMD Pages, Medical Billing Services Directory"
    },
    notFound: {
      title: "Page Not Found - ClaimsMD",
      description: "The page you're looking for doesn't exist. Explore ClaimsMD's medical billing services and solutions.",
      keywords: "404 Error, Page Not Found, ClaimsMD Navigation, Medical Billing Services"
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
