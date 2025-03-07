"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  
  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b">
      <nav className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <svg 
              width="32" 
              height="32" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="text-pink-600"
            >
              <path 
                d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.04L12 21.35Z" 
                fill="currentColor" 
              />
            </svg>
            <span className="font-bold text-xl">Wedding Planner</span>
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <Link 
            href="/features" 
            className={`text-gray-700 hover:text-pink-600 ${pathname === "/features" ? "text-pink-600" : ""}`}
          >
            Features
          </Link>
          <Link 
            href="/gallery" 
            className={`text-gray-700 hover:text-pink-600 ${pathname === "/gallery" ? "text-pink-600" : ""}`}
          >
            Gallery
          </Link>
          <Link 
            href="/about" 
            className={`text-gray-700 hover:text-pink-600 ${pathname === "/about" ? "text-pink-600" : ""}`}
          >
            About
          </Link>
          <div className="flex gap-3">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
} 