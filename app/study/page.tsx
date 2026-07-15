"use client";

import { useState } from "react";

import toast from "react-hot-toast";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

import Card from "@/components/ui/Card";
import Progress from "@/components/ui/Progress";
import Input from "@/components/ui/Input";

import StudyOverview from "@/components/dashboard/StudyOverview";

import useStudy from "@/hooks/useStudy";

import { Study } from "@/types";
import AuthGuard from "@/components/AuthGuard";

export default function StudyPage() {

  const {

    studies,

    loading,

    addStudy,

    updateStudy,

    deleteStudy,

  } = useStudy();

  const [title, setTitle] =
    useState("");

  const [targetHours, setTargetHours] =
    useState("");

  const totalHours =
    studies.reduce(
      (t, s) => t + s.hours,
      0
    );

  const totalTarget =
    studies.reduce(
      (t, s) => t + s.targetHours,
      0
    );

  const completed =
    studies.filter(
      (s) => s.hours >= s.targetHours
    ).length;

  const overall =
    totalTarget === 0
      ? 0
      : Math.round(
          (totalHours /
            totalTarget) *
            100
        );

  async function handleSave() {

    if (

      !title.trim() ||

      !targetHours

    ) {

      toast.error(
        "Semua field wajib diisi."
      );

      return;

    }

    const target =
      Number(targetHours);

    if (

      isNaN(target) ||

      target <= 0

    ) {

      toast.error(
        "Target jam harus lebih dari 0."
      );

      return;

    }

    const study: Study = {

      id: crypto.randomUUID(),

      title: title.trim(),

      hours: 0,

      targetHours: target,

      progress: 0,

      createdAt:
        new Date().toISOString(),

    };

    await addStudy(study);

    setTitle("");

    setTargetHours("");

  }

  async function handleAddHour(
    study: Study
  ) {

    await updateStudy({

      ...study,

      hours:
        study.hours + 1,

      progress: Math.round(

        ((study.hours + 1) /

          study.targetHours) *

          100

      ),

    });

  }

  async function handleDelete(
    id: string
  ) {

    const ok =
      window.confirm(
        "Delete this subject?"
      );

    if (!ok) return;

    await deleteStudy(id);

  }

  return (
    <AuthGuard>
        <main className="flex min-h-screen bg-slate-100">

          <Sidebar />

          <section className="flex-1 overflow-y-auto p-8">

            <Topbar />

            {/* HERO */}

            <div className="mt-8">

              <StudyOverview
                studies={studies}
              />

            </div>

            {/* SUMMARY */}

            <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

              <Card>

                <p className="text-slate-500">

                  Subjects

                </p>

                <h2 className="mt-2 text-4xl font-black">

                  {studies.length}

                </h2>

              </Card>

              <Card>

                <p className="text-slate-500">

                  Hours

                </p>

                <h2 className="mt-2 text-4xl font-black">

                  {totalHours}

                </h2>

              </Card>

              <Card>

                <p className="text-slate-500">

                  Completed

                </p>

                <h2 className="mt-2 text-4xl font-black">

                  {completed}

                </h2>

              </Card>

              <Card>

                <p className="text-slate-500">

                  Overall

                </p>

                <h2 className="mt-2 text-4xl font-black text-green-600">

                  {overall}%

                </h2>

              </Card>

            </div>

            {/* ADD SUBJECT */}

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

              <h1 className="text-4xl font-black">

                📚 Study Tracker

              </h1>

              <p className="mt-2 text-slate-500">

                Improve your skills every day.

              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">

                <Input
                  placeholder="Subject"
                  value={title}
                  onChange={(e) =>
                    setTitle(
                      e.target.value
                    )
                  }
                />

                <Input
                  type="number"
                  placeholder="Target Hours"
                  value={targetHours}
                  onChange={(e) =>
                    setTargetHours(
                      e.target.value
                    )
                  }
                />

              </div>

              <button
                disabled={loading}
                onClick={handleSave}
                className="mt-6 rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 disabled:opacity-50"
              >

                {loading
                  ? "Saving..."
                  : "+ Add Subject"}

              </button>

            </div>

            {/* SUBJECT LIST */}

            <div className="mt-8 grid gap-6 lg:grid-cols-2">

              {studies.length === 0 ? (

                <Card>

                  <div className="py-16 text-center">

                    <p className="text-7xl">

                      📚

                    </p>

                    <h2 className="mt-5 text-3xl font-black">

                      No Subject Yet

                    </h2>

                    <p className="mt-3 text-slate-500">

                      Add your first subject.

                    </p>

                  </div>

                </Card>

              ) : (

                studies.map((study) => (

                  <Card
                    key={study.id}
                  >

                    <div className="flex items-center justify-between">

                      <div>

                        <h2 className="text-2xl font-black">

                          {study.title}

                        </h2>

                        <p className="mt-1 text-slate-500">

                          {study.hours} / {study.targetHours} Hours

                        </p>

                      </div>

                      <h2 className="text-4xl font-black text-green-600">

                        {study.progress}%

                      </h2>

                    </div>

                    <div className="mt-6">

                      <Progress
                        value={study.progress}
                      />

                    </div>

                    <div className="mt-6 flex gap-3">

                      <button
                        onClick={() =>
                          handleAddHour(study)
                        }
                        className="flex-1 rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
                      >

                        +1 Hour

                      </button>

                      <button
                        onClick={() =>
                          handleDelete(
                            study.id
                          )
                        }
                        className="rounded-xl bg-red-500 px-5 text-white hover:bg-red-600"
                      >

                        Delete

                      </button>

                    </div>

                  </Card>

                ))

              )}

            </div>

          </section>

        </main>
    </AuthGuard>
  );

}