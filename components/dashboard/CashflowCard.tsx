"use client";

import { Card } from "@/components/ui/Card";
import { formatCurrency } from "@/utils";

import {
  ArrowDownCircle,
  ArrowUpCircle,
  Wallet,
} from "lucide-react";

type Props = {

  income: number;

  expense: number;

};

export default function CashflowCard({

  income,

  expense,

}: Props) {

  const balance =
    income - expense;

  const positive =
    balance >= 0;

  return (

    <Card>

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">

            💸 Cashflow

          </h2>

          <p className="mt-1 text-slate-500">

            Money movement this month

          </p>

        </div>

        <Wallet
          size={34}
          className="text-green-600"
        />

      </div>

      <div className="mt-8 space-y-5">

        <div className="flex items-center justify-between rounded-2xl bg-green-50 p-5">

          <div className="flex items-center gap-3">

            <ArrowUpCircle
              className="text-green-600"
            />

            <span>

              Cash In

            </span>

          </div>

          <h3 className="font-black text-green-600">

            {formatCurrency(income)}

          </h3>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-red-50 p-5">

          <div className="flex items-center gap-3">

            <ArrowDownCircle
              className="text-red-600"
            />

            <span>

              Cash Out

            </span>

          </div>

          <h3 className="font-black text-red-600">

            {formatCurrency(expense)}

          </h3>

        </div>

        <div
          className={`rounded-2xl p-6 text-center ${
            positive
              ? "bg-green-600 text-white"
              : "bg-red-600 text-white"
          }`}
        >

          <p>

            Net Cashflow

          </p>

          <h2 className="mt-2 text-4xl font-black">

            {formatCurrency(balance)}

          </h2>

        </div>

      </div>

    </Card>

  );

}