import { NextResponse } from 'next/server';

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
    
    // Create email content
    const emailContent = {
      to: 'tubulol12345@gmail.com', // Replace with the actual recipient email
      from: email,
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `
    };
    
    // In a real application, you would use a service like SendGrid, AWS SES, or Nodemailer
    // For demonstration, we'll simulate a successful email send
    console.log('Email would be sent with the following content:', emailContent);
    
    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return a successful response
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
