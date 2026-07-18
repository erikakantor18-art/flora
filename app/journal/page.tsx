"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";
import Badge from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

import {
  BookOpen,
  Search,
  Plus,
  Heart,
  CalendarDays,
  PenLine,
  Sparkles,
} from "lucide-react";

const journals = [
  {
    title: "A productive Monday",
    mood: "😊 Happy",
    date: "14 July 2026",
    preview:
      "Today I finished the Finance page and made good progress on Flora.",
  },
  {
    title: "Learning React",
    mood: "🤓 Focused",
    date: "13 July 2026",
    preview:
      "Spent two hours learning reusable components and TypeScript.",
  },
  {
    title: "Australia Dream",
    mood: "🌏 Inspired",
    date: "12 July 2026",
    preview:
      "Started planning my Working Holiday journey step by step.",
  },
];

export default function JournalPage() {
  return (
    <DashboardLayout>

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <Badge color="blue">
            Journal
          </Badge>

          <h1 className="mt-4 text-5xl font-black">
            My Daily Journal ✨
          </h1>

          <p className="mt-3 max-w-xl text-slate-500">
            Capture thoughts, memories, and your personal journey every day.
          </p>

        </div>

        <Button leftIcon={<Plus size={18} />}>
          New Journal
        </Button>

      </div>

      {/* HERO */}

      <Card className="mt-8 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-500 text-white">

        <div className="flex items-center justify-between">

          <div>

            <Badge color="yellow">
              Today's Reflection
            </Badge>

            <h2 className="mt-5 text-5xl font-black">
              Write One Page Today 📝
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-pink-100">
              Your future self will thank you for recording today's moments,
              lessons, and feelings.
            </p>

          </div>

          <PenLine
            size={150}
            className="hidden opacity-20 lg:block"
          />

        </div>

      </Card>

      {/* SEARCH */}

      <div className="mt-8 flex items-center justify-between">

        <div className="flex w-96 items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">

          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            placeholder="Search journal..."
            className="w-full outline-none"
          />

        </div>

        <Button variant="secondary">
          All Entries
        </Button>

      </div>

      {/* CONTENT */}

      <div className="mt-8 grid grid-cols-3 gap-6">

        <div className="col-span-2 space-y-6">
                      {journals.map((journal) => (

            <Card
              key={journal.title}
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >

              <div className="flex items-start justify-between">

                <div>

                  <Badge color="blue">
                    {journal.mood}
                  </Badge>

                  <h2 className="mt-4 text-2xl font-black">
                    {journal.title}
                  </h2>

                </div>

                <Heart
                  size={22}
                  className="text-slate-300 transition group-hover:text-red-500"
                />

              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">

                <CalendarDays size={16} />

                <span>{journal.date}</span>

              </div>

              <p className="mt-6 leading-7 text-slate-600">
                {journal.preview}
              </p>

              <div className="mt-8 flex justify-end">

                <Button variant="ghost">
                  Read More
                </Button>

              </div>

            </Card>

          ))}

        </div>

        {/* SIDEBAR */}

        <div className="space-y-6">

          <Card>

            <div className="flex items-center gap-3">

              <Sparkles
                size={22}
                className="text-yellow-500"
              />

              <h2 className="text-xl font-bold">
                Writing Streak
              </h2>

            </div>

            <div className="mt-8 text-center">

              <h3 className="text-6xl font-black text-violet-600">
                12
              </h3>

              <p className="mt-2 text-slate-500">
                Consecutive Days
              </p>

            </div>

          </Card>

          <Card>

            <div className="flex items-center gap-3">

              <BookOpen
                size={22}
                className="text-blue-500"
              />

              <h2 className="text-xl font-bold">
                Statistics
              </h2>

            </div>

            <div className="mt-8 space-y-5">

              <div className="flex justify-between">

                <span className="text-slate-500">
                  Total Journals
                </span>

                <strong>
                  84
                </strong>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-500">
                  Favorites
                </span>

                <strong>
                  18
                </strong>

              </div>

              <div className="flex justify-between">

                <span className="text-slate-500">
                  This Month
                </span>

                <strong>
                  9
                </strong>

              </div>

            </div>

          </Card>

        </div>

      </div>

      {/* MOOD HISTORY */}

      <div className="mt-8">

        <Card>

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold">
                Mood History
              </h2>

              <p className="text-slate-500">
                Your emotions over the last week.
              </p>

            </div>

            <Badge color="emerald">
              Last 7 Days
            </Badge>

          </div>

          <div className="mt-8 grid grid-cols-7 gap-4">
                        {[
              { day: "Mon", emoji: "😊", mood: "Happy" },
              { day: "Tue", emoji: "😌", mood: "Calm" },
              { day: "Wed", emoji: "🤩", mood: "Excited" },
              { day: "Thu", emoji: "😴", mood: "Tired" },
              { day: "Fri", emoji: "😁", mood: "Great" },
              { day: "Sat", emoji: "🥳", mood: "Fun" },
              { day: "Sun", emoji: "🌿", mood: "Relax" },
            ].map((item) => (

              <div
                key={item.day}
                className="group rounded-2xl border border-slate-200 bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
                  {item.emoji}
                </div>

                <h3 className="mt-4 font-bold">
                  {item.day}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  {item.mood}
                </p>

              </div>

            ))}

          </div>

        </Card>

      </div>

      {/* REFLECTION PROMPTS */}

      <div className="mt-8 grid grid-cols-3 gap-6">

        <Card className="col-span-2">

          <h2 className="text-2xl font-bold">
            Reflection Prompts
          </h2>

          <p className="mt-2 text-slate-500">
            Answer one question before ending your day.
          </p>

          <div className="mt-8 space-y-5">

            {[
              "✨ What made you smile today?",
              "🎯 What is one thing you're proud of today?",
              "📚 What did you learn today?",
              "🙏 What are you grateful for today?",
              "🚀 What's your biggest goal for tomorrow?",
            ].map((question) => (

              <div
                key={question}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-5 transition hover:bg-slate-100"
              >

                <p className="font-medium">
                  {question}
                </p>

              </div>

            ))}

          </div>

        </Card>

        <Card>

          <h2 className="text-xl font-bold">
            Today's Quote
          </h2>

          <div className="mt-8 rounded-2xl bg-gradient-to-br from-violet-600 to-pink-500 p-6 text-white">

            <p className="leading-8">
              "The smallest step in the right direction
              ends up being the biggest step of your life."
            </p>

          </div>

          <div className="mt-8">

            <Button className="w-full">
              Write Now
            </Button>

          </div>

        </Card>

      </div>

      {/* DAILY MEMORIES */}

      <div className="mt-8">
                <Card>

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold">
                Daily Memories
              </h2>

              <p className="mt-2 text-slate-500">
                Small moments that deserve to be remembered.
              </p>

            </div>

            <Badge color="blue">
              Gallery
            </Badge>

          </div>

          <div className="mt-8 grid grid-cols-4 gap-5">

            {[
              "🌅",
              "☕",
              "💻",
              "📚",
              "✈️",
              "🏕️",
              "🌿",
              "🎉",
            ].map((emoji, index) => (

              <div
                key={index}
                className="group flex aspect-square cursor-pointer items-center justify-center rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white text-6xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="transition-transform duration-300 group-hover:scale-110">
                  {emoji}
                </div>

              </div>

            ))}

          </div>

        </Card>

      </div>

      {/* WEEKLY HIGHLIGHTS */}

      <div className="mt-8 grid grid-cols-3 gap-6">

        <Card>

          <div className="text-center">

            <div className="text-5xl">
              📖
            </div>

            <h3 className="mt-4 text-3xl font-black">
              84
            </h3>

            <p className="mt-2 text-slate-500">
              Journal Entries
            </p>

          </div>

        </Card>

        <Card>

          <div className="text-center">

            <div className="text-5xl">
              🔥
            </div>

            <h3 className="mt-4 text-3xl font-black">
              12 Days
            </h3>

            <p className="mt-2 text-slate-500">
              Writing Streak
            </p>

          </div>

        </Card>

        <Card>

          <div className="text-center">

            <div className="text-5xl">
              ❤️
            </div>

            <h3 className="mt-4 text-3xl font-black">
              18
            </h3>

            <p className="mt-2 text-slate-500">
              Favorite Memories
            </p>

          </div>

        </Card>

      </div>

      {/* FOOTER BANNER */}

      <div className="mt-8">

        <Card className="overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white">

          <div className="flex items-center justify-between">

            <div>

              <Badge color="yellow">
                Keep Writing
              </Badge>

              <h2 className="mt-5 text-5xl font-black leading-tight">
                Every Day Becomes
                <br />
                A Beautiful Memory.
              </h2>

              <p className="mt-6 max-w-2xl leading-8 text-slate-300">
                A journal is more than words on a page. It's a collection
                of dreams, lessons, victories, and memories that shape who
                you become. One page a day is enough to tell your story.
              </p>

              <div className="mt-8 flex gap-4">

                <Button>
                  New Entry
                </Button>

                <Button variant="secondary">
                  Browse Journal
                </Button>

              </div>

            </div>

            <div className="hidden lg:flex h-56 w-56 items-center justify-center rounded-full bg-white/10">

              <BookOpen
                size={140}
                className="opacity-70"
              />

            </div>

          </div>

        </Card>

      </div>

    </DashboardLayout>
  );
}

          
