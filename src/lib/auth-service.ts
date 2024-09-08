import { auth } from "@/next-auth";

import { db } from "./db";

export const getSelf = async () => {
    const self = await auth();
    
    if (!self || !self.user) {
        throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
        where: { id: self.user.id }
    });

    if (!user) {
        throw new Error("No user found");
    }

    return user;
}

export const getSelfByUsername = async (username: string) => {
    const self = await auth();

    if (!self || !self.user) {
        throw new Error("Unauthorized");
    }

    const user = await db.user.findUnique({
        where: { username }
    });

    if (!user) {
        throw new Error("No user found");
    }

    if (self.user.username !== user.username) {
        throw new Error("Unauthorized");
    }

    return user;
}