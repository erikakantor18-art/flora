"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";

import usePlanner from "@/hooks/usePlanner";

import { Planner } from "@/types";

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

    await deleteTask(id);

  }

  return (

    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 overflow-y-auto p-8">

        <Topbar />

        <div className="mb-8">

          <h1 className="text-4xl font-black">

            📅 Planner

          </h1>

          <p className="mt-2 text-slate-500">

            Organize your daily schedule.

          </p>

        </div>

        <Card>

          <div className="grid gap-4 md:grid-cols-3">

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

                : "Add Activity"}

            </Button>

          </div>

        </Card>

        <div className="mt-8 space-y-5">

          {tasks.length === 0 ? (

            <Card>

              <div className="py-14 text-center">

                <p className="text-7xl">

                  📅

                </p>

                <h2 className="mt-5 text-2xl font-bold">

                  No Activity

                </h2>

                <p className="mt-2 text-slate-500">

                  Add your first activity.

                </p>

              </div>

            </Card>

          ) : (

            tasks.map((task) => (

              <Card
                key={task.id}
              >

                <div className="flex items-center justify-between">

                  <div>

                    <h2
                      className={`text-xl font-bold ${
                        task.completed
                          ? "line-through text-slate-400"
                          : ""
                      }`}
                    >

                      {task.activity}

                    </h2>

                    <p className="mt-1 text-slate-500">

                      {task.time}

                    </p>

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
                        handleDelete(task.id)
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

  );

}