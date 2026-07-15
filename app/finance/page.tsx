"use client";

import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

import BudgetCard from "@/components/finance/BudgetCard";
import SummaryCards from "@/components/finance/SummaryCards";
import ExpenseForm from "@/components/finance/ExpenseForm";
import ExpenseChart from "@/components/finance/ExpenseChart";
import ExpenseHistory from "@/components/finance/ExpenseHistory";
import SearchBar from "@/components/finance/SearchBar";
import CategoryFilter from "@/components/finance/CategoryFilter";
import MonthlySummary from "@/components/finance/MonthlySummary";

import useExpense from "@/hooks/useExpense";
import useProfile from "@/hooks/useProfile";

import toast from "react-hot-toast";

import { Expense } from "@/types";

export default function Finance() {

  const {
    profile,
  } = useProfile();

  const income =
    profile?.monthly_income ?? 0;

  const {

    expenses,

    loading,

    totalExpense,

    addExpense,

    updateExpense,

    deleteExpense,

  } = useExpense();

  const [expenseName, setExpenseName] =
    useState("");

  const [expenseAmount, setExpenseAmount] =
    useState("");

  const [category, setCategory] =
    useState("Food");

  const [search, setSearch] =
    useState("");

  const [filterCategory, setFilterCategory] =
    useState("All");

  const [editingId, setEditingId] =
    useState<string | null>(null);

  const filteredExpenses =
    expenses.filter((expense) => {

      const matchName =
        expense.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchCategory =
        filterCategory === "All" ||
        expense.category ===
          filterCategory;

      return (
        matchName &&
        matchCategory
      );

    });

  async function handleSave() {

    if (
      !expenseName ||
      !expenseAmount
    )
      return;

    const expense: Expense = {

      id:
        editingId ??
        crypto.randomUUID(),

      name: expenseName,

      amount: Number(
        expenseAmount
      ),

      category,

      createdAt:
        new Date().toISOString(),

    };

    try {

      if (editingId) {

        await updateExpense(
          expense
        );

      } else {

        await addExpense(
          expense
        );

      }

      setExpenseName("");

      setExpenseAmount("");

      setCategory("Food");

      setEditingId(null);

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to save expense"
      );

    }

  }

  function handleEdit(
    id: string
  ) {

    const expense =
      expenses.find(
        (e) => e.id === id
      );

    if (!expense) return;

    setExpenseName(
      expense.name
    );

    setExpenseAmount(
      expense.amount.toString()
    );

    setCategory(
      expense.category
    );

    setEditingId(
      expense.id
    );

  }

  async function handleDelete(
    id: string
  ) {

    try {

      await deleteExpense(id);

    } catch (error) {

      console.error(error);

      toast.error(
        "Delete failed"
      );

    }

  }

  return (

    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 overflow-y-auto p-8">

        <Topbar />

        <div className="mt-8">

          <SummaryCards
            income={income}
            expense={totalExpense}
          />

          <MonthlySummary
            income={income}
            expense={totalExpense}
          />

        </div>

        <ExpenseForm
          expenseName={expenseName}
          expenseAmount={expenseAmount}
          category={category}
          setExpenseName={setExpenseName}
          setExpenseAmount={setExpenseAmount}
          setCategory={setCategory}
          addExpense={handleSave}
        />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <CategoryFilter
          category={filterCategory}
          setCategory={setFilterCategory}
        />

        {loading && (

          <div className="mt-6 rounded-2xl bg-blue-50 p-4 text-blue-700">

            Loading...

          </div>

        )}

        <div className="mt-8 grid gap-8 xl:grid-cols-3">

          <div className="space-y-8">

            <ExpenseChart
              expenses={filteredExpenses}
            />

            <BudgetCard
              budget={
                profile?.monthly_budget ?? 0
              }
              expense={totalExpense}
            />

          </div>

          <ExpenseHistory
            expenses={filteredExpenses}
            onDelete={(index) =>
              handleDelete(
                filteredExpenses[index].id
              )
            }
            onEdit={(index) =>
              handleEdit(
                filteredExpenses[index].id
              )
            }
          />

        </div>

      </section>

    </main>

  );

}