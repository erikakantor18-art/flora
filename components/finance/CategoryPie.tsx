"use client";

import { Card } from "@/components/ui/Card";
import { Transaction } from "@/types/finance";

interface CategoryPieProps {
  transactions: Transaction[];
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

const COLORS = [
  "bg-emerald-500",
  "bg-blue-500",
  "bg-purple-500",
  "bg-orange-500",
  "bg-pink-500",
  "bg-cyan-500",
  "bg-yellow-500",
  "bg-slate-500",
];

export default function CategoryPie({
  transactions,
}: CategoryPieProps) {
  const expenses = transactions.filter(
    (t) => t.type === "expense"
  );

  const totalExpense = expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const categories = Object.entries(
    expenses.reduce<Record<string, number>>(
      (acc, item) => {
        acc[item.category] =
          (acc[item.category] ?? 0) + item.amount;

        return acc;
      },
      {}
    )
  )
    .map(([name, amount], index) => ({
      name,
      amount,
      percent:
        totalExpense === 0
          ? 0
          : (amount / totalExpense) * 100,
      color: COLORS[index % COLORS.length],
    }))
    .sort((a, b) => b.amount - a.amount);

  return (
    <Card className="h-full">
      <div className="mb-6">
        <h2 className="text-xl font-bold">
          Expense Categories
        </h2>

        <p className="text-sm text-slate-500">
          Based on your transactions
        </p>
      </div>

      {categories.length === 0 ? (
        <div className="flex h-72 items-center justify-center text-slate-400">
          No expense data
        </div>
      ) : (
        <div className="space-y-5">
          {categories.map((item) => (
            <div key={item.name}>
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`h-3 w-3 rounded-full ${item.color}`}
                  />

                  <span className="font-medium">
                    {item.name}
                  </span>
                </div>

                <span className="text-sm text-slate-500">
                  {formatCurrency(item.amount)}
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`${item.color} h-full rounded-full transition-all duration-700`}
                  style={{
                    width: `${item.percent}%`,
                  }}
                />
              </div>

              <div className="mt-1 text-right text-xs text-slate-500">
                {item.percent.toFixed(1)}%
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}