import { NextResponse } from 'next/server';
import Mailjet from 'node-mailjet';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();
    
    // Validate the form data
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ 
        success: false, 
        message: 'Missing required fields' 
      }, { status: 400 });
    }
    
    // Initialize Mailjet with API keys from environment variables
    const mailjet = Mailjet.apiConnect(
      process.env.MAILJET_API_KEY || '',
      process.env.MAILJET_SECRET_KEY || ''
    );
    
    // Get recipient email from environment variable or use default
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'tubulol12345@gmail.com';
    
    // Send email using Mailjet
    await mailjet
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: {
              Email: recipientEmail,
              Name: "Bilguunnaran Uurtsaikh Contact Form",
            },
            To: [
              {
                Email: recipientEmail,
                Name: "Bilguunnaran Uurtsaikh",
              },
            ],
            Subject: `Contact Form: ${subject}`,
            TextPart: `
              Name: ${name}
              Email: ${email}
              Subject: ${subject}
              
              Message:
              ${message}
            `,
            HTMLPart: `
              <h3>New Contact Form Submission</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <p>${message.replace(/\n/g, '<br>')}</p>
            `,
            ReplyTo: {
              Email: email,
              Name: name
            }
          },
        ],
      });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
    
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to send email' 
    }, { status: 500 });
  }
}
