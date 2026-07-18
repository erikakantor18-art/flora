"use client";

import { useState } from "react";

import { DreamCategory } from "@/types/dream";

interface Props {
  onSubmit: (data: {
    title: string;
    description: string;
    category: DreamCategory;
    target: number;
    deadline: string;
  }) => void;

  defaultValues?: {
    title: string;
    description: string;
    category: DreamCategory;
    target: number;
    deadline: string;
  };
}

const categories: DreamCategory[] = [
  "Australia",
  "Tablet",
  "House",
  "Car",
  "Travel",
  "Study",
  "Camera",
  "Wedding",
];

export default function DreamForm({
  onSubmit,
  defaultValues,
}: Props) {
  const [title, setTitle] = useState(
    defaultValues?.title ?? ""
  );

  const [description, setDescription] =
    useState(
      defaultValues?.description ?? ""
    );

  const [category, setCategory] =
    useState<DreamCategory>(
      defaultValues?.category ??
        "Australia"
    );

  const [target, setTarget] =
    useState(
      defaultValues?.target ?? 0
    );

  const [deadline, setDeadline] =
    useState(
      defaultValues?.deadline ?? ""
    );

  function submit() {
    if (
      !title ||
      !deadline ||
      target <= 0
    ) {
      alert(
        "Please complete all required fields."
      );
      return;
    }

    onSubmit({
      title,
      description,
      category,
      target,
      deadline,
    });
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

      <div className="grid gap-6">

        <div>

          <label className="mb-2 block text-sm font-semibold">
            Dream Title
          </label>

          <input
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
            className="w-full rounded-2xl border border-slate-300 px-5 py-3"
          />

        </div>

        <div>

          <label className="mb-2 block text-sm font-semibold">
            Description
          </label>

          <textarea
            rows={4}
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="w-full rounded-2xl border border-slate-300 px-5 py-3"
          />

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div>

            <label className="mb-2 block text-sm font-semibold">
              Category
            </label>

            <select
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target
                    .value as DreamCategory
                )
              }
              className="w-full rounded-2xl border border-slate-300 px-5 py-3"
            >
              {categories.map(
                (item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                )
              )}
            </select>

          </div>

          <div>

            <label className="mb-2 block text-sm font-semibold">
              Target Saving
            </label>

            <input
              type="number"
              value={target}
              onChange={(e) =>
                setTarget(
                  Number(
                    e.target.value
                  )
                )
              }
              className="w-full rounded-2xl border border-slate-300 px-5 py-3"
            />

          </div>

        </div>

        <div>

          <label className="mb-2 block text-sm font-semibold">
            Deadline
          </label>

          <input
            type="date"
            value={deadline}
            onChange={(e) =>
              setDeadline(
                e.target.value
              )
            }
            className="w-full rounded-2xl border border-slate-300 px-5 py-3"
          />

        </div>

        <button
          onClick={submit}
          className="rounded-2xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
        >
          Save Dream
        </button>

      </div>

    </div>
  );
}