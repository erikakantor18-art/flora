"use client";

import Card from "@/components/ui/Card";

import usePlanner from "@/hooks/usePlanner";

export default function PlannerToday() {

  const { tasks } =
    usePlanner();

  return (

    <Card>

      <h2 className="text-2xl font-bold">

        📅 Today

      </h2>

      <div className="mt-6 space-y-4">

        {tasks.length === 0 ? (

          <p className="text-slate-500">

            No activity today.

          </p>

        ) : (

          tasks.map((task)=>(

            <div
              key={task.id}
              className={`rounded-xl p-4 ${
                task.completed
                  ? "bg-green-100 line-through text-slate-500"
                  : "bg-slate-100"
              }`}
            >

              <p className="font-semibold">

                {task.activity}

              </p>

              <p className="text-sm">

                {task.time}

              </p>

            </div>

          ))

        )}

      </div>

    </Card>

  );

}