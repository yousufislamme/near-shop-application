"use client"; // Import necessary components
import React from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react"; // Assuming 'lucide-react' provides Moon and Sun icons
import { useTheme } from "next-themes";

const Header = () => {
  const { theme, setTheme } = useTheme("system"); // Access current theme and setTheme function

  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light"); // Toggle theme based on current state
  };
  return (
    <header className="container mx-auto flex items-center justify-between border-b">
      <div>
        <h1 className="text-xl font-medium">
          <span className="">Near</span>
          <span className="rounded-md bg-primary px-2 py-1">Shop</span>
        </h1>
      </div>
      <div>
        <input
          className="rounded-lg bg-secondary px-5 py-2 outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
      </div>
      <div>
        <Button onClick={handleToggle}>
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
