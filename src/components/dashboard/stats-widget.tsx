"use client"

import { cn } from "@/lib/utils"
import { Hexagon, ArrowUpRight } from "lucide-react"

export function StatsWidget() {
  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Open Tasks Card */}
      <div className="bg-white dark:bg-gray-900 rounded-[32px] p-6 shadow-sm border border-gray-100 dark:border-gray-800 flex-1 flex flex-col justify-center relative group hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-black dark:bg-white" />
            <span className="text-4xl font-medium tracking-tight text-gray-900 dark:text-white">102</span>
            <div className="flex flex-col text-xs font-medium ml-1">
                <span className="text-gray-500">Open Tasks</span>
                <span className="text-[#E65F2A]">4 Overdue</span>
            </div>
        </div>
      </div>

      {/* Unassigned Tasks Card */}
      <div className="bg-[#0a0a0a] rounded-[32px] p-6 shadow-sm flex-1 flex flex-col justify-center relative group hover:shadow-md transition-shadow">
         <div className="flex items-center gap-3">
            <div className="h-2 w-2 rounded-full bg-[#E65F2A]" />
            <span className="text-4xl font-medium tracking-tight text-white">12</span>
            <div className="flex flex-col text-xs font-medium ml-1">
                <span className="text-gray-400">Unassigned tasks</span>
                <span className="text-gray-600">8% of all tasks</span>
            </div>
         </div>
      </div>
    </div>
  )
}
