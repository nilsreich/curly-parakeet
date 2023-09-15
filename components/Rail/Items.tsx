"use client";
import { usePathname } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import React from "react";

type RailItemProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};
export const RailItem = ({ href, label, children }: RailItemProps) => {
  const pathname = usePathname();
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild
          className={`${
            pathname === href && "bg-secondary text-secondary-foreground"
          } rounded p-2`}
        >
          <Link href={href}>{children}</Link>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
