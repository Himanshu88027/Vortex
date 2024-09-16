"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";

import { SignInButton } from "@/components/auth/signin-button";
import { Button } from "@/components/ui/button";
import { Clapperboard, LogOut } from "lucide-react";
import UserButton from "@/components/auth/user-button";

export const Action = () => {
    const session = useSession();
    const user = session.data?.user

    return (
        <div className="flex items-center justify-end gap-x-2">
            <Button
                size="sm"
                variant="ghost"
                asChild
                className="text-muted-foreground hover:text-primary"
            >
                <Link href="/">
                    <LogOut className="h-5 w-5 mr-2" />
                        Exit
                </Link>
            </Button>
            <UserButton />
        </div>
    )
    
}
