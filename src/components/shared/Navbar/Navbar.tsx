"use client";
import Link from "next/link";
import { use, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Menu, User } from "lucide-react";
import { useUser } from "@/context/userContext";
import { logoutUser } from "@/services/AuthServices";
import { toast } from "sonner";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, setIsLoading } = useUser(); // Change to null to see sign in state
  console.log(user);
  useEffect(() => {
    setIsLoading(true);
  }, []);

  const handleLogout = () => {
    logoutUser();
    toast.success("Logged out successfully");
    setIsLoading(true);
  };

  return (
    <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md shadow-md border-b border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand name */}
          <div className="flex-shrink-0 flex items-center">
            <div className="flex items-center gap-2">
              <svg
                className="w-8 h-8 text-indigo-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 8V16M8 12H16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xl font-semibold text-white">EventPro</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8">
              <NavLink href="/">Home</NavLink>
              {user && <NavLink href="/events">Events</NavLink>}
              {user && <NavLink href="/add-event">Add Event</NavLink>}
              {user && <NavLink href="/my-event">My Events</NavLink>}
            </div>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full bg-slate-700 hover:bg-slate-600"
                  >
                    {user.photoUrl ? (
                      <img
                        src={user.photoUrl}
                        alt="User Avatar"
                        className="absolute inset-0 h-full w-full rounded-full object-cover"
                      />
                    ) : (
                      <User className="h-4 w-4 text-white" />
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 bg-slate-800 border-slate-700"
                  align="end"
                  forceMount
                >
                  <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 text-slate-200">
                    {user.name || "Profile Name"}
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-red-500/20 focus:bg-red-500/20 text-red-400">
                    <Button className="w-full" onClick={handleLogout}>
                      Sign out
                    </Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  Sign In
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full bg-slate-700 hover:bg-slate-600 mr-2"
                  >
                    <User className="h-4 w-4 text-white" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 bg-slate-800 border-slate-700"
                  align="end"
                  forceMount
                >
                  <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 text-slate-200">
                    <Link href="/profile" className="w-full">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-slate-700 focus:bg-slate-700 text-slate-200">
                    <Link href="/settings" className="w-full">
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:bg-slate-700 focus:bg-slate-700 text-slate-200"
                  >
                    <Link href="/" className="w-full">
                      Home
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:bg-slate-700 focus:bg-slate-700 text-slate-200"
                  >
                    <Link href="/events" className="w-full">
                      Events
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:bg-slate-700 focus:bg-slate-700 text-slate-200"
                  >
                    <Link href="/add-event" className="w-full">
                      Add Event
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:bg-slate-700 focus:bg-slate-700 text-slate-200"
                  >
                    <Link href="/my-event" className="w-full">
                      My Events
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-red-500/20 focus:bg-red-500/20 text-red-400">
                    <Button onClick={handleLogout}> Sign out</Button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href="/login" className="mr-2">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  Sign In
                </Button>
              </Link>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </MobileNavLink>
            <MobileNavLink
              href="/events"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </MobileNavLink>
            <MobileNavLink
              href="/add-event"
              onClick={() => setMobileMenuOpen(false)}
            >
              Add Event
            </MobileNavLink>
            <MobileNavLink
              href="/my-event"
              onClick={() => setMobileMenuOpen(false)}
            >
              My Events
            </MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative text-slate-300 hover:text-white transition-colors duration-200"
    >
      <span className="relative group">
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
      </span>
    </Link>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700"
    >
      {children}
    </Link>
  );
}
