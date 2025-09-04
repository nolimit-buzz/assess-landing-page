import { NextRequest, NextResponse } from 'next/server';
export const dynamic = 'force-dynamic';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const fromAddress = process.env.RESEND_FROM || 'info@assess.ng';

    const result = await resend.emails.send({
      from: fromAddress,
      to: 'info@assess.ng',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if ((result as any)?.error) {
      console.error('Resend error:', (result as any).error);
      return NextResponse.json(
        { error: 'Email service error. Verify RESEND_API_KEY and sender domain.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}