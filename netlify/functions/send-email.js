const axios = require('axios');

exports.handler = async (event, context) => {
  // Handle CORS preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    };
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    // Parse the request body
    const formData = JSON.parse(event.body);
    
    console.log('Received form data:', formData);

    // Create email content from form data
    const emailContent = Object.entries(formData)
      .filter(([key, value]) => key !== 'formType' && value && value.toString().trim() !== '')
      .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
      .join('\n');

    // Prepare email data for MailerSend API
    const emailData = {
      from: {
        email: 'no_reply@claimsmd.net',
        name: 'ClaimsMD Website'
      },
      to: [
        {
          email: 'info@claimsmd.net',
          name: 'ClaimsMD Team'
        }
      ],
      subject: `New ${formData.formType || 'Contact'} Form Submission - ClaimsMD`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2058a8; border-bottom: 2px solid #f29846; padding-bottom: 10px;">
            New ${formData.formType || 'Contact'} Form Submission
          </h2>
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            ${emailContent.split('\n').map(line => 
              `<p style="margin: 8px 0;"><strong>${line.split(':')[0]}:</strong> ${line.split(':').slice(1).join(':').trim()}</p>`
            ).join('')}
          </div>
          <p style="color: #666; font-size: 14px;">
            Submitted on: ${new Date().toLocaleString()}
          </p>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            This email was sent from the ClaimsMD website contact form.
          </p>
        </div>
      `
    };

    console.log('Sending email via MailerSend:', emailData);

    // Send email using MailerSend API
    const response = await axios.post('https://api.mailersend.com/v1/email', emailData, {
      headers: {
        'Authorization': `Bearer mlsn.aed3556e5777e5038ad50ac340cdc2ae550b7e79d4b1a87c7682880bd48177b8`,
        'Content-Type': 'application/json'
      }
    });

    console.log('MailerSend response:', response.data);

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        message: 'Email sent successfully',
        data: response.data
      }),
    };

  } catch (error) {
    console.error('Error sending email via MailerSend:', error);

    let errorMessage = 'Failed to send email. Please try again or contact us directly.';
    
    if (axios.isAxiosError(error)) {
      console.error('MailerSend API Error:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data
      });
      
      if (error.response?.status === 401) {
        errorMessage = 'Authentication failed. Please check API credentials.';
      } else if (error.response?.status === 422) {
        errorMessage = 'Invalid email data. Please check form inputs.';
      }
    }

    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: false,
        error: errorMessage,
        details: error.message
      }),
    };
  }
};
