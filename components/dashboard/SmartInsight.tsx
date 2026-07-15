"use client";

import Card from "@/components/ui/Card";
import { Expense } from "@/types";

type Goal = {
  current: number;
  target: number;
};

type Props = {
  income: number;
  expenses: Expense[];
  goal?: Goal;
};

export default function SmartInsight({

  income,

  expenses,

  goal,

}: Props) {

  const totalExpense =
    expenses.reduce(
      (sum, item) =>
        sum + item.amount,
      0
    );

  const balance =
    income - totalExpense;

  const budgetUsed =
    income === 0
      ? 0
      : Math.round(
          (totalExpense / income) *
            100
        );

  const topCategory = (() => {

    const result: Record<
      string,
      number
    > = {};

    expenses.forEach((item) => {

      result[item.category] =
        (result[item.category] || 0) +
        item.amount;

    });

    return Object.entries(result)
      .sort(
        (a, b) =>
          b[1] - a[1]
      )[0]?.[0];

  })();

  const goalProgress =
    goal
      ? Math.round(
          (goal.current /
            goal.target) *
            100
        )
      : 0;

  return (

    <Card>

      <h2 className="text-2xl font-black">

        🤖 Smart Insight

      </h2>

      <div className="mt-6 space-y-5">

        <div className="rounded-2xl bg-slate-100 p-4">

          <p className="text-sm text-slate-500">

            Remaining Balance

          </p>

          <h3 className="mt-2 text-2xl font-black text-green-600">

            Rp {balance.toLocaleString("id-ID")}

          </h3>

        </div>

        <div className="rounded-2xl bg-slate-100 p-4">

          <p className="text-sm text-slate-500">

            Highest Spending

          </p>

          <h3 className="mt-2 text-xl font-bold">

            {topCategory ?? "-"}

          </h3>

        </div>

        <div className="rounded-2xl bg-slate-100 p-4">

          <p className="text-sm text-slate-500">

            Budget Used

          </p>

          <h3 className="mt-2 text-xl font-bold">

            {budgetUsed}%

          </h3>

        </div>

        <div className="rounded-2xl bg-slate-100 p-4">

          <p className="text-sm text-slate-500">

            Australia Goal

          </p>

          <h3 className="mt-2 text-xl font-bold">

            {goalProgress}%

          </h3>

        </div>

      </div>

    </Card>

  );

}