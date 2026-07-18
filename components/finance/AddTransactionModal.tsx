"use client";

import { useState } from "react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

import { useAuthContext } from "@/context/AuthContext";
import {
  CreateTransaction,
  TransactionCategory,
  TransactionType,
} from "@/types/finance";

interface AddTransactionModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (
    transaction: CreateTransaction
  ) => Promise<void>;
}

export default function AddTransactionModal({
  open,
  onClose,
  onSave,
}: AddTransactionModalProps) {
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const [category, setCategory] =
    useState<TransactionCategory>("Food");

  const [type, setType] =
    useState<TransactionType>("expense");

  const [date, setDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const [notes, setNotes] = useState("");

  if (!open) return null;

  async function handleSave() {
    if (!user) return;

    if (!title.trim()) return;

    if (!amount) return;

    await onSave({
      user_id: user.id,
      title,
      amount: Number(amount),
      type,
      category,
      notes,
      transaction_date: date,
    });

    setTitle("");
    setAmount("");
    setCategory("Food");
    setType("expense");
    setNotes("");
    setDate(new Date().toISOString().split("T")[0]);

    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">
            Add Transaction
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mt-6 space-y-4">
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <Input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value)
            }
          />

          <select
            value={type}
            onChange={(e) =>
              setType(
                e.target.value as TransactionType
              )
            }
            className="h-11 w-full rounded-2xl border border-slate-300 px-4"
          >
            <option value="expense">
              Expense
            </option>

            <option value="income">
              Income
            </option>
          </select>

          <select
            value={category}
            onChange={(e) =>
              setCategory(
                e.target
                  .value as TransactionCategory
              )
            }
            className="h-11 w-full rounded-2xl border border-slate-300 px-4"
          >
            <option value="Food">Food</option>
            <option value="Transportation">Transportation</option>
            <option value="Shopping">Shopping</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Salary">Salary</option>
            <option value="Bonus">Bonus</option>
            <option value="Investment">Investment</option>
            <option value="Health">Health</option>
            <option value="Education">Education</option>
            <option value="Bills">Bills</option>
            <option value="Travel">Travel</option>
            <option value="Other">Other</option>
          </select>

          <Input
            type="date"
            value={date}
            onChange={(e) =>
              setDate(e.target.value)
            }
          />

          <textarea
            rows={4}
            value={notes}
            onChange={(e) =>
              setNotes(e.target.value)
            }
            placeholder="Notes..."
            className="w-full rounded-2xl border border-slate-300 p-4"
          />

          <div className="flex gap-3">
            <Button
              variant="outline"
              fullWidth
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              fullWidth
              onClick={handleSave}
            >
              Save Transaction
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}