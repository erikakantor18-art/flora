"use client";

import { Button } from "@/components/ui/Button";

interface Props {
  hasFilter: boolean;
  onClearFilter: () => void;
  onCreateDream: () => void;
}

export default function DreamEmpty({
  hasFilter,
  onClearFilter,
  onCreateDream,
}: Props) {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-14 text-center shadow-sm">

      <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-5xl">
        💭
      </div>

      <h2 className="text-2xl font-bold text-slate-800">
        {hasFilter
          ? "No dreams found"
          : "Your Dream Vault is empty"}
      </h2>

      <p className="mx-auto mt-3 max-w-lg text-slate-500">
        {hasFilter
          ? "Try changing your search keyword or category filter."
          : "Start creating your first dream and watch your progress grow over time."}
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">

        {hasFilter && (
          <Button
            variant="secondary"
            onClick={onClearFilter}
          >
            Clear Filters
          </Button>
        )}

        <Button
          variant="primary"
          onClick={onCreateDream}
        >
          + Create Dream
        </Button>

      </div>

    </div>
  );
}