import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-green-700 via-emerald-600 to-teal-500 py-28 text-white">

      <div className="mx-auto max-w-4xl px-8 text-center">

        <h2 className="text-5xl font-black">

          Ready To Organize Your Life?

        </h2>

        <p className="mt-6 text-xl opacity-90">

          Start tracking your finance,
          goals,
          study,
          planner,
          and journal today.

        </p>

        <Link
          href="/login"
          className="mt-10 inline-block rounded-2xl bg-white px-10 py-4 text-lg font-bold text-green-700 transition hover:scale-105"
        >

          Get Started

        </Link>

      </div>

    </section>
  );
}