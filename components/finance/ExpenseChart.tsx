"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

import Card from "@/components/ui/Card";

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

const colors = [
  "#22c55e",
  "#3b82f6",
  "#f59e0b",
  "#ef4444",
  "#8b5cf6",
  "#06b6d4",
];

export default function ExpenseChart({
  expenses,
}: Props) {

  const categoryTotals: Record<
    string,
    number
  > = {};

  expenses.forEach((expense) => {

    categoryTotals[expense.category] =
      (categoryTotals[
        expense.category
      ] || 0) +
      expense.amount;

  });

  const total =
    Object.values(
      categoryTotals
    ).reduce(
      (a, b) => a + b,
      0
    );

  const data = {

    labels:
      Object.keys(categoryTotals),

    datasets: [

      {

        data:
          Object.values(
            categoryTotals
          ),

        backgroundColor:
          colors,

        borderWidth: 0,

        hoverOffset: 15,

      },

    ],

  };

  const options = {

    plugins: {

      legend: {

        display: false,

      },

    },

    cutout: "72%",

    responsive: true,

    maintainAspectRatio: false,

  };

  return (

    <Card>

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">

            📊 Expense Analysis

          </h2>

          <p className="text-slate-500">

            Spending by category

          </p>

        </div>

        <div className="rounded-2xl bg-green-50 px-4 py-2">

          <p className="text-xs text-slate-500">

            Total

          </p>

          <h3 className="font-bold text-green-600">

            Rp {total.toLocaleString("id-ID")}

          </h3>

        </div>

      </div>

      {total === 0 ? (

        <div className="flex h-80 items-center justify-center text-slate-400">

          No expense yet

        </div>

      ) : (

        <>

          <div className="mx-auto mt-8 h-72 w-72">

            <Doughnut
              data={data}
              options={options}
            />

          </div>

          <div className="mt-8 space-y-4">

            {Object.entries(
              categoryTotals
            ).map(
              (
                [category, amount],
                index
              ) => (

                <div
                  key={category}
                  className="flex items-center justify-between rounded-2xl border border-slate-100 p-4"
                >

                  <div className="flex items-center gap-3">

                    <div
                      className="h-4 w-4 rounded-full"
                      style={{
                        backgroundColor:
                          colors[
                            index %
                              colors.length
                          ],
                      }}
                    />

                    <span className="font-medium">

                      {category}

                    </span>

                  </div>

                  <div className="text-right">

                    <p className="font-bold">

                      Rp{" "}

                      {amount.toLocaleString(
                        "id-ID"
                      )}

                    </p>

                    <p className="text-xs text-slate-400">

                      {(
                        (amount /
                          total) *
                        100
                      ).toFixed(1)}
                      %

                    </p>

                  </div>

                </div>

              )
            )}

          </div>

        </>

      )}

    </Card>

  );

}