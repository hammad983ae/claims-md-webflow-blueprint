
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from 'axios'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sendFormToEmail = async (formData: Record<string, any>) => {
  console.log(`Sending form data to info@claimsmd.net:`, formData);
  
  try {
    // Use the proxied API endpoint
    const apiEndpoint = '/api/send-email';
    
    console.log('Sending email via serverless function:', apiEndpoint);
    
    // Send form data to serverless function
    const response = await axios.post(apiEndpoint, formData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    console.log('Serverless function response:', response.data);
    
    if (response.data.success) {
      return response.data;
    } else {
      throw new Error(response.data.error || 'Failed to send email');
    }
    
  } catch (error) {
    console.error('Error sending email via serverless function:', error);
    
    // Fallback: log the error but don't break the form submission
    if (axios.isAxiosError(error)) {
      console.error('Serverless function error:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data
      });
    }
    
    throw new Error('Failed to send email. Please try again or contact us directly.');
  }
};
