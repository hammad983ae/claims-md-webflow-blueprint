import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const formData = req.body;
    
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

    res.json({
      success: true,
      message: 'Email sent successfully',
      data: response.data
    });

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

    res.status(500).json({
      success: false,
      error: errorMessage,
      details: error.message
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Email service is running' });
});

app.listen(PORT, () => {
  console.log(`Email service running on port ${PORT}`);
});
