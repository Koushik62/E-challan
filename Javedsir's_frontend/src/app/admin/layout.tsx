"use client"
import Link from "next/link"
import {
    Bell,
    CircleUser,
    CreditCard, // Add CreditCard icon
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    Search,
    ShoppingCart,
    Users,
    Files,
    LucideIcon,
    DollarSign,
    BookText,
    KeyRound
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import axios from "axios"
interface NavProps {
    title: string
    href?: string
    icon: LucideIcon
    variant: "default" | "ghost"
}

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const navItems: NavProps[] = [
        {
            title: 'Dashboard',
            href: 'dashboard',
            variant: 'default',
            icon: Home
        },
        {
            title: 'Usage Insights',
            href: 'applications',
            icon: LineChart,
            variant: 'ghost',
        },
        {
            title: 'Credits and Pricing',
            href: 'Credits',
            icon: DollarSign,
            variant: 'ghost',
        },
        {
            title: 'API Documentation',
            href: 'customers',
            icon: BookText,
            variant: 'ghost',
        },
        {
            title: 'API Credentials',
            href: 'customers',
            icon: KeyRound,
            variant: 'ghost',
        },
        
    ]
    const [credits, setCredits] = useState(0);
    useEffect(() => {
        // Fetch user's credis when the component mounts
        
        fetchUserCredits();
      }, []);
      const fetchUserCredits = () => {
        const token = localStorage.getItem('auth-token');
        const config = {
          headers: {
            Authorization: `Bearer ${token}`
          }
        };
    
        axios.get('http://localhost:4000/credits', config)
          .then(response => {
            const { userCredits } = response.data;
            setCredits(userCredits);
          })
          .catch(error => {
            console.error('Error fetching user credits:', error);
          });
      };
    

    return (
        <>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <div className="hidden border-r md:block">
                    <div className="flex h-full max-h-screen flex-col gap-2">
                        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                            <Link href="dashboard" className="flex items-center gap-2 font-semibold">
                                <Package2 className="h-6 w-6" />
                                <span className="">Vahan Online</span>
                            </Link>
                            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                                <Bell className="h-4 w-4" />
                                <span className="sr-only">Toggle notifications</span>
                            </Button>
                        </div>
                        <div className="flex-1">
                            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                                {navItems.map((link) => (
                                    <Link
                                        key={link.title}
                                        href={'/admin/' + link.href}
                                        className={cn(
                                            buttonVariants({ variant: link.variant }),
                                            link.variant === "default" &&
                                              "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                                            "justify-start my-1 items-center"
                                          )}
                                    >
                                        <link.icon className="h-4 w-4 mr-2" />
                                        {link.title}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <header className="flex h-14 items-center gap-4 border-b px-4 lg:h-[60px] lg:px-6">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="shrink-0 md:hidden"
                                >
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="flex flex-col">
                                <nav className="grid gap-2 text-lg font-medium">
                                    <Link
                                        href="#"
                                        className="flex items-center gap-2 text-lg font-semibold"
                                    >
                                        <Package2 className="h-6 w-6" />
                                        <span className="sr-only">Vahan Online</span>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                    >
                                        <Home className="h-5 w-5" />
                                        Dashboard
                                    </Link>
                                    <Link
                                        href="#"
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                                    >
                                        <Files className="h-5 w-5" />
                                        Usage Insights
                                        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                                            6
                                        </Badge>
                                    </Link>
                                    <Link
                                        href="#"
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                    >
                                        <Users className="h-5 w-5" />
                                        API Documentation
                                    </Link>
                                    <Link
                                        href="#"
                                        className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                                    >
                                        <LineChart className="h-5 w-5" />
                                        Analytics
                                    </Link>
                                </nav>
                            </SheetContent>
                        </Sheet>
                        <div className="w-full flex-1">
                            <form>
                                <div className="relative">
                                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        type="search"
                                        placeholder="Search applications..."
                                        className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                                    />
                                </div>
                            </form>
                        </div>
                        <Link href="/admin/credits" className="ml-20"> {/* Adjusted margin */}
                            <Button variant="secondary" size="icon" className="w-24"> {/* Increased width */}
                                <CreditCard className="h-5 w-5" />
                                <span className="sr-only">Credits hijoasdoo</span>
                                <p>Credits:{credits}</p>
                            </Button>
                        </Link>


                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="secondary" size="icon" className="rounded-full">
                                    <CircleUser className="h-5 w-5" />
                                    <span className="sr-only">Toggle user menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem onClick={()=>window.location.replace('/')}>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </header>
                    <main className="flex flex-1 flex-col gap-4 p-4 bg-muted/40 lg:gap-6 lg:p-6">
                        {children}
                    </main>
                </div>

            </div>

        </>
    );
}
