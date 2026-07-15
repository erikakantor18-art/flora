"use client";

import Card from "@/components/ui/Card";
import Progress from "@/components/ui/Progress";
import { formatCurrency } from "@/utils";

import {
  Calendar,
  Target,
  PiggyBank,
  Trophy,
} from "lucide-react";

type Props = {
  title: string;
  current: number;
  target: number;
  deadline: string;
  onAddSaving?: () => void;
  onDelete?: () => void;
};

export default function GoalCard({
  title,
  current,
  target,
  deadline,
  onAddSaving,
  onDelete,
}: Props) {

  const percentage = Math.min(
    Math.round((current / target) * 100),
    100
  );

  const remaining = Math.max(
    target - current,
    0
  );

  const today = new Date();

  const end = new Date(deadline);

  const daysLeft = Math.ceil(
    (end.getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24)
  );

  const status =
    percentage >= 100
      ? "Completed"
      : percentage >= 70
      ? "On Track"
      : percentage >= 40
      ? "Progressing"
      : "Just Started";

  const statusColor =
    percentage >= 100
      ? "bg-green-100 text-green-700"
      : percentage >= 70
      ? "bg-blue-100 text-blue-700"
      : percentage >= 40
      ? "bg-yellow-100 text-yellow-700"
      : "bg-slate-100 text-slate-700";

  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-2xl font-black">

            {title}

          </h2>

          <div className="mt-2 flex items-center gap-2 text-slate-500">

            <Calendar size={16} />

            <span>

              {deadline}

            </span>

          </div>

        </div>

        <span
          className={`rounded-full px-4 py-2 text-sm font-bold ${statusColor}`}
        >
          {status}
        </span>

      </div>

      <div className="mt-8 flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">

            Progress

          </p>

          <h2 className="text-5xl font-black text-green-600">

            {percentage}%

          </h2>

        </div>

        <div className="rounded-3xl bg-green-100 p-5">

          <Target
            size={36}
            className="text-green-600"
          />

        </div>

      </div>

      <div className="mt-6">

        <Progress value={percentage} />

      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">

        <div className="rounded-2xl border border-slate-200 p-5">

          <div className="flex items-center gap-2">

            <PiggyBank
              size={20}
              className="text-green-600"
            />

            <span className="text-slate-500">

              Current

            </span>

          </div>

          <h3 className="mt-3 text-2xl font-black text-green-600">

            {formatCurrency(current)}

          </h3>

        </div>

        <div className="rounded-2xl border border-slate-200 p-5">

          <div className="flex items-center gap-2">

            <Trophy
              size={20}
              className="text-yellow-500"
            />

            <span className="text-slate-500">

              Target

            </span>

          </div>

          <h3 className="mt-3 text-2xl font-black">

            {formatCurrency(target)}

          </h3>

        </div>

      </div>

      <div className="mt-6 rounded-2xl bg-slate-50 p-5">

        <div className="flex items-center justify-between">

          <span className="text-slate-500">

            Remaining

          </span>

          <span className="font-bold">

            {formatCurrency(remaining)}

          </span>

        </div>

        <div className="mt-3 flex items-center justify-between">

          <span className="text-slate-500">

            Days Left

          </span>

          <span className="font-bold">

            {daysLeft > 0
              ? `${daysLeft} Days`
              : "Expired"}

          </span>

        </div>

      </div>

      <div className="mt-6 flex gap-3">

        <button
          onClick={onAddSaving}
          className="flex-1 rounded-2xl bg-green-600 py-3 font-bold text-white transition hover:bg-green-700"
        >
          + Add Saving
        </button>

        <button
          onClick={onDelete}
          className="rounded-2xl bg-red-500 px-6 font-bold text-white transition hover:bg-red-600"
        >
          Delete
        </button>

      </div>

    </Card>
  );
}