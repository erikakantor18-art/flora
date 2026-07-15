"use client";

import Card from "@/components/ui/Card";
import { formatCurrency } from "@/utils";

import {
  TrendingUp,
  TrendingDown,
  PiggyBank,
  Wallet,
} from "lucide-react";

type Props = {
  income: number;
  expense: number;
};

export default function MonthlySummary({
  income,
  expense,
}: Props) {

  const remaining =
    income - expense;

  const spentPercentage =
    income === 0
      ? 0
      : Math.min(
          (expense / income) * 100,
          100
        );

  const savingRate =
    income === 0
      ? 0
      : Math.max(
          100 - spentPercentage,
          0
        );

  const status =
    savingRate >= 70
      ? "Excellent"
      : savingRate >= 40
      ? "Good"
      : savingRate >= 20
      ? "Average"
      : "Needs Improvement";

  const statusColor =
    savingRate >= 70
      ? "text-green-600"
      : savingRate >= 40
      ? "text-blue-600"
      : savingRate >= 20
      ? "text-yellow-600"
      : "text-red-600";

  return (

    <Card className="mt-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">

            📅 Monthly Summary

          </h2>

          <p className="text-slate-500">

            Your financial performance this month

          </p>

        </div>

        <div className="text-right">

          <h2 className="text-5xl font-black text-green-600">

            {savingRate.toFixed(0)}%

          </h2>

          <p className={`font-semibold ${statusColor}`}>

            {status}

          </p>

        </div>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="mb-2 flex justify-between">

          <span className="text-sm text-slate-500">

            Saving Rate

          </span>

          <span className="font-bold">

            {savingRate.toFixed(0)}%

          </span>

        </div>

        <div className="h-4 overflow-hidden rounded-full bg-slate-200">

          <div
            className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-700"
            style={{
              width: `${savingRate}%`,
            }}
          />

        </div>

      </div>

      {/* Cards */}

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <div className="rounded-2xl border border-slate-200 p-5">

          <div className="flex items-center gap-3">

            <Wallet
              size={22}
              className="text-green-600"
            />

            <span className="font-semibold">

              Income

            </span>

          </div>

          <h3 className="mt-4 text-2xl font-black">

            {formatCurrency(income)}

          </h3>

        </div>

        <div className="rounded-2xl border border-slate-200 p-5">

          <div className="flex items-center gap-3">

            <TrendingDown
              size={22}
              className="text-red-500"
            />

            <span className="font-semibold">

              Expense

            </span>

          </div>

          <h3 className="mt-4 text-2xl font-black text-red-600">

            {formatCurrency(expense)}

          </h3>

        </div>

        <div className="rounded-2xl border border-slate-200 p-5">

          <div className="flex items-center gap-3">

            <PiggyBank
              size={22}
              className="text-green-600"
            />

            <span className="font-semibold">

              Savings

            </span>

          </div>

          <h3 className="mt-4 text-2xl font-black text-green-600">

            {formatCurrency(remaining)}

          </h3>

        </div>

        <div className="rounded-2xl border border-slate-200 p-5">

          <div className="flex items-center gap-3">

            <TrendingUp
              size={22}
              className="text-blue-600"
            />

            <span className="font-semibold">

              Spending Rate

            </span>

          </div>

          <h3 className="mt-4 text-2xl font-black text-blue-600">

            {spentPercentage.toFixed(0)}%

          </h3>

        </div>

      </div>

    </Card>

  );

}