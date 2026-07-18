"use client";

import { Sparkles, Quote } from "lucide-react";

import { Card } from "@/components/ui/Card";

const quotes = [
  {
    text: "Small progress is still progress.",
    author: "Flora",
  },
  {
    text: "Your future is created by what you do today.",
    author: "Anonymous",
  },
  {
    text: "Discipline beats motivation every time.",
    author: "Jim Rohn",
  },
  {
    text: "Dream big. Start small. Stay consistent.",
    author: "Flora",
  },
];

export default function DailyInspiration() {
  const today =
    new Date().getDate() % quotes.length;

  const quote = quotes[today];

  return (
    <Card className="relative h-full overflow-hidden">
      <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-emerald-100 blur-3xl opacity-60" />

      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-400 text-white shadow-lg">
            <Sparkles size={22} />
          </div>

          <div>
            <h3 className="text-lg font-bold">
              Daily Inspiration
            </h3>

            <p className="text-sm text-slate-500">
              Motivation for today
            </p>
          </div>
        </div>

        <div className="mt-8 rounded-3xl bg-gradient-to-br from-emerald-50 to-white p-6">
          <Quote
            size={34}
            className="mb-4 text-emerald-500"
          />

          <p className="text-lg font-medium leading-8 text-slate-700">
            "{quote.text}"
          </p>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-sm font-semibold text-emerald-600">
              — {quote.author}
            </span>

            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              Today's Quote
            </span>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
          <p className="text-sm text-slate-600">
            💡 Keep building your dream little by little.
            Consistency is more powerful than intensity.
          </p>
        </div>
      </div>
    </Card>
  );
}