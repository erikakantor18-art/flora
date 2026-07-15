"use client";

import { useMemo, useState } from "react";

import toast from "react-hot-toast";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Progress from "@/components/ui/Progress";

import usePlanner from "@/hooks/usePlanner";

import { Planner } from "@/types";
import AuthGuard from "@/components/AuthGuard";

export default function PlannerPage() {

  const {

    tasks,

    loading,

    addTask,

    updateTask,

    deleteTask,

  } = usePlanner();

  const [time, setTime] =
    useState("");

  const [activity, setActivity] =
    useState("");

  const completed =
    tasks.filter(
      (t) => t.completed
    ).length;

  const pending =
    tasks.length - completed;

  const progress =
    tasks.length === 0
      ? 0
      : Math.round(
          (completed /
            tasks.length) *
            100
        );

  const sortedTasks =
    useMemo(
      () =>
        [...tasks].sort((a, b) =>
          a.time.localeCompare(b.time)
        ),
      [tasks]
    );

  async function handleSave() {

    if (

      !time ||

      !activity.trim()

    ) {

      toast.error(
        "Semua field wajib diisi."
      );

      return;

    }

    const task: Planner = {

      id: crypto.randomUUID(),

      time,

      activity: activity.trim(),

      completed: false,

      createdAt:
        new Date().toISOString(),

    };

    await addTask(task);

    setTime("");

    setActivity("");

  }

  async function toggleTask(
    task: Planner
  ) {

    await updateTask({

      ...task,

      completed:
        !task.completed,

    });

  }

  async function handleDelete(
    id: string
  ) {

    const ok =
      window.confirm(
        "Delete this activity?"
      );

    if (!ok) return;

    await deleteTask(id);

  }

  return (
    <AuthGuard>
        <main className="flex min-h-screen bg-slate-100">

          <Sidebar />

          <section className="flex-1 overflow-y-auto p-8">

            <Topbar />

            {/* HERO */}

            <div className="mt-8 rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-8 text-white shadow-xl">

              <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">

                <div>

                  <p className="font-semibold opacity-90">

                    📅 Today&#39;s Planner

                  </p>

                  <h1 className="mt-3 text-5xl font-black">

                    Stay Productive 🚀

                  </h1>

                  <p className="mt-4 max-w-xl opacity-90">

                    Organize your day,
                    complete your tasks,
                    and build consistent habits.

                  </p>

                </div>

                <div className="rounded-3xl bg-white/15 p-6 backdrop-blur lg:w-80">

                  <p className="text-sm opacity-80">

                    Daily Progress

                  </p>

                  <h2 className="mt-2 text-5xl font-black">

                    {progress}%

                  </h2>

                  <div className="mt-6">

                    <Progress
                      value={progress}
                    />

                  </div>

                  <div className="mt-6 flex justify-between text-sm">

                    <span>

                      ✅ {completed} Done

                    </span>

                    <span>

                      ⏳ {pending} Left

                    </span>

                  </div>

                </div>

              </div>

            </div>

            {/* SUMMARY */}

            <div className="mt-8 grid gap-6 md:grid-cols-3">

              <Card>

                <p className="text-slate-500">

                  Total Tasks

                </p>

                <h2 className="mt-2 text-4xl font-black">

                  {tasks.length}

                </h2>

              </Card>

              <Card>

                <p className="text-slate-500">

                  Completed

                </p>

                <h2 className="mt-2 text-4xl font-black text-green-600">

                  {completed}

                </h2>

              </Card>

              <Card>

                <p className="text-slate-500">

                  Pending

                </p>

                <h2 className="mt-2 text-4xl font-black text-orange-500">

                  {pending}

                </h2>

              </Card>

            </div>

            {/* ADD */}

            <Card className="mt-8">

              <h2 className="text-2xl font-black">

                Add Activity

              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-3">

                <Input
                  type="time"
                  value={time}
                  onChange={(e) =>
                    setTime(
                      e.target.value
                    )
                  }
                />

                <Input
                  placeholder="Activity"
                  value={activity}
                  onChange={(e) =>
                    setActivity(
                      e.target.value
                    )
                  }
                />

                <Button
                  disabled={loading}
                  onClick={handleSave}
                >

                  {loading
                    ? "Saving..."
                    : "+ Add Activity"}

                </Button>

              </div>

            </Card>

            {/* LIST */}

            <div className="mt-8 space-y-5">

              {sortedTasks.length === 0 ? (

                <Card>

                  <div className="py-20 text-center">

                    <div className="text-7xl">

                      📅

                    </div>

                    <h2 className="mt-5 text-3xl font-black">

                      No Activities

                    </h2>

                    <p className="mt-3 text-slate-500">

                      Plan your day to stay productive.

                    </p>

                  </div>

                </Card>

              ) : (

                sortedTasks.map((task) => (

                  <Card
                    key={task.id}
                  >

                    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                      <div>

                        <p className="text-sm text-slate-500">

                          {task.time}

                        </p>

                        <h2
                          className={`mt-1 text-2xl font-bold ${
                            task.completed
                              ? "text-slate-400 line-through"
                              : ""
                          }`}
                        >

                          {task.activity}

                        </h2>

                      </div>

                      <div className="flex gap-3">

                        <Button
                          className={
                            task.completed
                              ? "bg-blue-600 hover:bg-blue-700"
                              : "bg-green-600 hover:bg-green-700"
                          }
                          onClick={() =>
                            toggleTask(task)
                          }
                        >

                          {task.completed
                            ? "Undo"
                            : "Done"}

                        </Button>

                        <Button
                          className="bg-red-600 hover:bg-red-700"
                          onClick={() =>
                            handleDelete(
                              task.id
                            )
                          }
                        >

                          Delete

                        </Button>

                      </div>

                    </div>

                  </Card>

                ))

              )}

            </div>

          </section>

        </main>
    </AuthGuard>
  );

}