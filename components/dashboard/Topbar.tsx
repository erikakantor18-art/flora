"use client";

import {
  Bell,
  Search,
  Sun,
  UserCircle2,
} from "lucide-react";

export default function Topbar() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : "Good Evening";

  const today = new Date().toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-xl">
      <div className="flex h-20 items-center justify-between px-5 lg:px-8">
        {/* Left */}

        <div className="flex flex-col">
          <h2 className="text-xl font-bold">
            {greeting} 🌿
          </h2>

          <p className="text-sm text-slate-500">
            {today}
          </p>
        </div>

        {/* Search */}

        <div className="relative hidden xl:block">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            placeholder="Search anything..."
            className="w-80 rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-11 pr-4 outline-none transition focus:border-emerald-500 focus:bg-white"
          />
        </div>

        {/* Right */}

        <div className="flex items-center gap-3">
          <button className="rounded-2xl border border-slate-200 bg-white p-3 transition hover:bg-slate-100">
            <Sun size={20} />
          </button>

          <button className="relative rounded-2xl border border-slate-200 bg-white p-3 transition hover:bg-slate-100">
            <Bell size={20} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </button>

          <button className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 transition hover:bg-slate-100">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 font-bold text-white">
              E
            </div>

            <div className="hidden text-left lg:block">
              <p className="font-semibold">
                Erika Garcia
              </p>

              <p className="text-xs text-slate-500">
                Welcome Back
              </p>
            </div>

            <UserCircle2
              size={18}
              className="hidden text-slate-400 lg:block"
            />
          </button>
        </div>
      </div>
    </header>
  );
}