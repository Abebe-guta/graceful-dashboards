import { useState } from "react"
import { Home, Users, Settings, LogOut, Menu, User } from "lucide-react"
import { NavLink, useLocation, useNavigate } from "react-router-dom"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Customers", url: "/customers", icon: Users },
  { title: "Profile", url: "/profile", icon: User },
]

const settingsItems = [
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const navigate = useNavigate()
  const { toast } = useToast()
  const currentPath = location.pathname
  const collapsed = state === "collapsed"

  const isActive = (path: string) => currentPath === path || (path === "/" && currentPath === "/")
  
  const handleLogout = () => {
    // Clear any auth tokens/data here
    localStorage.removeItem('isAuthenticated')
    toast({
      title: "Logged out successfully",
      description: "You have been signed out of your account.",
    })
    navigate('/login')
  }

  const getNavClassName = (path: string) => {
    const baseClasses = "flex items-center w-full transition-all duration-200 hover:bg-sidebar-accent"
    return isActive(path) 
      ? `${baseClasses} bg-sidebar-primary text-sidebar-primary-foreground shadow-md`
      : `${baseClasses} text-sidebar-foreground hover:text-sidebar-accent-foreground`
  }

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} transition-all duration-300 border-r border-sidebar-border bg-sidebar`}
      collapsible="icon"
    >
      <SidebarContent className="bg-sidebar">
        {/* Logo Section */}
        <div className="p-6 border-b border-sidebar-border">
          {!collapsed && (
            <h1 className="text-xl font-bold text-sidebar-foreground bg-gradient-primary bg-clip-text text-transparent">
              Dashboard
            </h1>
          )}
          {collapsed && (
            <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Menu className="h-4 w-4 text-white" />
            </div>
          )}
        </div>

        {/* Navigation Section */}
        <SidebarGroup className="px-3 py-4">
          <SidebarGroupLabel className="text-sidebar-foreground/70 text-xs font-semibold uppercase tracking-wider mb-3">
            {!collapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="p-0">
                    <NavLink
                      to={item.url}
                      className={getNavClassName(item.url)}
                    >
                      <div className="p-3 rounded-lg w-full flex items-center">
                        <item.icon className={`${collapsed ? "h-5 w-5" : "h-5 w-5 mr-3"} flex-shrink-0`} />
                        {!collapsed && (
                          <span className="font-medium">{item.title}</span>
                        )}
                      </div>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings Section */}
        <SidebarGroup className="px-3 py-4">
          <SidebarGroupLabel className="text-sidebar-foreground/70 text-xs font-semibold uppercase tracking-wider mb-3">
            {!collapsed && "Preferences"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {settingsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="p-0">
                    <NavLink
                      to={item.url}
                      className={getNavClassName(item.url)}
                    >
                      <div className="p-3 rounded-lg w-full flex items-center">
                        <item.icon className={`${collapsed ? "h-5 w-5" : "h-5 w-5 mr-3"} flex-shrink-0`} />
                        {!collapsed && (
                          <span className="font-medium">{item.title}</span>
                        )}
                      </div>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Logout Button */}
        <div className="mt-auto p-3 border-t border-sidebar-border">
          <Button
            onClick={handleLogout}
            variant="ghost"
            className={`w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground ${
              collapsed ? "px-3" : "px-3"
            }`}
          >
            <LogOut className={`h-5 w-5 ${collapsed ? "" : "mr-3"} flex-shrink-0`} />
            {!collapsed && <span>Logout</span>}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  )
}