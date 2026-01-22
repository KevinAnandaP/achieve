"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  Home, 
  LayoutDashboard, 
  Settings, 
  Users, 
  FolderOpen, 
  Hexagon 
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: FolderOpen, label: "Projects", href: "/projects" },
    { icon: Users, label: "Team", href: "/team" },
    { icon: Hexagon, label: "Resources", href: "/resources" },
  ]

  return (
    <aside className="fixed left-4 top-4 bottom-4 z-50 flex flex-col justify-between w-16 bg-[#0a0a0a] rounded-full py-6 items-center shadow-xl border border-gray-800 text-white hidden md:flex">
      <div className="flex flex-col items-center gap-6">
        {/* Logo or Brand Indicator */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E65F2A] text-white font-bold text-lg">
          S
        </div>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-4 mt-4">
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className={cn(
                "relative flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-gray-800",
                pathname === item.href ? "text-[#E65F2A]" : "text-gray-400"
              )}
            >
              {pathname === item.href && (
                <div className="absolute -left-2 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-[#E65F2A]" />
              )}
              <item.icon className="h-5 w-5" />
              <span className="sr-only">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col gap-4">
        <Button variant="ghost" size="icon" className="rounded-full text-gray-400 hover:text-white hover:bg-gray-800">
          <Settings className="h-5 w-5" />
        </Button>
      </div>
    </aside>
  )
}
