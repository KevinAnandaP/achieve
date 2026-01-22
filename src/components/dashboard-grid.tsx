"use client"

import { cn } from "@/lib/utils"

interface DashboardGridProps {
  children: React.ReactNode
  className?: string
}

export function DashboardGrid({ children, className }: DashboardGridProps) {
  return (
    <div 
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  )
}
