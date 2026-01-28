"use client"

import dynamic from "next/dynamic"

// Dynamically import the chart with SSR disabled to prevent hydration errors from Recharts
const ActivityChart = dynamic(
  () => import('@/components/dashboard/activity-chart').then((mod) => mod.ActivityChart),
  { ssr: false }
)

export function ActivityChartWrapper() {
  return <ActivityChart />
}
