import { Sidebar } from "@/components/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { StatsWidget } from "@/components/dashboard/stats-widget"
import { TeamWidget } from "@/components/dashboard/team-widget"
import { ActivityChartWrapper } from "@/components/dashboard/activity-chart-wrapper"
import Image from "next/image"

import { TipWidget } from "@/components/dashboard/tip-widget"

import { PriorityWidget } from "@/components/dashboard/priority-widget"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#F2F2F2] dark:bg-[#121212] font-sans">
      {/* Sidebar - Fixed Position */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 ml-0 md:ml-24 p-4 md:p-8 overflow-y-auto">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              My Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search..." 
                className="pl-9 h-10 w-64 rounded-full bg-white dark:bg-gray-800 border-none shadow-sm"
              />
            </div>
            <ModeToggle />
            <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden relative">
               {/* Placeholder for User Avatar */}
               <Image 
                 src="https://github.com/shadcn.png" 
                 alt="User" 
                 fill
                 className="object-cover"
               />
            </div>
          </div>
        </header>

        {/* Dashboard Grid Container - Widgets */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
           {/* Stats Widget */}
           <div className="col-span-1 md:col-span-1 row-span-2">
              <StatsWidget />
           </div>
           
           {/* Team Widget */}
           <div className="col-span-1 md:col-span-1">
             <TeamWidget />
           </div>
           <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm col-span-1 md:col-span-1 border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-400">
             Done Tasks
           </div>
           <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm col-span-1 md:col-span-2 border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-400">
             Resolved Tasks Chart
           </div>
           
           {/* Activity Progress Chart */}
           <div className="col-span-1 md:col-span-1 row-span-2">
             <ActivityChartWrapper />
           </div>
           
           {/* Knowledge Base / Tips Widget */}
           <div className="col-span-1 md:col-span-1 row-span-2">
             <TipWidget />
           </div>

           {/* Priority Widget */}
           <div className="col-span-1 md:col-span-1">
             <PriorityWidget />
           </div>
           
           {/* Placeholder for User Tasks */}
           <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm col-span-1 md:col-span-1 border border-gray-100 dark:border-gray-800 flex items-center justify-center text-gray-400">
             My Dashboard Widget
           </div>

           <div className="bg-black text-white rounded-3xl p-6 shadow-sm col-span-1 md:col-span-2 border border-gray-800 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                 <div className="flex items-center gap-2">
                    <div className="h-4 w-4 bg-white/20 rounded-full" />
                    <span>My Dashboard</span>
                 </div>
                 <button className="h-8 w-8 rounded-full bg-[#E65F2A] flex items-center justify-center">+</button>
              </div>
              <div>
                  <h3 className="text-xl font-medium mt-4">Create your custom dashboard</h3>
              </div>
           </div>
        </div>
      </main>
    </div>
  )
}
