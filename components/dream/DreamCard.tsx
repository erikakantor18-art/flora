"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Progress from "@/components/ui/Progress";

import { deleteDream } from "@/lib/dreamStorage";
import { getDreamCategory } from "@/lib/dreamCategory";

import { Dream } from "@/types/dream";

interface Props {
  dream: Dream;
}

export default function DreamCard({
  dream,
}: Props) {
  const router = useRouter();

  const category = getDreamCategory(
    dream.category
  );

  const percent = Math.min(
    (dream.current / dream.target) * 100,
    100
  );

  function formatCurrency(
    value: number
  ) {
    return new Intl.NumberFormat(
      "id-ID",
      {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
      }
    ).format(value);
  }

  function deleteItem() {
    const ok = window.confirm(
      `Delete "${dream.title}"?`
    );

    if (!ok) return;

    deleteDream(dream.id);

    router.refresh();
  }

  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="space-y-5">

        <div className="flex items-start justify-between">

          <div>

            <div className="text-4xl">
              {dream.emoji}
            </div>

            <h2 className="mt-2 text-xl font-bold">
              {dream.title}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {dream.description}
            </p>

          </div>

          <Badge color={category.color}>
            {category.icon} {category.label}
          </Badge>

        </div>

        <Progress value={percent} />

        <div className="space-y-2 text-sm">

          <div className="flex justify-between">
            <span>Saved</span>

            <strong>
              {formatCurrency(
                dream.current
              )}
            </strong>
          </div>

          <div className="flex justify-between">
            <span>Target</span>

            <strong>
              {formatCurrency(
                dream.target
              )}
            </strong>
          </div>

          <div className="flex justify-between">
            <span>Progress</span>

            <strong>
              {percent.toFixed(0)}%
            </strong>
          </div>

        </div>

        <div className="grid grid-cols-3 gap-3">

          <Link
            href={`/dream/${dream.id}`}
            className="rounded-xl border border-slate-300 py-2 text-center text-sm font-semibold transition hover:bg-slate-100"
          >
            View
          </Link>

          <Link
            href={`/dream/edit/${dream.id}`}
            className="rounded-xl bg-blue-600 py-2 text-center text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Edit
          </Link>

          <button
            onClick={deleteItem}
            className="rounded-xl bg-red-600 py-2 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Delete
          </button>

        </div>

      </div>

    </Card>
  );
}