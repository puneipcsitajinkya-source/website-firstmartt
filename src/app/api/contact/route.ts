import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, countryCode, mobile, subject, message } = await request.json();

    if (!name || !email || !message || !mobile) {
      return NextResponse.json(
        { error: "Name, email, mobile number, and message are required." },
        { status: 400 }
      );
    }

    // SMTP Configuration
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = parseInt(process.env.SMTP_PORT || "587", 10);
    const secure = process.env.SMTP_SECURE === "true";
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    // Check if configuration is missing in production/development
    if (!user || !pass) {
      console.warn("SMTP credentials are not configured. Email will not be sent.");
      // We return mock success if SMTP is not configured in local environment so it doesn't break testing
      if (process.env.NODE_ENV !== "production") {
        console.log("Mocking contact email dispatch: ", {
          name,
          email,
          phone: `${countryCode} ${mobile}`,
          subject,
          message,
        });
        return NextResponse.json({ success: true, mocked: true });
      }
      return NextResponse.json(
        { error: "Email configuration is missing on the server." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const mailOptions = {
      from: `"${name}" <${user}>`,
      to: process.env.CONTACT_TO_EMAIL || "firstmartsindia@gmail.com",
      replyTo: email,
      subject: `FirstMartt Contact: ${subject} from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${countryCode} ${mobile}
Subject: ${subject}

Message:
${message}
      `,
      html: `
<h3>New Contact Form Submission from FirstMartt Website</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${countryCode} ${mobile}</p>
<p><strong>Subject:</strong> ${subject}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Nodemailer error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email notification." },
      { status: 500 }
    );
  }
}
