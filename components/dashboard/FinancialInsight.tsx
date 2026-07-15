"use client";

import Card from "@/components/ui/Card";
import { Expense, Goal } from "@/types";

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

  const totalExpense = expenses.reduce(
    (t, e) => t + e.amount,
    0
  );

  const balance =
    income - totalExpense;

  const expenseRate =
    income === 0
      ? 0
      : Math.round(
          (totalExpense / income) * 100
        );

  let title = "Excellent 🎉";
  let message =
    "Keuangan kamu masih sangat sehat.";

  if (expenseRate >= 80) {
    title = "Warning ⚠️";
    message =
      "Pengeluaran sudah melewati 80% dari pemasukan bulan ini.";
  } else if (expenseRate >= 60) {
    title = "Be Careful 🙂";
    message =
      "Pengeluaran mulai meningkat, coba kurangi pengeluaran yang tidak penting.";
  } else if (expenseRate >= 40) {
    title = "Good 👍";
    message =
      "Keuangan masih aman, tetap pertahankan kebiasaan menabung.";
  }

  const goalLeft =
    goal
      ? Math.max(
          goal.target - goal.current,
          0
        )
      : 0;

  return (
    <Card>

      <h2 className="text-2xl font-black">

        💡 Financial Insight

      </h2>

      <div className="mt-6 space-y-4">

        <div className="rounded-2xl bg-green-50 p-4">

          <h3 className="font-bold text-green-700">
            {title}
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            {message}
          </p>

        </div>

        <div className="space-y-3">

          <div className="flex justify-between">

            <span>Income</span>

            <span className="font-bold">
              Rp{" "}
              {income.toLocaleString("id-ID")}
            </span>

          </div>

          <div className="flex justify-between">

            <span>Expense</span>

            <span className="font-bold text-red-600">
              Rp{" "}
              {totalExpense.toLocaleString("id-ID")}
            </span>

          </div>

          <div className="flex justify-between">

            <span>Remaining</span>

            <span className="font-bold text-green-600">
              Rp{" "}
              {balance.toLocaleString("id-ID")}
            </span>

          </div>

          <div className="flex justify-between">

            <span>Expense Rate</span>

            <span className="font-bold">
              {expenseRate}%
            </span>

          </div>

          {goal && (
            <div className="flex justify-between">

              <span>
                 ✨ Dream Fun Left
              </span>

              <span className="font-bold text-blue-600">
                Rp{" "}
                {goalLeft.toLocaleString(
                  "id-ID"
                )}
              </span>

            </div>
          )}

        </div>

      </div>

    </Card>
  );
}