"use client";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

import Card from "@/components/ui/Card";

const checklist = [
  {
    title: "Passport",
    done: true,
  },
  {
    title: "IELTS Preparation",
    done: false,
  },
  {
    title: "Australia Saving Fund",
    done: false,
  },
  {
    title: "Curriculum Vitae",
    done: false,
  },
  {
    title: "Work Holiday Visa",
    done: false,
  },
  {
    title: "Flight Ticket",
    done: false,
  },
];

export default function Australia() {
  const completed = checklist.filter(
    (item) => item.done
  ).length;

  const progress = Math.round(
    (completed / checklist.length) * 100
  );

  return (
    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 overflow-y-auto p-8">

        <Topbar />

        <div className="mb-8">

          <h1 className="text-4xl font-black">
            🇦🇺 Australia Journey
          </h1>

          <p className="mt-2 text-slate-500">
            Your preparation checklist.
          </p>

        </div>

        <Card>

          <div className="flex items-center justify-between">

            <div>

              <h2 className="text-3xl font-bold">
                Progress
              </h2>

              <p className="text-slate-500 mt-2">
                {completed} / {checklist.length} Completed
              </p>

            </div>

            <span className="text-5xl font-black text-green-600">
              {progress}%
            </span>

          </div>

          <div className="mt-8 h-4 rounded-full bg-slate-200 overflow-hidden">

            <div
              className="h-full rounded-full bg-green-600 transition-all"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </Card>

        <div className="mt-8 grid gap-5">

          {checklist.map((item) => (

            <Card key={item.title}>

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="text-xl font-bold">
                    {item.title}
                  </h3>

                </div>

                <span
                  className={`rounded-full px-4 py-2 font-semibold ${
                    item.done
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {item.done ? "Done" : "Pending"}
                </span>

              </div>

            </Card>

          ))}

        </div>

      </section>

    </main>
  );
}