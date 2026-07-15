import {
  Wallet,
  Target,
  GraduationCap,
  CalendarDays,
  BookOpen,
  Plane,
} from "lucide-react";

const features = [
  {
    icon: <Wallet size={34} />,
    title: "Finance",
    desc: "Track income, expenses and monthly cashflow effortlessly.",
  },
  {
    icon: <Target size={34} />,
    title: "Goals",
    desc: "Save money and monitor every dream you want to achieve.",
  },
  {
    icon: <GraduationCap size={34} />,
    title: "Study",
    desc: "Keep your study hours organized and measurable.",
  },
  {
    icon: <CalendarDays size={34} />,
    title: "Planner",
    desc: "Manage your daily activities and stay productive.",
  },
  {
    icon: <BookOpen size={34} />,
    title: "Journal",
    desc: "Write your daily thoughts and personal reflections.",
  },
  {
    icon: <Plane size={34} />,
    title: "Australia Dream",
    desc: "Track your savings toward your Australia journey.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-28">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <h2 className="text-5xl font-black text-slate-900">

            Everything You Need

          </h2>

          <p className="mt-5 text-lg text-slate-500">

            Designed to organize every important aspect of your life.

          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((item) => (

            <div
              key={item.title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-green-500 hover:shadow-2xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600 transition group-hover:scale-110">

                {item.icon}

              </div>

              <h3 className="mt-7 text-2xl font-black">

                {item.title}

              </h3>

              <p className="mt-4 leading-7 text-slate-500">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}