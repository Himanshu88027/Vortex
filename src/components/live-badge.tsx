import { cn } from "@/lib/utils";

interface LiveBadgeProps{
    className?: string;
}

export const LiveBadge = ({ className }: LiveBadgeProps) => {
    return (
        <div className={cn(
            "px-1.5 text-center rounded-md bg-rose-500 font-semibold tracking-wide text-[10px] border border-background",
            className
        )}>
            Live
        </div>
    );
}