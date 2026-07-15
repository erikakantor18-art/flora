"use client";

import Card from "@/components/ui/Card";
import { formatCurrency } from "@/utils";

type Income = {

  id: string;

  title: string;

  amount: number;

  category: string;

  date: string;

};

type Props = {

  income: Income[];

};

export default function IncomeAnalytics({

  income,

}: Props) {

  const total =
    income.reduce(
      (sum, item) =>
        sum + item.amount,
      0
    );

  const average =
    income.length === 0
      ? 0
      : total / income.length;

  const highest =
    income.length === 0
      ? null
      : income.reduce((a, b) =>
          a.amount > b.amount ? a : b
        );

  const categories: Record<
    string,
    number
  > = {};

  income.forEach((item) => {

    categories[item.category] =
      (categories[item.category] || 0)
      + item.amount;

  });

  const bestCategory =
    Object.entries(categories)
      .sort(
        (a, b) =>
          b[1] - a[1]
      )[0];

  return (

    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <Card>

        <p className="text-sm text-slate-500">

          Highest Income

        </p>

        <h2 className="mt-3 text-3xl font-black text-green-600">

          {highest
            ? formatCurrency(
                highest.amount
              )
            : "-"}

        </h2>

        <p className="mt-2 text-slate-500">

          {highest?.title ?? "-"}

        </p>

      </Card>

      <Card>

        <p className="text-sm text-slate-500">

          Best Category

        </p>

        <h2 className="mt-3 text-3xl font-black">

          {bestCategory?.[0] ??
            "-"}

        </h2>

        <p className="mt-2 text-slate-500">

          Highest income source

        </p>

      </Card>

      <Card>

        <p className="text-sm text-slate-500">

          Average Income

        </p>

        <h2 className="mt-3 text-3xl font-black">

          {formatCurrency(
            average
          )}

        </h2>

        <p className="mt-2 text-slate-500">

          Per transaction

        </p>

      </Card>

      <Card>

        <p className="text-sm text-slate-500">

          Transactions

        </p>

        <h2 className="mt-3 text-3xl font-black">

          {income.length}

        </h2>

        <p className="mt-2 text-slate-500">

          Income records

        </p>

      </Card>

    </div>

  );

}