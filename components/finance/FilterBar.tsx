"use client";

import { Search, SlidersHorizontal } from "lucide-react";

import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function FilterBar() {
  return (
    <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-4 lg:grid-cols-12">
        {/* Search */}
        <div className="relative lg:col-span-5">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <Input
            placeholder="Search transaction..."
            className="pl-11"
          />
        </div>

        {/* Category */}
        <div className="lg:col-span-3">
          <select className="h-11 w-full rounded-2xl border border-slate-300 bg-white px-4 outline-none transition focus:border-emerald-500">
            <option>All Categories</option>
            <option>Food</option>
            <option>Transportation</option>
            <option>Shopping</option>
            <option>Entertainment</option>
            <option>Salary</option>
            <option>Investment</option>
            <option>Other</option>
          </select>
        </div>

        {/* Month */}
        <div className="lg:col-span-2">
          <select className="h-11 w-full rounded-2xl border border-slate-300 bg-white px-4 outline-none transition focus:border-emerald-500">
            <option>July 2026</option>
            <option>June 2026</option>
            <option>May 2026</option>
            <option>April 2026</option>
          </select>
        </div>

        {/* Filter */}
        <div className="lg:col-span-2">
          <Button
            variant="outline"
            fullWidth
          >
            <SlidersHorizontal size={18} />

            Filter
          </Button>
        </div>
      </div>
    </div>
  );
}