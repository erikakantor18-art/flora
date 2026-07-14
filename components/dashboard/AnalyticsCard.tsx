"use client";

import Card from "@/components/ui/Card";

type Expense = {
  amount: number;
  category: string;
};

type Props = {
  income: number;
  expenses: Expense[];
};

export default function AnalyticsCard({

  income,

  expenses,

}: Props) {

  const totalExpense =
    expenses.reduce(
      (t, e) => t + e.amount,
      0
    );

  const balance =
    income - totalExpense;

  const savingRate =
    income > 0
      ? Math.round(
          (balance / income) * 100
        )
      : 0;

  const categoryMap =
    expenses.reduce((acc, expense) => {

      acc[expense.category] =
        (acc[expense.category] ?? 0)
        + expense.amount;

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

      <h2 className="text-2xl font-bold">

        📊 Analytics

      </h2>

      <div className="mt-6 grid gap-4">

        <div className="flex justify-between">

          <span>Income</span>

          <strong>

            Rp{" "}

            {income.toLocaleString("id-ID")}

          </strong>

        </div>

        <div className="flex justify-between">

          <span>Expense</span>

          <strong className="text-red-500">

            Rp{" "}

            {totalExpense.toLocaleString("id-ID")}

          </strong>

        </div>

        <div className="flex justify-between">

          <span>Balance</span>

          <strong className="text-green-600">

            Rp{" "}

            {balance.toLocaleString("id-ID")}

          </strong>

        </div>

        <div className="flex justify-between">

          <span>Saving Rate</span>

          <strong>

            {savingRate}%

          </strong>

        </div>

        <div className="flex justify-between">

          <span>Top Category</span>

          <strong>

            {topCategory?.[0] ?? "-"}

          </strong>

        </div>

        <div className="flex justify-between">

          <span>Transactions</span>

          <strong>

            {expenses.length}

          </strong>

        </div>

      </div>

    </Card>

  );

}