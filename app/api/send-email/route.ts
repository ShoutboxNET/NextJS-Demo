import { NextRequest, NextResponse } from 'next/server';
import Shoutbox from 'shoutboxnet';
import WelcomeEmail from '../../emails/welcome-email';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.SHOUTBOX_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'SHOUTBOX_API_KEY is not configured' },
        { status: 500 }
      );
    }

    const emailFrom = process.env.EMAIL_FROM || 'noreply@example.com';
    const emailTo = process.env.EMAIL_TO || email;

    const shoutbox = new Shoutbox(apiKey);

    const verificationUrl = `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/verify?email=${encodeURIComponent(email)}`;

    await shoutbox.sendEmail({
      from: emailFrom,
      to: emailTo,
      subject: 'Welcome! Please verify your email',
      react: WelcomeEmail({ name, verificationUrl }),
      tags: {
        type: 'welcome',
        action: 'verification'
      }
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}