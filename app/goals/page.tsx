"use client";

import { useState } from "react";
import toast from "react-hot-toast";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

import GoalOverview from "@/components/goals/GoalOverview";
import GoalSummary from "@/components/goals/GoalSummary";
import GoalCard from "@/components/goals/GoalCard";

import useGoal from "@/hooks/useGoal";

import { Goal } from "@/types";

export default function Goals() {

  const {

    goals,

    loading,

    addGoal,

    updateGoal,

    deleteGoal,

  } = useGoal();

  const [title, setTitle] =
    useState("");

  const [target, setTarget] =
    useState("");

  const [deadline, setDeadline] =
    useState("");

  async function handleSave() {

    if (

      !title.trim() ||

      !target ||

      !deadline

    ) {

      toast.error(
        "Semua field wajib diisi."
      );

      return;

    }

    const targetAmount =
      Number(target);

    if (

      isNaN(targetAmount) ||

      targetAmount <= 0

    ) {

      toast.error(
        "Target harus lebih dari 0."
      );

      return;

    }

    const goal: Goal = {

      id: crypto.randomUUID(),

      title: title.trim(),

      current: 0,

      target: targetAmount,

      deadline,

    };

    await addGoal(goal);

    setTitle("");

    setTarget("");

    setDeadline("");

  }

  async function handleAddSaving(
    goal: Goal
  ) {

    const input = prompt(
      `Tambah tabungan untuk "${goal.title}"`,
      "100000"
    );

    if (!input) return;

    const amount =
      Number(input);

    if (

      isNaN(amount) ||

      amount <= 0

    ) {

      toast.error(
        "Nominal tidak valid."
      );

      return;

    }

    await updateGoal({

      ...goal,

      current:
        goal.current + amount,

    });

  }

  async function handleDelete(
    id: string
  ) {

    const ok =
      window.confirm(
        "Hapus goal ini?"
      );

    if (!ok) return;

    await deleteGoal(id);

  }

  return (

    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 overflow-y-auto p-8">

        <Topbar />

        {/* SUMMARY */}

        <div className="mt-8">

          <GoalSummary
            goals={goals}
          />

        </div>

        {/* HERO */}

        <div className="mt-8">

          <GoalOverview
            goals={goals}
          />

        </div>

        {/* ADD GOAL */}

        <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

          <div className="flex items-center justify-between">

            <div>

              <h1 className="text-4xl font-black">

                🎯 Goals

              </h1>

              <p className="mt-2 text-slate-500">

                Build your future one goal at a time.

              </p>

            </div>

            <div className="hidden rounded-2xl bg-green-100 px-6 py-4 lg:block">

              <h2 className="text-3xl font-black text-green-600">

                {goals.length}

              </h2>

              <p className="text-sm text-slate-500">

                Active Goals

              </p>

            </div>

          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <input
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              placeholder="Goal Name"
              className="rounded-2xl border border-slate-200 px-5 py-3 outline-none transition focus:border-green-500"
            />

            <input
              type="number"
              value={target}
              onChange={(e) =>
                setTarget(
                  e.target.value
                )
              }
              placeholder="Target Amount"
              className="rounded-2xl border border-slate-200 px-5 py-3 outline-none transition focus:border-green-500"
            />

            <input
              type="date"
              value={deadline}
              onChange={(e) =>
                setDeadline(
                  e.target.value
                )
              }
              className="rounded-2xl border border-slate-200 px-5 py-3 outline-none transition focus:border-green-500"
            />

          </div>

          <button
            onClick={handleSave}
            disabled={loading}
            className="mt-6 rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700 disabled:opacity-50"
          >

            {loading
              ? "Saving..."
              : "+ Add Goal"}

          </button>

        </div>

        {/* GOALS */}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          {goals.length === 0 ? (

            <div className="col-span-2 rounded-3xl border border-dashed border-slate-300 bg-white p-14 text-center shadow-sm">

              <div className="text-7xl">

                🎯

              </div>

              <h2 className="mt-6 text-3xl font-black">

                No Goals Yet

              </h2>

              <p className="mt-3 text-slate-500">

                Start your first savings goal today.

              </p>

            </div>

          ) : (

            goals.map((goal) => (

              <GoalCard
                key={goal.id}
                title={goal.title}
                current={goal.current}
                target={goal.target}
                deadline={goal.deadline}
                onAddSaving={() =>
                  handleAddSaving(goal)
                }
                onDelete={() =>
                  handleDelete(goal.id)
                }
              />

            ))

          )}

        </div>

      </section>

    </main>

  );

}