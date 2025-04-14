import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, dor, time, numberOfPeople, phoneNumber } = await req.json();
    const updatedDor = dor.slice(0, 10);

    console.log(updatedDor);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // STARTTLS
      requireTLS: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.sendMail({
      from: '"Sushiwood" <sushiwoodinfo@gmail.com>',
      to: process.env.EMAIL_TO,
      subject: "Reservation form",
      html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; padding: 20px; border: 1px solid #ddd; border-radius: 8px; max-width: 600px; margin: auto;">
        <h2 style="color: #2c3e50;">Reservation Confirmation</h2>
        <p>Sushiwood,</p>
        <p>You got a reservation for ${name}. Here are the details of the reservation:</p>

        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr>
            <td style="padding: 8px; font-weight: bold;">📅 Date of Reservation:</td>
            <td style="padding: 8px;">${updatedDor}</td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 8px; font-weight: bold;">⏰ Time:</td>
            <td style="padding: 8px;">${time}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold;">👥 Number of People:</td>
            <td style="padding: 8px;">${numberOfPeople}</td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 8px; font-weight: bold;">📞 Phone Number:</td>
            <td style="padding: 8px;">${phoneNumber}</td>
          </tr>
        </table>

        <p style="margin-top: 30px;">If you have any questions or need to make changes, feel free to contact us.</p>

        <p style="margin-top: 40px;">Best regards,<br><strong>Sushiwood</strong></p>
      </div>
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
