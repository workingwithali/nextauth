import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendTwoFactorEmail = async (email: string, token: string) => {
  
  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: '2FA code',
    html: `<p>You 2FA code: ${token}</p>`,
  });
};
export const sendPasswordResetEmail = async (email: string, token: string) => {
  const verificationUrl = `http://localhost:3000/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Reset your password',
    html: `<p>Click <a href="${verificationUrl}">here</a> to reset your password.</p>`,
  });
};
export const sendVerificationEmail = async (email: string, token: string) => {
  const verificationUrl = `http://localhost:3000/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: email,
    subject: 'Verify your email',
    html: `<p>Click <a href="${verificationUrl}">here</a> to confirm your email.</p>`,
  });
};
