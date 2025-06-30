// Test script to verify email sending works
// Run with: node test-email.js

const Shoutbox = require('shoutboxnet').default;
require('dotenv').config();

async function testEmail() {
  const apiKey = process.env.SHOUTBOX_API_KEY;
  
  if (!apiKey || apiKey === 'your-shoutbox-api-key-here') {
    console.error('❌ Please set your SHOUTBOX_API_KEY in the .env file');
    console.error('   Get your API key from https://shoutbox.net');
    process.exit(1);
  }

  console.log('✅ API key found');
  console.log('📧 Attempting to send test email...');

  try {
    const shoutbox = new Shoutbox(apiKey);
    
    await shoutbox.sendEmail({
      from: process.env.EMAIL_FROM || 'test@example.com',
      to: process.env.EMAIL_TO || 'test@example.com',
      subject: 'Test Email from Next.js 15.1',
      html: '<h1>Test Email</h1><p>This is a test email sent from the Next.js 15.1 React Email demo.</p>',
      text: 'Test Email - This is a test email sent from the Next.js 15.1 React Email demo.'
    });

    console.log('✅ Email sent successfully!');
    console.log('   Check the inbox for:', process.env.EMAIL_TO || 'test@example.com');
  } catch (error) {
    console.error('❌ Failed to send email:', error.message);
    console.error('   Make sure your API key is valid and active');
  }
}

testEmail();