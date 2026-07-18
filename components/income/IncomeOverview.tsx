import {
  DollarSign,
  Wallet,
  TrendingUp,
  PiggyBank,
} from "lucide-react";

import StatCard from "@/components/ui/StatCard";

type Props = {
  salary: number;
  extraIncome: number;
};

export default function IncomeOverview({
  salary,
  extraIncome,
}: Props) {
  const totalIncome = salary + extraIncome;

  const passiveIncome =
    totalIncome === 0
      ? 0
      : Math.round(
          (extraIncome / totalIncome) * 100
        );

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Monthly Salary"
        value={`Rp ${salary.toLocaleString("id-ID")}`}
        subtitle="Main Income"
        icon={<Wallet size={28} />}
      />

      <StatCard
        title="Extra Income"
        value={`Rp ${extraIncome.toLocaleString("id-ID")}`}
        subtitle="Freelance • Bonus • THR"
        icon={<DollarSign size={28} />}
      />

      <StatCard
        title="Total Income"
        value={`Rp ${totalIncome.toLocaleString("id-ID")}`}
        subtitle="Salary + Extra"
        icon={<TrendingUp size={28} />}
      />

      <StatCard
        title="Passive Ratio"
        value={`${passiveIncome}%`}
        subtitle="Extra Income"
        icon={<PiggyBank size={28} />}
      />
    </div>
  );
}