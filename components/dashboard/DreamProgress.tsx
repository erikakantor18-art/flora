"use client";

import { CheckCircle2, Circle, Plane } from "lucide-react";

import Badge from "@/components/ui/Badge";
import Progress from "@/components/ui/Progress";
import { Card } from "@/components/ui/Card";

const goals = [
  {
    title: "Passport",
    done: true,
  },
  {
    title: "IELTS",
    done: false,
  },
  {
    title: "Visa",
    done: false,
  },
  {
    title: "Flight Ticket",
    done: false,
  },
];

export default function DreamProgress() {
  return (
    <Card className="h-full">
      <div className="flex items-start justify-between">
        <div>
          <Badge>Dream Fun</Badge>

          <h2 className="mt-4 flex items-center gap-2 text-xl font-bold lg:text-2xl">
            <Plane
              size={22}
              className="text-emerald-600"
            />

            Australia 🇦🇺
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Target • 2029
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-100 px-3 py-2 text-center">
          <p className="text-lg font-bold text-emerald-600">
            72%
          </p>

          <p className="text-xs text-emerald-700">
            Complete
          </p>
        </div>
      </div>

      <div className="mt-6">
        <Progress
          value={72}
          showLabel
          size="lg"
        />
      </div>

      <div className="mt-8 space-y-4">
        {goals.map((goal) => (
          <GoalItem
            key={goal.title}
            {...goal}
          />
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-emerald-50 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">
          Next Milestone
        </p>

        <p className="mt-2 font-semibold text-slate-900">
          Complete your IELTS preparation.
        </p>
      </div>
    </Card>
  );
}

function GoalItem({
  title,
  done,
}: {
  title: string;
  done: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {done ? (
          <CheckCircle2
            size={20}
            className="text-emerald-600"
          />
        ) : (
          <Circle
            size={20}
            className="text-slate-300"
          />
        )}

        <span
          className={
            done
              ? "font-medium"
              : "text-slate-500"
          }
        >
          {title}
        </span>
      </div>

      <span
        className={`text-xs font-semibold ${
          done
            ? "text-emerald-600"
            : "text-slate-400"
        }`}
      >
        {done ? "Done" : "Pending"}
      </span>
    </div>
  );
}