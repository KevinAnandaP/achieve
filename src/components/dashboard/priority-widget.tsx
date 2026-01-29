"use client"

import { ArrowUpRight } from "lucide-react"

export function PriorityWidget() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-[32px] p-6 shadow-sm border border-gray-100 dark:border-gray-800 h-full flex flex-col justify-between">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
         <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-black dark:border-b-white" />
         <div className="h-8 w-8 rounded-full bg-black dark:bg-white flex items-center justify-center">
             <ArrowUpRight className="h-4 w-4 text-white dark:text-gray-900" />
         </div>
      </div>
      
      <div className="mb-4">
         <span className="text-sm text-gray-500">High priority tasks</span>
      </div>

      {/* Stats */}
      <div className="flex items-end gap-2 mb-4">
         <span className="text-5xl font-medium tracking-tighter text-gray-900 dark:text-white">15</span>
         <div className="flex flex-col text-xs text-gray-400 mb-1">
            <span>12%</span>
            <span className="text-gray-500">Of all tasks</span>
         </div>
      </div>

      {/* Visual Indicator */}
      <div className="flex items-end gap-1 h-8 mt-auto">
         <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[0px] border-r-transparent border-b-[24px] border-b-black dark:border-b-white" />
         <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[0px] border-r-transparent border-b-[16px] border-b-black dark:border-b-white" />
         <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[0px] border-r-transparent border-b-[12px] border-b-[#E65F2A]" />
         <div className="w-0 h-0 border-l-[24px] border-l-transparent border-r-[0px] border-r-transparent border-b-[12px] border-b-black dark:border-b-white ml-auto" />
      </div>
    </div>
  )
}
