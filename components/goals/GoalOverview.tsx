"use client";

import Card from "@/components/ui/Card";

import {
  Target,
  Trophy,
  TrendingUp,
} from "lucide-react";

type Goal = {
  current: number;
  target: number;
};

type Props = {
  goals: Goal[];
};

export default function GoalOverview({
  goals,
}: Props) {

  const totalTarget =
    goals.reduce(
      (t, g) => t + g.target,
      0
    );

  const totalCurrent =
    goals.reduce(
      (t, g) => t + g.current,
      0
    );

  const progress =
    totalTarget === 0
      ? 0
      : Math.round(
          (totalCurrent /
            totalTarget) *
            100
        );

  return (

    <Card>

      <div className="flex items-center justify-between">

        <div>

          <p className="text-slate-500">

            Overall Goal

          </p>

          <h2 className="mt-2 text-4xl font-black">

            {progress}%

          </h2>

        </div>

        <div className="rounded-3xl bg-green-100 p-5">

          <Target
            size={36}
            className="text-green-600"
          />

        </div>

      </div>

      <div className="mt-8 h-4 overflow-hidden rounded-full bg-slate-200">

        <div
          className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all duration-700"
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      <div className="mt-8 grid grid-cols-3 gap-4">

        <div className="rounded-2xl bg-slate-50 p-4">

          <Target
            className="text-blue-600"
            size={22}
          />

          <p className="mt-3 text-sm text-slate-500">

            Goals

          </p>

          <h3 className="text-xl font-bold">

            {goals.length}

          </h3>

        </div>

        <div className="rounded-2xl bg-slate-50 p-4">

          <TrendingUp
            className="text-green-600"
            size={22}
          />

          <p className="mt-3 text-sm text-slate-500">

            Saved

          </p>

          <h3 className="text-xl font-bold">

            Rp {totalCurrent.toLocaleString("id-ID")}

          </h3>

        </div>

        <div className="rounded-2xl bg-slate-50 p-4">

          <Trophy
            className="text-yellow-500"
            size={22}
          />

          <p className="mt-3 text-sm text-slate-500">

            Target

          </p>

          <h3 className="text-xl font-bold">

            Rp {totalTarget.toLocaleString("id-ID")}

          </h3>

        </div>

      </div>

    </Card>

  );

}