"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Circle,
  CalendarDays,
} from "lucide-react";

import { Card } from "@/components/ui/Card";

interface Task {
  id: number;
  title: string;
  time: string;
  done: boolean;
}

export default function PlannerToday() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Finish Dashboard UI",
      time: "09:00",
      done: true,
    },
    {
      id: 2,
      title: "Study IELTS",
      time: "19:30",
      done: false,
    },
    {
      id: 3,
      title: "Workout",
      time: "20:30",
      done: false,
    },
    {
      id: 4,
      title: "Read 20 Pages",
      time: "21:00",
      done: false,
    },
  ]);

  function toggleTask(id: number) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              done: !task.done,
            }
          : task
      )
    );
  }

  const completed = tasks.filter((t) => t.done).length;
  const progress = (completed / tasks.length) * 100;

  return (
    <Card className="h-full">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold">
            Today's Planner
          </h3>

          <p className="text-sm text-slate-500">
            {completed} of {tasks.length} completed
          </p>
        </div>

        <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
          <CalendarDays size={20} />
        </div>
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-green-400 transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>

      <div className="mt-6 space-y-3">
        {tasks.map((task) => (
          <button
            key={task.id}
            onClick={() => toggleTask(task.id)}
            className="flex w-full items-center justify-between rounded-2xl border border-slate-100 p-4 text-left transition-all hover:border-emerald-200 hover:bg-emerald-50"
          >
            <div className="flex items-center gap-3">
              {task.done ? (
                <CheckCircle2
                  className="text-emerald-600"
                  size={22}
                />
              ) : (
                <Circle
                  className="text-slate-300"
                  size={22}
                />
              )}

              <div>
                <p
                  className={`font-medium ${
                    task.done
                      ? "text-slate-400 line-through"
                      : "text-slate-900"
                  }`}
                >
                  {task.title}
                </p>

                <p className="text-sm text-slate-500">
                  {task.time}
                </p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </Card>
  );
}