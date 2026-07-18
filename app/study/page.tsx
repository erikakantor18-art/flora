"use client";

import DashboardLayout from "@/components/dashboard/DashboardLayout";

import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

import Badge from "@/components/ui/Badge";
import Progress from "@/components/ui/Progress";
import {
  BookOpen,
  Trophy,
  Flame,
  Clock3,
  Plus,
} from "lucide-react";

const skills = [
  {
    title: "Listening",
    progress: 72,
  },
  {
    title: "Reading",
    progress: 68,
  },
  {
    title: "Writing",
    progress: 55,
  },
  {
    title: "Speaking",
    progress: 60,
  },
];

const roadmap = [
  {
    title: "Vocabulary Practice",
    completed: true,
  },
  {
    title: "Grammar Study",
    completed: true,
  },
  {
    title: "Listening Exercise",
    completed: false,
  },
  {
    title: "IELTS Mock Test",
    completed: false,
  },
];

export default function StudyPage() {
  return (
    <DashboardLayout>

      {/* HEADER */}

      <div className="flex items-center justify-between">

        <div>

          <Badge color="blue">
            Study
          </Badge>

          <h1 className="mt-4 text-4xl font-black">
            Learning Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            Improve your skills every single day.
          </p>

        </div>

        <Button
          leftIcon={<Plus size={18} />}
        >
          New Session
        </Button>

      </div>

      {/* HERO */}

      <Card className="mt-8 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-500 text-white">

        <div className="flex items-center justify-between">

          <div>

            <Badge color="yellow">
              IELTS TARGET
            </Badge>

            <h2 className="mt-5 text-5xl font-black">
              Band 7.0 🎯
            </h2>

            <p className="mt-4 max-w-xl text-blue-100">
              Keep learning consistently.
              Small improvements every day
              will lead to big results.
            </p>

          </div>

          <BookOpen
            size={150}
            className="hidden opacity-30 lg:block"
          />

        </div>

      </Card>

      {/* SUMMARY */}

      <div className="mt-8 grid grid-cols-4 gap-6">

        <Card>

          <Flame
            size={32}
            className="text-orange-500"
          />

          <h3 className="mt-5 text-4xl font-black">
            15
          </h3>

          <p className="text-slate-500">
            Day Streak
          </p>

        </Card>

        <Card>

          <Clock3
            size={32}
            className="text-blue-500"
          />

          <h3 className="mt-5 text-4xl font-black">
            32h
          </h3>

          <p className="text-slate-500">
            Total Study
          </p>

        </Card>

        <Card>

          <Trophy
            size={32}
            className="text-yellow-500"
          />

          <h3 className="mt-5 text-4xl font-black">
            12
          </h3>

          <p className="text-slate-500">
            Badges
          </p>

        </Card>

        <Card>

          <BookOpen
            size={32}
            className="text-emerald-500"
          />

          <h3 className="mt-5 text-4xl font-black">
            78%
          </h3>

          <p className="text-slate-500">
            Overall Progress
          </p>

        </Card>

      </div>

      {/* CONTENT */}

      <div className="mt-8 grid grid-cols-3 gap-6">

        <div className="col-span-2">

          <Card>

            <h2 className="text-2xl font-bold">
              Skill Progress
            </h2>

            <p className="mt-2 text-slate-500">
              Track your IELTS preparation.
            </p>

            <div className="mt-8 space-y-6">
                            {skills.map((skill) => (

                <div key={skill.title}>

                  <div className="mb-2 flex items-center justify-between">

                    <span className="font-semibold">
                      {skill.title}
                    </span>

                    <span className="text-sm font-bold text-blue-600">
                      {skill.progress}%
                    </span>

                  </div>

                  <Progress
                    value={skill.progress}
                    max={100}
                    size="lg"
                    showLabel={false}
                  />

                </div>

              ))}

            </div>

          </Card>

        </div>

        {/* SIDEBAR */}

        <div className="space-y-6">

          <Card>

            <h2 className="text-xl font-bold">
              Today's Goal
            </h2>

            <p className="mt-2 text-slate-500">
              Finish your daily study target.
            </p>

            <div className="mt-8">

              <Progress
                value={45}
                max={100}
                size="lg"
              />

            </div>

            <div className="mt-8 flex justify-between">

              <span className="text-slate-500">
                Progress
              </span>

              <span className="font-bold">
                45%
              </span>

            </div>

          </Card>

          <Card>

            <h2 className="text-xl font-bold">
              Focus Session
            </h2>

            <p className="mt-2 text-slate-500">
              Today's learning timer.
            </p>

            <div className="mt-8 rounded-2xl bg-blue-50 p-6 text-center">

              <h3 className="text-5xl font-black text-blue-600">
                25:00
              </h3>

              <p className="mt-3 text-slate-500">
                Pomodoro Session
              </p>

              <div className="mt-6">

                <Button>
                  Start Focus
                </Button>

              </div>

            </div>

          </Card>

        </div>

      </div>

      {/* ROADMAP */}

      <div className="mt-8">

        <Card>

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-2xl font-bold">
                Learning Roadmap
              </h2>

              <p className="text-slate-500">
                Complete each step to reach Band 7.0
              </p>

            </div>

            <Badge color="emerald">
              4 Tasks
            </Badge>

          </div>

          <div className="mt-8 space-y-4">
                        {roadmap.map((item) => (

              <div
                key={item.title}
                className="flex items-center justify-between rounded-2xl border border-slate-100 p-5"
              >

                <div className="flex items-center gap-4">

                  <div
                    className={`h-4 w-4 rounded-full ${
                      item.completed
                        ? "bg-emerald-500"
                        : "bg-slate-300"
                    }`}
                  />

                  <span className="font-semibold">
                    {item.title}
                  </span>

                </div>

                <Badge
                  color={
                    item.completed
                      ? "emerald"
                      : "yellow"
                  }
                >
                  {item.completed ? "Done" : "Pending"}
                </Badge>

              </div>

            ))}

          </div>

        </Card>

      </div>

      {/* ACHIEVEMENTS */}

      <div className="mt-8 grid grid-cols-4 gap-6">

        <Card className="text-center">

          <div className="text-5xl">
            🔥
          </div>

          <h3 className="mt-4 font-bold">
            15 Day Streak
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Keep learning every day.
          </p>

        </Card>

        <Card className="text-center">

          <div className="text-5xl">
            📚
          </div>

          <h3 className="mt-4 font-bold">
            50 Lessons
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Completed successfully.
          </p>

        </Card>

        <Card className="text-center">

          <div className="text-5xl">
            🎯
          </div>

          <h3 className="mt-4 font-bold">
            IELTS Goal
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Target Band 7.0
          </p>

        </Card>

        <Card className="text-center">

          <div className="text-5xl">
            🏆
          </div>

          <h3 className="mt-4 font-bold">
            Champion
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Never stop improving.
          </p>

        </Card>

      </div>

      {/* FOOTER */}

      <div className="mt-8">

        <Card className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-500 text-white">

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-4xl font-black">
                Learn Today, Lead Tomorrow 🚀
              </h2>

              <p className="mt-4 max-w-2xl leading-7 text-blue-100">
                Consistency beats intensity. Spend a little time learning
                every day, and your future self will thank you. Every page
                you read, every exercise you finish, and every lesson you
                complete brings you closer to your biggest goals.
              </p>

            </div>

            <Button variant="secondary">
              Continue Learning
            </Button>

          </div>

        </Card>

      </div>

    </DashboardLayout>
  );
}
