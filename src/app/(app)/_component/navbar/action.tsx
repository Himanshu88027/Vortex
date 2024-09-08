"use client"
import { useSession } from "next-auth/react";
import Link from "next/link";

import { SignInButton } from "@/components/auth/signin-button";
import { Button } from "@/components/ui/button";
import { Clapperboard } from "lucide-react";
import UserButton from "@/components/auth/user-button";

export const Action = () => {
    const session = useSession();
    const user = session.data?.user

    return (
        <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
            {!user && (
                <SignInButton />
            )}
            {!!user && (
                <div className="flex items-center gap-x-4">
                    <Button
                        size="sm"
                        variant="ghost"
                        asChild
                        className="text-muted-foreground hover:text-primary"
                    >
                        <Link href={`/u/${user.username}`}>
                            <Clapperboard className="h-5 w-5 lg:mr-2" />
                            <span className="hidden lg:block">
                                Dashboard
                            </span>
                        </Link>
                    </Button>
                    <UserButton />
                </div>
            )}
        </div>
    )
    
}
