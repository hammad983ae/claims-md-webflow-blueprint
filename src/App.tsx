
import React, {useEffect} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Index from '@/pages/Index';
import Services from '@/pages/Services';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Blog from '@/pages/Blog';
import Specialties from '@/pages/Specialties';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsConditions from '@/pages/TermsConditions';
import Sitemap from '@/pages/Sitemap';
import NotFound from '@/pages/NotFound';
import MedicalBillingAudit from '@/pages/services/MedicalBillingAudit';
import MedicalBillingServices from '@/pages/services/MedicalBillingServices';
import PatientEligibilityVerification from '@/pages/services/PatientEligibilityVerification';
import DenialManagement from '@/pages/services/DenialManagement';
import AccountReceivableManagement from '@/pages/services/AccountReceivableManagement';
import CredentialingEnrollment from '@/pages/services/CredentialingEnrollment';
import NewPracticeSetup from '@/pages/services/NewPracticeSetup';
import ReputationManagement from '@/pages/services/ReputationManagement';
import ValueAddedServices from '@/pages/services/ValueAddedServices';
import RevenueCycleManagement from '@/pages/services/RevenueCycleManagement';
import ARManagementServices from '@/pages/services/ARManagementServices';
import PatientBillingAudit from '@/pages/services/PatientBillingAudit';
import BillingReviewServices from '@/pages/services/BillingReviewServices';
import HealthcareDigitalMarketing from '@/pages/services/HealthcareDigitalMarketing';
import MessageFromCEO from '@/pages/MessageFromCEO';
import WhyClaimsMD from '@/pages/WhyClaimsMD';
import TawTo from './components/TawTo';
import TawkTest from './components/TawkTest';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    errorElement: <NotFound />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/blog",
    element: <Blog />
  },
  {
    path: "/specialties",
    element: <Specialties />
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />
  },
  {
    path: "/terms-conditions",
    element: <TermsConditions />
  },
  {
    path: "/sitemap",
    element: <Sitemap />
  },
  {
    path: "/message-from-ceo",
    element: <MessageFromCEO />
  },
  {
    path: "/why-claims-md",
    element: <WhyClaimsMD />
  },
  {
    path: "/services/medical-billing-audit",
    element: <MedicalBillingAudit />
  },
  {
    path: "/services/medical-billing-services",
    element: <MedicalBillingServices />
  },
  {
    path: "/services/patient-eligibility-verification",
    element: <PatientEligibilityVerification />
  },
  {
    path: "/services/denial-management",
    element: <DenialManagement />
  },
  {
    path: "/services/account-receivable-management",
    element: <AccountReceivableManagement />
  },
  {
    path: "/services/credentialing-enrollment",
    element: <CredentialingEnrollment />
  },
  {
    path: "/services/new-practice-setup",
    element: <NewPracticeSetup />
  },
  {
    path: "/services/reputation-management",
    element: <ReputationManagement />
  },
  {
    path: "/services/value-added-services",
    element: <ValueAddedServices />
  },
  {
    path: "/services/revenue-cycle-management",
    element: <RevenueCycleManagement />
  },
  {
    path: "/services/ar-management-services",
    element: <ARManagementServices />
  },
  {
    path: "/services/patient-billing-audit",
    element: <PatientBillingAudit />
  },
  {
    path: "/services/billing-review-services",
    element: <BillingReviewServices />
  },
  {
    path: "/services/healthcare-digital-marketing",
    element: <HealthcareDigitalMarketing />
  },
]);

// useEffect(() => {
//   var Tawk_API = Tawk_API || {};
//   var Tawk_LoadStart = new Date();

//   const s1 = document.createElement("script");
//   s1.src = 'https://embed.tawk.to/67bf083c1722de190a434d04/default';
//   s1.async = true;
//   s1.charset = 'UTF-8';
//   s1.setAttribute('crossorigin', '*');
  
//   document.body.appendChild(s1);

//   return () => {
//     // Clean up script on unmount if needed
//     document.body.removeChild(s1);
//   };
// }, []);

function App() {
  return (
    <React.StrictMode>
      <TawkTest />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
