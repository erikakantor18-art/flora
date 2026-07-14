"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Wallet,
  Target,
  BookOpen,
  Settings,
} from "lucide-react";

const menus = [
  {
    name: "Home",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Finance",
    href: "/finance",
    icon: Wallet,
  },
  {
    name: "Goals",
    href: "/goals",
    icon: Target,
  },
  {
    name: "Study",
    href: "/study",
    icon: BookOpen,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function MobileNav() {

  const pathname = usePathname();

  return (

    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around border-t border-slate-200 bg-white py-3 shadow-lg lg:hidden">

      {menus.map((menu) => {

        const Icon = menu.icon;

        const active =
          pathname === menu.href;

        return (

          <Link
            key={menu.href}
            href={menu.href}
            className={`flex flex-col items-center gap-1 ${
              active
                ? "text-green-600"
                : "text-slate-500"
            }`}
          >

            <Icon size={22} />

            <span className="text-xs">
              {menu.name}
            </span>

          </Link>

        );

      })}

    </nav>

  );

}