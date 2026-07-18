"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

const categories = [
  "Freelance",
  "Bonus",
  "THR",
  "Business",
  "Investment",
  "Cashback",
  "Gift",
  "Other",
];

type Props = {
  title: string;
  amount: string;
  category: string;
  date: string;
  setTitle: (value: string) => void;
  setAmount: (value: string) => void;
  setCategory: (value: string) => void;
  setDate: (value: string) => void;
  onSave: () => void;
  loading: boolean;
  editing: boolean;
};

export default function IncomeForm({
  title,
  amount,
  category,
  date,
  setTitle,
  setAmount,
  setCategory,
  setDate,
  onSave,
  loading,
  editing,
}: Props) {
  return (
    <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-black">
          {editing ? "Edit Income" : "Add Income"}
        </h2>

        <p className="mt-1 text-slate-500">
          Record every additional income.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Input
          placeholder="Income Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-2xl border border-slate-200 px-5 py-3 outline-none focus:border-green-500"
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

        <Input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <Button
        className="mt-8"
        disabled={loading}
        onClick={onSave}
      >
        {loading
          ? "Saving..."
          : editing
          ? "Update Income"
          : "Add Income"}
      </Button>
    </div>
  );
}