"use client";

import { useEffect, useState } from "react";

import {
  Bell,
  Moon,
  Search,
  Sun,
  LogOut,
} from "lucide-react";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";

import useAuth from "@/hooks/useAuth";
import useProfile from "@/hooks/useProfile";

export default function Topbar() {

  const router = useRouter();

  const { theme, setTheme } =
    useTheme();

  const { user } =
    useAuth();

  const {
    profile,
  } = useProfile();

  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {

    setMounted(true);

  }, []);

  async function handleLogout() {

    await supabase.auth.signOut();

    router.replace("/login");

    router.refresh();

  }

  const displayName =
    profile?.full_name ||
    user?.email ||
    "Guest";

  return (

    <header className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h1 className="text-2xl font-black lg:text-3xl">

          Erika OS

        </h1>

        <p className="mt-1 text-slate-500">

          Welcome Back 👋

        </p>

      </div>

      <div className="flex flex-wrap items-center gap-3">

        <div className="flex flex-1 items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 lg:w-72 lg:flex-none">

          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            placeholder="Search..."
            className="w-full bg-transparent outline-none"
          />

        </div>

        <button className="rounded-2xl border border-slate-200 p-3 hover:bg-slate-100">

          <Bell size={20} />

        </button>

        <button
          onClick={() =>
            setTheme(
              theme === "dark"
                ? "light"
                : "dark"
            )
          }
          className="rounded-2xl border border-slate-200 p-3 hover:bg-slate-100"
        >

          {mounted && (

            theme === "dark"

              ? <Sun size={20} />

              : <Moon size={20} />

          )}

        </button>

        <button
          onClick={handleLogout}
          className="rounded-2xl border border-red-200 p-3 text-red-600 transition hover:bg-red-50"
        >

          <LogOut size={20} />

        </button>

        <div className="hidden items-center gap-3 rounded-2xl bg-green-600 px-4 py-2 text-white md:flex">

          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white">

            {profile?.avatar_url ? (

              <Image
                src={profile.avatar_url}
                alt="Avatar"
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
                unoptimized
              />

            ) : (

              <span className="font-bold text-green-600">

                {displayName
                  .charAt(0)
                  .toUpperCase()}

              </span>

            )}

          </div>

          <div>

            <p className="font-semibold">

              {displayName}

            </p>

            <p className="text-xs opacity-80">

              Personal Dashboard

            </p>

          </div>

        </div>

      </div>

    </header>

  );

}