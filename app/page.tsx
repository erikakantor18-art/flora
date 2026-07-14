"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

import StatCard from "@/components/ui/StatCard";
import Card from "@/components/ui/Card";
import Progress from "@/components/ui/Progress";

import HeroBanner from "@/components/dashboard/HeroBanner";
import ExpenseOverview from "@/components/dashboard/ExpenseOverview";
import RecentExpense from "@/components/dashboard/RecentExpense";
import QuickAction from "@/components/dashboard/QuickAction";

import {
  Wallet,
  CreditCard,
  Landmark,
  Plane,
} from "lucide-react";

type Expense = {
  name: string;
  amount: number;
  category: string;
};

export default function Dashboard() {
  const [expenses, setExpenses] =
    useState<Expense[]>([]);

  useEffect(() => {
    const data =
      localStorage.getItem("expenses");

    if (data) {
      setExpenses(JSON.parse(data));
    }
    
  }, []);

  const income = 4700000;

  const expense = expenses.reduce(
    (total, item) =>
      total + item.amount,
    0
  );

  const remaining =
    income - expense;

  return (
    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 overflow-y-auto p-8">

        <Topbar />

        <HeroBanner
          income={income}
          expense={expense}
        />

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Income"
            value={`Rp ${income.toLocaleString("id-ID")}`}
            subtitle="Monthly Salary"
            icon={<Wallet size={28} />}
            color="green"
          />

          <StatCard
            title="Expense"
            value={`Rp ${expense.toLocaleString("id-ID")}`}
            subtitle="Total Expense"
            icon={<CreditCard size={28} />}
            color="red"
          />

          <StatCard
            title="Balance"
            value={`Rp ${remaining.toLocaleString("id-ID")}`}
            subtitle="Available Balance"
            icon={<Landmark size={28} />}
            color="blue"
          />

          <StatCard
            title="Australia"
            value="Rp1.500.000"
            subtitle="Target 2029"
            icon={<Plane size={28} />}
            color="yellow"
          />

        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-3">

          <div className="space-y-6 xl:col-span-2">

            <ExpenseOverview
              expenses={expenses}
            />

            <RecentExpense
              expenses={expenses}
            />

          </div>

          <div className="space-y-6">

            <Card>

              <h2 className="text-2xl font-bold">
                Goal Progress
              </h2>

              <p className="mt-4 text-slate-500">
                Australia Fund
              </p>

              <div className="mt-4">

                <Progress value={35} />

              </div>

              <p className="mt-3 font-semibold">
                35%
              </p>

            </Card>

            <QuickAction />

          </div>

        </div>

      </section>

    </main>
  );
}