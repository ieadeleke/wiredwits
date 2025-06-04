'use client';

import { useContext, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { useRouter } from 'next/navigation';

import { useDispatch } from "react-redux";
import { login } from "@/utils/features/userslice";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { Label } from "@/components/ui/label";
import AppRoutes from "@/utils/routes";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/assets/images/logo.png";
import { Button } from "@/components/ui/button";
import { GlobalActionContext } from "@/context/GlobalActionContext";
import { signUpValidator } from "@/utils/validators";
import Spinner from "@/components/ui/spin";
import { useSignup } from "@/utils/apiHooks/auth/useSignup";
import { PasswordInput } from "@/components/ui/password";


const GoogleSignInButton = () => {

    const [loadingData, setLoadingData] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const signInWithGoogle = async (e: any) => {
        setErrorMessage("");
        setLoadingData(true);
        // try {
        //     let newUser = await _sign_user_in_with_google({
        //         key: e,
        //         user_agent: navigator.userAgent
        //     });
        //     console.log(newUser);
        //     if (newUser.data.success === true) {
        //         updateUserState(login({
        //             logged_in: true,
        //             userData: newUser.data.data.userDetails
        //         }));
        //         openNotificationWithIcon("success", newUser.data.message);
        //         if (newUser.data.data.new_user) {
        //             localStorage.setItem("newwiredwittsuser", true);
        //             localStorage.setItem("newwiredwitsUserToken", newUser.data.data.token);
        //             Navigate(AppRoutes.price_listing);
        //         } else {
        //             Navigate(AppRoutes.dashboard);
        //             localStorage.setItem("wiredwittstoken", newUser.data.data.token);
        //         }
        //     } else {
        //         setLoadingData(false);
        //         setErrorMessage(newUser.data.message);
        //     }
        // } catch (err) {
        //     console.log(err)
        //     if (err.message) {
        //         setErrorMessage('An error occurred while completing signin. Please check network and try again');
        //     } else if (err?.code === "ERR_NETWORK") {
        //         setErrorMessage('An error occurred while completing signin. Please check network and try again');
        //     } else {
        //         setErrorMessage('An error occurred while completing signin. Please reload page to try again');
        //     }
        //     setLoadingData(false);
        // }
    }

    const login = useGoogleLogin({
        flow: 'auth-code',
        onSuccess: async (codeResponse) => {
            signInWithGoogle(codeResponse.code);
        },
        onError: () => {
        },
    });


    return (
        <button
            onClick={() => login()}
            type="button"
            className="border-2 border-solid border-[#D1D5DB] w-full py-4 gap-2 flex items-center justify-center rounded-lg text-sm"
        >
            <img
                src="https://developers.google.com/identity/images/g-logo.png"
                alt="Google"
                style={{ width: '20px', height: '20px' }}
            />
            Sign in with Google
        </button>
    );
};

const SignUpPage = () => {


    const Route = useRouter();
    const { signUp, data, error, isLoading } = useSignup();
    const { showSnackBar } = useContext(GlobalActionContext);

    const [formLoader, setFormLoader] = useState<boolean>(false);

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(signUpValidator)
    });

    useEffect(() => {
        if (data?.first_name) {
            showSnackBar({
                severity: "success",
                message: 'Signup successful',
            });
            Route.push(AppRoutes.pillars);
        }
    }, [data])


    useEffect(() => {
        if (error) {
            showSnackBar({
                severity: "error",
                message: error,
            });
            setFormLoader(false)
        }
    }, [error])

    const handleUserSignUp = (e: any) => {
        signUp({
            first_name: e.first_name,
            last_name: e.last_name,
            email_address: e.email_address,
            password: e.password,
            confirm_password: e.password,
            user_agent: window.navigator.userAgent
        })
        setFormLoader(true);
    }

    return (
        <div className="auth-bg flex items-center justify-center">
            <div className="bg-white px-5 pt-8 pb-5 rounded-xl shadow-xl w-[95%] md:w-[35%]">
                <div className="text-center">
                    <Link href="/">
                        <Image src={Logo} alt="logo" quality={100} width={60} height={100} className="w-auto h-[4rem] mb-2 mx-auto" />
                    </Link>
                    <h3 className="mb-2 text-xl font-[600]">Welcome to Wired Wits</h3>
                    <p className="mb-5 text-sm font-medium">Have an account? <Link className="text-primary" href={AppRoutes.signin}>Sign in</Link></p>
                </div>
                <form onSubmit={handleSubmit(handleUserSignUp)}>
                    <div className="grid grid-cols-2 gap-3 md:gap-5">
                        <div className="form-group mb-3">
                            <Label className="mb-1">First name</Label>
                            <Controller name="first_name" control={control}
                                render={({ field }) => (
                                    <Input {...field} className="py-7 text-[10px]" />
                                )} />
                            {errors.first_name && <p className="form-error">{errors.first_name.message}</p>}
                        </div>
                        <div className="form-group mb-3">
                            <Label className="mb-1">Last name</Label>
                            <Controller name="last_name" control={control}
                                render={({ field }) => (
                                    <Input {...field} className="py-7 text-[10px]" />
                                )} />
                            {errors.last_name && <p className="form-error">{errors.last_name.message}</p>}
                        </div>
                    </div>
                    <div className="form-group mb-3">
                        <Label className="mb-1">Email address</Label>
                        <Controller name="email_address" control={control}
                            render={({ field }) => (
                                <Input {...field} className="py-7 text-[10px]" />
                            )} />
                        {errors.email_address && <p className="form-error">{errors.email_address.message}</p>}
                    </div>
                    <div className="form-group mb-2">
                        <Label className="mb-1">Password</Label>
                        <Controller name="password" control={control}
                            render={({ field }) => (
                                // <Input {...field} type="password" className="py-7 text-[10px]" />
                                <PasswordInput {...field} className="py-7 text-[10px]" />
                            )} />
                        {errors.password && <p className="form-error">{errors.password.message}</p>}
                    </div>
                    <div className="mt-5">
                        <Button className="w-full py-7 text-sm" disabled={formLoader}>
                            {
                                formLoader ?
                                    <Spinner />
                                    :
                                    'Sign up'
                            }
                        </Button>
                    </div>
                    <div className="mt-3">
                        <h4 className="text-center text-sm">OR</h4>
                    </div>
                    <div className="mt-3">
                        <GoogleOAuthProvider clientId={'import.meta.env.VITE_GOOGLE_KEY'}>
                            <GoogleSignInButton />
                        </GoogleOAuthProvider>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage;