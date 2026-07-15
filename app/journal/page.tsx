"use client";

import { useMemo, useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Progress from "@/components/ui/Progress";

import useJournal from "@/hooks/useJournal";

import { Journal } from "@/types";
import AuthGuard from "@/components/AuthGuard";

export default function JournalPage() {

  const {

    journals,

    loading,

    addJournal,

    deleteJournal,

  } = useJournal();

  const [mood, setMood] =
    useState("😊");

  const [note, setNote] =
    useState("");

  const moodStats =
    useMemo(() => {

      const result: Record<
        string,
        number
      > = {};

      journals.forEach((item) => {

        result[item.mood] =
          (result[item.mood] || 0) + 1;

      });

      return result;

    }, [journals]);

  const favoriteMood =
    Object.entries(moodStats).sort(
      (a, b) => b[1] - a[1]
    )[0]?.[0] ?? "😊";

  async function handleSave() {

    if (!note.trim()) return;

    const journal: Journal = {

      id: crypto.randomUUID(),

      mood,

      note: note.trim(),

      date:
        new Date().toLocaleDateString(
          "id-ID",
          {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          }
        ),

      createdAt:
        new Date().toISOString(),

    };

    await addJournal(journal);

    setMood("😊");
    setNote("");

  }

  return (
  <AuthGuard>
    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 overflow-y-auto p-8">

        <Topbar />

        {/* HERO */}

        <div className="mt-8 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 p-8 text-white shadow-xl">

          <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">

            <div>

              <p className="font-semibold opacity-90">

                📖 Daily Journal

              </p>

              <h1 className="mt-3 text-5xl font-black">

                Capture Every Moment

              </h1>

              <p className="mt-4 max-w-xl opacity-90">

                Write your thoughts,
                memories,
                achievements,
                and feelings every day.

              </p>

            </div>

            <div className="rounded-3xl bg-white/15 p-6 backdrop-blur lg:w-80">

              <p className="text-sm opacity-80">

                Journal Entries

              </p>

              <h2 className="mt-2 text-5xl font-black">

                {journals.length}

              </h2>

              <div className="mt-6">

                <Progress
                  value={Math.min(
                    journals.length * 10,
                    100
                  )}
                />

              </div>

              <p className="mt-5 text-sm">

                Favorite Mood

              </p>

              <h3 className="mt-2 text-4xl">

                {favoriteMood}

              </h3>

            </div>

          </div>

        </div>

        {/* OVERVIEW */}

        <div className="mt-8 grid gap-6 md:grid-cols-3">

          <Card>

            <p className="text-slate-500">

              Total Journals

            </p>

            <h2 className="mt-2 text-4xl font-black">

              {journals.length}

            </h2>

          </Card>

          <Card>

            <p className="text-slate-500">

              Favorite Mood

            </p>

            <h2 className="mt-2 text-5xl">

              {favoriteMood}

            </h2>

          </Card>

          <Card>

            <p className="text-slate-500">

              Mood Types

            </p>

            <h2 className="mt-2 text-4xl font-black">

              {Object.keys(moodStats).length}

            </h2>

          </Card>

        </div>

        {/* FORM */}

        <Card className="mt-8">

          <h2 className="text-2xl font-black">

            New Journal

          </h2>

          <div className="mt-6 space-y-5">

            <select
              value={mood}
              onChange={(e) =>
                setMood(
                  e.target.value
                )
              }
              className="w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-purple-500"
            >

              <option>😊</option>
              <option>😁</option>
              <option>😎</option>
              <option>🥳</option>
              <option>😍</option>
              <option>😴</option>
              <option>🥲</option>
              <option>😢</option>
              <option>😡</option>

            </select>

            <textarea
              rows={6}
              value={note}
              onChange={(e) =>
                setNote(
                  e.target.value
                )
              }
              placeholder="How was your day today?"
              className="w-full rounded-2xl border border-slate-200 p-5 outline-none focus:border-purple-500"
            />

            <Button
              disabled={loading}
              onClick={handleSave}
            >

              {loading
                ? "Saving..."
                : "Save Journal"}

            </Button>

          </div>

        </Card>

        {/* JOURNAL */}

        <div className="mt-8 space-y-6">

          {journals.length === 0 ? (

            <Card>

              <div className="py-20 text-center">

                <div className="text-7xl">

                  📖

                </div>

                <h2 className="mt-5 text-3xl font-black">

                  No Journal Yet

                </h2>

                <p className="mt-3 text-slate-500">

                  Start writing your first memory.

                </p>

              </div>

            </Card>

          ) : (

            journals.map((item) => (

              <Card
                key={item.id}
              >

                <div className="flex justify-between">

                  <div>

                    <h2 className="text-5xl">

                      {item.mood}

                    </h2>

                    <p className="mt-3 text-sm text-slate-500">

                      {item.date}

                    </p>

                  </div>

                  <Button
                    className="bg-red-600 hover:bg-red-700"
                    onClick={() =>
                      deleteJournal(
                        item.id
                      )
                    }
                  >

                    Delete

                  </Button>

                </div>

                <p className="mt-8 whitespace-pre-wrap leading-8 text-slate-700">

                  {item.note}

                </p>

              </Card>

            ))

          )}

        </div>

      </section>

    </main>
  </AuthGuard>

  );

}