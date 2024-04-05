"use client"; // Import necessary components
import React from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react"; // Assuming 'lucide-react' provides Moon and Sun icons
import { useTheme } from "next-themes";
import Link from "next/link";

const Header = () => {
  const { theme, setTheme } = useTheme("system"); // Access current theme and setTheme function
  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light"); // Toggle theme based on current state
  };
  return (
    <header className="container mx-auto flex items-center justify-between border-b bg-secondary">
      <div>
        <Link href="/" className="text-xl font-medium">
          <span className="">Near</span>
          <span className="rounded-md bg-primary px-2 py-1 text-white">
            Shop
          </span>
        </Link>
      </div>
      <div className="m-1 w-[600px]">
        <input
          className="w-full rounded-lg bg-secondary px-5 py-2 outline-none ring-1  ring-primary"
          type="search"
          name="search"
          placeholder="Search your products..."
        />
      </div>
      <div className="">
        <Link className="pr-2" href="/product">
          Product
        </Link>
        <Link href="/cart">Cart</Link>
        <Button variant="outline" onClick={handleToggle}>
          {theme === "light" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  );
};

export default Header;
