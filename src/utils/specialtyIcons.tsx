import React from 'react';
import {
  Stethoscope, Heart, Brain, Clipboard, Hospital, Users, Microscope, 
  FileSearch, Calendar, Pill, Shield, Clock, User, Syringe, 
  Bone, Flask, Eye, Ear, Monitor, Sun, Zap, 
  Table, Weight, Bed, Lightbulb, Bandage,
  Network, BedDouble, Dna, Waves, Star, Pen, Scan, 
  Briefcase, PencilRuler, Search, Thermometer, Hourglass, Smile
} from 'lucide-react';

// Map specialty names to appropriate icons
export const getSpecialtyIcon = (specialty: string, size = 32) => {
  const iconMap: Record<string, React.ReactNode> = {
    // Primary Care & General Practice
    'Primary Care': <Stethoscope size={size} />,
    'Family Medicine': <Users size={size} />,
    'Internal Medicine': <User size={size} />,
    'Preventive Medicine': <Shield size={size} />,
    
    // Cardiology & Heart-related
    'Cardiology': <Heart size={size} />,
    'Interventional Cardiology': <Heart size={size} />,
    'Cardiothoracic Surgery': <Heart size={size} />,
    
    // Surgical Specialties
    'General Surgery': <Clipboard size={size} />,
    'Orthopedic Surgery': <Bone size={size} />,
    'Neurosurgery': <Brain size={size} />,
    'Plastic & Reconstructive Surgery': <Clipboard size={size} />,
    'Reconstructive Surgery': <Clipboard size={size} />,
    'Colorectal Surgery': <Clipboard size={size} />,
    'Thoracic Surgery': <Clipboard size={size} />,
    'Bariatric Surgery': <Weight size={size} />,
    'Maxillofacial Surgery': <Clipboard size={size} />,
    'Oral Surgery': <Clipboard size={size} />,
    'Vascular Surgery': <Clipboard size={size} />,
    'Transplant Surgery': <Clipboard size={size} />,
    'Trauma Surgery': <Clipboard size={size} />,
    'Surgical Oncology': <Clipboard size={size} />,
    
    // Diagnostic Medicine
    'Radiology': <FileSearch size={size} />,
    'Pathology': <Microscope size={size} />,
    'Laboratory Medicine': <Microscope size={size} />,
    'Nuclear Medicine': <FileSearch size={size} />,
    'Interventional Radiology': <Scan size={size} />,
    
    // Mental Health
    'Mental Health': <Brain size={size} />,
    'Psychiatry': <Brain size={size} />,
    'Behavioral Health': <Brain size={size} />,
    'Mental Health Counseling': <Brain size={size} />,
    'Psychotherapy': <Brain size={size} />,
    'ABA Therapy (Applied Behavior Analysis)': <Brain size={size} />,
    
    // Neurology
    'Neurology': <Brain size={size} />,
    
    // Other Specialties
    'Dermatology': <Sun size={size} />,
    'Gastroenterology': <Clipboard size={size} />,
    'Pulmonology': <Clipboard size={size} />,
    'Oncology': <Clipboard size={size} />,
    'Medical Oncology': <Clipboard size={size} />,
    'Radiation Oncology': <Zap size={size} />,
    'Pediatrics': <Users size={size} />,
    'Obstetrics & Gynecology': <Calendar size={size} />,
    'Obstetrics': <Calendar size={size} />,
    'Gynecology': <Calendar size={size} />,
    'GYN Oncology': <Calendar size={size} />,
    'Urology': <Clipboard size={size} />,
    'Urogynecology': <Clipboard size={size} />,
    
    // Additional Specialties
    'Allergy & Immunology': <Shield size={size} />,
    'Anesthesiology': <Clipboard size={size} />,
    'Audiology': <Ear size={size} />,
    'Chiropractic': <Bone size={size} />,
    'Critical Care Medicine': <Monitor size={size} />,
    'Dietetics & Nutrition': <Clipboard size={size} />,
    'DME (Durable Medical Equipment)': <Briefcase size={size} />,
    'Emergency Medicine': <Clipboard size={size} />,
    'Endocrinology': <Flask size={size} />,
    'Genetics': <Dna size={size} />,
    'Geriatrics': <User size={size} />,
    'Hematology': <Clipboard size={size} />,
    'Home Health': <BedDouble size={size} />,
    'Hospice & Palliative Care': <BedDouble size={size} />,
    'Palliative Care': <BedDouble size={size} />,
    'Hospitalist': <Hospital size={size} />,
    'Infectious Disease': <Shield size={size} />,
    'Interventional Pain Management': <Clipboard size={size} />,
    'Pain Management': <Clipboard size={size} />,
    'Neonatology': <BedDouble size={size} />,
    'Nephrology': <Clipboard size={size} />,
    'Nursing Services (NPs)': <User size={size} />,
    'Occupational Medicine': <Briefcase size={size} />,
    'Occupational Therapy': <Briefcase size={size} />,
    'Ophthalmology': <Eye size={size} />,
    'Optometry': <Eye size={size} />,
    'Otolaryngology (ENT)': <Ear size={size} />,
    'Physical Medicine & Rehabilitation (PM&R)': <Clipboard size={size} />,
    'Physical Therapy': <Clipboard size={size} />,
    'Podiatry': <Clipboard size={size} />,
    'Reproductive Endocrinology': <Flask size={size} />,
    'Rheumatology': <Bone size={size} />,
    'Sleep Medicine': <Bed size={size} />,
    'Social Work (Clinical Billing)': <Users size={size} />,
    'Speech Therapy': <Clipboard size={size} />,
    'Sports Medicine': <Clipboard size={size} />,
    'Telehealth / Telemedicine': <Monitor size={size} />,
    'Urgent Care': <Hospital size={size} />,
    'Wound Care': <Bandage size={size} />,
    'Functional Medicine': <Lightbulb size={size} />,
    'Concierge Medicine': <User size={size} />,
    'Remote Patient Monitoring (RPM)': <Monitor size={size} />,
    'Chronic Care Management (CCM)': <Clipboard size={size} />,
    'Transitional Care Management (TCM)': <Clock size={size} />,
    'Annual Wellness Visits': <Calendar size={size} />,
    'Preventive Screenings': <Search size={size} />,
    'Genetic Counseling': <Dna size={size} />,
    'Health Coaching (limited billing)': <Users size={size} />,
    'Mobile Diagnostic Services': <Clipboard size={size} />,
    'IV Infusion Therapy': <Syringe size={size} />,
    'Immunizations / Vaccination Clinics': <Syringe size={size} />,
    'Smoking Cessation Programs': <Clipboard size={size} />,
    'Weight Loss Programs (if medically necessary)': <Weight size={size} />,
    'Sleep Apnea Services': <Bed size={size} />,
    'Diabetes Management': <Clipboard size={size} />,
    'Pain Therapy & Spinal Injections': <Syringe size={size} />
  };

  // Return the mapped icon or a default if not found
  return iconMap[specialty] || <Stethoscope size={size} />;
};
