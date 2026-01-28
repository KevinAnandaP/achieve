"use client"

import { Folder } from "lucide-react"

export function TeamWidget() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-[32px] p-6 shadow-sm border border-gray-100 dark:border-gray-800 h-full flex flex-col justify-between group hover:shadow-md transition-shadow">
      
      {/* Header */}
      <div className="flex items-start justify-between">
         <div className="h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <Folder className="h-5 w-5 text-gray-900 dark:text-gray-100" />
         </div>
         <span className="text-xs font-medium text-gray-500">Done Tasks by team</span>
      </div>

      {/* Content */}
      <div className="flex items-end gap-2 mt-4">
         <span className="text-5xl font-medium tracking-tighter text-gray-900 dark:text-white">56</span>
         <span className="text-gray-400 text-2xl font-light mb-1">/</span>
         <div className="flex flex-col text-xs text-gray-400 mb-1">
            <span>68</span>
            <span className="text-gray-500">Good job!</span>
         </div>
      </div>

      {/* Progress Bar */}
      <div className="relative h-1 w-full bg-gray-100 dark:bg-gray-800 rounded-full mt-4 overflow-hidden">
         <div className="absolute left-0 top-0 h-full bg-[#E65F2A] w-[82%] rounded-full" />
      </div>
    </div>
  )
}
