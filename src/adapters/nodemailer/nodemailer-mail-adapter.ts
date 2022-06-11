import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "97a612fcc3a761",
    pass: "b5f6a3c6f8e6c3",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendEmail({ subject, body}: SendMailData) {
    await transport.sendMail({
      from: "Equipe feedget <oi@feedget.com>",
      to: "Carlos <carlosandre1572@gmail>",
      subject,
      html: body
    });
  }
}
