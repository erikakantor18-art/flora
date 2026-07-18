"use client";

import { Card } from "@/components/ui/Card";

import TransactionCard from "./TransactionCard";

import { Transaction } from "@/types/finance";

interface TransactionListProps {
  transactions: Transaction[];
}

export default function TransactionList({
  transactions,
}: TransactionListProps) {
  return (
    <Card>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold">
            Recent Transactions
          </h2>

          <p className="text-sm text-slate-500">
            Your latest financial activity
          </p>
        </div>

        <button className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">
          + Add Transaction
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {transactions.map((transaction) => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
          />
        ))}

        {transactions.length === 0 && (
          <div className="py-10 text-center text-slate-500">
            No transactions found.
          </div>
        )}
      </div>
    </Card>
  );
}