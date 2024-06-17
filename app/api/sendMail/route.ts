import { EmailOutTemplate } from "@/app/ui/EmailOutputTemplate";
import { EmailInTemplate } from "@/app/ui/EmailInTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const formData = await req.json();
  const { email } = formData;
  try {
    const { data, error } = await resend.emails.send({
      from: "Ultimate Detailers <no-reply@lucassluize.com>",
      to: [email],
      subject: "New Detailing Service!",
      text: "The Ultimate Detailing Experience is here!",
      react: EmailOutTemplate(formData),
    });

    const res = await resend.emails.send({
      from: "Ultimate Detailers <no-reply@lucassluize.com>",
      to: [process.env.EMAIL],
      subject: "New Detailing Service!",
      text: "Let's get it done!",
      react: EmailInTemplate(formData),
    });
    if (res.error) {
      console.log(res.error);
    }

    if (error) {
      console.log(error);
      return Response.json({ error }, { status: 500 });
    }

    const add = await resend.contacts.create({
      email: formData.email,
      firstName: formData.name,
      lastName: "",
      unsubscribed: false,
      audienceId: process.env.AUDIENCE_ID,
    });

    if (add.error) {
      console.log(add.error);
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
