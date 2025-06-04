'use client';

import UserProfileDashboard from "@/components/layout/account/dashboard";
import AuthLayout from "@/components/layout/account/layout";


export default function UserDashboard() {

    return (
        <div>
            <AuthLayout>
                <>
                    <UserProfileDashboard />
                </>
            </AuthLayout>
        </div>
    );
}