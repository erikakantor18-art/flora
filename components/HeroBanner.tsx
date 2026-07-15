"use client";

import Image from "next/image";

import { Wallet } from "lucide-react";
import { useEffect, useState } from "react";

import useExpense from "@/hooks/useExpense";
import useIncome from "@/hooks/useIncome";
import useProfile from "@/hooks/useProfile";
import useWeather from "@/hooks/useWeather";

export default function HeroBanner() {

  const { profile } =
    useProfile();

  const {
    totalExpense,
  } = useExpense();

  const {
  totalIncome: extraIncome,
} = useIncome();

  const weather =
    useWeather();

  const salary =
    profile?.monthly_income ?? 0;

  const income =
    salary + extraIncome;

  const balance =
    income - totalExpense;

  const [mounted, setMounted] =
    useState(false);

  const [time, setTime] =
    useState(new Date());

  useEffect(() => {

    setMounted(true);

    const interval =
      setInterval(() => {

        setTime(new Date());

      }, 1000);

    return () =>
      clearInterval(interval);

  }, []);

  const hour =
    time.getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 17
      ? "Good Afternoon"
      : hour < 20
      ? "Good Evening"
      : "Good Night";

  const quotes = [

    "Every small saving today is bringing your Australia dream closer.",

    "Discipline beats motivation.",

    "Small progress every day adds up.",

    "Consistency creates success.",

    "One step closer to your goals.",

  ];

  const quote =
    quotes[
      time.getDate() %
      quotes.length
    ];

  const progress =
    income === 0
      ? 0
      : Math.round(
          (totalExpense /
            income) *
            100
        );

  return (

    <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 p-8 text-white shadow-xl">

      <div className="flex flex-col justify-between gap-8 lg:flex-row">

        {/* LEFT */}

        <div className="flex-1">

          <p className="font-semibold opacity-90">

            🌿 Flora

          </p>

          <h1 className="mt-3 text-5xl font-black">

            {greeting},{" "}

            {profile?.full_name ??
              "Erika"} 👋

          </h1>

          <p className="mt-4 text-lg opacity-90">

            {quote}

          </p>

          <div className="mt-8">

            <div className="mb-2 flex justify-between text-sm">

              <span>

                Spending Progress

              </span>

              <span>

                {progress}%

              </span>

            </div>

            <div className="h-3 rounded-full bg-white/30">

              <div
                className="h-3 rounded-full bg-white transition-all duration-700"
                style={{
                  width: `${Math.min(
                    progress,
                    100
                  )}%`,
                }}
              />

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="w-full rounded-3xl bg-white/15 p-6 backdrop-blur-md lg:w-[360px]">
                  <div className="flex items-center justify-between">

            <Wallet size={28} />

            <span className="text-2xl">

              📈

            </span>

          </div>

          <p className="mt-8 text-sm opacity-80">

            Available Balance

          </p>

          <h2 className="mt-2 text-5xl font-black">

            Rp{" "}

            {balance.toLocaleString("id-ID")}

          </h2>

          <div className="mt-8 space-y-2 text-sm">

            <div className="flex justify-between">

              <span>

                Total Income

              </span>

              <span>

                Rp{" "}

                {income.toLocaleString("id-ID")}

              </span>

            </div>

            <div className="flex justify-between">

              <span>

                Salary

              </span>

              <span>

                Rp{" "}

                {salary.toLocaleString("id-ID")}

              </span>

            </div>

            <div className="flex justify-between">

              <span>

                Extra Income

              </span>

              <span>

                Rp{" "}

                {extraIncome.toLocaleString("id-ID")}

              </span>

            </div>

            <div className="flex justify-between">

              <span>

                Expense

              </span>

              <span>

                Rp{" "}

                {totalExpense.toLocaleString("id-ID")}

              </span>

            </div>

          </div>

          {/* CLOCK */}

          <div className="mt-8 rounded-2xl bg-white/10 p-4 text-center">

            <p className="text-sm opacity-80">

              Live Time

            </p>

            <h3 className="mt-2 text-2xl font-bold">

              {mounted
                ? time.toLocaleTimeString("id-ID")
                : "--:--:--"}

            </h3>

            <p className="mt-1 text-sm">

              {mounted
                ? time.toLocaleDateString(
                    "id-ID",
                    {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    }
                  )
                : ""}

            </p>

          </div>

          {/* WEATHER */}

          <div className="mt-5 rounded-2xl bg-white/10 p-4">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-sm opacity-80">

                  Weather

                </p>

                <h3 className="mt-2 text-3xl font-black">

                  {weather?.temp ?? "--"}°

                </h3>

                <p className="text-sm">

                  {weather?.city ?? "Loading..."}

                </p>

                <p className="text-xs opacity-80">

                  {weather?.description ?? ""}

                </p>

              </div>

              {weather && (

                <div className="relative h-16 w-16">

                  <Image
                    src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                    alt="Weather"
                    fill
                    sizes="64px"
                    unoptimized
                    className="object-contain"
                  />

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}