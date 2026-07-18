"use client";

import { Card } from "@/components/ui/Card";
import { Expense } from "@/types";

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

  const saving =
    income - totalExpense;

  const savingRate =
    income === 0
      ? 0
      : Math.round(
          (saving / income) * 100
        );

  const averageExpense =
    expenses.length === 0
      ? 0
      : Math.round(
          totalExpense /
            expenses.length
        );

  const biggestExpense =
    expenses.length === 0
      ? 0
      : Math.max(
          ...expenses.map(
            (e) => e.amount
          )
        );

  return (

    <Card>

      <h2 className="text-2xl font-black">

        📊 Analytics

      </h2>

      <div className="mt-8 space-y-5">

        <div className="flex items-center justify-between rounded-2xl bg-green-50 p-4">

          <span>

            Saving Rate

          </span>

          <span className="text-xl font-black text-green-600">

            {savingRate}%

          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-blue-50 p-4">

          <span>

            Avg Expense

          </span>

          <span className="font-bold">

            Rp{" "}

            {averageExpense.toLocaleString("id-ID")}

          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-red-50 p-4">

          <span>

            Biggest Expense

          </span>

          <span className="font-bold">

            Rp{" "}

            {biggestExpense.toLocaleString("id-ID")}

          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-yellow-50 p-4">

          <span>

            Transactions

          </span>

          <span className="font-bold">

            {expenses.length}

          </span>

        </div>

      </div>

    </Card>

  );

}