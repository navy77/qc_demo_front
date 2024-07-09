import React from "react";
import MenuTitle from "./menu-title";
import MenuItem from "./menu-item";
import { Avatar, AvatarFallback } from "./ui/avatar";
import Link from "next/link";
import { LightDarkToggle } from "./ui/light-dark-toggle";
import { cn } from "@/lib/utils";

export default function MainMenu({className}:{className?:string}) {
  return (
    <nav className={cn(`md:bg-muted overflow-auto p-4 flex flex-col`, className)}>
      <header className="border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </header>

      <ul className="py-4 grow">
        <MenuItem href="/dashboard">Dashboard</MenuItem>
        <MenuItem href="/dashboard/report">Report</MenuItem>
        <MenuItem href="/dashboard/calibration">Calibration</MenuItem>
        <MenuItem href="/dashboard/settings">Settings</MenuItem>
      </ul>
      <footer className="flex gap-2 items-center">
        <Avatar>
        <AvatarFallback className="bg-pink-300 dark:bg-pink-800">A</AvatarFallback>
        </Avatar>
        <Link href="/" className="hover:underline">
          Logout
        </Link>
        <LightDarkToggle className="ml-auto" />
      </footer>
    </nav>
  );
}
