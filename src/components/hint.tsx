import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface HintProps {
  label: string;
  children: React.ReactNode;
  side?: "top" | "left" | "bottom" | "right";
  align?: "start" | "center" | "end";
  asChild?: boolean;
}

export const Hint = ({ label, children, side, align, asChild }: HintProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={0}>
        <TooltipTrigger asChild={asChild}>
            {children}
        </TooltipTrigger>
        <TooltipContent 
            className="text-black bg-white" 
            align={align}
            side={side}
        >
          <p>
            {label}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
