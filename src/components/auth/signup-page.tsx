'use client'
import { Button } from "../ui/button"
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

export const SignUpPage = () => {
    const handleSignIn = async () => {
        await signIn("google");
    }
    return (
        <div className="p-3 bg-muted rounded-xl">
            <Button onClick={handleSignIn}>
                <FcGoogle className="h-4 w-4 mr-3"/>
                Sign Up with Google
            </Button>
        </div>
    )
}