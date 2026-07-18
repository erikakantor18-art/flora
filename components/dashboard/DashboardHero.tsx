"use client";

import { CloudSun } from "lucide-react";

export default function DashboardHero() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning 🌤️"
      : hour < 17
      ? "Good Afternoon ☀️"
      : "Good Evening 🌙";

  return (
    <section className="mb-6 rounded-3xl bg-gradient-to-r from-emerald-500 to-green-600 p-5 text-white shadow-lg sm:p-6 lg:mb-8 lg:p-8">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm text-emerald-100">
            {greeting}
          </p>

          <h1 className="mt-2 text-2xl font-bold sm:text-3xl lg:text-4xl">
            Welcome back, Erika 👋
          </h1>

          <p className="mt-3 max-w-xl text-sm text-emerald-100 sm:text-base">
            Keep building your future. Every small step today brings you closer
            to Australia and your dreams.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur">
          <CloudSun size={34} />

          <div>
            <p className="text-lg font-bold">
              29°C
            </p>

            <p className="text-sm text-emerald-100">
              Medan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}