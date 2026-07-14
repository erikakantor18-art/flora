"use client";

import { useEffect, useState } from "react";

export default function HeroBanner() {

  const [greeting, setGreeting] =
    useState("👋 Welcome");

  const [today, setToday] =
    useState("");

  useEffect(() => {

    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {

      setGreeting("🌤️ Good Morning");

    } else if (hour >= 12 && hour < 15) {

      setGreeting("☀️ Good Afternoon");

    } else if (hour >= 15 && hour < 18) {

      setGreeting("🌇 Good Evening");

    } else {

      setGreeting("🌙 Good Evening");

    }

    setToday(

      new Date().toLocaleDateString(

        "en-US",

        {

          weekday: "long",

          day: "numeric",

          month: "long",

          year: "numeric",

        }

      )

    );

  }, []);

  return (

    <div className="rounded-3xl bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 p-10 text-white shadow-xl">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-5xl font-black">

            {greeting}, Erika 👋

          </h1>

          <p className="mt-4 text-xl opacity-90">

            Small progress every day adds up to big results.

          </p>

          <p className="mt-8 opacity-80">

            {today}

          </p>

        </div>

        <div className="text-center">

          <p className="text-6xl">

            🌤️

          </p>

          <h2 className="mt-3 text-4xl font-black">

            29°

          </h2>

          <p>

            Medan

          </p>

        </div>

      </div>

    </div>

  );

}