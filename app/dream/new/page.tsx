"use client";

import { useRouter } from "next/navigation";

import DreamForm from "@/components/dream/DreamForm";
import { useDream } from "@/context/DreamContext";

import { Dream } from "@/types/dream";

export default function NewDreamPage() {
  const router = useRouter();

  const { addDream } = useDream();

  function handleSubmit(data: {
    title: string;
    description: string;
    category: Dream["category"];
    target: number;
    deadline: string;
  }) {
    const dream: Dream = {
      id: crypto.randomUUID(),

      title: data.title,

      emoji: "✨",

      description: data.description,

      category: data.category,

      current: 0,

      target: data.target,

      deadline: data.deadline,

      targetYear: new Date(
        data.deadline
      ).getFullYear(),

      status: "planning",

      budget: {
        target: data.target,
        saved: 0,
      },

      checklist: [],

      timeline: [],

      notes: "",

      gallery: [],
    };

    addDream(dream);

    router.push("/dream");
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          ✨ Create New Dream
        </h1>

        <p className="mt-2 text-slate-500">
          Start building your next achievement.
        </p>

      </div>

      <DreamForm
        onSubmit={handleSubmit}
      />

    </div>
  );
}