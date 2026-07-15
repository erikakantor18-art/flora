"use client";

import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

import IncomeOverview from "@/components/income/IncomeOverview";
import IncomeForm from "@/components/income/IncomeForm";
import IncomeHistory from "@/components/income/IncomeHistory";
import IncomeChart from "@/components/income/IncomeChart";
import IncomeAnalytics from "@/components/income/IncomeAnalytics";
import useIncome from "@/hooks/useIncome";
import useProfile from "@/hooks/useProfile";

import { Income } from "@/types";

import toast from "react-hot-toast";

export default function IncomePage() {

  const {

    profile,

  } = useProfile();

  const {

    income,

    loading,

    totalIncome,

    addIncome,

    updateIncome,

    deleteIncome,

  } = useIncome();

  const salary =
    profile?.monthly_income ?? 0;

  const [title, setTitle] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [category, setCategory] =
    useState("Freelance");

  const [date, setDate] =
    useState(
      new Date()
        .toISOString()
        .split("T")[0]
    );

  const [editingId, setEditingId] =
    useState<string | null>(null);

  async function handleSave() {

    if (!title.trim() || !amount) {

      toast.error(
        "Please complete all fields."
      );

      return;

    }

    const item: Income = {

      id:
        editingId ??
        crypto.randomUUID(),

      title: title.trim(),

      amount:
        Number(amount),

      category,

      date,

      createdAt:
        new Date().toISOString(),

    };

    try {

      if (editingId) {

        await updateIncome(item);

      } else {

        await addIncome(item);

      }

      setTitle("");

      setAmount("");

      setCategory("Freelance");

      setDate(
        new Date()
          .toISOString()
          .split("T")[0]
      );

      setEditingId(null);

    } catch (error) {

      console.error(error);

      toast.error(
        "Failed to save income."
      );

    }

  }

  function handleEdit(id: string) {

    const item =
      income.find(
        (i) => i.id === id
      );

    if (!item) return;

    setEditingId(item.id);

    setTitle(item.title);

    setAmount(
      item.amount.toString()
    );

    setCategory(item.category);

    setDate(item.date);

  }

  async function handleDelete(
    id: string
  ) {

    try {

      await deleteIncome(id);

    } catch {

      toast.error(
        "Delete failed."
      );

    }

  }

  return (

    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 overflow-y-auto p-8">

        <Topbar />

        <div className="mt-8">

          <IncomeOverview

            salary={salary}

            extraIncome={totalIncome}

          />
        </div>
        <div className="mt-8">

            <IncomeAnalytics
                income={income}
            />

        </div>

        <IncomeForm

          title={title}

          amount={amount}

          category={category}

          date={date}

          setTitle={setTitle}

          setAmount={setAmount}

          setCategory={setCategory}

          setDate={setDate}

          loading={loading}

          editing={
            editingId !== null
          }

          onSave={handleSave}

        />
        <div className="mt-8">

            <IncomeChart
                income={income}
            />

        </div>

        <div className="mt-8">

          <IncomeHistory

            income={income}

            onEdit={handleEdit}

            onDelete={handleDelete}

          />

        </div>

      </section>

    </main>

  );

}