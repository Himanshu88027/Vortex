"use client"

import { Button } from "@/components/ui/button"
import { useSidebar } from "@/store/use-sidebar"
import { ArrowLeftFromLine, ArrowRightFromLine, PanelLeftClose, PanelLeftOpen } from "lucide-react"
import { Hint } from "@/components/hint"
import { Skeleton } from "@/components/ui/skeleton"

export const Toggle = () => {
    const { collapsed, onExpand, onCollapse } = useSidebar((state) => state)
    const label = collapsed ? "Expand" : "Collapse"
    return (
        <>
            {collapsed && (
                <div className="hidden lg:flex w-full justify-center items-center pt-4 mb-4">
                    <Hint label={label} side="right" asChild>
                        <Button
                            onClick={onExpand}
                            variant="ghost"
                            className="h-auto p-2"
                        >
                            <PanelLeftOpen className="h-5 w-5" />
                            {/* <ArrowRightFromLine className="h-4 w-4" /> */}
                        </Button>
                    </Hint>
                </div>
            )}
            {!collapsed && (
                <div className="w-full p-3 pl-6 mb-2 flex items-center ">
                    <p className="font-semibold text-primary">
                        For you
                    </p>
                    <Hint label={label} side="right" asChild>
                        <Button
                            onClick={onCollapse}
                            className="h-auto p-2 ml-auto"
                            variant="ghost"
                        >
                            <PanelLeftClose className="h-5 w-5" />
                            {/* <ArrowLeftFromLine className="h-4 w-4" /> */}
                        </Button>
                    </Hint>
                </div>
            )}
        </>
    )
}

export const ToggleSkeleton = () => {
    return (
        <div className="p-3 pl-6 mb-2 hidden lg:flex items-center justify-between w-full">
            <Skeleton className="h-6 w-[100px]" />
            <Skeleton className="h-6 w-6" />
        </div>
    )
}