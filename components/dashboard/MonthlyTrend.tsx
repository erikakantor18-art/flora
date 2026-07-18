"use client";

import { Card } from "@/components/ui/Card";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

type Expense = {
  amount: number;
  createdAt?: string;
};

type Props = {
  expenses: Expense[];
};

export default function MonthlyTrend({
  expenses,
}: Props) {

  const monthMap: Record<
    string,
    number
  > = {};

  expenses.forEach((expense) => {

    if (!expense.createdAt)
      return;

    const month =
      new Date(
        expense.createdAt
      ).toLocaleDateString(
        "id-ID",
        {
          month: "short",
        }
      );

    monthMap[month] =
      (monthMap[month] ?? 0)
      + expense.amount;

  });

  const labels =
    Object.keys(monthMap);

  const values =
    Object.values(monthMap);

  const data = {

    labels,

    datasets: [

      {

        label: "Expense",

        data: values,

        backgroundColor:
          "#22c55e",

        borderRadius: 12,

      },

    ],

  };

  return (

    <Card>

      <h2 className="text-2xl font-bold">

        📊 Monthly Trend

      </h2>

      <p className="mt-2 text-slate-500">

        Monthly spending

      </p>

      <div className="mt-8">

        {labels.length === 0 ? (

          <div className="py-16 text-center">

            <p className="text-6xl">

              📈

            </p>

            <p className="mt-4 text-slate-500">

              No monthly data

            </p>

          </div>

        ) : (

          <Bar
            data={data}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
              },
            }}
          />

        )}

      </div>

    </Card>

  );

}