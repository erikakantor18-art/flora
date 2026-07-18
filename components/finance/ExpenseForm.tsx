"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { categories } from "@/constants";

type Props = {
  expenseName: string;
  expenseAmount: string;
  category: string;

  setExpenseName: (value: string) => void;
  setExpenseAmount: (value: string) => void;
  setCategory: (value: string) => void;

  addExpense: () => void;
};

export default function ExpenseForm({
  expenseName,
  expenseAmount,
  category,
  setExpenseName,
  setExpenseAmount,
  setCategory,
  addExpense,
}: Props) {
  return (
    <div className="mt-8 rounded-3xl bg-white p-8 shadow-sm border border-slate-200">

      <div className="mb-6">

        <h2 className="text-2xl font-bold">
          Add Expense
        </h2>

        <p className="text-slate-500 mt-1">
          Record your daily spending.
        </p>

      </div>

      <div className="grid gap-4 md:grid-cols-3">

        <Input
          placeholder="Expense Name"
          value={expenseName}
          onChange={(e) =>
            setExpenseName(e.target.value)
          }
        />

        <Input
          type="number"
          placeholder="Amount"
          value={expenseAmount}
          onChange={(e) =>
            setExpenseAmount(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="rounded-2xl border border-slate-200 bg-white px-5 py-3 outline-none focus:border-green-500"
        >

          {categories.map((item) => (

            <option
              key={item}
              value={item}
            >
              {item}
            </option>

          ))}

        </select>

      </div>

      <Button
        className="mt-6 w-full md:w-auto"
        onClick={addExpense}
      >
        Save Expense
      </Button>

    </div>
  );
}