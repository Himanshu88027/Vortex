import { getSelf } from "./auth-service"
import { db } from "./db";

export const isBlockedByUser = async (id: string) => {
    try {
        const self = await getSelf()
    
        const otherUser = await db.user.findUnique({
            where: { id }
        })
        
        if (!otherUser) {
            throw new Error("User Not Found");
        }
        
        if (self.id === otherUser.id) {
            throw new Error("Cannot block yourself");
        }
    
        const existingBlock = await db.block.findUnique({
            where: {
                blockerId_blockedId: {
                    blockedId: self.id,
                    blockerId: otherUser.id
                }
            }
        })
    
        return !!existingBlock
    } catch {
        return false
    }
}

export const blockUser = async (id: string) => {
    const self = await getSelf()
    
    if (self.id === id) {
        throw new Error("Cannot block yourself")
    }

    const otherUser = await db.user.findUnique({
        where: { id }
    })
    
    if (!otherUser) {
        throw new Error("User Not Found");
    }
    
    const existingBlock = await db.block.findUnique({
        where: {
            blockerId_blockedId: {
                blockerId: self.id,
                blockedId: otherUser.id
            }
        }
    })

    if (existingBlock) {
        throw new Error("Already Blocked")
    }

    const block = await db.block.create({
        data: {
            blockerId: self.id,
            blockedId: otherUser.id
        },
        include: {
            blocked: true
        },
    })

    return block;
};

export const unblockUser = async (id: string) => {
    const self = await getSelf()
    
    if (self.id === id) {
        throw new Error("Cannot unblock yourself")
    }

    const otherUser = await db.user.findUnique({
        where: { id }
    })
    
    if (!otherUser) {
        throw new Error("User Not Found");
    }
    
    const existingBlock = await db.block.findUnique({
        where: {
            blockerId_blockedId: {
                blockerId: self.id,
                blockedId: otherUser.id
            }
        }
    })

    if (!existingBlock) {
        throw new Error("Not blocked")
    }

    const unblock = await db.block.delete({
        where: {
            id: existingBlock.id
        },
        include: {
            blocked: true
        },
    })

    return unblock;
}