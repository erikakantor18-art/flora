"use client";

import { Dream } from "@/types/dream";
import DreamCard from "./DreamCard";

interface Props {
  dreams: Dream[];
  onSelect?: (dream: Dream) => void;
}

export default function DreamGrid({
  dreams,
  onSelect,
}: Props) {
  if (dreams.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center">
        <div className="text-6xl mb-4">🌱</div>

        <h2 className="text-2xl font-bold">
          No Dreams Yet
        </h2>

        <p className="mt-2 text-slate-500">
          Start adding your first dream and make it happen.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {dreams.map((dream) => (
        <DreamCard
          key={dream.id}
          dream={dream}
        />
      ))}
    </div>
  );
}