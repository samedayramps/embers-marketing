"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Switch } from "@/components/ui/switch"

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Ensure we're mounted before rendering to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  // If not mounted yet, show a placeholder with the same dimensions
  if (!mounted) {
    return <div className="w-[42px] h-6" />
  }

  const isDark = theme === "dark" || (theme === "system" && systemTheme === "dark")

  const toggleTheme = (toLight: boolean) => {
    if (theme === "system") {
      setTheme(toLight ? "light" : "dark")
    } else {
      setTheme(toLight ? "light" : "dark")
    }
  }

  return (
    <div className="flex items-center space-x-2">
      <Sun 
        className="h-4 w-4 text-foreground/80 cursor-pointer hover:text-foreground transition-colors" 
        onClick={() => toggleTheme(true)}
      />
      <Switch
        checked={isDark}
        onCheckedChange={(checked) => toggleTheme(!checked)}
        className="data-[state=checked]:bg-foreground"
      />
      <Moon 
        className="h-4 w-4 text-foreground/80 cursor-pointer hover:text-foreground transition-colors" 
        onClick={() => toggleTheme(false)}
      />
    </div>
  )
} 