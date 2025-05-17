'use client';

import { Controller, useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useContext, useEffect } from "react";
import UserContext from "@/context/UserContext";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { changePasswordValidator } from "@/utils/validators";
import { useChangePassword } from "@/utils/apiHooks/profile/useChangePassword";
import Spinner from "@/components/ui/spin";

export default function PasswordSettings() {

    const { isLoading, data, error, updatePassword } = useChangePassword();
    const { handleSubmit, control, reset, formState: { errors } } = useForm({
        resolver: yupResolver(changePasswordValidator)
    });

    const { user } = useContext(UserContext);
    const { showSnackBar } = useContext(GlobalActionContext);

    useEffect(() => {
        if (data?.length) {
            showSnackBar({
                severity: "success",
                message: 'Password updated successfully',
            });
            reset({
                curr_password: '',
                password: ''
            })
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
        updatePassword({
            curr_password: e.curr_password,
            password: e.password,
        })
    }

    return (
        <div>
            <>
                <form onSubmit={handleSubmit(handleUserProfileUpdate)}>
                    <div className="grid grid-cols-2 gap-5 mb-5">
                        <div className="form-group">
                            <Label className="mb-1">Current Password</Label>
                            <Controller name="curr_password" control={control} defaultValue=""
                                render={({ field }) => (
                                    <Input {...field} type="password" className="py-6" />
                                )} />
                            {errors.curr_password && <p className="form-error">{errors.curr_password.message}</p>}
                        </div>
                        <div className="form-group">
                            <Label className="mb-1">New Password</Label>
                            <Controller name="password" control={control} defaultValue=""
                                render={({ field }) => (
                                    <Input {...field} type="password" className="py-6" />
                                )} />
                            {errors.password && <p className="form-error">{errors.password.message}</p>}
                        </div>
                    </div>
                    <div className="mt-9 flex justify-end">
                        <Button className="w-max min-w-[150px] px-8 py-7 text-sm">
                            {
                                isLoading ?
                                    <Spinner /> : 'Update Password'
                            }
                        </Button>
                    </div>
                </form>
            </>
        </div>
    );
}