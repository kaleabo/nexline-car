"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Car, Menu, Phone, Sun, Moon, ChevronDown } from "lucide-react"
import { useTheme } from "next-themes"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

const navigationItems = [
  { name: "Vehicles", href: "/vehicles" },
  { 
    name: "Services", 
    href: "#",
    children: [
      { name: "Sell Your Car", href: "/sell" },
      { name: "Financing", href: "/financing" },
    ]
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <header className={`${pathname == "/" ? "fixed" : "sticky" } top-0 z-50 w-full ${
      scrolled ? "border-b bg-background" : "bg-transparent"
    }`}>
      <nav className="container flex h-20 items-center">
        <Link 
          href="/" 
          className="flex items-center gap-2 font-bold text-xl transition-transform hover:scale-105"
        >
          <Image src="/logo.jpg" className="w-auto h-1/2 rounded-xl" alt="Nexline" width={40} height={40} />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 mx-8">
          {navigationItems.map((item) => (
            item.children ? (
              <DropdownMenu key={item.name}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary">
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.name}>
                      <Link 
                        href={child.href}
                        className="w-full"
                      >
                        {child.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-all hover:text-primary relative
                  ${isActive(item.href) ? 'text-primary' : ''}
                  after:content-[''] after:absolute after:left-0 after:bottom-[-4px]
                  after:h-[2px] after:w-full after:scale-x-0 after:bg-primary
                  after:transition-transform hover:after:scale-x-100
                `}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>

        <div className="flex items-center gap-4 ml-auto">
          {/* <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full hover:bg-muted"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button> */}

          <Button 
            variant="default" 
            className="hidden md:flex gap-2 rounded-full"
          >
            <Phone className="h-4 w-4" />
            Contact Sales
          </Button>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden rounded-full hover:bg-muted"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
              <nav className="flex flex-col p-6">
                {navigationItems.map((item) => (
                  <div key={item.name} className="border-b border-border">
                    {item.children ? (
                      <div className="py-4">
                        <p className="text-lg font-medium mb-2">{item.name}</p>
                        <div className="flex flex-col gap-2 pl-4">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="text-base text-muted-foreground hover:text-primary"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className={`block py-4 text-lg font-medium transition-colors hover:text-primary
                          ${isActive(item.href) ? 'text-primary' : ''}
                        `}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}