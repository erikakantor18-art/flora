"use client";

import Card from "@/components/ui/Card";

type Props = {

  income: number;

  expense: number;

};

export default function SavingRateCard({

  income,

  expense,

}: Props) {

  const saving =
    income - expense;

  const rate =
    income === 0
      ? 0
      : Math.round(
          (saving / income) *
            100
        );

  const color =
    rate >= 50
      ? "text-green-600"
      : rate >= 20
      ? "text-yellow-600"
      : "text-red-600";

  return (

    <Card>

      <p className="text-slate-500">

        Saving Rate

      </p>

      <h2
        className={`mt-3 text-5xl font-black ${color}`}
      >

        {rate}%

      </h2>

      <p className="mt-4 text-slate-500">

        {saving.toLocaleString("id-ID")}

        {" "}saved this month

      </p>

    </Card>

  );

}