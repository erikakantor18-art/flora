"use client";

import {
  Bell,
  Search,
  Settings,
} from "lucide-react";

interface Props {
  title?: string;
}

export default function Topbar({
  title = "Dashboard",
}: Props) {
  return (
    <header className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h1 className="text-3xl font-bold">
          {title}
        </h1>

        <p className="text-gray-500">
          Welcome back 👋
        </p>

      </div>

      <div className="flex items-center gap-4">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            placeholder="Search..."
            className="w-72 rounded-xl border bg-white py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-indigo-500"
          />

        </div>

        <button className="rounded-xl border bg-white p-3 hover:bg-slate-100">

          <Bell size={20} />

        </button>

        <button className="rounded-xl border bg-white p-3 hover:bg-slate-100">

          <Settings size={20} />

        </button>

        <img
          src="https://ui-avatars.com/api/?name=Erika"
          alt="avatar"
          className="h-11 w-11 rounded-full"
        />

      </div>

    </header>
  );
}