import {
  Wallet,
  CreditCard,
  Landmark,
  Target,
} from "lucide-react";

import StatCard from "@/components/ui/StatCard";

type Props = {
  income: number;
  expense: number;
};

export default function SummaryCards({
  income,
  expense,
}: Props) {
  const remaining = income - expense;

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Income"
        value={`Rp ${income.toLocaleString("id-ID")}`}
        icon={<Wallet size={28} />}
        subtitle="Monthly Salary"
        color="green"
      />

      <StatCard
        title="Expense"
        value={`Rp ${expense.toLocaleString("id-ID")}`}
        icon={<CreditCard size={28} />}
        subtitle="Total Spending"
        color="red"
      />

      <StatCard
        title="Remaining"
        value={`Rp ${remaining.toLocaleString("id-ID")}`}
        icon={<Landmark size={28} />}
        subtitle="Available Balance"
        color="blue"
      />

      <StatCard
        title="Budget"
        value="Rp 2.000.000"
        icon={<Target size={28} />}
        subtitle="Monthly Target"
        color="yellow"
      />

    </div>
  );
}