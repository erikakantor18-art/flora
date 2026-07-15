"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Wallet,
  DollarSign,
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
    name: "Income",
    href: "/income",
    icon: DollarSign,
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

      {/* Logo */}

      <div className="mb-10">

        <h1 className="text-3xl font-black text-green-600">

          🌿 Flora

        </h1>

        <p className="mt-1 text-sm text-slate-500">

          Personal Life Dashboard

        </p>

      </div>

      {/* Menu */}

      <nav className="flex-1 space-y-2">

        {menus.map((menu) => {

          const Icon = menu.icon;

          const active =
            pathname === menu.href;

          return (

            <Link
              key={menu.href}
              href={menu.href}
              className={`flex items-center gap-3 rounded-2xl px-5 py-4 transition-all duration-200 ${
                active
                  ? "bg-green-600 text-white shadow-lg"
                  : "text-slate-600 hover:bg-slate-100 hover:text-green-600"
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

      {/* Footer */}

      <div className="mt-10 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-500 p-5 text-white">

        <p className="text-sm opacity-80">

          🌿 Flora

        </p>

        <h3 className="mt-2 text-xl font-black">

          Version 2.0

        </h3>

        <p className="mt-2 text-xs opacity-80">

          Personal Finance • Productivity • Goals

        </p>

      </div>

    </aside>

  );

}