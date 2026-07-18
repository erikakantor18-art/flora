"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/Button";

import {
  Dream,
  DreamCategory,
} from "@/types/dream";

import { DREAM_CATEGORIES } from "@/lib/dreamCategory";

interface Props {
  open: boolean;
  onClose: () => void;
  onSave: (dream: Omit<Dream, "id">) => void;
  initialData?: Dream | null;
}

const defaultDream: Omit<Dream, "id"> = {
  title: "",
  emoji: "🎯",
  description: "",
  category: "Australia",

  current: 0,
  target: 0,

  deadline: "",

  targetYear: new Date().getFullYear(),

  status: "planning",

  budget: {
    target: 0,
    saved: 0,
  },

  checklist: [],

  timeline: [],

  notes: "",

  gallery: [],

  coverImage: "",
};

export default function DreamModal({
  open,
  onClose,
  onSave,
  initialData,
}: Props) {
  const [form, setForm] =
    useState<Omit<Dream, "id">>(defaultDream);

  useEffect(() => {
    if (initialData) {
      const { id, ...rest } = initialData;
      setForm(rest);
    } else {
      setForm(defaultDream);
    }
  }, [initialData, open]);

  if (!open) return null;

  function handleChange(
    key: keyof Omit<Dream, "id">,
    value: string | number
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function handleSubmit() {
    onSave(form);
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-8">

          <div className="mb-8">

            <h2 className="text-3xl font-bold">
              {initialData
                ? "Edit Dream"
                : "Create New Dream"}
            </h2>

            <p className="mt-2 text-slate-500">
              Add a new goal and start tracking it.
            </p>

          </div>

          <div className="space-y-6">

            {/* Dream Name */}

            <div>

              <label className="mb-2 block text-sm font-semibold">
                Dream Name
              </label>

              <input
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
                placeholder="Australia Working Holiday"
                value={form.title}
                onChange={(e) =>
                  handleChange(
                    "title",
                    e.target.value
                  )
                }
              />

            </div>

            {/* Description */}

            <div>

              <label className="mb-2 block text-sm font-semibold">
                Description
              </label>

              <textarea
                rows={4}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 resize-none"
                placeholder="Describe your dream..."
                value={form.description}
                onChange={(e) =>
                  handleChange(
                    "description",
                    e.target.value
                  )
                }
              />

            </div>

            {/* Category */}

            <div>

              <label className="mb-2 block text-sm font-semibold">
                Category
              </label>

              <select
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
                value={form.category}
                onChange={(e) =>
                  handleChange(
                    "category",
                    e.target.value as DreamCategory
                  )
                }
              >
                {Object.entries(
                  DREAM_CATEGORIES
                ).map(([key, item]) => (
                  <option
                    key={key}
                    value={key}
                  >
                    {item.icon} {item.label}
                  </option>
                ))}
              </select>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Target Saving
                </label>

                <input
                  type="number"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                  value={form.target}
                  placeholder="80000000"
                  onChange={(e) =>
                    handleChange(
                      "target",
                      Number(e.target.value)
                    )
                  }
                />

              </div>

              <div>

                <label className="mb-2 block text-sm font-semibold">
                  Current Saving
                </label>

                <input
                  type="number"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                  value={form.current}
                  placeholder="2500000"
                  onChange={(e) =>
                    handleChange(
                      "current",
                      Number(e.target.value)
                    )
                  }
                />

              </div>

            </div>

            <div>

              <label className="mb-2 block text-sm font-semibold">
                Target Date
              </label>

              <input
                type="date"
                className="w-full rounded-xl border border-slate-300 px-4 py-3"
                value={form.deadline}
                onChange={(e) =>
                  handleChange(
                    "deadline",
                    e.target.value
                  )
                }
              />

            </div>

          </div>

          <div className="mt-8 flex justify-end gap-3 border-t pt-6">

            <Button
              variant="secondary"
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              variant="primary"
              onClick={handleSubmit}
            >
              💾 Save Dream
            </Button>

          </div>

        </div>
      </div>
    </div>
  );
}