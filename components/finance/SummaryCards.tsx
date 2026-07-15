import {
  Wallet,
  CreditCard,
  Landmark,
  Target,
  TrendingUp,
} from "lucide-react";

import StatCard from "@/components/ui/StatCard";

type Props = {
  income: number;
  expense: number;
};

export default function SummaryCards({
  income,
  expense,
}: Props) {

  const remaining =
    income - expense;

  const budget =
    2000000;

  const savingRate =
    income === 0
      ? 0
      : Math.max(
          0,
          Math.round(
            (remaining / income) *
              100
          )
        );

  return (

    <div className="space-y-6">

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-black text-slate-800">

            Finance Overview

          </h1>

          <p className="mt-1 text-slate-500">

            Monitor your monthly financial health.

          </p>

        </div>

        <div className="hidden rounded-2xl bg-green-100 px-5 py-3 md:flex md:items-center md:gap-3">

          <TrendingUp
            size={22}
            className="text-green-600"
          />

          <div>

            <p className="text-xs text-slate-500">

              Saving Rate

            </p>

            <p className="text-lg font-black text-green-700">

              {savingRate}%

            </p>

          </div>

        </div>

      </div>

      {/* SUMMARY */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Income"
          value={`Rp ${income.toLocaleString(
            "id-ID"
          )}`}
          subtitle="Monthly Salary"
          icon={<Wallet size={28} />}
          color="green"
        />

        <StatCard
          title="Expense"
          value={`Rp ${expense.toLocaleString(
            "id-ID"
          )}`}
          subtitle="Total Spending"
          icon={
            <CreditCard size={28} />
          }
          color="red"
        />

        <StatCard
          title="Remaining"
          value={`Rp ${remaining.toLocaleString(
            "id-ID"
          )}`}
          subtitle="Available Balance"
          icon={<Landmark size={28} />}
          color="blue"
        />

        <StatCard
          title="Budget"
          value={`Rp ${budget.toLocaleString(
            "id-ID"
          )}`}
          subtitle="Monthly Target"
          icon={<Target size={28} />}
          color="yellow"
        />

      </div>

      {/* INSIGHT */}

      <div className="rounded-3xl border border-green-100 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 p-6 text-white shadow-xl">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <p className="text-sm opacity-80">

              Monthly Insight

            </p>

            <h2 className="mt-2 text-3xl font-black">

              {savingRate >= 70
                ? "Excellent Financial Health 🎉"
                : savingRate >= 40
                ? "Keep Saving! 💰"
                : "Watch Your Spending 👀"}

            </h2>

            <p className="mt-3 max-w-xl text-white/90">

              You have saved{" "}

              <span className="font-bold">

                {savingRate}%

              </span>

              {" "}of your monthly income.

              Keep your expenses below your monthly budget to achieve your ✨ Dream Fun faster.

            </p>

          </div>

          <div className="rounded-2xl bg-white/15 p-6 text-center backdrop-blur-md">

            <p className="text-sm opacity-80">

              Remaining Balance

            </p>

            <h3 className="mt-2 text-4xl font-black">

              Rp{" "}

              {remaining.toLocaleString(
                "id-ID"
              )}

            </h3>

          </div>

        </div>

      </div>

    </div>

  );

}