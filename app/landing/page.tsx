"use client";

import Link from "next/link";
import {
  ArrowRight,
  Wallet,
  GraduationCap,
  Plane,
  BookOpen,
  Target,
  CalendarDays,
} from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-green-700 via-emerald-600 to-teal-500 text-white">

      {/* Background Blur */}
      <div className="absolute left-[-120px] top-[-120px] h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute right-[-150px] bottom-[-150px] h-96 w-96 rounded-full bg-cyan-300/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8 py-16">

        {/* Navbar */}

        <div className="mb-24 flex items-center justify-between">

          <div>

            <h2 className="text-3xl font-black">

              🌿 Erika OS

            </h2>

            <p className="text-sm opacity-80">

              Personal Life Dashboard

            </p>

          </div>

          <Link
            href="/login"
            className="rounded-2xl bg-white px-6 py-3 font-bold text-green-700 transition hover:scale-105"
          >
            Login
          </Link>

        </div>

        {/* HERO */}

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT */}

          <div>

            <p className="mb-4 font-semibold uppercase tracking-[0.3em] opacity-80">

              ORGANIZE YOUR LIFE

            </p>

            <h1 className="text-6xl font-black leading-tight">

              One Dashboard

              <br />

              For Your

              <br />

              Entire Life.

            </h1>

            <p className="mt-8 max-w-xl text-xl leading-8 opacity-90">

              Track your finance, goals, planner,
              study progress, journal,
              and Australia dream in one beautiful dashboard.

            </p>

            <div className="mt-10 flex flex-wrap gap-5">

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

          <div className="grid gap-5 sm:grid-cols-2">

            <FeatureCard
              icon={<Wallet size={28} />}
              title="Finance"
              text="Track income & expenses."
            />

            <FeatureCard
              icon={<Target size={28} />}
              title="Goals"
              text="Achieve your dreams."
            />

            <FeatureCard
              icon={<GraduationCap size={28} />}
              title="Study"
              text="Study tracker & progress."
            />

            <FeatureCard
              icon={<CalendarDays size={28} />}
              title="Planner"
              text="Daily productivity."
            />

            <FeatureCard
              icon={<BookOpen size={28} />}
              title="Journal"
              text="Daily reflection."
            />

            <FeatureCard
              icon={<Plane size={28} />}
              title="Australia"
              text="Save for your future."
            />

          </div>

        </div>

      </div>

    </main>
  );
}

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  text: string;
};

function FeatureCard({
  icon,
  title,
  text,
}: FeatureCardProps) {

  return (

    <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md transition hover:scale-105">

      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20">

        {icon}

      </div>

      <h2 className="text-2xl font-bold">

        {title}

      </h2>

      <p className="mt-2 opacity-80">

        {text}

      </p>

    </div>

  );

}