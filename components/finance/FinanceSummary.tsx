"use client";

import {
  ArrowDownCircle,
  ArrowUpCircle,
  PiggyBank,
  Wallet,
} from "lucide-react";

import StatCard from "@/components/ui/StatCard";
import { FinanceSummary as FinanceSummaryType } from "@/types/finance";

interface FinanceSummaryProps {
  summary: FinanceSummaryType;
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function FinanceSummary({
  summary,
}: FinanceSummaryProps) {
  const balancePositive = summary.balance >= 0;

  return (
    <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Income"
        value={formatCurrency(summary.totalIncome)}
        subtitle="Total Income"
        trend="+"
        icon={<ArrowDownCircle size={22} />}
      />

      <StatCard
        title="Expense"
        value={formatCurrency(summary.totalExpense)}
        subtitle="Total Expense"
        trend="-"
        icon={<ArrowUpCircle size={22} />}
      />

      <StatCard
        title="Balance"
        value={formatCurrency(summary.balance)}
        subtitle={
          balancePositive
            ? "Healthy Balance"
            : "Negative Balance"
        }
        trend={balancePositive ? "▲" : "▼"}
        valueClassName={
          balancePositive
            ? "text-emerald-600"
            : "text-red-600"
        }
        icon={<Wallet size={22} />}
      />

      <StatCard
        title="Transactions"
        value={summary.transactionCount.toString()}
        subtitle="Total Records"
        trend=""
        icon={<PiggyBank size={22} />}
      />
    </section>
  );
}