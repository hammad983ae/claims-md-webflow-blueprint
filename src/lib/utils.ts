
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sendFormToEmail = async (formData: Record<string, any>) => {
  console.log(`Sending form data to info@claimsmd.com:`, formData);
  
  try {
    // Create email content from form data
    const emailContent = Object.entries(formData)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    
    // For now, we're simulating the email send
    // In production, this would integrate with EmailJS, SendGrid, or your backend API
    const emailData = {
      to: 'info@claimsmd.com',
      subject: `New ${formData.formType || 'Contact'} Form Submission`,
      message: emailContent,
      timestamp: new Date().toISOString()
    };
    
    console.log('Email data prepared:', emailData);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return emailData;
  } catch (error) {
    console.error('Error preparing email:', error);
    throw error;
  }
};
