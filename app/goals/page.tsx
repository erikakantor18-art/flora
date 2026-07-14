"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
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

    await deleteGoal(id);

  }

  return (

    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 overflow-y-auto p-8">

        <Topbar />

        <div className="rounded-3xl bg-white p-8 shadow">

          <h1 className="text-4xl font-black">

            🎯 Goals

          </h1>

          <p className="mt-2 text-slate-500">

            Build your future one goal at a time.

          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">

            <input
              value={title}
              onChange={(e) =>
                setTitle(
                  e.target.value
                )
              }
              placeholder="Goal Name"
              className="rounded-2xl border border-slate-200 px-5 py-3 outline-none focus:border-green-500"
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
              className="rounded-2xl border border-slate-200 px-5 py-3 outline-none focus:border-green-500"
            />

            <input
              type="date"
              value={deadline}
              onChange={(e) =>
                setDeadline(
                  e.target.value
                )
              }
              className="rounded-2xl border border-slate-200 px-5 py-3 outline-none focus:border-green-500"
            />

          </div>

          <button
            onClick={handleSave}
            disabled={loading}
            className="mt-6 rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 disabled:opacity-50"
          >

            {loading

              ? "Saving..."

              : "+ Add Goal"}

          </button>

        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">

          {goals.length === 0 ? (

            <div className="col-span-2 rounded-3xl bg-white p-12 text-center shadow">

              <p className="text-7xl">

                🎯

              </p>

              <h2 className="mt-5 text-2xl font-bold">

                No Goals Yet

              </h2>

              <p className="mt-2 text-slate-500">

                Create your first goal to start saving.

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