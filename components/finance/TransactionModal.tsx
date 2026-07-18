"use client";

import { X } from "lucide-react";
import {
  CreateTransaction,
  TransactionCategory,
  TransactionType,
} from "@/types/finance";

interface Props {
  open: boolean;
  editId: number | null;

  form: CreateTransaction;
  categories: string[];

  setForm: React.Dispatch<
    React.SetStateAction<CreateTransaction>
  >;

  onClose: () => void;
  onSubmit: () => void;
}

export default function TransactionModal({
  open,
  editId,
  form,
  categories,
  setForm,
  onClose,
  onSubmit,
}: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-xl rounded-3xl bg-white p-8 shadow-xl">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            {editId ? "Edit Transaction" : "New Transaction"}
          </h2>

          <button onClick={onClose}>
            <X />
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <label className="mb-2 block font-medium">
              Title
            </label>

            <input
              value={form.title}
              onChange={(e) =>
                setForm({
                  ...form,
                  title: e.target.value,
                })
              }
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="mb-2 block">
                Amount
              </label>

              <input
                type="number"
                value={form.amount}
                onChange={(e) =>
                  setForm({
                    ...form,
                    amount: Number(e.target.value),
                  })
                }
                className="w-full rounded-xl border px-4 py-3"
              />
            </div>

            <div>
              <label className="mb-2 block">
                Date
              </label>

              <input
                type="date"
                value={form.transaction_date}
                onChange={(e) =>
                  setForm({
                    ...form,
                    transaction_date: e.target.value,
                  })
                }
                className="w-full rounded-xl border px-4 py-3"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="mb-2 block">
                Category
              </label>

              <select
                value={form.category}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: e.target.value as TransactionCategory,
                  })
                }
                className="w-full rounded-xl border px-4 py-3"
              >
                {categories.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block">
                Type
              </label>

              <select
                value={form.type}
                onChange={(e) =>
                  setForm({
                    ...form,
                    type: e.target.value as TransactionType,
                  })
                }
                className="w-full rounded-xl border px-4 py-3"
              >
                <option value="income">
                  Income
                </option>

                <option value="expense">
                  Expense
                </option>
              </select>
            </div>
          </div>

          <button
            onClick={onSubmit}
            className="mt-5 w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:opacity-90"
          >
            {editId
              ? "Update Transaction"
              : "Save Transaction"}
          </button>
        </div>
      </div>
    </div>
  );
}