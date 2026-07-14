"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Wallet,
  Target,
  BookOpen,
  Plane,
  Calendar,
  NotebookPen,
  Settings,
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
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
    name: "Australia",
    href: "/australia",
    icon: Plane,
  },
  {
    name: "Planner",
    href: "/planner",
    icon: Calendar,
  },
  {
    name: "Journal",
    href: "/journal",
    icon: NotebookPen,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {

  const pathname = usePathname();

  return (

    <aside className="hidden lg:flex w-72 flex-col border-r border-slate-200 bg-white p-6">

      <h1 className="mb-10 text-3xl font-black text-green-600">
        Erika OS
      </h1>

      <nav className="space-y-2">

        {menus.map((menu) => {

          const Icon = menu.icon;

          const active =
            pathname === menu.href;

          return (

            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 rounded-2xl px-5 py-4 transition ${
                active
                  ? "bg-green-600 text-white"
                  : "hover:bg-slate-100"
              }`}
            >

              <Icon size={20} />

              <span className="font-medium">
                {menu.name}
              </span>

            </Link>

          );

        })}

      </nav>

    </aside>

  );

}