import { Resend } from 'resend';


const resend = new Resend(process.env.RESEND_API_KEY);
export const sendVerificationEmail = async (email: string, token: string) => {
  const verificationUrl = `https://localhost:3000/auth/new-verification?token=${token}`;
   await resend.emails.send({
    from: 'ailrashid2020e@gmail.com',
    to: email,
    subject: 'Verify your email',
       html: `<p>Click <a herf=${verificationUrl} > here</a> to comirm email.</p>`
  });

}
