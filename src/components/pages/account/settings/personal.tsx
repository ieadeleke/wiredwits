'use client';

import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext, useEffect } from "react";
import UserContext from "@/context/UserContext";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpValidator } from "@/utils/validators";
import { useUpdateProfile } from "@/utils/apiHooks/profile/useUpdateProfile";
import Spinner from "@/components/ui/spin";

export default function PersonalSettings() {

    const { isLoading, data, error, updateProfile } = useUpdateProfile();
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(signUpValidator)
    });

    const { user } = useContext(UserContext);
    const { showSnackBar } = useContext(GlobalActionContext);

    useEffect(() => {
        if (data?.first_name) {
            showSnackBar({
                severity: "success",
                message: 'Profile updated successfully',
            });
        }
    }, [data])

    useEffect(() => {
        if (error) {
            showSnackBar({
                severity: "error",
                message: error,
            });
        }
    }, [error])

    const handleUserProfileUpdate = (e: any) => {
        updateProfile({
            first_name: e.first_name,
            last_name: e.last_name,
            phone: e.phone
        })
    }

    return (
        <div>
            <>
                <form onSubmit={handleSubmit(handleUserProfileUpdate)}>
                    <div className="grid grid-cols-2 gap-3 md:gap-5 mb-5">
                        <div className="form-group">
                            <Label className="mb-1">First name</Label>
                            <Controller name="first_name" control={control} defaultValue={user?.first_name}
                                render={({ field }) => (
                                    <Input {...field} className="py-7" />
                                )} />
                            {errors.first_name && <p className="form-error">{errors.first_name.message}</p>}
                        </div>
                        <div className="form-group">
                            <Label className="mb-1">Last name</Label>
                            <Controller name="last_name" control={control} defaultValue={user?.last_name}
                                render={({ field }) => (
                                    <Input {...field} className="py-7" />
                                )} />
                            {errors.last_name && <p className="form-error">{errors.last_name.message}</p>}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-5 mb-5">
                        <div className="form-group">
                            <Label className="mb-1">Phone number</Label>
                            <Controller name="phone" control={control} defaultValue={user?.phone}
                                render={({ field }) => (
                                    <Input {...field} className="py-7" />
                                )} />
                            {errors.phone && <p className="form-error">{errors.phone.message}</p>}
                        </div>
                        <div className="form-group">
                            <Label className="mb-1">Email address</Label>
                            <Controller name="email_address" control={control} defaultValue={user?.email_address} disabled
                                render={({ field }) => (
                                    <Input {...field} className="py-7" />
                                )} />
                        </div>
                    </div>
                    <div className="mt-9 flex justify-end">
                        <Button className="w-max min-w-[150px] px-8 py-7 text-sm">
                            {
                                isLoading ?
                                    <Spinner /> : 'Update Profile'
                            }
                        </Button>
                    </div>
                </form>
            </>
        </div>
    );
}