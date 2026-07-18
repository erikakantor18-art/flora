"use client";

import { Pencil, Trash2 } from "lucide-react";
import { Transaction } from "@/types/finance";

interface Props {
  transactions: Transaction[];
  onEdit: (item: Transaction) => void;
  onDelete: (id: string) => void;
}

export default function TransactionTable({
  transactions,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="overflow-hidden rounded-3xl border bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-slate-100">
          <tr>
            <th className="px-6 py-4 text-left">
              Title
            </th>

            <th className="px-6 py-4 text-left">
              Category
            </th>

            <th className="px-6 py-4 text-left">
              Date
            </th>

            <th className="px-6 py-4 text-right">
              Amount
            </th>

            <th className="px-6 py-4 text-center">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {transactions.length === 0 && (
            <tr>
              <td
                colSpan={5}
                className="py-20 text-center text-gray-400"
              >
                No Transaction
              </td>
            </tr>
          )}

          {transactions.map((item) => (
            <tr
              key={item.id}
              className="border-t transition hover:bg-slate-50"
            >
              <td className="px-6 py-5">
                <div className="font-semibold">
                  {item.title}
                </div>

                <div className="text-sm capitalize text-gray-500">
                  {item.type}
                </div>
              </td>

              <td className="px-6 py-5">
                {item.category}
              </td>

              <td className="px-6 py-5">
                {new Date(
                  item.transaction_date
                ).toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </td>

              <td
                className={`px-6 py-5 text-right font-bold ${
                  item.type === "income"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {item.type === "income"
                  ? "+"
                  : "-"}

                {" "}Rp{" "}

                {item.amount.toLocaleString("id-ID")}
              </td>

              <td className="px-6 py-5">
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => onEdit(item)}
                    className="rounded-xl bg-blue-100 p-2 hover:bg-blue-200"
                  >
                    <Pencil size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(item.id)}
                    className="rounded-xl bg-red-100 p-2 hover:bg-red-200"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}