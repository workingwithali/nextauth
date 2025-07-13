import { ExtendedUser } from "@/next-auth";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "@/components/ui/badge";

interface UserInfoProps {
    user?: ExtendedUser;
    label?: string;
}

export const UserInfo = ({ user, label }: UserInfoProps) => {
    return (
        <Card className="w-[600px]  shadow-md">
            <CardHeader>
                <p className="text-2xl font-semibold text-center">
                    {label}
                </p>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex flex-row items-center justify-between border p-2 rounded-md shadow">
                    <p className="text-sm font-medium">
                        ID
                    </p>
                    <p className="truncate text-xs max-w-[180px] font-m p-1 bg-stale-100 rounded-md">
                        {user?.id}
                    </p>
                </div>
                <div className="flex flex-row items-center justify-between border p-2 rounded-md shadow">
                    <p className="text-sm font-medium">
                        Email
                    </p>
                    <p className="truncate text-xs max-w-[180px] font-m p-1 bg-stale-100 rounded-md">
                        {user?.email}
                    </p>
                </div>
                <div className="flex flex-row items-center justify-between border p-2 rounded-md shadow">
                    <p className="text-sm font-medium">
                        Name
                    </p>
                    <p className="truncate text-xs max-w-[180px] font-m p-1 bg-stale-100 rounded-md">
                        {user?.name}
                    </p>
                </div>
                <div className="flex flex-row items-center justify-between border p-2 rounded-md shadow">
                    <p className="text-sm font-medium">
                        Role
                    </p>
                    <p className="truncate text-xs max-w-[180px] font-m p-1 bg-stale-100 rounded-md">
                        {user?.role}
                    </p>
                </div>
                <div className="flex flex-row items-center justify-between border p-2 rounded-md shadow">
                    <p className="text-sm font-medium">
                        TwoFactorEnabled
                    </p>
                    <Badge variant={user?.isTwoFactorEnable ? "success" : "destructive"} >
                        {user?.isTwoFactorEnable ? "Enabled" : "Disabled"}
                    </Badge>

                </div>
            </CardContent>

        </Card>

    );
}