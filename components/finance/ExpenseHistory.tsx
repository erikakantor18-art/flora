"use client";

import Card from "@/components/ui/Card";
import { formatCurrency } from "@/utils";

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

const colors: Record<string, string> = {
  Food: "bg-orange-100 text-orange-700",
  Transport: "bg-blue-100 text-blue-700",
  Shopping: "bg-green-100 text-green-700",
  Entertainment: "bg-purple-100 text-purple-700",
  Education: "bg-yellow-100 text-yellow-700",
  Other: "bg-slate-100 text-slate-700",
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

          {expenses.map((expense, index) => (

            <div
              key={index}
              className="rounded-2xl border border-slate-200 p-5 transition hover:shadow-lg"
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-bold text-lg">
                    {expense.name}
                  </h3>

                  <span
                    className={`mt-2 inline-block rounded-full px-3 py-1 text-sm ${colors[expense.category]}`}
                  >
                    {expense.category}
                  </span>

                </div>

                <h2 className="text-xl font-black">

                  {formatCurrency(expense.amount)}

                </h2>

              </div>

              <div className="mt-5 flex gap-3">

                <button
                  onClick={() => onEdit(index)}
                  className="rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                  ✏️ Edit
                </button>

                <button
                  onClick={() => {

                    const ok =
                    window.confirm(
                    "Hapus transaksi ini?"
                    );

                    if(ok){

                    onDelete(index);

                    }

                    }}
                  className="rounded-xl bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                  Delete
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </Card>
  );
}