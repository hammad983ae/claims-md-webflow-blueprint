
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sendFormToEmail = async (formData: Record<string, any>) => {
  // This is a placeholder function that would be implemented with your preferred email service
  // like EmailJS, SendGrid, a custom API endpoint, etc.
  
  console.log(`Sending form data to info@claimsmd.net:`, formData);
  
  // For now, we're just returning a promise that resolves after a delay
  // In a real implementation, this would make an API call to your email service
  return new Promise<void>((resolve, reject) => {
    try {
      // Simulate API call
      setTimeout(() => {
        resolve();
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
};

