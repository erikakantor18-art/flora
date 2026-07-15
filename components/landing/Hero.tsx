"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-700 via-emerald-600 to-teal-500 text-white">

      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-14 px-8 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <p className="mb-5 font-semibold tracking-[0.4em] text-green-100">

            🌿 Flora

          </p>

          <h1 className="text-6xl font-black leading-tight lg:text-7xl">

            One Dashboard

            <br />

            For Your

            <br />

            Entire Life.

          </h1>

          <p className="mt-8 max-w-xl text-xl leading-8 text-green-50">

            Manage your finance, planner, study,
            journal and Australia dream in one
            beautiful dashboard.

          </p>

          <div className="mt-10 flex gap-5">

            <Link
              href="/login"
              className="flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-green-700 transition hover:scale-105"
            >
              Get Started

              <ArrowRight size={20} />

            </Link>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl">

            <p className="text-sm opacity-80">

              Available Balance

            </p>

            <h2 className="mt-2 text-5xl font-black">

              Rp 8.500.000

            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">

              <MiniCard
                title="Income"
                value="Rp 5.300.000"
              />

              <MiniCard
                title="Expense"
                value="Rp 2.100.000"
              />

              <MiniCard
                title="Australia"
                value="72%"
              />

              <MiniCard
                title="Study"
                value="84%"
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

type MiniCardProps = {
  title: string;
  value: string;
};

function MiniCard({
  title,
  value,
}: MiniCardProps) {
  return (
    <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
      <p className="text-sm opacity-70">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {value}
      </h3>
    </div>
  );
}