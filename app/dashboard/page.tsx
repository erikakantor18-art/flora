"use client";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import HeroBanner from "@/components/HeroBanner";

import StatCard from "@/components/ui/StatCard";
import Card from "@/components/ui/Card";
import CircleProgress from "@/components/ui/CircleProgress";

import ExpenseOverview from "@/components/dashboard/ExpenseOverview";
import MonthlyTrend from "@/components/dashboard/MonthlyTrend";
import RecentExpense from "@/components/dashboard/RecentExpense";
import StudyOverview from "@/components/dashboard/StudyOverview";
import PlannerToday from "@/components/dashboard/PlannerToday";
import QuickAction from "@/components/dashboard/QuickAction";
import AnalyticsCard from "@/components/dashboard/AnalyticsCard";
import FinancialInsight from "@/components/dashboard/FinancialInsight";

import useExpense from "@/hooks/useExpense";
import useGoal from "@/hooks/useGoal";
import useProfile from "@/hooks/useProfile";

import {
  Wallet,
  CreditCard,
  Landmark,
  Plane,
} from "lucide-react";

export default function Dashboard() {

  const {
    expenses,
    totalExpense,
  } = useExpense();

  const {
    goals,
  } = useGoal();

  const {
    profile,
  } = useProfile();

  const income =
    profile?.monthly_income ?? 0;

  const expense =
    totalExpense;

  const balance =
    income - expense;

  const australia =
    goals.find((goal) =>
      goal.title
        .toLowerCase()
        .includes("australia")
    );

  const progress =
    australia
      ? Math.round(
          (australia.current /
            australia.target) *
            100
        )
      : 0;

  return (

    <main className="flex min-h-screen bg-slate-100">

      <Sidebar />

      <section className="flex-1 overflow-y-auto p-8">

        <Topbar />

        <HeroBanner />

        {/* Summary Card */}

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Income"
            value={`Rp ${income.toLocaleString("id-ID")}`}
            subtitle="Monthly Income"
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
            value={`Rp ${balance.toLocaleString("id-ID")}`}
            subtitle="Remaining Balance"
            icon={<Landmark size={28} />}
            color="blue"
          />

          <StatCard
            title="Australia"
            value={`${progress}%`}
            subtitle="Goal Progress"
            icon={<Plane size={28} />}
            color="yellow"
          />

        </div>

        {/* Dashboard */}

        <div className="mt-8 grid gap-6 xl:grid-cols-3">

          {/* LEFT */}

          <div className="space-y-6 xl:col-span-2">

            <ExpenseOverview
              expenses={expenses}
            />

            <MonthlyTrend
              expenses={expenses}
            />

            <RecentExpense
              expenses={expenses}
            />

            <StudyOverview />

          </div>

          {/* RIGHT */}

          <div className="space-y-6">

            <Card>

              <h2 className="text-center text-2xl font-black">

                🇦🇺 Australia Goal

              </h2>

              <div className="mt-8 flex justify-center">

                <CircleProgress
                  value={progress}
                />

              </div>

              <div className="mt-8 text-center">

                <h3 className="text-xl font-bold">

                  {australia?.title ??
                    "Australia Fund"}

                </h3>

                <p className="mt-2 text-slate-500">

                  Rp{" "}

                  {(australia?.current ?? 0).toLocaleString("id-ID")}

                  {" / "}

                  Rp{" "}

                  {(australia?.target ?? 0).toLocaleString("id-ID")}

                </p>

              </div>

            </Card>

            <FinancialInsight
              income={income}
              expenses={expenses}
              goal={australia}
            />

            <AnalyticsCard
              income={income}
              expenses={expenses}
            />

            <PlannerToday />

            <QuickAction />

          </div>

        </div>

      </section>

    </main>

  );

}