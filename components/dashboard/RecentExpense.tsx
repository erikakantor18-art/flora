"use client";

import { Card } from "@/components/ui/Card";

import {
  Utensils,
  Car,
  ShoppingBag,
  Wifi,
  Wallet,
} from "lucide-react";

type Expense = {
  name: string;
  amount: number;
  category: string;
  createdAt?: string;
};

type Props = {
  expenses: Expense[];
};

function getIcon(
  category: string
) {

  switch (
    category.toLowerCase()
  ) {

    case "food":

    case "makanan":

      return (
        <Utensils
          size={20}
        />
      );

    case "fuel":

    case "bensin":

      return (
        <Car
          size={20}
        />
      );

    case "shopping":

    case "belanja":

      return (
        <ShoppingBag
          size={20}
        />
      );

    case "internet":

      return (
        <Wifi
          size={20}
        />
      );

    default:

      return (
        <Wallet
          size={20}
        />
      );

  }

}

function getBadge(
  category: string
) {

  switch (
    category.toLowerCase()
  ) {

    case "food":

    case "makanan":

      return "bg-orange-100 text-orange-600";

    case "fuel":

    case "bensin":

      return "bg-blue-100 text-blue-600";

    case "shopping":

    case "belanja":

      return "bg-pink-100 text-pink-600";

    case "internet":

      return "bg-purple-100 text-purple-600";

    default:

      return "bg-green-100 text-green-700";

  }

}

export default function RecentExpense({

  expenses,

}: Props) {

  return (

    <Card>

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-bold">

          💸 Recent Expense

        </h2>

        <span className="text-sm text-slate-500">

          {expenses.length} Transactions

        </span>

      </div>

      <div className="mt-6 space-y-4">

        {expenses.length === 0 ? (

          <div className="rounded-2xl bg-slate-50 py-10 text-center">

            <p className="text-5xl">

              💰

            </p>

            <p className="mt-3 text-slate-500">

              No expense yet

            </p>

          </div>

        ) : (

          expenses
            .slice(0, 5)
            .map((expense) => (

              <div
                key={expense.name + expense.amount}
                className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 transition hover:shadow-md"
              >

                <div className="flex items-center gap-4">

                  <div className="rounded-xl bg-green-100 p-3 text-green-600">

                    {getIcon(
                      expense.category
                    )}

                  </div>

                  <div>

                    <p className="font-bold">

                      {expense.name}

                    </p>

                    <div className="mt-1 flex items-center gap-2">

                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${getBadge(
                          expense.category
                        )}`}
                      >

                        {expense.category}

                      </span>

                      {expense.createdAt && (

                        <span className="text-xs text-slate-500">

                          {new Date(
                            expense.createdAt
                          ).toLocaleDateString(
                            "id-ID"
                          )}

                        </span>

                      )}

                    </div>

                  </div>

                </div>

                <div className="text-right">

                  <p className="text-lg font-bold text-red-500">

                    - Rp{" "}

                    {expense.amount.toLocaleString(
                      "id-ID"
                    )}

                  </p>

                </div>

              </div>

            ))

        )}

      </div>

    </Card>

  );

}