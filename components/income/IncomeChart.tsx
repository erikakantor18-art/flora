"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

import Card from "@/components/ui/Card";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

type Income = {

  id: string;

  title: string;

  amount: number;

  category: string;

  date: string;

};

type Props = {

  income: Income[];

};

export default function IncomeChart({

  income,

}: Props) {

  const totals: Record<string, number> = {};

  income.forEach((item) => {

    totals[item.category] =

      (totals[item.category] || 0)

      + item.amount;

  });

  const data = {

    labels:

      Object.keys(totals),

    datasets: [

      {

        data:

          Object.values(totals),

        backgroundColor: [

          "#22c55e",

          "#3b82f6",

          "#f59e0b",

          "#ef4444",

          "#8b5cf6",

          "#06b6d4",

          "#10b981",

          "#64748b",

        ],

      },

    ],

  };

  return (

    <Card>

      <h2 className="text-2xl font-black">

        📊 Income by Category

      </h2>

      <p className="mt-1 text-slate-500">

        Distribution of your extra income.

      </p>

      <div className="mt-8">

        {income.length === 0 ? (

          <div className="py-24 text-center">

            <p className="text-6xl">

              📈

            </p>

            <p className="mt-4 text-slate-500">

              No income yet.

            </p>

          </div>

        ) : (

          <Pie data={data} />

        )}

      </div>

    </Card>

  );

}