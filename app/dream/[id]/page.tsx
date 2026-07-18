"use client";

import Link from "next/link";

import { Card } from "@/components/ui/Card";
import Progress from "@/components/ui/Progress";
import Badge from "@/components/ui/Badge";

import { Dream } from "@/types/dream";
import { getDreamCategory } from "@/lib/dreamCategory";

import {
  CalendarDays,
  Wallet,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

interface Props {
  dream: Dream;
}

export default function DreamCard({
  dream,
}: Props) {
  const category = getDreamCategory(
    dream.category
  );

  const progress =
    dream.target <= 0
      ? 0
      : Math.min(
          (dream.current / dream.target) * 100,
          100
        );

  const remaining = Math.max(
    dream.target - dream.current,
    0
  );

  const completedChecklist =
    dream.checklist.filter(
      (item) => item.completed
    ).length;

  const totalChecklist =
    dream.checklist.length;

  const today = new Date();

  const deadline = new Date(
    dream.deadline
  );

  const daysLeft = Math.max(
    Math.ceil(
      (deadline.getTime() -
        today.getTime()) /
        (1000 * 60 * 60 * 24)
    ),
    0
  );

  let badgeColor:
    | "green"
    | "yellow"
    | "red" = "green";

  let badgeText = "On Track";

  if (progress < 30) {
    badgeColor = "red";
    badgeText = "Need Focus";
  } else if (progress < 70) {
    badgeColor = "yellow";
    badgeText = "In Progress";
  }

  return (
    <Link href={`/dreams/${dream.id}`}>
      <Card className="group overflow-hidden p-0 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <div
          className={`h-2 w-full bg-gradient-to-r ${category.gradient}`}
        />

        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.gradient} text-4xl shadow-lg`}
              >
                {category.icon}
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  {dream.title}
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  {dream.description}
                </p>
              </div>
            </div>

            <Badge color={badgeColor}>
              {badgeText}
            </Badge>
          </div>

          <div className="mt-8">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Progress
              </span>

              <span className="font-bold text-slate-700">
                {progress.toFixed(1)}%
              </span>
            </div>

            <Progress
              value={dream.current}
              max={dream.target}
              color={category.color}
            />
          </div>

          <div className="mt-6 rounded-2xl bg-slate-50 p-4">
            <div className="flex justify-between">
              <div>
                <p className="text-xs text-slate-500">
                  Current
                </p>

                <h3 className="font-bold">
                  Rp{" "}
                  {dream.current.toLocaleString(
                    "id-ID"
                  )}
                </h3>
              </div>

              <div className="text-right">
                <p className="text-xs text-slate-500">
                  Target
                </p>

                <h3 className="font-bold">
                  Rp{" "}
                  {dream.target.toLocaleString(
                    "id-ID"
                  )}
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-slate-50 p-3 text-center">
              <Wallet
                size={18}
                className="mx-auto mb-2 text-green-600"
              />

              <p className="text-xs text-slate-500">
                Remaining
              </p>

              <p className="mt-1 text-sm font-bold">
                Rp{" "}
                {remaining.toLocaleString(
                  "id-ID"
                )}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-3 text-center">
              <CalendarDays
                size={18}
                className="mx-auto mb-2 text-orange-500"
              />

              <p className="text-xs text-slate-500">
                Deadline
              </p>

              <p className="mt-1 text-sm font-bold">
                {daysLeft} Days
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-3 text-center">
              <CheckCircle2
                size={18}
                className="mx-auto mb-2 text-blue-600"
              />

              <p className="text-xs text-slate-500">
                Checklist
              </p>

              <p className="mt-1 text-sm font-bold">
                {completedChecklist}/{totalChecklist}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
            <span className="text-sm text-slate-500">
              Target Year
            </span>

            <div className="flex items-center gap-2">
              <TrendingUp
                size={16}
                className="text-slate-500"
              />

              <span className="font-semibold text-slate-700">
                {dream.targetYear}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}