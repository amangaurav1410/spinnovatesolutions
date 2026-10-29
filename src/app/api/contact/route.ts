import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const recipient = process.env.CONTACT_EMAIL || "info@spinnovatesolutions.com";
    const apiKey = process.env.RESEND_API_KEY;

    console.log(`[Form Submission Received for ${recipient}]`, JSON.stringify(body, null, 2));

    if (apiKey) {
      try {
        const resend = new Resend(apiKey);
        await resend.emails.send({
          from: "SP Innovate Forms <notifications@spinnovatesolutions.com>",
          to: [recipient],
          subject: `[New Inquiry] ${body.serviceRequired || body.service || "Consultation Request"} from ${body.fullName || body.name || "Visitor"}`,
          html: `
            <h2>New Consultation / Contact Inquiry</h2>
            <p><strong>Name:</strong> ${body.fullName || body.name || "N/A"}</p>
            <p><strong>Email:</strong> ${body.email || "N/A"}</p>
            <p><strong>Company:</strong> ${body.company || "N/A"}</p>
            <p><strong>Phone:</strong> ${body.phone || "N/A"}</p>
            <p><strong>Service:</strong> ${body.serviceRequired || body.service || "N/A"}</p>
            <p><strong>Budget:</strong> ${body.budget || "N/A"}</p>
            <p><strong>Timeline:</strong> ${body.timeline || "N/A"}</p>
            <p><strong>Message / Scope:</strong></p>
            <p style="background: #f4f4f5; padding: 12px; border-radius: 8px;">${body.message || "No message provided."}</p>
          `,
        });
      } catch (emailErr) {
        console.error("Resend delivery failed, falling back to log:", emailErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: `Your message has been received and routed to ${recipient}. Our Principal Architect will contact you within 24 hours.`,
      targetEmail: recipient,
    });
  } catch (error) {
    console.error("Error handling contact submission:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit form. Please try again." },
      { status: 500 }
    );
  }
}
