import {
  Target,
  CheckCircle,
  Clock,
  Trophy,
} from "lucide-react";

import StatCard from "@/components/ui/StatCard";

type Goal = {
  title: string;
  target: number;
  saved: number;
};

type Props = {
  goals: Goal[];
};

export default function GoalSummary({
  goals,
}: Props) {

  const totalTarget = goals.reduce(
    (sum, goal) => sum + goal.target,
    0
  );

  const totalSaved = goals.reduce(
    (sum, goal) => sum + goal.saved,
    0
  );

  const completed = goals.filter(
    (goal) => goal.saved >= goal.target
  ).length;

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <StatCard
        title="Goals"
        value={goals.length.toString()}
        subtitle="Active Goals"
        icon={<Target size={28} />}
        color="blue"
      />

      <StatCard
        title="Saved"
        value={`Rp ${totalSaved.toLocaleString("id-ID")}`}
        subtitle="Current Saving"
        icon={<CheckCircle size={28} />}
        color="green"
      />

      <StatCard
        title="Target"
        value={`Rp ${totalTarget.toLocaleString("id-ID")}`}
        subtitle="Total Target"
        icon={<Clock size={28} />}
        color="yellow"
      />

      <StatCard
        title="Completed"
        value={completed.toString()}
        subtitle="Finished Goals"
        icon={<Trophy size={28} />}
        color="red"
      />

    </div>
  );
}