"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { supabase } from "@/lib/supabase";

import {
  getExpenses,
  addExpense as createExpense,
  updateExpense as editExpense,
  deleteExpense as removeExpense,
} from "@/services/expense.service";

import { Expense } from "@/types";

export default function useExpense() {

  const [expenses, setExpenses] =
    useState<Expense[]>([]);

  const [loading, setLoading] =
    useState(false);

  async function loadExpenses() {

    try {

      const data =
        await getExpenses();

      setExpenses(data);

    } catch (error) {

      console.error(error);

    }

  }

  useEffect(() => {

    loadExpenses();

    const channel =
      supabase

        .channel("expenses")

        .on(
          "postgres_changes",
          {
            event: "*",
            schema: "public",
            table: "expenses",
          },
          () => {

            loadExpenses();

          }
        )

        .subscribe();

    return () => {

      supabase.removeChannel(channel);

    };

  }, []);

  async function addExpense(
    expense: Expense
  ) {

    try {

      setLoading(true);

      await createExpense(expense);

      toast.success("Expense added");

    } catch (error) {

      console.error(error);

      toast.error("Failed");

    } finally {

      setLoading(false);

    }

  }

  async function updateExpense(
    expense: Expense
  ) {

    try {

      setLoading(true);

      await editExpense(expense);

      toast.success("Updated");

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  async function deleteExpense(
    id: string
  ) {

    try {

      setLoading(true);

      await removeExpense(id);

      toast.success("Deleted");

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  const totalExpense =
    expenses.reduce(
      (t, e) => t + e.amount,
      0
    );

  return {

    expenses,

    loading,

    totalExpense,

    addExpense,

    updateExpense,

    deleteExpense,

    reload: loadExpenses,

  };

}