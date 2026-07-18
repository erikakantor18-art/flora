"use client";

import { Wallet } from "lucide-react";

export default function FinanceHero() {
  return (
    <section className="rounded-3xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-400 p-8 text-white shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm opacity-90">
            Finance Overview
          </p>

          <h1 className="mt-2 text-4xl font-black">
            My Wallet 💳
          </h1>

          <p className="mt-3 max-w-xl text-emerald-50">
            Track every income, expense and savings
            in one beautiful dashboard.
          </p>
        </div>

        <div className="hidden rounded-3xl bg-white/15 p-5 backdrop-blur md:block">
          <Wallet size={42} />
        </div>
      </div>
    </section>
  );
}