"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "🏠",
  },
  {
    name: "Finance",
    href: "/finance",
    icon: "💰",
  },
  {
    name: "Goals",
    href: "/goals",
    icon: "🎯",
  },
  {
    name: "Study",
    href: "/study",
    icon: "📚",
  },
  {
    name: "Australia",
    href: "/australia",
    icon: "🇦🇺",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-72 flex-col bg-slate-900 text-white">

      <div className="border-b border-slate-700 p-8">

        <h1 className="text-3xl font-black">
          🌿 Erika OS
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Personal Life Operating System
        </p>

      </div>

      <nav className="flex-1 p-4">

        {menus.map((menu) => {

          const active = pathname === menu.href;

          return (

            <Link
              key={menu.href}
              href={menu.href}
              className={`mb-3 flex items-center gap-4 rounded-2xl px-5 py-4 transition ${
                active
                  ? "bg-green-600"
                  : "hover:bg-slate-800"
              }`}
            >

              <span className="text-2xl">
                {menu.icon}
              </span>

              <span className="font-medium">
                {menu.name}
              </span>

            </Link>

          );

        })}

      </nav>

      <div className="border-t border-slate-700 p-6">

        <div className="rounded-2xl bg-slate-800 p-5">

          <p className="text-sm text-slate-400">
            Monthly Goal
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            68%
          </h2>

          <div className="mt-4 h-2 rounded-full bg-slate-700">

            <div className="h-2 w-2/3 rounded-full bg-green-500"></div>

          </div>

        </div>

      </div>

    </aside>
  );
}