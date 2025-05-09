
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main Pages
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Specialties from "./pages/Specialties";
import Blog from "./pages/Blog";
import About from "./pages/About";
import MessageFromCEO from "./pages/MessageFromCEO";
import Sitemap from "./pages/Sitemap";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

// Service Pages
import MedicalBillingAudit from "./pages/services/MedicalBillingAudit";
import MedicalBillingServices from "./pages/services/MedicalBillingServices";
import PatientEligibilityVerification from "./pages/services/PatientEligibilityVerification";
import DenialManagement from "./pages/services/DenialManagement";
import AccountReceivableManagement from "./pages/services/AccountReceivableManagement";
import CredentialingEnrollment from "./pages/services/CredentialingEnrollment";
import NewPracticeSetup from "./pages/services/NewPracticeSetup";
import ReputationManagement from "./pages/services/ReputationManagement";
import ValueAddedServices from "./pages/services/ValueAddedServices";
import RevenueCycleManagement from "./pages/services/RevenueCycleManagement";
import ARManagementServices from "./pages/services/ARManagementServices";
import PatientBillingAudit from "./pages/services/PatientBillingAudit";
import BillingReviewServices from "./pages/services/BillingReviewServices";
import HealthcareDigitalMarketing from "./pages/services/HealthcareDigitalMarketing";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/specialties" element={<Specialties />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/message-from-ceo" element={<MessageFromCEO />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />

          {/* Service Pages */}
          <Route path="/services/medical-billing-audit" element={<MedicalBillingAudit />} />
          <Route path="/services/medical-billing-services" element={<MedicalBillingServices />} />
          <Route path="/services/patient-eligibility-verification" element={<PatientEligibilityVerification />} />
          <Route path="/services/denial-management" element={<DenialManagement />} />
          <Route path="/services/account-receivable-management" element={<AccountReceivableManagement />} />
          <Route path="/services/credentialing-enrollment" element={<CredentialingEnrollment />} />
          <Route path="/services/new-practice-setup" element={<NewPracticeSetup />} />
          <Route path="/services/reputation-management" element={<ReputationManagement />} />
          <Route path="/services/value-added-services" element={<ValueAddedServices />} />
          <Route path="/services/revenue-cycle-management" element={<RevenueCycleManagement />} />
          <Route path="/services/ar-management-services" element={<ARManagementServices />} />
          <Route path="/services/patient-billing-audit" element={<PatientBillingAudit />} />
          <Route path="/services/billing-review-services" element={<BillingReviewServices />} />
          <Route path="/services/healthcare-digital-marketing" element={<HealthcareDigitalMarketing />} />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
