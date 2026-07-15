"use client";

import { ReactNode } from "react";

import Card from "@/components/ui/Card";
import { formatCurrency } from "@/utils";

import {
  Utensils,
  Car,
  ShoppingBag,
  Clapperboard,
  BookOpen,
  CircleDollarSign,
  Pencil,
  Trash2,
} from "lucide-react";

type Expense = {
  name: string;
  amount: number;
  category: string;
};

type Props = {
  expenses: Expense[];
  onDelete: (index: number) => void;
  onEdit: (index: number) => void;
};

const styles: Record<
  string,
  {
    color: string;
    icon: ReactNode;
  }
> = {
  Food: {
    color: "bg-orange-100 text-orange-700",
    icon: <Utensils size={20} />,
  },

  Transport: {
    color: "bg-blue-100 text-blue-700",
    icon: <Car size={20} />,
  },

  Shopping: {
    color: "bg-green-100 text-green-700",
    icon: <ShoppingBag size={20} />,
  },

  Entertainment: {
    color: "bg-purple-100 text-purple-700",
    icon: <Clapperboard size={20} />,
  },

  Education: {
    color: "bg-yellow-100 text-yellow-700",
    icon: <BookOpen size={20} />,
  },

  Other: {
    color: "bg-slate-100 text-slate-700",
    icon: <CircleDollarSign size={20} />,
  },
};

export default function ExpenseHistory({
  expenses,
  onDelete,
  onEdit,
}: Props) {
  return (
    <Card className="h-full">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Transactions
          </h2>

          <p className="text-sm text-slate-500">
            {expenses.length} transaction(s)
          </p>
        </div>
      </div>

      {expenses.length === 0 ? (
        <div className="flex h-72 items-center justify-center text-slate-400">
          No transaction yet.
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {expenses.map((expense, index) => {
            const style =
              styles[expense.category] ??
              styles.Other;

            return (
              <div
                key={index}
                className="rounded-3xl border border-slate-200 bg-white p-5 transition-all hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${style.color}`}
                    >
                      {style.icon}
                    </div>

                    <div>
                      <h3 className="text-lg font-bold">
                        {expense.name}
                      </h3>

                      <span
                        className={`mt-2 inline-flex rounded-full px-3 py-1 text-sm font-medium ${style.color}`}
                      >
                        {expense.category}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <h2 className="text-2xl font-black text-red-600">
                      {formatCurrency(expense.amount)}
                    </h2>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => onEdit(index)}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
                  >
                    <Pencil size={18} />
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      const ok = window.confirm(
                        "Hapus transaksi ini?"
                      );

                      if (ok) {
                        onDelete(index);
                      }
                    }}
                    className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
                  >
                    <Trash2 size={18} />
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Card>
  );
}