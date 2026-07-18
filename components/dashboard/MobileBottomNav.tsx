"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Wallet,
 CalendarDays,
 GraduationCap,
 Plane,
 BookOpen,
} from "lucide-react";

const menus = [
  {
    label: "Home",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Finance",
    href: "/finance",
    icon: Wallet,
  },
  {
    label: "Dream",
    href: "/dream",
    icon: Plane,
  },
  {
    label: "Planner",
    href: "/planner",
    icon: CalendarDays,
  },
  {
    label: "Study",
    href: "/study",
    icon: GraduationCap,
  },
  {
    label: "Journal",
    href: "/journal",
    icon: BookOpen,
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-5 left-1/2 z-50 flex w-[95%] max-w-md -translate-x-1/2 items-center justify-between rounded-full border border-white/40 bg-white/90 p-2 shadow-2xl backdrop-blur-xl lg:hidden">
      {menus.map((item) => {
        const Icon = item.icon;

        const active =
          pathname === item.href ||
          pathname.startsWith(item.href + "/");

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center rounded-full transition-all duration-300 ${
              active
                ? "bg-emerald-600 px-4 py-3 text-white shadow-lg"
                : "px-3 py-3 text-slate-500 hover:text-emerald-600"
            }`}
          >
            <Icon size={20} />

            <span
              className={`overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 ${
                active
                  ? "ml-2 max-w-[100px] opacity-100"
                  : "ml-0 max-w-0 opacity-0"
              }`}
            >
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}