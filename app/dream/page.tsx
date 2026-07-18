"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import DreamCard from "@/components/dream/DreamCard";
import { useDream } from "@/context/DreamContext";

export default function DreamPage() {
  const { dreams } = useDream();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");

  const filteredDreams = useMemo(() => {
    return dreams.filter((dream) => {
      const matchSearch =
        dream.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        dream.description
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchStatus =
        status === "all"
          ? true
          : dream.status === status;

      return matchSearch && matchStatus;
    });
  }, [dreams, search, status]);

  const planning = dreams.filter(
    (d) => d.status === "planning"
  ).length;

  const inProgress = dreams.filter(
    (d) => d.status === "in-progress"
  ).length;

  const completed = dreams.filter(
    (d) => d.status === "completed"
  ).length;

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            🌿 Dream Vault
          </h1>

          <p className="mt-2 text-slate-500">
            Turn your dreams into achievable goals.
          </p>
        </div>

        <Link
          href="/dream/new"
          className="rounded-2xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          + New Dream
        </Link>

      </div>

      <div className="grid gap-4 md:grid-cols-4">

        <StatCard
          title="Total Dreams"
          value={dreams.length}
        />

        <StatCard
          title="Planning"
          value={planning}
        />

        <StatCard
          title="In Progress"
          value={inProgress}
        />

        <StatCard
          title="Completed"
          value={completed}
        />

      </div>

      <div className="flex flex-col gap-4 md:flex-row">

        <input
          placeholder="Search dream..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="flex-1 rounded-2xl border border-slate-300 px-5 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <select
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
          className="rounded-2xl border border-slate-300 px-5 py-3 outline-none focus:ring-2 focus:ring-emerald-500"
        >
          <option value="all">
            All Status
          </option>

          <option value="planning">
            Planning
          </option>

          <option value="in-progress">
            In Progress
          </option>

          <option value="completed">
            Completed
          </option>

        </select>

      </div>

      {filteredDreams.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 py-20 text-center text-slate-500">
          No dreams found.
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {filteredDreams.map((dream) => (
            <DreamCard
              key={dream.id}
              dream={dream}
            />
          ))}

        </div>
      )}

    </div>
  );
}

interface StatCardProps {
  title: string;
  value: number;
}

function StatCard({
  title,
  value,
}: StatCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-2 text-3xl font-bold">
        {value}
      </h2>

    </div>
  );
}