
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';
import PWP from '../../Assets/Pregnant Woman at Prenatal Examination.jpeg';

const PatientEligibilityVerification = () => {
  return (
    <Layout>
      <ServiceDetail
        title="Patient Eligibility Verification"
        description="Accurate verification of patient insurance coverage to reduce claim rejections and denials before services are rendered."
        image= {PWP}
        features={[
          "Real-time insurance verification",
          "Patient benefit explanation",
          "Coverage confirmation for specific procedures",
          "Pre-authorization assistance",
          "Patient responsibility estimation",
          "Insurance card scanning and verification",
          "Secondary insurance identification"
        ]}
        benefits={[
          "Reduce claim denials due to eligibility issues",
          "Improve patient satisfaction by providing upfront cost estimates",
          "Increase point-of-service collections",
          "Streamline patient check-in process",
          "Decrease administrative time spent on verification",
          "Reduce accounts receivable days"
        ]}
        faqs={[
          {
            question: "How far in advance should eligibility verification be performed?",
            answer: "We recommend verifying eligibility 2-3 days before scheduled appointments for most services, and 5-7 days before high-cost procedures."
          },
          {
            question: "Can you verify eligibility for all insurance providers?",
            answer: "Yes, we can verify eligibility for all major insurance providers and most regional and specialty plans."
          },
          {
            question: "What information do you need to verify eligibility?",
            answer: "We typically need the patient's name, date of birth, insurance ID number, group number (if applicable), and the anticipated service codes."
          }
        ]}
      />
    </Layout>
  );
};

export default PatientEligibilityVerification;
