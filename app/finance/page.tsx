"use client";

import { useState } from "react";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

import FinanceHero from "@/components/finance/FinanceHero";
import FinanceSummary from "@/components/finance/FinanceSummary";
import FinanceChart from "@/components/finance/FinanceChart";
import CategoryPie from "@/components/finance/CategoryPie";
import TransactionList from "@/components/finance/TransactionList";
import FilterBar from "@/components/finance/FilterBar";
import FloatingAddButton from "@/components/finance/FloatingAddButton";
import AddTransactionModal from "@/components/finance/AddTransactionModal";
import EmptyTransaction from "@/components/finance/EmptyTransaction";
import TransactionSkeletonList from "@/components/finance/TransactionSkeletonList";

import { useTransactions } from "@/hooks/useTransactions";
import { useAuthContext } from "@/context/AuthContext";

export default function FinancePage() {
  const { user } = useAuthContext();

  const {
    transactions,
    summary,
    loading,
    create,
  } = useTransactions(user?.id);

  const [openAdd, setOpenAdd] =
    useState(false);

  return (
    <DashboardLayout>
      <FinanceHero />

      <FinanceSummary
        summary={summary}
      />

      <div className="mt-8 grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <FinanceChart
            transactions={transactions}
          />
        </div>

        <CategoryPie
          transactions={transactions}
        />
      </div>

      <div className="mt-8">
        <FilterBar />
      </div>

      <div className="mt-8">
        {loading ? (
          <TransactionSkeletonList />
        ) : transactions.length === 0 ? (
          <EmptyTransaction
            onAdd={() =>
              setOpenAdd(true)
            }
          />
        ) : (
          <TransactionList
            transactions={transactions}
          />
        )}
      </div>

      <FloatingAddButton
        onClick={() =>
          setOpenAdd(true)
        }
      />

      <AddTransactionModal
        open={openAdd}
        onClose={() =>
          setOpenAdd(false)
        }
        onSave={create}
      />
    </DashboardLayout>
  );
}