"use client";

import Card from "@/components/ui/Card";
import { formatCurrency } from "@/utils";

import {
  Wallet,
  TrendingUp,
  CircleDollarSign,
} from "lucide-react";

type Props = {
  budget: number;
  expense: number;
};

export default function BudgetCard({
  budget,
  expense,
}: Props) {

  const safeBudget =
    Math.max(budget, 0);

  const percentage =
    safeBudget === 0
      ? 0
      : Math.min(
          (expense / safeBudget) * 100,
          100
        );

  const remaining =
    Math.max(
      safeBudget - expense,
      0
    );

  const status =
    percentage < 60
      ? "Safe"
      : percentage < 90
      ? "Warning"
      : "Limit";

  const color =
    percentage < 60
      ? "bg-green-500"
      : percentage < 90
      ? "bg-yellow-500"
      : "bg-red-500";

  return (

    <Card>

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">

            💰 Monthly Budget

          </h2>

          <p className="mt-1 text-slate-500">

            Budget from your Settings

          </p>

        </div>

        <div
          className={`rounded-2xl px-4 py-2 text-sm font-bold text-white ${color}`}
        >

          {status}

        </div>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="mb-2 flex justify-between">

          <span className="text-sm text-slate-500">

            Budget Used

          </span>

          <span className="font-bold">

            {percentage.toFixed(0)}%

          </span>

        </div>

        <div className="h-4 overflow-hidden rounded-full bg-slate-200">

          <div
            className={`${color} h-full rounded-full transition-all duration-700`}
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

      </div>

      {/* Budget Information */}

      <div className="mt-8 grid gap-4">

        <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-blue-100 p-3">

              <Wallet
                size={22}
                className="text-blue-600"
              />

            </div>

            <div>

              <p className="text-sm text-slate-500">

                Monthly Budget

              </p>

              <h3 className="font-bold">

                {formatCurrency(
                  safeBudget
                )}

              </h3>

            </div>

          </div>

        </div>

        <div className="flex items-center justify-between rounded-2xl border border-slate-200 p-4">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-red-100 p-3">

              <TrendingUp
                size={22}
                className="text-red-500"
              />

            </div>

            <div>

              <p className="text-sm text-slate-500">

                Total Expense

              </p>

              <h3 className="font-bold">

                {formatCurrency(
                  expense
                )}

              </h3>

            </div>

          </div>

        </div>

        <div className="flex items-center justify-between rounded-2xl border border-green-200 bg-green-50 p-4">

          <div className="flex items-center gap-3">

            <div className="rounded-xl bg-green-200 p-3">

              <CircleDollarSign
                size={22}
                className="text-green-700"
              />

            </div>

            <div>

              <p className="text-sm text-slate-500">

                Remaining Budget

              </p>

              <h3 className="font-bold text-green-700">

                {formatCurrency(
                  remaining
                )}

              </h3>

            </div>

          </div>

        </div>

      </div>

    </Card>

  );

}