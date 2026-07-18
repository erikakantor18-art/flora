"use client";

import { Card } from "@/components/ui/Card";
import { Transaction } from "@/types/finance";

interface FinanceChartProps {
  transactions: Transaction[];
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function FinanceChart({
  transactions,
}: FinanceChartProps) {
  const currentYear = new Date().getFullYear();

  const chartData = MONTHS.map((month, index) => {
    const monthTransactions = transactions.filter((t) => {
      const date = new Date(t.transaction_date);

      return (
        date.getFullYear() === currentYear &&
        date.getMonth() === index
      );
    });

    const income = monthTransactions
      .filter((t) => t.type === "income")
      .reduce((sum, t) => sum + t.amount, 0);

    const expense = monthTransactions
      .filter((t) => t.type === "expense")
      .reduce((sum, t) => sum + t.amount, 0);

    return {
      month,
      income,
      expense,
    };
  });

  const maxValue = Math.max(
    ...chartData.flatMap((m) => [
      m.income,
      m.expense,
    ]),
    1
  );

  return (
    <Card className="h-full">
      <div className="mb-6">
        <h2 className="text-xl font-bold">
          Income vs Expense
        </h2>

        <p className="text-sm text-slate-500">
          {currentYear}
        </p>
      </div>

      <div className="flex h-72 items-end gap-3">
        {chartData.map((item) => (
          <div
            key={item.month}
            className="flex flex-1 flex-col items-center gap-2"
          >
            <div className="flex h-full w-full items-end justify-center gap-1">
              <div
                className="w-full rounded-t-xl bg-emerald-500 transition-all duration-300"
                style={{
                  height: `${
                    (item.income / maxValue) *
                    100
                  }%`,
                }}
              />

              <div
                className="w-full rounded-t-xl bg-red-500 transition-all duration-300"
                style={{
                  height: `${
                    (item.expense / maxValue) *
                    100
                  }%`,
                }}
              />
            </div>

            <span className="text-xs text-slate-500">
              {item.month}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-6">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-emerald-500" />
          <span className="text-sm">
            Income
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500" />
          <span className="text-sm">
            Expense
          </span>
        </div>
      </div>
    </Card>
  );
}