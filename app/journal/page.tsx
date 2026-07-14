"use client";

import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import useJournal from "@/hooks/useJournal";

import { Journal } from "@/types";

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

  async function handleSave() {

    if (!note) return;

    const journal: Journal = {

      id: crypto.randomUUID(),

      mood,

      note,

      date: new Date()
        .toLocaleDateString("id-ID"),

      createdAt:
        new Date().toISOString(),

    };

    await addJournal(journal);

    setMood("😊");

    setNote("");

  }

  return (

    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 overflow-y-auto p-8">

        <Topbar />

        <div className="mb-8">

          <h1 className="text-4xl font-black">

            📓 Journal

          </h1>

          <p className="mt-2 text-slate-500">

            Write your daily notes.

          </p>

        </div>

        <Card>

          <div className="grid gap-4">

            <select
              value={mood}
              onChange={(e)=>
                setMood(
                  e.target.value
                )
              }
              className="rounded-2xl border border-slate-200 p-3"
            >

              <option>😊</option>
              <option>😁</option>
              <option>😎</option>
              <option>😴</option>
              <option>🥲</option>
              <option>😢</option>
              <option>😡</option>

            </select>

            <textarea
              rows={5}
              value={note}
              onChange={(e)=>
                setNote(
                  e.target.value
                )
              }
              placeholder="Write your journal..."
              className="rounded-2xl border border-slate-200 p-4 outline-none focus:border-green-500"
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

        <div className="mt-8 space-y-5">

          {journals.length === 0 ? (

            <Card>

              <div className="py-10 text-center">

                <p className="text-6xl">

                  📖

                </p>

                <p className="mt-4 text-slate-500">

                  No journal yet.

                </p>

              </div>

            </Card>

          ) : (

            journals.map((item)=>(

              <Card
                key={item.id}
              >

                <div className="flex items-start justify-between">

                  <div>

                    <h2 className="text-3xl">

                      {item.mood}

                    </h2>

                    <p className="mt-2 text-sm text-slate-500">

                      {item.date}

                    </p>

                  </div>

                  <Button
                    className="bg-red-600 hover:bg-red-700"
                    onClick={()=>
                      deleteJournal(
                        item.id
                      )
                    }
                  >

                    Delete

                  </Button>

                </div>

                <p className="mt-6 whitespace-pre-wrap leading-7">

                  {item.note}

                </p>

              </Card>

            ))

          )}

        </div>

      </section>

    </main>

  );

}