"use client";

import React, { PropsWithChildren } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { Button } from "@/components/atoms/button";

export const SubmitButton = ({children}:PropsWithChildren) => {
    const { pending } = useFormStatus();

    return (
        <Button
        type="submit"
        className="w-full bg-primary text-white hover:bg-primary-dark focus:bg-primary-dark"
        aria-disabled={pending}
        >
        {pending ? "Submitting..." : children}
        </Button>
    );
}