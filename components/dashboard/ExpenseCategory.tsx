"use client";

import { Card } from "@/components/ui/Card";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

import { Expense } from "@/types";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

type Props = {
  expenses: Expense[];
};

export default function ExpenseCategory({
  expenses,
}: Props) {

  const categories: Record<string, number> = {};

  expenses.forEach((expense) => {

    categories[expense.category] =
      (categories[expense.category] ?? 0) +
      expense.amount;

  });

  const data = {

    labels: Object.keys(categories),

    datasets: [

      {

        data: Object.values(categories),

        backgroundColor: [

          "#22c55e",
          "#3b82f6",
          "#f97316",
          "#ef4444",
          "#a855f7",
          "#06b6d4",
          "#eab308",

        ],

      },

    ],

  };

  return (

    <Card>

      <h2 className="text-2xl font-black">

        🥧 Expense by Category

      </h2>

      <p className="mt-2 text-slate-500">

        Where your money goes.

      </p>

      <div className="mt-8">

        {

          expenses.length === 0

          ? (

            <div className="py-16 text-center text-slate-400">

              No expense data.

            </div>

          )

          : (

            <Pie data={data} />

          )

        }

      </div>

    </Card>

  );

}