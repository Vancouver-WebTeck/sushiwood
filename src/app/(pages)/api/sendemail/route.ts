import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { dor, time, numberOfPeople, phoneNumber } = await req.json();

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.sendMail({
      from: '"Sushiwood" <sushiwoodinfo@gmail.com>',
      to: process.env.EMAIL_TO,
      subject: "Booking Form Submission",
      html: `
        <h1>Form Submission</h1>
        <p><strong>Date of reservation:</strong> ${dor}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Number of People:</strong> ${numberOfPeople}</p>
        <p><strong>Phon eNumber:</strong> ${phoneNumber}</p>
      `,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email." },
      { status: 500 }
    );
  }
}
