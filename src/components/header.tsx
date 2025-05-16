"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`sticky top-0 w-full py-4 px-4 md:px-8 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 relative z-10">
          <Image
            src={
              process.env.NODE_ENV === "production"
                ? "/wikiworks-concept/logo.png"
                : "/logo.png"
            }
            alt="WikiWorks Logo"
            width={120}
            height={30}
            className="h-8 w-auto transition-transform hover:scale-105"
          />
        </Link>
        {/* <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            機能
          </Link>
          <Link
            href="#benefits"
            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            メリット
          </Link>
        </nav> */}
        <div className="flex items-center space-x-4">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            お問い合わせ
          </Button>
        </div>
      </div>
    </header>
  );
}
