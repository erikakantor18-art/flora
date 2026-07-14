"use client";

import Card from "@/components/ui/Card";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

type Expense = {
  name: string;
  amount: number;
  category: string;
};

type Props = {
  expenses: Expense[];
};

export default function ExpenseOverview({

  expenses,

}: Props) {

  const categoryMap =
    expenses.reduce((acc, expense) => {

      acc[expense.category] =
        (acc[expense.category] ?? 0)
        + expense.amount;

      return acc;

    }, {} as Record<string, number>);

  const labels =
    Object.keys(categoryMap);

  const values =
    Object.values(categoryMap);

  const total =
    values.reduce(
      (a, b) => a + b,
      0
    );

  const data = {

    labels,

    datasets: [

      {

        data: values,

        backgroundColor: [

          "#22c55e",

          "#3b82f6",

          "#f97316",

          "#eab308",

          "#8b5cf6",

          "#ef4444",

          "#06b6d4",

        ],

        borderWidth: 2,

      },

    ],

  };

  return (

    <Card>

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">

            🥧 Expense by Category

          </h2>

          <p className="mt-2 text-slate-500">

            Distribution of your spending

          </p>

        </div>

        <div className="text-right">

          <p className="text-sm text-slate-500">

            Total Expense

          </p>

          <h2 className="text-2xl font-black text-red-500">

            Rp{" "}

            {total.toLocaleString("id-ID")}

          </h2>

        </div>

      </div>

      <div className="mt-8">

        {expenses.length === 0 ? (

          <div className="py-20 text-center">

            <p className="text-6xl">

              💰

            </p>

            <p className="mt-4 text-slate-500">

              No expense yet

            </p>

          </div>

        ) : (

          <Pie
            data={data}
          />

        )}

      </div>

      <div className="mt-8 space-y-3">

        {labels.map((label, index) => {

          const percent =
            total
              ? Math.round(
                  (values[index] /
                    total) *
                    100
                )
              : 0;

          return (

            <div
              key={label}
              className="flex items-center justify-between rounded-xl bg-slate-100 p-3"
            >

              <span className="font-semibold">

                {label}

              </span>

              <span>

                {percent}%

              </span>

            </div>

          );

        })}

      </div>

    </Card>

  );

}