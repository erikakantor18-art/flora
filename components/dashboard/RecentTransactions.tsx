"use client";

import {
  ArrowDownLeft,
  ArrowUpRight,
  Coffee,
  Fuel,
} from "lucide-react";

import { Card } from "@/components/ui/Card";

const transactions = [
  {
    title: "Salary",
    category: "Income",
    amount: "+Rp 4.700.000",
    date: "Today",
    income: true,
    icon: ArrowDownLeft,
  },
  {
    title: "Fuel",
    category: "Transportation",
    amount: "-Rp 100.000",
    date: "Yesterday",
    income: false,
    icon: Fuel,
  },
  {
    title: "Coffee",
    category: "Food & Drink",
    amount: "-Rp 30.000",
    date: "Yesterday",
    income: false,
    icon: Coffee,
  },
];

export default function RecentTransactions() {
  return (
    <Card className="h-full">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold lg:text-xl">
            Recent Transactions
          </h3>

          <p className="text-sm text-slate-500">
            Latest financial activity
          </p>
        </div>

        <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
          View All
        </button>
      </div>

      <div className="mt-6 space-y-3">
        {transactions.map((item) => (
          <TransactionItem
            key={item.title}
            {...item}
          />
        ))}
      </div>
    </Card>
  );
}

function TransactionItem({
  title,
  category,
  amount,
  date,
  income,
  icon: Icon,
}: {
  title: string;
  category: string;
  amount: string;
  date: string;
  income: boolean;
  icon: React.ElementType;
}) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-100 p-4 transition-all hover:border-emerald-200 hover:bg-emerald-50">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
            income
              ? "bg-emerald-100 text-emerald-600"
              : "bg-red-100 text-red-500"
          }`}
        >
          <Icon size={20} />
        </div>

        <div>
          <p className="font-semibold">
            {title}
          </p>

          <p className="text-sm text-slate-500">
            {category} • {date}
          </p>
        </div>
      </div>

      <div
        className={`font-bold ${
          income
            ? "text-emerald-600"
            : "text-red-500"
        }`}
      >
        {amount}
      </div>
    </div>
  );
}