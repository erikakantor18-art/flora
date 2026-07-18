"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Progress from "@/components/ui/Progress";

import {
  CalendarDays,
  Clock3,
  Plus,
  CheckCircle2,
  Circle,
  Target,
  TrendingUp,
} from "lucide-react";

const todayTasks = [
  {
    title: "Meeting Vendor",
    time: "09:00",
    done: true,
  },
  {
    title: "Finish Finance Page",
    time: "11:30",
    done: false,
  },
  {
    title: "Study IELTS",
    time: "19:00",
    done: false,
  },
  {
    title: "Workout",
    time: "20:30",
    done: false,
  },
];

const upcoming = [
  {
    day: "Tomorrow",
    task: "UI Revision",
  },
  {
    day: "Friday",
    task: "Client Meeting",
  },
  {
    day: "Saturday",
    task: "React Practice",
  },
];

const productivity = [
  35,
  45,
  55,
  80,
  60,
  75,
  95,
];

export default function PlannerPage() {
  return (
    <DashboardLayout>

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <Badge color="blue">
            Planner
          </Badge>

          <h1 className="mt-4 text-4xl font-black">
            Daily Planner
          </h1>

          <p className="mt-2 text-slate-500">
            Stay productive and finish today's goals.
          </p>

        </div>

        <Button
          leftIcon={<Plus size={18} />}
        >
          Add Task
        </Button>

      </div>

      {/* SUMMARY */}

      <div className="mt-8 grid grid-cols-4 gap-6">

        <Card>

          <p className="text-slate-500">
            Today's Tasks
          </p>

          <h2 className="mt-3 text-4xl font-black">
            12
          </h2>

        </Card>

        <Card>

          <p className="text-slate-500">
            Completed
          </p>

          <h2 className="mt-3 text-4xl font-black text-emerald-600">
            8
          </h2>

        </Card>

        <Card>

          <p className="text-slate-500">
            Remaining
          </p>

          <h2 className="mt-3 text-4xl font-black text-red-500">
            4
          </h2>

        </Card>

        <Card>

          <p className="text-slate-500">
            Productivity
          </p>

          <h2 className="mt-3 text-4xl font-black">
            82%
          </h2>

        </Card>

      </div>

      {/* CONTENT */}

      <div className="mt-8 grid grid-cols-3 gap-6">

        {/* TASKS */}

        <Card className="col-span-2">

          <div className="flex items-center justify-between">

            <h2 className="text-2xl font-bold">
              Today's Tasks
            </h2>

            <Badge>
              {todayTasks.length} Tasks
            </Badge>

          </div>

          <div className="mt-8 space-y-4">
                        {todayTasks.map((task) => (

              <div
                key={task.title}
                className="flex items-center justify-between rounded-2xl border border-slate-100 p-5 transition hover:bg-slate-50"
              >

                <div className="flex items-center gap-4">

                  {task.done ? (

                    <CheckCircle2
                      size={24}
                      className="text-emerald-500"
                    />

                  ) : (

                    <Circle
                      size={24}
                      className="text-slate-300"
                    />

                  )}

                  <div>

                    <h3 className="font-semibold">
                      {task.title}
                    </h3>

                    <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">

                      <Clock3 size={15} />

                      {task.time}

                    </div>

                  </div>

                </div>

                <Badge
                  color={task.done ? "emerald" : "yellow"}
                >
                  {task.done ? "Done" : "Pending"}
                </Badge>

              </div>

            ))}

          </div>

        </Card>

        {/* SIDEBAR */}

        <div className="space-y-6">

          <Card>

            <div className="flex items-center gap-3">

              <Target
                size={22}
                className="text-emerald-600"
              />

              <h2 className="text-xl font-bold">
                Daily Goal
              </h2>

            </div>

            <div className="mt-8">

              <Progress
                value={8}
                max={12}
                size="lg"
                showLabel
              />

            </div>

            <div className="mt-8 flex justify-between">

              <span className="text-slate-500">
                Completed
              </span>

              <span className="font-bold">
                8 / 12
              </span>

            </div>

          </Card>

          <Card>

            <div className="flex items-center gap-3">

              <CalendarDays
                size={22}
                className="text-blue-500"
              />

              <h2 className="text-xl font-bold">
                Upcoming
              </h2>

            </div>

            <div className="mt-6 space-y-4">

              {upcoming.map((item) => (

                <div
                  key={item.task}
                  className="rounded-xl bg-slate-50 p-4"
                >

                  <p className="text-sm text-slate-500">
                    {item.day}
                  </p>

                  <h3 className="mt-1 font-semibold">
                    {item.task}
                  </h3>

                </div>

              ))}

            </div>

          </Card>

        </div>

      </div>

      {/* PRODUCTIVITY */}

      <div className="mt-8">

        <Card>

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold">
                Weekly Productivity
              </h2>

              <p className="text-slate-500">
                Last 7 Days
              </p>

            </div>

            <TrendingUp className="text-emerald-600" />

          </div>

          <div className="mt-10 flex h-64 items-end gap-4">
                        {productivity.map((value, index) => (

              <div
                key={index}
                className="flex flex-1 flex-col items-center"
              >

                <div
                  className="w-full rounded-2xl bg-gradient-to-t from-blue-600 to-cyan-300 transition-all duration-300 hover:opacity-80"
                  style={{
                    height: `${value}%`,
                  }}
                />

                <span className="mt-3 text-sm text-slate-500">
                  {
                    [
                      "Mon",
                      "Tue",
                      "Wed",
                      "Thu",
                      "Fri",
                      "Sat",
                      "Sun",
                    ][index]
                  }
                </span>

              </div>

            ))}

          </div>

        </Card>

      </div>

      {/* MOTIVATION */}

      <div className="mt-8">

        <Card className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-3xl font-black">
                Keep Going 🚀
              </h2>

              <p className="mt-3 max-w-2xl text-emerald-50">
                Small progress every day creates massive results over time.
                Stay consistent, finish your priorities, and keep building
                the future you're dreaming of.
              </p>

            </div>

            <Button variant="secondary">
              Review Goals
            </Button>

          </div>

        </Card>

      </div>

      {/* QUICK ACTIONS */}

      <div className="mt-8 grid grid-cols-4 gap-6">

        <Card className="text-center hover:scale-105 transition">

          <CalendarDays
            size={34}
            className="mx-auto text-blue-500"
          />

          <h3 className="mt-4 font-bold">
            Calendar
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            View monthly schedule
          </p>

        </Card>

        <Card className="text-center hover:scale-105 transition">

          <Plus
            size={34}
            className="mx-auto text-emerald-500"
          />

          <h3 className="mt-4 font-bold">
            New Task
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Create a new activity
          </p>

        </Card>

        <Card className="text-center hover:scale-105 transition">

          <Target
            size={34}
            className="mx-auto text-orange-500"
          />

          <h3 className="mt-4 font-bold">
            Goals
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Manage your priorities
          </p>

        </Card>

        <Card className="text-center hover:scale-105 transition">

          <TrendingUp
            size={34}
            className="mx-auto text-purple-500"
          />

          <h3 className="mt-4 font-bold">
            Analytics
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Productivity insights
          </p>

        </Card>

      </div>

    </DashboardLayout>
  );
}
