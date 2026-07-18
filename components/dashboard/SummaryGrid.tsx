"use client";

import {
  Wallet,
  PiggyBank,
  Plane,
  BookOpen,
} from "lucide-react";

import StatCard from "@/components/ui/StatCard";

const cards = [
  {
    title: "Balance",
    value: "Rp 5.000.000",
    subtitle: "Available Balance",
    trend: "+12.5%",
    icon: <Wallet size={22} />,
  },
  {
    title: "Savings",
    value: "Rp 2.300.000",
    subtitle: "This Month",
    trend: "+8.2%",
    icon: <PiggyBank size={22} />,
  },
  {
    title: "Dream Fund",
    value: "Rp 1.500.000",
    subtitle: "Australia 2029",
    trend: "+15%",
    icon: <Plane size={22} />,
  },
  {
    title: "Study Progress",
    value: "45%",
    subtitle: "IELTS Journey",
    trend: "+5%",
    icon: <BookOpen size={22} />,
  },
];

export default function SummaryGrid() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <StatCard
          key={card.title}
          title={card.title}
          value={card.value}
          subtitle={card.subtitle}
          trend={card.trend}
          icon={card.icon}
        />
      ))}
    </section>
  );
}