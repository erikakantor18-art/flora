"use client";

import Badge from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

const data = [
  { day: "Mon", amount: 450000 },
  { day: "Tue", amount: 700000 },
  { day: "Wed", amount: 550000 },
  { day: "Thu", amount: 900000 },
  { day: "Fri", amount: 650000 },
  { day: "Sat", amount: 800000 },
  { day: "Sun", amount: 600000 },
];

const max = Math.max(...data.map((d) => d.amount));

export default function ExpenseChart() {
  return (
    <Card className="h-full">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-500">
            Total Expense
          </p>

          <h2 className="mt-1 text-2xl font-bold lg:text-3xl">
            Rp 4.650.000
          </h2>
        </div>

        <Badge color="blue">
          Last 7 Days
        </Badge>
      </div>

      <div className="mt-8 flex h-56 items-end gap-2 sm:gap-4 lg:h-72">
        {data.map((item) => (
          <div
            key={item.day}
            className="group flex flex-1 flex-col items-center"
          >
            <div className="mb-2 text-[10px] font-medium text-slate-400 opacity-0 transition group-hover:opacity-100 sm:text-xs">
              {(item.amount / 1000).toFixed(0)}K
            </div>

            <div
              className="w-full rounded-t-2xl bg-gradient-to-t from-emerald-600 via-emerald-500 to-green-300 transition-all duration-300 group-hover:scale-105"
              style={{
                height: `${(item.amount / max) * 100}%`,
              }}
            />

            <span className="mt-3 text-xs font-medium text-slate-500 sm:text-sm">
              {item.day}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-100 pt-5 sm:grid-cols-4">
        <Info title="Highest" value="Thu" />

        <Info title="Average" value="Rp664K" />

        <Info title="Lowest" value="Mon" />

        <Info title="Status" value="Normal" />
      </div>
    </Card>
  );
}

function Info({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs text-slate-500">
        {title}
      </p>

      <p className="mt-1 font-semibold text-slate-900">
        {value}
      </p>
    </div>
  );
}