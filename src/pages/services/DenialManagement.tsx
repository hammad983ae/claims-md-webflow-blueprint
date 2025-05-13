
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';
import HPC from '../../Assets/Healthcare Professional in Clinic.jpeg';
import { FileText, Check, Shield, TrendingUp, Users } from 'lucide-react';

const DenialManagement = () => {
  return (
    <Layout>
      <ServiceDetail
        title="Denial Management"
        subtitle="Turn Denials into Revenue"
        description="Claim denials are one of the most significant challenges healthcare providers face today. On average, 5-10% of claims are denied on the first submission, and without proper management, these denials can lead to substantial revenue loss and administrative burdens. At ClaimsMD, we specialize in denial management services designed to identify, resolve, and prevent claim denials. Our proactive approach ensures that your practice recovers lost revenue, reduces denial rates, and maintains a healthy cash flow."
        image={HPC}
        features={[
          "Revenue Loss: Unresolved denials can cost your practice thousands of dollars annually.",
          "Increased Administrative Burden: Managing denials manually is time-consuming and diverts resources from patient care.",
          "Cash Flow Disruptions: Delayed reimbursements can strain your practice's finances.",
          "Compliance Risks: Unaddressed denials can lead to compliance issues and potential audits."
        ]}
        benefits={[
          "Recover lost revenue from denied claims",
          "Reduce future denials through process improvements",
          "Accelerate cash flow with faster appeals resolution",
          "Gain insights into denial patterns and trends",
          "Improve staff understanding of denial prevention",
          "Strengthen payer negotiation position"
        ]}
        steps={[
          {
            title: "Denial Analysis",
            description: "We begin by conducting a thorough analysis of your denied claims to identify patterns and root causes. This includes reviewing coding errors (ICD-10, CPT, HCPCS), missing or incorrect patient information, payer-specific billing requirements, and timely filing issues."
          },
          {
            title: "Denial Resolution",
            description: "Our team of certified billing experts works diligently to resolve denials by correcting errors and resubmitting claims, filing appeals with supporting documentation, and communicating with payers to resolve disputes."
          },
          {
            title: "Proactive Prevention",
            description: "We don't just fix denials – we help prevent them. Our prevention strategies include implementing process improvements to reduce errors, providing staff training on coding and billing best practices, and conducting regular audits to identify potential issues."
          },
          {
            title: "Detailed Reporting",
            description: "We provide comprehensive reports that include denial trends and root causes, resolved claims and recovered revenue, and recommendations for reducing future denials."
          },
          {
            title: "Ongoing Support",
            description: "Our team is always available to address your denial management needs and provide ongoing support to ensure long-term success."
          }
        ]}
        serviceFeatures={[
          {
            title: "Expertise You Can Trust",
            description: "Our team includes certified medical coders, billing specialists, and denial management experts with years of experience in the healthcare industry."
          },
          {
            title: "Advanced Technology",
            description: "We use state-of-the-art denial management tools to track, analyze, and resolve denials quickly and efficiently."
          },
          {
            title: "Improved Cash Flow",
            description: "By reducing denials and recovering lost revenue, we help you maintain a steady cash flow and improve financial stability."
          },
          {
            title: "Reduced Administrative Burden",
            description: "Our services free up your staff to focus on patient care and other critical tasks."
          },
          {
            title: "Customized Solutions",
            description: "We tailor our denial management strategies to meet the unique needs of your practice."
          }
        ]}
        targetAudience={[
          "Small Practices: Recover lost revenue and reduce administrative burdens.",
          "Multi-Specialty Clinics: Address denial trends across multiple specialties.",
          "Large Healthcare Organizations: Streamline denial management for high claim volumes.",
          "Practices with High Denial Rates: Identify and resolve the root causes of denials.",
          "New Practices: Establish best practices to minimize denials from the start."
        ]}
        faqs={[
          {
            question: "How much revenue can I recover with denial management services?",
            answer: "The amount of recoverable revenue depends on your practice's denial rate and the root causes of denials. On average, practices recover 3-5% of their total revenue through effective denial management."
          },
          {
            question: "How quickly do you begin working on denied claims?",
            answer: "We begin working on denied claims within 24-48 hours of receiving the denial notification to ensure timely appeals."
          },
          {
            question: "How long does it take to resolve denied claims?",
            answer: "The timeline for resolving denials varies depending on the complexity of the issue. Most denials are resolved within 30-60 days."
          },
          {
            question: "Can you help prevent future denials?",
            answer: "Yes, our proactive prevention strategies are designed to reduce your denial rate and prevent future issues."
          },
          {
            question: "Do you handle both technical and clinical denials?",
            answer: "Yes, we handle all types of denials including technical, clinical, authorization-related, and coding-related denials."
          },
          {
            question: "Do you work with all payers?",
            answer: "Yes, we have experience working with Medicare, Medicaid, and all major private insurance payers."
          }
        ]}
        contactInfo={{
          phone: "(555) 123-4567",
          email: "denials@claimsmd.com"
        }}
      />
    </Layout>
  );
};

export default DenialManagement;
