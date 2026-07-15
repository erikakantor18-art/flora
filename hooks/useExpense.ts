"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import {
//  supabase,
} from "@/lib/supabase";

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

    // Load data sekali saat halaman dibuka
    loadExpenses();

  }, []);

  async function addExpense(
    expense: Expense
  ) {

    try {

      setLoading(true);

      await createExpense(expense);

      // reload manual
      await loadExpenses();

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

      // reload manual
      await loadExpenses();

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

      // reload manual
      await loadExpenses();

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