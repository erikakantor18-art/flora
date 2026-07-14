import Card from "@/components/ui/Card";
import { formatCurrency } from "@/utils";

type Props = {
  budget: number;
  expense: number;
};

export default function BudgetCard({
  budget,
  expense,
}: Props) {
  const percentage = Math.min(
    (expense / budget) * 100,
    100
  );

  const remaining = budget - expense;

  return (
    <Card>

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Monthly Budget
          </h2>

          <p className="mt-1 text-slate-500">
            Budget Progress
          </p>

        </div>

        <h2 className="text-3xl font-black text-green-600">
          {Math.round(percentage)}%
        </h2>

      </div>

      <div className="mt-8 h-4 overflow-hidden rounded-full bg-slate-200">

        <div
          className="h-full rounded-full bg-green-500 transition-all duration-500"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <div className="mt-8 grid grid-cols-2 gap-5">

        <div className="rounded-2xl bg-slate-100 p-5">

          <p className="text-sm text-slate-500">
            Budget
          </p>

          <h3 className="mt-2 text-xl font-bold">
            {formatCurrency(budget)}
          </h3>

        </div>

        <div className="rounded-2xl bg-green-50 p-5">

          <p className="text-sm text-slate-500">
            Remaining
          </p>

          <h3 className="mt-2 text-xl font-bold text-green-600">
            {formatCurrency(
              remaining < 0 ? 0 : remaining
            )}
          </h3>

        </div>

      </div>

    </Card>
  );
}