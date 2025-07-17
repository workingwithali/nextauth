# 🔐 Full-Stack Auth System with Next.js 14 & NextAuth v5 (Auth.js)

This project is a complete **authentication system** built with **Next.js 14**, **NextAuth v5**, and **TypeScript**, featuring both **OAuth** and **credentials-based login**, **two-factor authentication**, **role-based access**, **email verification**, and much more.

---

## 📸 Live Demo

🌐 [Visit the Live App](https://nextauth-ivory-beta.vercel.app)

---

## 🚀 Features

- ✅ **Next.js 14** with **Server Actions**
- 🔐 **NextAuth v5 (Auth.js)**
- 🔑 **Credentials Provider**
- 🌐 **OAuth Providers**: Google & GitHub
- ✉️ **Email verification**
- 🔒 **Forgot password functionality**
- 📱 **Two-factor authentication (2FA)**
- 👥 **User roles**: Admin & User
- 🧾 **Register/Login/Forgot Password** Forms
- 🧩 **Dynamic Role-Based Rendering**
- ⚠️ **Error Handling**
- 🔘 **Login & Logout Buttons**
- 🚧 **Role Gate for Admin-only access**
- 🛂 **Custom hooks**: `useCurrentUser`, `useRole`
- 🔐 **Secure API Routes & Server Actions**
- 🛡️ **Settings page**:
  - Change Email (with re-verification)
  - Change Password (with current password confirmation)
  - Enable/Disable 2FA
  - Change User Role (for development)

---

## 🧠 Project Structure & Topics Covered

| Section | Description |
|--------|-------------|
| **Intro & Demo** | Overview and feature walkthrough |
| **Project Setup** | Environment setup, dependencies |
| **Auth Pages** | Login, Register, Forgot Password, etc. |
| **Database & Prisma** | Schema, migrations, user model |
| **User Creation** | Securely create and validate users |
| **Middleware** | Protect routes with Next.js middleware |
| **Callbacks** | Customize NextAuth behavior with callbacks |
| **OAuth Integration** | Google and GitHub login setup |
| **Email Services** | Using Resend to send verification/reset emails |
| **Two-Factor Auth** | Enable and verify 2FA for users |
| **User Interface** | Reusable components and wrappers |
| **Client/Server Examples** | Role-based content rendering |
| **Settings Page** | User account management |
| **Deployment** | Deploy to platforms like **Vercel** |

---

## ⚙️ Technologies Used

- [Next.js 14](https://nextjs.org/)
- [NextAuth.js v5](https://authjs.dev/)
- [Prisma ORM](https://www.prisma.io/)
- [Resend](https://resend.com/) for email service
- [Tailwind CSS](https://tailwindcss.com/)
- TypeScript
- OAuth: Google & GitHub
- PostgreSQL (can be swapped with other databases)

---

## 🔧 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
