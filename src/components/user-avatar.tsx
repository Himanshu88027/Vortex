import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { Skeleton } from "./ui/skeleton";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { LiveBadge } from "./live-badge";

const avatarSizes = cva(
    "",
    {
        variants: {
            size: {
                default: "h-8 w-8",
                md: "h-8 w-8",
                lg: "h-14 w-14",
            },
        },
        defaultVariants: {
            size: "default",
        }
    }
)

interface UserAvatarProps extends VariantProps<typeof avatarSizes>{
    username: string;
    imageUrl: string;
    isLive?: boolean;
    showBadge?: boolean
}

export const UserAvatar = ({
    username,
    imageUrl,
    isLive,
    showBadge,
    size
}: UserAvatarProps) => {
    const canShowBadge = showBadge && isLive
    return (
        <div className="relative">
            <Avatar className={cn(
                isLive && "ring-2 ring-violet-500 border-2 border-background",
                avatarSizes({ size })
            )} >
                <AvatarImage src={imageUrl} alt="channel-logo" className="object-cover" />
                <AvatarFallback className="uppercase">
                    {username[0]}
                </AvatarFallback>
            </Avatar>
            {canShowBadge && (
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <LiveBadge />
                </div>
            )}
        </div>
    )
}

interface UserAvatarSkeletonProps extends VariantProps<typeof avatarSizes>{};

export const UserAvatarSkeleton = ({ size }: UserAvatarSkeletonProps) => {
    return (
        <Skeleton className={cn(
            "rounded-full",
            avatarSizes({ size })
        )} />
    )
}