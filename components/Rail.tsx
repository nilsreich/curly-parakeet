"use client";

import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HomeIcon, LogInIcon, SettingsIcon } from "lucide-react";
import Link from "next/link";

export const Rail = () => {
  const pathname = usePathname();

  return (
    <div className="border-r w-[50px] flex flex-col items-center pt-1">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            asChild
            className={`${
              pathname === "/" && "bg-secondary text-secondary-foreground"
            } rounded p-2`}
          >
            <Link href="/">
              <HomeIcon strokeWidth={1} />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Dashboard</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            asChild
            className={`${
              pathname === "/login" && "bg-secondary text-secondary-foreground"
            } rounded p-2`}
          >
            <Link href="/login">
              <LogInIcon strokeWidth={1} />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Login</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="grow" />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            asChild
            className={`${
              pathname === "/settings" && "bg-secondary text-secondary-foreground"
            } rounded p-2`}
          >
            <Link href="/settings">
              <SettingsIcon strokeWidth={1} />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>Login</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
