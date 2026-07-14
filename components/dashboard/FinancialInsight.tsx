"use client";

import Card from "@/components/ui/Card";

type Expense = {
  amount: number;
  category: string;
};

type Goal = {
  title: string;
  current: number;
  target: number;
};

type Props = {
  income: number;
  expenses: Expense[];
  goal?: Goal;
};

export default function FinancialInsight({

  income,

  expenses,

  goal,

}: Props) {

  const totalExpense =
    expenses.reduce(
      (t, e) => t + e.amount,
      0
    );

  const balance =
    income - totalExpense;

  const savingRate =
    income
      ? Math.round(
          (balance / income) * 100
        )
      : 0;

  const categoryMap =
    expenses.reduce((acc, e) => {

      acc[e.category] =
        (acc[e.category] ?? 0)
        + e.amount;

      return acc;

    }, {} as Record<string, number>);

  const topCategory =
    Object.entries(categoryMap)
      .sort(
        (a, b) =>
          b[1] - a[1]
      )[0];

  return (

    <Card>

      <h2 className="text-2xl font-black">

        🧠 Financial Insight

      </h2>

      <div className="mt-6 space-y-5">

        <div className="rounded-2xl bg-green-50 p-4">

          <p className="text-sm text-slate-500">

            Saving Rate

          </p>

          <h2 className="mt-2 text-4xl font-black text-green-600">

            {savingRate}%

          </h2>

        </div>

        <div className="rounded-2xl bg-slate-100 p-4">

          <p className="font-semibold">

            Highest Spending

          </p>

          <p className="mt-2 text-xl">

            {topCategory
              ? topCategory[0]
              : "-"}

          </p>

        </div>

        {goal && (

          <div className="rounded-2xl bg-yellow-50 p-4">

            <p className="font-semibold">

              Goal Progress

            </p>

            <p className="mt-2">

              Rp{" "}

              {goal.current.toLocaleString("id-ID")}

              {" / "}

              Rp{" "}

              {goal.target.toLocaleString("id-ID")}

            </p>

          </div>

        )}

        <div className="rounded-2xl bg-blue-50 p-4">

          <p className="font-semibold">

            Recommendation

          </p>

          <p className="mt-2 text-slate-600 leading-7">

            {savingRate >= 70
              ? "Excellent! Continue maintaining your saving habit."

              : savingRate >= 50
              ? "Your financial condition is healthy. Keep your expenses under control."

              : "Your expenses are getting high. Try reducing spending in your biggest category."}

          </p>

        </div>

      </div>

    </Card>

  );

}