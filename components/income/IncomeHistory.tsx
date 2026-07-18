"use client";

import { useMemo, useState } from "react";

import { Card } from "@/components/ui/Card";
import { formatCurrency } from "@/utils";

import { Search } from "lucide-react";

type Income = {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
};

type Props = {
  income: Income[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
};

const colors: Record<string, string> = {
  Freelance: "bg-green-100 text-green-700",
  Bonus: "bg-blue-100 text-blue-700",
  THR: "bg-yellow-100 text-yellow-700",
  Business: "bg-purple-100 text-purple-700",
  Investment: "bg-pink-100 text-pink-700",
  Cashback: "bg-orange-100 text-orange-700",
  Gift: "bg-cyan-100 text-cyan-700",
  Other: "bg-slate-100 text-slate-700",
};

export default function IncomeHistory({
  income,
  onEdit,
  onDelete,
}: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState("All");

  const filtered = useMemo(() => {
    return income.filter((item) => {
      const matchTitle = item.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchCategory =
        category === "All" ||
        item.category === category;

      return matchTitle && matchCategory;
    });
  }, [income, search, category]);

  const total = filtered.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  return (
    <Card>
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-black">
            Income History
          </h2>

          <p className="mt-2 text-slate-500">
            {filtered.length} transaction(s)
          </p>
        </div>

        <div className="text-right">
          <p className="text-sm text-slate-500">
            Total Income
          </p>

          <h2 className="text-3xl font-black text-green-600">
            {formatCurrency(total)}
          </h2>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-4 text-slate-400"
          />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search income..."
            className="w-full rounded-2xl border border-slate-200 py-3 pl-11 pr-4 outline-none focus:border-green-500"
          />
        </div>

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
          className="rounded-2xl border border-slate-200 px-5 py-3 outline-none focus:border-green-500"
        >
          <option>All</option>

          {Object.keys(colors).map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
      </div>

      {filtered.length === 0 ? (
        <div className="py-24 text-center">
          <p className="text-7xl">💵</p>

          <h2 className="mt-6 text-3xl font-black">
            No Income Found
          </h2>

          <p className="mt-3 text-slate-500">
            Try another keyword or add new
            income.
          </p>
        </div>
      ) : (
        <div className="mt-8 space-y-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl border border-slate-200 p-6 transition hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-slate-500">
                    {item.date}
                  </p>

                  <span
                    className={`mt-3 inline-block rounded-full px-3 py-1 text-sm ${colors[item.category]}`}
                  >
                    {item.category}
                  </span>
                </div>

                <h2 className="text-3xl font-black text-green-600">
                  {formatCurrency(item.amount)}
                </h2>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() =>
                    onEdit(item.id)
                  }
                  className="rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
                >
                  ✏ Edit
                </button>

                <button
                  onClick={() => {
                    if (
                      window.confirm(
                        "Delete this income?"
                      )
                    ) {
                      onDelete(item.id);
                    }
                  }}
                  className="rounded-xl bg-red-600 px-5 py-2 text-white hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}