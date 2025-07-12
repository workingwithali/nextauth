import Navbar from "./_components/navbar";

interface ProtectedLayoutProps {
    children: React.ReactNode;
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
    return (
        <div className="min-h-screen w-full flex flex-col gap-y-10 items-center justify-center bg-sky-600 dark:bg-sky-800 p-4">

            <Navbar />
            {children}
        </div>
    )
}

export default ProtectedLayout
