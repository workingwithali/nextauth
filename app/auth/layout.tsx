import React from "react";

interface AuthLayoutProps {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
