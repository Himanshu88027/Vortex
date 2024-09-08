import Link from "next/link"
import { Button } from "../ui/button"

export const SignInButton = () => {
    return (
            <Link href='/sign-in'>
                <Button size="sm" variant="primary">
                      Sign In
                </Button>
            </Link>
    )
}