import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Check, Search,
  Shield, FileSearch, Calendar, Hospital,
  Stethoscope, Brain, Pill, Clock, Syringe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getSpecialtyIcon } from '@/utils/specialtyIcons';

const Specialties = () => {
  const specialties = [
    // Primary Care & General Practice
    {
      title: 'Primary Care',
      description: 'Specialized billing solutions for Family Medicine, Internal Medicine, and General Practice.',
      features: ['Preventive care coding', 'Chronic care management billing', 'Value-based payment models']
    },
    {
      title: 'Family Medicine',
      description: 'Complete billing services for family practitioners covering patients of all ages.',
      features: ['Annual wellness visit coding', 'Preventive screening claims', 'Chronic disease documentation']
    },
    {
      title: 'Internal Medicine',
      description: 'Expert billing for adult primary care and complex medical conditions.',
      features: ['Complex E/M code optimization', 'Chronic care management', 'Transitional care billing']
    },
    
    // Cardiology & Heart-related
    {
      title: 'Cardiology',
      description: 'Expert billing for diagnostic procedures, interventional cardiology, and cardiac rehabilitation.',
      features: ['Nuclear study billing', 'Cardiac catheterization coding', 'Device implant reimbursement']
    },
    {
      title: 'Interventional Cardiology',
      description: 'Specialized billing for cardiac interventions, stent placements, and complex procedures.',
      features: ['Catheterization lab billing', 'Coronary intervention coding', 'Device implantation reimbursement']
    },
    {
      title: 'Cardiothoracic Surgery',
      description: 'Comprehensive billing for complex cardiac and thoracic surgical procedures.',
      features: ['Cardiac surgery coding', 'Thoracic procedure billing', 'Global surgical package management']
    },
    
    // Surgical Specialties
    {
      title: 'General Surgery',
      description: 'Detailed billing services for pre-operative, surgical, and post-operative care.',
      features: ['Surgical coding expertise', 'Global period management', 'Modifier usage optimization']
    },
    {
      title: 'Orthopedic Surgery',
      description: 'Comprehensive billing services for orthopedic surgeries, treatments, and rehabilitation.',
      features: ['Surgical procedure coding', "Worker's compensation expertise", 'DME billing']
    },
    {
      title: 'Neurosurgery',
      description: 'Specialized billing for complex brain, spine and nervous system surgeries.',
      features: ['Complex surgical coding', 'Neurosurgical procedure billing', 'Hospital/surgical center billing']
    },
    {
      title: 'Plastic & Reconstructive Surgery',
      description: 'Expert billing distinguishing between cosmetic and medically necessary procedures.',
      features: ['Medical necessity documentation', 'Reconstructive vs. cosmetic differentiation', 'Prior authorization management']
    },
    {
      title: 'Colorectal Surgery',
      description: 'Specialized billing for colorectal disorders, procedures and screenings.',
      features: ['Procedure coding expertise', 'Diagnostic vs. therapeutic coding', 'Global surgical package management']
    },
    {
      title: 'Thoracic Surgery',
      description: 'Comprehensive billing for chest, lung and esophageal surgeries.',
      features: ['Complex surgical coding', 'ICU/critical care billing', 'Procedure documentation optimization']
    },
    
    // Diagnostic Medicine
    {
      title: 'Radiology',
      description: 'Expert billing for diagnostic imaging, interventional procedures, and teleradiology.',
      features: ['Modality-specific coding', '3D rendering services', 'Technical/professional component billing']
    },
    {
      title: 'Pathology',
      description: 'Precise billing for laboratory, cytology, and anatomic pathology services.',
      features: ['Specimen collection billing', 'Test interpretation coding', 'Molecular diagnostics billing']
    },
    {
      title: 'Laboratory Medicine',
      description: 'Comprehensive billing for clinical laboratory testing and diagnostic services.',
      features: ['Panel vs. individual test coding', 'Medical necessity documentation', 'Molecular/genetic test billing']
    },
    {
      title: 'Nuclear Medicine',
      description: 'Specialized billing for nuclear imaging studies and therapeutic procedures.',
      features: ['Radiopharmaceutical billing', 'Study protocol documentation', 'Technical/professional components']
    },
    
    // Mental Health
    {
      title: 'Mental Health',
      description: 'Dedicated billing solutions for psychiatry, psychology, and behavioral health services.',
      features: ['Telehealth session billing', 'Group therapy coding', 'Insurance authorization management']
    },
    {
      title: 'Psychiatry',
      description: 'Specialized billing for psychiatric evaluations, medication management, and procedures.',
      features: ['E/M code optimization', 'Testing and assessment billing', 'Telehealth service coding']
    },
    {
      title: 'Behavioral Health',
      description: 'Comprehensive billing for therapy services, psychological testing, and behavioral interventions.',
      features: ['Group vs. individual therapy coding', 'Assessment billing', 'Authorization management']
    },
    
    // Neurology
    {
      title: 'Neurology',
      description: 'Specialized billing for neurological diagnostics, procedures, and ongoing care.',
      features: ['EEG/EMG billing', 'Complex neurological procedure coding', 'Stroke protocol billing']
    },
    
    // Other Specialties - grouped by general categories
    {
      title: 'Dermatology',
      description: 'Expert billing for skin conditions, procedures, and cosmetic vs. medical services.',
      features: ['Procedure coding expertise', 'Cosmetic vs. medical determination', 'Pathology coordination']
    },
    {
      title: 'Gastroenterology',
      description: 'Comprehensive billing for digestive health procedures, endoscopies, and treatments.',
      features: ['Endoscopic procedure coding', 'Facility and professional billing', 'Anesthesia coordination']
    },
    {
      title: 'Pulmonology',
      description: 'Specialized billing for respiratory diagnostics, treatments, and procedures.',
      features: ['Pulmonary function test billing', 'Sleep study coding', 'Respiratory therapy reimbursement']
    },
    {
      title: 'Oncology',
      description: 'Expert billing for cancer treatments, chemotherapy, and radiation therapy.',
      features: ['Chemotherapy administration coding', 'Treatment planning billing', 'Complex medication reimbursement']
    },
    {
      title: 'Pediatrics',
      description: 'Dedicated billing for well-child visits, developmental assessments, and pediatric care.',
      features: ['Immunization billing', 'Growth/development screening coding', 'Preventive service optimization']
    },
    {
      title: 'Obstetrics & Gynecology',
      description: 'Comprehensive billing for women\'s health, pregnancy care, and gynecological procedures.',
      features: ['Global OB package billing', 'GYN procedure coding', 'Pregnancy complication billing']
    },
    {
      title: 'Urology',
      description: 'Specialized billing for urological diagnostics, treatments, and surgical procedures.',
      features: ['Procedure coding expertise', 'Urodynamic study billing', 'Oncology treatment coordination']
    },
  ];

  const allSpecialties = [
    "Allergy & Immunology", "Anesthesiology", "Audiology", "Bariatric Surgery", "Behavioral Health",
    "Cardiology", "Cardiothoracic Surgery", "Chiropractic", "Colorectal Surgery", "Critical Care Medicine",
    "Dermatology", "Dietetics & Nutrition", "DME (Durable Medical Equipment)", "Emergency Medicine", "Endocrinology",
    "Family Medicine", "Gastroenterology", "General Surgery", "Genetics", "Geriatrics",
    "Gynecology", "GYN Oncology", "Hematology", "Home Health", "Hospice & Palliative Care",
    "Hospitalist", "Infectious Disease", "Internal Medicine", "Interventional Cardiology", "Interventional Pain Management",
    "Interventional Radiology", "Laboratory Medicine", "Maxillofacial Surgery", "Medical Oncology", "Mental Health Counseling",
    "Neonatology", "Nephrology", "Neurology", "Neurosurgery", "Nuclear Medicine",
    "Nursing Services (NPs)", "Obstetrics", "Occupational Medicine", "Occupational Therapy", "Oncology",
    "Ophthalmology", "Optometry", "Oral Surgery", "Orthopedic Surgery", "Otolaryngology (ENT)",
    "Pain Management", "Palliative Care", "Pathology", "Pediatrics", "Physical Medicine & Rehabilitation (PM&R)",
    "Physical Therapy", "Plastic & Reconstructive Surgery", "Podiatry", "Preventive Medicine", "Primary Care",
    "Psychiatry", "Psychotherapy", "Pulmonology", "Radiation Oncology", "Radiology",
    "Reconstructive Surgery", "Reproductive Endocrinology", "Rheumatology", "Sleep Medicine", "Social Work (Clinical Billing)",
    "Speech Therapy", "Sports Medicine", "Surgical Oncology", "Telehealth / Telemedicine", "Thoracic Surgery",
    "Transplant Surgery", "Trauma Surgery", "Urgent Care", "Urogynecology", "Urology",
    "Vascular Surgery", "Wound Care", "Functional Medicine", "Concierge Medicine", "Remote Patient Monitoring (RPM)",
    "Chronic Care Management (CCM)", "Transitional Care Management (TCM)", "Annual Wellness Visits", "Preventive Screenings", "ABA Therapy (Applied Behavior Analysis)",
    "Genetic Counseling", "Health Coaching (limited billing)", "Mobile Diagnostic Services", "IV Infusion Therapy", "Immunizations / Vaccination Clinics",
    "Smoking Cessation Programs", "Weight Loss Programs (if medically necessary)", "Sleep Apnea Services", "Diabetes Management", "Pain Therapy & Spinal Injections"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative py-32 md:py-48 bg-gradient-to-r from-claimsBlue to-indigo-800">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">Medical Billing Specialties</h1>
            <p className="text-lg text-white/90 animate-fade-in animation-delay-300">
              ClaimsMD offers specialized medical billing solutions tailored to the unique requirements of
              different healthcare specialties. Our team has extensive experience in various
              medical fields to ensure optimal reimbursement for your practice.
            </p>
            <Button 
              className="mt-8 bg-claimsOrange hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-fade-in animation-delay-600"
              asChild
            >
              <Link to="/contact" className="flex items-center">
                Get Specialty-Specific Solutions
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMCAwaDY0MGwtMTQwIDE0MEgwVjB6IiAvPjxwYXRoIGQ9Ik02NDAgMGg2NDBWMTQwSDUwMEw2NDAgMHoiIC8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Featured Specialties Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-claimsBlue mb-4">Our Specialty Expertise</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We understand that each medical specialty has unique billing requirements,
              coding specifics, and reimbursement challenges. Our specialized teams ensure
              that your practice receives optimal reimbursement while maintaining compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialties.map((specialty, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2">
                <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-claimsBlue to-blue-400"></div>
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-claimsBlue/10 to-blue-500/10 flex items-center justify-center text-claimsBlue group-hover:scale-110 transition-transform duration-300">
                    {getSpecialtyIcon(specialty.title)}
                  </div>
                  <CardTitle className="text-xl font-bold text-claimsBlue group-hover:text-indigo-700 transition-colors">{specialty.title}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">{specialty.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2">
                    {specialty.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700 group/item">
                        <div className="mr-2 text-claimsOrange group-hover/item:scale-110 transition-transform">
                          <ArrowRight size={16} />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="ghost" 
                    className="text-claimsBlue hover:bg-claimsBlue/10 p-0 flex items-center group-hover:translate-x-1 transition-transform"
                    asChild
                  >
                    <Link to="/contact" className="flex items-center">
                      Learn more about {specialty.title} billing <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Specialties Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-claimsBlue mb-4">All Medical Specialties We Support</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our billing experts have deep knowledge across the entire healthcare spectrum. 
              Browse our complete list of medical specialties for which we offer tailored billing services.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {allSpecialties.map((specialty, index) => (
              <div 
                key={index} 
                className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow hover:border-claimsBlue/20 text-center flex flex-col items-center justify-center gap-2"
              >
                <div className="text-claimsBlue">
                  {getSpecialtyIcon(specialty, 24)}
                </div>
                <Link to="/contact" className="text-gray-700 hover:text-claimsBlue transition-colors text-sm">
                  {specialty}
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button className="bg-claimsBlue hover:bg-blue-700 transform hover:-translate-y-1 transition-transform" asChild>
              <Link to="/contact" className="flex items-center">
                Get a Specialty-Specific Quote
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-claimsBlue mb-6">Why Choose Our Specialty Billing?</h2>
              <div className="space-y-4">
                <div className="flex items-start group hover:bg-gray-50 hover:shadow-md p-4 rounded-lg transition-all">
                  <div className="bg-claimsBlue/10 p-2 rounded-full text-claimsBlue mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-claimsBlue transition-colors">Specialty-Specific Expertise</h3>
                    <p className="text-gray-600">Our billing specialists are trained in the unique coding and billing requirements of your specific medical specialty.</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-gray-50 hover:shadow-md p-4 rounded-lg transition-all">
                  <div className="bg-claimsBlue/10 p-2 rounded-full text-claimsBlue mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <FileSearch size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-claimsBlue transition-colors">Specialty-Specific Denial Management</h3>
                    <p className="text-gray-600">We understand the common denial reasons for each specialty and have developed targeted strategies to prevent and address them.</p>
                  </div>
                </div>
                <div className="flex items-start group hover:bg-gray-50 hover:shadow-md p-4 rounded-lg transition-all">
                  <div className="bg-claimsBlue/10 p-2 rounded-full text-claimsBlue mr-4 mt-1 group-hover:scale-110 transition-transform">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-claimsBlue transition-colors">Up-to-Date with Specialty Regulations</h3>
                    <p className="text-gray-600">We continuously monitor and adapt to changing regulations, coding updates, and reimbursement policies specific to your specialty.</p>
                  </div>
                </div>
              </div>
              <Button className="mt-8 bg-gradient-to-r from-claimsBlue to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300" asChild>
                <Link to="/contact" className="flex items-center">
                  Request a Specialty-Specific Consultation
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600" 
                alt="Medical Specialty Team" 
                className="rounded-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-claimsBlue/40 to-transparent rounded-lg"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-lg font-medium">Our specialty teams have a 98% claim acceptance rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Focus Areas */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-claimsBlue mb-4">Specialty Focus Areas</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We provide dedicated billing solutions for these high-complexity specialty areas, 
              ensuring optimal reimbursement for challenging billing scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-claimsBlue hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-claimsBlue/10 p-3 rounded-full text-claimsBlue mr-4">
                  <Hospital size={24} />
                </div>
                <h3 className="text-xl font-bold text-claimsBlue">Surgical Specialties</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Complex surgical specialties require precise coding for procedures, implants, and 
                global periods. Our experts specialize in navigating these complexities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={18} className="text-claimsOrange mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Orthopedic, Cardiac, and Neurological surgeries</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-claimsOrange mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Appropriate modifier usage for optimal reimbursement</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-claimsOrange mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Implant billing and tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-claimsBlue hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-claimsBlue/10 p-3 rounded-full text-claimsBlue mr-4">
                  <Stethoscope size={24} />
                </div>
                <h3 className="text-xl font-bold text-claimsBlue">Diagnostic Medicine</h3>
              </div>
              <p className="text-gray-600 mb-4">
                From radiology to laboratory medicine, our billing experts ensure proper coding 
                and reimbursement for all diagnostic procedures and interpretations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={18} className="text-claimsOrange mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Technical vs. professional component billing</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-claimsOrange mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Complex modality billing (MRI, CT, PET, etc.)</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-claimsOrange mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Laboratory and pathology coding expertise</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-claimsBlue hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-claimsBlue/10 p-3 rounded-full text-claimsBlue mr-4">
                  <Brain size={24} />
                </div>
                <h3 className="text-xl font-bold text-claimsBlue">Mental & Behavioral Health</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our specialized team handles the unique billing requirements of mental health services,
                including telehealth, group sessions, and psychological testing.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={18} className="text-claimsOrange mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Telehealth session coding and modifiers</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-claimsOrange mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Authorization and session limit management</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-claimsOrange mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Psychological testing and assessment billing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-claimsOrange hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-claimsOrange/10 p-3 rounded-full text-claimsOrange mr-4">
                  <Pill size={24} />
                </div>
                <h3 className="text-xl font-bold text-claimsOrange">Specialized Therapy Services</h3>
              </div>
              <p className="text-gray-600 mb-4">
                From physical therapy to speech and occupational therapy, we handle the 
                complexities of therapy service billing and authorization tracking.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={18} className="text-claimsBlue mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Therapy cap management and KX modifier usage</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-claimsBlue mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Treatment authorization tracking</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-claimsBlue mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Progress reporting documentation compliance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-claimsOrange hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-claimsOrange/10 p-3 rounded-full text-claimsOrange mr-4">
                  <Clock size={24} />
                </div>
                <h3 className="text-xl font-bold text-claimsOrange">Care Management Programs</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Maximize reimbursement for chronic care management, transitional care, 
                and remote patient monitoring programs with our specialized billing.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={18} className="text-claimsBlue mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">CCM, TCM, and RPM code optimization</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-claimsBlue mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Time-based service documentation</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-claimsBlue mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Monthly program enrollment tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-claimsOrange hover:shadow-xl transition-all transform hover:-translate-y-1">
              <div className="flex items-center mb-4">
                <div className="bg-claimsOrange/10 p-3 rounded-full text-claimsOrange mr-4">
                  <Syringe size={24} />
                </div>
                <h3 className="text-xl font-bold text-claimsOrange">Specialty Medications & Infusions</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our experts specialize in the complex billing requirements for specialty medications,
                chemotherapy, and IV infusion services.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={18} className="text-claimsBlue mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">J-code accuracy and drug wastage reporting</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-claimsBlue mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Chemotherapy and infusion administration coding</span>
                </li>
                <li className="flex items-start">
                  <Check size={18} className="text-claimsBlue mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">Prior authorization management for specialty drugs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-claimsBlue to-indigo-800 text-white relative overflow-hidden">
        {/* Abstract background pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1vcGFjaXR5PSIwLjA1Ij48cGF0aCBkPSJNMCAwaDY0MGwtMTQwIDE0MEgwVjB6IiAvPjxwYXRoIGQ9Ik02NDAgMGg2NDBWMTQwSDUwMEw2NDAgMHoiIC8+PC9nPjwvc3ZnPg==')] opacity-30 mix-blend-overlay"></div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Ready to Transform Your Specialty Practice's Billing?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90 animate-fade-in animation-delay-300">
            Let our specialty experts handle your complex billing needs so you can focus on what matters most - your patients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animation-delay-600">
            <Button className="bg-claimsOrange hover:bg-orange-600 text-white transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl" size="lg" asChild>
              <Link to="/contact" className="flex items-center">
                Request a Specialty Consultation
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10 transform hover:-translate-y-1 transition-all duration-300" size="lg" asChild>
              <Link to="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Specialties;