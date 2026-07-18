"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  LayoutDashboard,
  Wallet,
  CalendarDays,
  GraduationCap,
  Plane,
  BookOpen,
  Settings,
  ChevronLeft,
  ChevronRight,
  Leaf,
  UserCircle2,
  LogOut,
} from "lucide-react";

const menus = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Finance",
    href: "/finance",
    icon: Wallet,
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
    label: "Dream Fun",
    href: "/dream",
    icon: Plane,
  },
  {
    label: "Journal",
    href: "/journal",
    icon: BookOpen,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`sticky top-0 hidden h-screen flex-col border-r border-slate-200 bg-white transition-all duration-300 lg:flex ${
        collapsed ? "w-24" : "w-72"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 p-6">
        {!collapsed && (
          <div>
            <div className="flex items-center gap-2">
              <Leaf
                className="text-emerald-600"
                size={30}
              />

              <h1 className="text-3xl font-black">
                Flora
              </h1>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Personal Life OS
            </p>
          </div>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100"
        >
          {collapsed ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 space-y-2 p-4">
        {menus.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            pathname.startsWith(item.href + "/");

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-4 rounded-2xl px-4 py-4 transition-all duration-200 ${
                active
                  ? "bg-emerald-600 text-white shadow-lg"
                  : "text-slate-600 hover:bg-slate-100 hover:text-emerald-600"
              }`}
            >
              <Icon size={22} />

              {!collapsed && (
                <span className="font-medium">
                  {item.label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-200 p-4">
        {!collapsed ? (
          <>
            <div className="flex items-center gap-3 rounded-2xl bg-slate-50 p-3">
              <UserCircle2
                className="text-emerald-600"
                size={42}
              />

              <div>
                <h4 className="font-semibold">
                  Your Account
                </h4>

                <p className="text-xs text-slate-500">
                  Ready to grow 🌿
                </p>
              </div>
            </div>

            <button
              disabled
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-slate-400"
            >
              <LogOut size={18} />
              Logout
            </button>
          </>
        ) : (
          <div className="flex justify-center">
            <UserCircle2
              className="text-emerald-600"
              size={34}
            />
          </div>
        )}
      </div>
    </aside>
  );
}