"use client";

import { Card } from "@/components/ui/Card";
import { formatCurrency } from "@/utils";

type Goal = {
  current: number;
};

type Props = {
  cash: number;
  goals: Goal[];
};

export default function NetWorthCard({

  cash,

  goals,

}: Props) {

  const goalValue =
    goals.reduce(
      (sum, goal) =>
        sum + goal.current,
      0
    );

  const netWorth =
    cash + goalValue;

  return (

    <Card>

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-black">

            💎 Net Worth

          </h2>

          <p className="mt-2 text-slate-500">

            Total personal assets

          </p>

        </div>

        <div className="text-right">

          <h2 className="text-4xl font-black text-green-600">

            {formatCurrency(
              netWorth
            )}

          </h2>

        </div>

      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <div className="rounded-2xl bg-slate-100 p-5">

          <p className="text-slate-500">

            Cash

          </p>

          <h3 className="mt-2 text-2xl font-bold">

            {formatCurrency(cash)}

          </h3>

        </div>

        <div className="rounded-2xl bg-green-50 p-5">

          <p className="text-slate-500">

            Goals Value

          </p>

          <h3 className="mt-2 text-2xl font-bold text-green-600">

            {formatCurrency(
              goalValue
            )}

          </h3>

        </div>

      </div>

    </Card>

  );

}