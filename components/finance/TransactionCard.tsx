"use client";

import {
  ArrowDownCircle,
  ArrowUpCircle,
  MoreVertical,
} from "lucide-react";

import { Transaction } from "@/types/finance";

interface TransactionCardProps {
  transaction: Transaction;
}

export default function TransactionCard({
  transaction,
}: TransactionCardProps) {
  const isIncome = transaction.type === "income";

  const date = new Date(
    transaction.transaction_date
  ).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-4">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
            isIncome
              ? "bg-emerald-100 text-emerald-600"
              : "bg-red-100 text-red-500"
          }`}
        >
          {isIncome ? (
            <ArrowDownCircle size={22} />
          ) : (
            <ArrowUpCircle size={22} />
          )}
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">
            {transaction.title}
          </h3>

          <p className="text-sm text-slate-500">
            {transaction.category}
          </p>

          <p className="mt-1 text-xs text-slate-400">
            {date}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p
            className={`font-bold ${
              isIncome
                ? "text-emerald-600"
                : "text-red-500"
            }`}
          >
            {isIncome ? "+" : "-"}
            {new Intl.NumberFormat("id-ID", {
              style: "currency",
              currency: "IDR",
              maximumFractionDigits: 0,
            }).format(transaction.amount)}
          </p>

          <p className="text-xs capitalize text-slate-400">
            {transaction.type}
          </p>
        </div>

        <button className="rounded-xl p-2 transition hover:bg-slate-100">
          <MoreVertical size={18} />
        </button>
      </div>
    </div>
  );
}