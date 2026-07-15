"use client";

import {
  Target,
  Trophy,
  Wallet,
  TrendingUp,
} from "lucide-react";

import Card from "@/components/ui/Card";
import { Goal } from "@/types";
import { formatCurrency } from "@/utils";

type Props = {
  goals: Goal[];
};

export default function GoalSummary({
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

  const completed =
    goals.filter(
      (g) => g.current >= g.target
    ).length;

  const progress =
    totalTarget === 0
      ? 0
      : Math.round(
          (totalCurrent /
            totalTarget) *
            100
        );

  return (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <Card>

        <div className="flex items-center justify-between">

          <div>

            <p className="text-slate-500">

              Total Goals

            </p>

            <h2 className="mt-2 text-4xl font-black">

              {goals.length}

            </h2>

          </div>

          <div className="rounded-2xl bg-green-100 p-4">

            <Target
              size={30}
              className="text-green-600"
            />

          </div>

        </div>

      </Card>

      <Card>

        <div className="flex items-center justify-between">

          <div>

            <p className="text-slate-500">

              Saved

            </p>

            <h2 className="mt-2 text-2xl font-black">

              {formatCurrency(totalCurrent)}

            </h2>

          </div>

          <div className="rounded-2xl bg-blue-100 p-4">

            <Wallet
              size={30}
              className="text-blue-600"
            />

          </div>

        </div>

      </Card>

      <Card>

        <div className="flex items-center justify-between">

          <div>

            <p className="text-slate-500">

              Target

            </p>

            <h2 className="mt-2 text-2xl font-black">

              {formatCurrency(totalTarget)}

            </h2>

          </div>

          <div className="rounded-2xl bg-yellow-100 p-4">

            <TrendingUp
              size={30}
              className="text-yellow-600"
            />

          </div>

        </div>

      </Card>

      <Card>

        <div className="flex items-center justify-between">

          <div>

            <p className="text-slate-500">

              Completed

            </p>

            <h2 className="mt-2 text-4xl font-black">

              {completed}

            </h2>

            <p className="mt-2 text-green-600 font-semibold">

              {progress}% Overall

            </p>

          </div>

          <div className="rounded-2xl bg-purple-100 p-4">

            <Trophy
              size={30}
              className="text-purple-600"
            />

          </div>

        </div>

      </Card>

    </div>

  );

}