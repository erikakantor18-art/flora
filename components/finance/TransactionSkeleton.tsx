"use client";

export default function TransactionSkeleton() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm animate-pulse">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-slate-200" />

          <div className="space-y-2">
            <div className="h-4 w-40 rounded bg-slate-200" />
            <div className="h-3 w-24 rounded bg-slate-100" />
          </div>
        </div>

        <div className="space-y-2 text-right">
          <div className="ml-auto h-4 w-20 rounded bg-slate-200" />
          <div className="ml-auto h-3 w-14 rounded bg-slate-100" />
        </div>
      </div>
    </div>
  );
}