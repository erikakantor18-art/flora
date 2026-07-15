"use client";

import {
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Target,
  CalendarDays,
  GraduationCap,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="bg-slate-50 py-28">

      <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <p className="font-semibold uppercase tracking-[0.3em] text-green-600">

            Dashboard Preview

          </p>

          <h2 className="mt-5 text-5xl font-black text-slate-900">

            Everything You Need,

            <br />

            In One Place.

          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-500">

            Erika OS combines finance,
            productivity,
            study,
            planner,
            journal,
            and goal tracking into one modern dashboard.

          </p>

        </div>

        {/* RIGHT */}

        <div className="relative">

          {/* Main Card */}

          <div className="rounded-[32px] bg-white p-8 shadow-2xl">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-slate-500">

                  Available Balance

                </p>

                <h2 className="mt-2 text-5xl font-black">

                  Rp 8.500.000

                </h2>

              </div>

              <Wallet
                size={42}
                className="text-green-600"
              />

            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              <SmallCard
                icon={<ArrowUpRight />}
                title="Income"
                value="Rp 5.300.000"
                color="green"
              />

              <SmallCard
                icon={<ArrowDownRight />}
                title="Expense"
                value="Rp 2.100.000"
                color="red"
              />

              <SmallCard
                icon={<Target />}
                title="Australia"
                value="72%"
                color="yellow"
              />

              <SmallCard
                icon={<GraduationCap />}
                title="Study"
                value="84%"
                color="blue"
              />

            </div>

          </div>

          {/* Floating Planner */}

          <div className="absolute -left-10 top-10 hidden rounded-3xl bg-white p-5 shadow-xl lg:block">

            <CalendarDays className="text-green-600" />

            <p className="mt-3 font-bold">

              Planner

            </p>

            <h3 className="mt-1 text-2xl font-black">

              5 Tasks

            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}

type Props = {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: "green" | "red" | "yellow" | "blue";
};

function SmallCard({
  icon,
  title,
  value,
  color,
}: Props) {

  const colors = {
    green: "bg-green-100 text-green-600",
    red: "bg-red-100 text-red-600",
    yellow: "bg-yellow-100 text-yellow-600",
    blue: "bg-blue-100 text-blue-600",
  };

  return (

    <div className="rounded-2xl border border-slate-100 p-5 transition hover:shadow-lg">

      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors[color]}`}
      >

        {icon}

      </div>

      <p className="mt-4 text-slate-500">

        {title}

      </p>

      <h3 className="mt-1 text-2xl font-black">

        {value}

      </h3>

    </div>

  );

}