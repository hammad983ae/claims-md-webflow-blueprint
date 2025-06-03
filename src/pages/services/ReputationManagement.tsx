
import Layout from '@/components/Layout';
import ServiceDetail from '@/components/ServiceDetail';
import HC from '../../Assets/Healthcare Consultation.jpeg';

const ReputationManagement = () => {
  const reputationSteps = [
    {
      title: "Reputation Assessment",
      description: "We begin by conducting a thorough assessment of your current online presence, including reviewing patient feedback on platforms like Google, Yelp, and Healthgrades, analyzing your practice's ratings and overall sentiment, and identifying areas for improvement and potential risks."
    },
    {
      title: "Review Monitoring and Management",
      description: "We monitor your online reviews and feedback in real time, ensuring positive reviews are acknowledged and celebrated, negative reviews are addressed promptly and professionally, and feedback trends are analyzed to identify opportunities for improvement."
    },
    {
      title: "Proactive Reputation Building",
      description: "We help you build and maintain a positive reputation by encouraging satisfied patients to leave reviews, showcasing patient testimonials on your website and social media, and highlighting your practice's strengths and achievements."
    },
    {
      title: "Feedback Resolution",
      description: "We work with you to address patient concerns and resolve issues, including responding to negative reviews with empathy and professionalism, implementing changes to improve patient satisfaction, and turning negative experiences into positive outcomes."
    },
    {
      title: "Ongoing Monitoring and Support",
      description: "Reputation management is an ongoing process. We provide continuous support to monitor your online presence and address new feedback, adapt your strategy to changing trends and patient expectations, and ensure your practice maintains a strong and positive reputation."
    }
  ];

  const reputationBenefits = [
    "Build patient trust through positive reviews and testimonials that enhance credibility and encourage new patients to choose your practice",
    "Improve patient retention by addressing feedback and resolving issues to show patients you care about their experience",
    "Boost online visibility as a strong online reputation improves your search engine rankings, making it easier for patients to find you",
    "Protect your practice by proactively managing your reputation to mitigate the impact of negative reviews or complaints",
    "Enhanced online presence with professional management of your digital footprint across all platforms",
    "Expert response strategies using proven methods to address feedback professionally and effectively"
  ];

  const targetAudience = [
    "New practices looking to build a positive reputation from the start to attract new patients",
    "Established practices wanting to protect and enhance their existing reputation to retain patients and stay competitive",
    "Practices facing negative reviews needing to address and resolve negative feedback to restore patient trust",
    "Multi-location practices requiring consistent reputation management across all locations",
    "Specialty practices seeking to highlight their expertise and build trust within their specialty"
  ];

  const reputationFAQs = [
    {
      question: "How quickly can you address negative reviews?",
      answer: "We monitor reviews in real time and address negative feedback within 24-48 hours to minimize its impact."
    },
    {
      question: "Can you help improve my practice's online ratings?",
      answer: "Yes, we implement strategies to encourage satisfied patients to leave positive reviews and improve your overall ratings."
    },
    {
      question: "Do you manage reviews on all platforms?",
      answer: "Yes, we monitor and manage reviews on platforms like Google, Yelp, Healthgrades, and more."
    },
    {
      question: "How do you handle patient complaints?",
      answer: "We respond to complaints with empathy and professionalism, working with you to resolve issues and improve patient satisfaction."
    },
    {
      question: "How do I get started with ClaimsMD's reputation management services?",
      answer: "Simply contact us to schedule a free consultation. We'll assess your current reputation and create a customized plan for your practice."
    },
    {
      question: "What platforms do you monitor for reviews?",
      answer: "We monitor all major review platforms including Google My Business, Yelp, Healthgrades, Vitals, WebMD, and social media platforms."
    },
    {
      question: "Can you help with crisis management for serious reputation issues?",
      answer: "Yes, we have experience handling reputation crises and can develop a comprehensive strategy to address serious issues and restore your practice's reputation."
    }
  ];

  return (
    <Layout metaPage="services">
      <ServiceDetail
        title="Reputation Management"
        subtitle="Protect and Enhance Your Practice's Reputation"
        description="In today's digital age, your practice's reputation is more important than ever. Patients rely on online reviews, ratings, and feedback to choose their healthcare providers. A single negative review or unresolved complaint can significantly impact your practice's credibility, patient trust, and ultimately, your bottom line. At ClaimsMD, we understand the critical role reputation plays in the success of your practice. That's why we offer reputation management services designed to help you monitor, protect, and enhance your online presence. From managing patient reviews to addressing feedback, we ensure your practice maintains a positive reputation that attracts and retains patients."
        image={HC}
        features={[
          "Comprehensive online reputation monitoring across all platforms",
          "Professional review response and management services",
          "Proactive reputation building and enhancement strategies",
          "Patient feedback analysis and trend identification",
          "Crisis management and reputation recovery services",
          "Review generation campaigns to encourage positive feedback",
          "Social media reputation management and monitoring",
          "Competitive reputation analysis and benchmarking",
          "Detailed reputation reporting and analytics"
        ]}
        benefits={reputationBenefits}
        steps={reputationSteps}
        targetAudience={targetAudience}
        faqs={reputationFAQs}
      />
    </Layout>
  );
};

export default ReputationManagement;
