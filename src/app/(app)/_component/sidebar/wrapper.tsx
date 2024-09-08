"use client"

import { cn } from "@/lib/utils"
import { useSidebar } from "@/store/use-sidebar"
import { useEffect, useState } from "react"
import { ToggleSkeleton } from "./toggle"
import { RecommendedSkeleton } from "./recommended"
import { useIsClient } from "usehooks-ts"
import { FollowingSkeleton } from "./following"

interface WrapperProps{
    children: React.ReactNode
}

export const Wrapper = ({children}: WrapperProps) => {
    const isClient = useIsClient()
    const {collapsed} = useSidebar((state) => state)

    if (!isClient) {
        return (
            <aside className="fixed bg-background w-[70px] lg:w-60 h-full left-0 flex flex-col border-r border-[#2e2d35] z-50">
                <ToggleSkeleton />
                <FollowingSkeleton />
                <RecommendedSkeleton />
            </aside>
    )}

    return (
        <aside className={cn(
            "fixed bg-background w-60 h-full left-0 flex flex-col border-r border-[#2e2d35] z-50",
            collapsed && "w-[70px]"
        )}>
            {children}
        </aside>
    )
}