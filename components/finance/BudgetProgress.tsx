import { Card } from "@/components/ui/Card";
import Progress from "@/components/ui/Progress";

type BudgetProgressProps = {
  title: string;
  spent: number;
  budget: number;
};

export default function BudgetProgress({
  title,
  spent,
  budget,
}: BudgetProgressProps) {
  const remaining = budget - spent;

  return (
    <Card>
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg">
          {title}
        </h3>

        <span className="text-sm text-slate-500">
          Rp {remaining.toLocaleString("id-ID")} left
        </span>
      </div>

      <div className="mt-6">
        <Progress
          value={spent}
          max={budget}
          showLabel
        />
      </div>

      <div className="mt-6 flex justify-between text-sm text-slate-500">
        <span>
          Spent
        </span>

        <span>
          Rp {spent.toLocaleString("id-ID")}
        </span>
      </div>
    </Card>
  );
}