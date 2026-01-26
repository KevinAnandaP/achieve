"use client"

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { MoreHorizontal } from 'lucide-react';

const data = [
  { name: 'Completed', value: 75 },
  { name: 'Remaining', value: 25 },
];

const COLORS = ['#E65F2A', '#F3F4F6'];
const DARK_COLORS = ['#E65F2A', '#1f2937']; // Dark mode background circle

export function ActivityChart() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-[32px] p-6 shadow-sm border border-gray-100 dark:border-gray-800 h-full flex flex-col items-center justify-between relative">
      
      {/* Header Icon */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
         <div className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600 dark:text-gray-300"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
         </div>
      </div>

      <div className="mt-8 relative w-full h-[160px] flex items-center justify-center">
         <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={55}
                outerRadius={70}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={index === 0 ? COLORS[0] : 'var(--bg-indicator)'} className="stroke-none dark:fill-gray-800" />
                ))}
              </Pie>
            </PieChart>
         </ResponsiveContainer>
         
         {/* Center Text */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="text-4xl font-semibold text-gray-900 dark:text-white">25</div>
         </div>
      </div>

      <div className="text-center mt-2">
         <p className="text-sm font-medium text-gray-500 dark:text-gray-400 leading-tight">
            All products that your<br/>team made by all<br/>Admins
         </p>
      </div>

      <style jsx global>{`
        :root {
          --bg-indicator: #F3F4F6;
        }
        .dark {
          --bg-indicator: #1f2937;
        }
      `}</style>
    </div>
  )
}
