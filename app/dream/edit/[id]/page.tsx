"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import DreamForm from "@/components/dream/DreamForm";
import { useDream } from "@/context/DreamContext";

import { Dream } from "@/types/dream";

export default function EditDreamPage() {
  const router = useRouter();
  const params = useParams();

  const { getDream, updateDream } = useDream();

  const [dream, setDream] = useState<Dream | null>(null);

  useEffect(() => {
    const id = Array.isArray(params.id)
      ? params.id[0]
      : params.id;

    if (!id) return;

    const found = getDream(id);

    if (!found) {
      router.replace("/dream");
      return;
    }

    setDream(found);
  }, [params.id, getDream, router]);

  if (!dream) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-slate-500">
          Loading dream...
        </p>
      </div>
    );
  }

  function handleSubmit(data: {
  title: string;
  description: string;
  category: Dream["category"];
  target: number;
  deadline: string;
}) {
  if (!dream) return;

  updateDream({
    ...dream,
    title: data.title,
    description: data.description,
    category: data.category,
    target: data.target,
    deadline: data.deadline,
    targetYear: new Date(data.deadline).getFullYear(),
    budget: {
      ...dream.budget,
      target: data.target,
    },
  });

  router.push("/dream");
}

  return (
    <div className="mx-auto max-w-5xl space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          ✏️ Edit Dream
        </h1>

        <p className="mt-2 text-slate-500">
          Update your dream information.
        </p>

      </div>

      <DreamForm
        defaultValues={{
          title: dream.title,
          description: dream.description,
          category: dream.category,
          target: dream.target,
          deadline: dream.deadline,
        }}
        onSubmit={handleSubmit}
      />

    </div>
  );
}