"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

import {
  addTransaction,
  calculateSummary,
  deleteTransaction,
  getTransactions,
  updateTransaction,
} from "@/lib/finance";

import {
  CreateTransaction,
  FinanceSummary,
  Transaction,
  UpdateTransaction,
} from "@/types/finance";

interface UseTransactionsReturn {
  transactions: Transaction[];
  summary: FinanceSummary;
  loading: boolean;
  error: string | null;

  refresh: () => Promise<void>;

  create: (
    transaction: CreateTransaction
  ) => Promise<void>;

  update: (
    id: string,
    transaction: UpdateTransaction
  ) => Promise<void>;

  remove: (
    id: string
  ) => Promise<void>;
}

export function useTransactions(
  userId?: string
): UseTransactionsReturn {
  const [transactions, setTransactions] =
    useState<Transaction[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState<string | null>(null);

  const refresh = useCallback(async () => {
    if (!userId) {
      setTransactions([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);

      const data =
        await getTransactions(userId);

      setTransactions(data);

      setError(null);
    } catch (err) {
      console.error(err);
      setError(
        "Failed to load transactions."
      );
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  async function create(
    transaction: CreateTransaction
  ) {
    await addTransaction(transaction);

    await refresh();
  }

  async function update(
    id: string,
    transaction: UpdateTransaction
  ) {
    await updateTransaction(
      id,
      transaction
    );

    await refresh();
  }

  async function remove(id: string) {
    await deleteTransaction(id);

    await refresh();
  }

  const summary = useMemo(
    () =>
      calculateSummary(transactions),
    [transactions]
  );

  return {
    transactions,
    summary,
    loading,
    error,
    refresh,
    create,
    update,
    remove,
  };
}