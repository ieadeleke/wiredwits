'use client';

import * as React from "react";

import { cn } from "@/lib/utils";
import { RiEyeFill, RiEyeOffFill } from "react-icons/ri";


function PasswordInput({ className, ...props }: React.ComponentProps<"input">) {
    const [visibleInput, setVisibleInput] = React.useState(false);
    const handleVisiblePasswordInput = () => {
        setVisibleInput(!visibleInput);
    }
    return (
        <div className="relative">
            <input
                type={!visibleInput ? 'password' : 'text'}
                data-slot="input"
                className={cn(
                    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input border-[#EBEBEB] flex h-9 w-full min-w-0 rounded-md border-2 bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-sm",
                    className
                )}
                {...props}
            />
            <span className="absolute right-3 top-0 py-4 block cursor-pointer" onClick={handleVisiblePasswordInput}>
                {
                    visibleInput ?
                        <RiEyeOffFill className="text-xl" />
                        :
                        <RiEyeFill className="text-xl" />
                }
            </span>
        </div>

    )
}

export { PasswordInput }