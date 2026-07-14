import Card from "@/components/ui/Card";
import { formatCurrency } from "@/utils";

type Props = {
  income: number;
  expense: number;
};

export default function MonthlySummary({
  income,
  expense,
}: Props) {
  const remaining = income - expense;

  const percentage =
    income === 0
      ? 0
      : Math.round((expense / income) * 100);

  return (
    <Card className="mt-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            📅 Monthly Summary
          </h2>

          <p className="text-slate-500">
            Your finance this month
          </p>

        </div>

        <h2 className="text-4xl font-black text-green-600">

          {percentage}%

        </h2>

      </div>

      <div className="mt-8 space-y-5">

        <div className="flex justify-between">

          <span>Income</span>

          <span className="font-bold">

            {formatCurrency(income)}

          </span>

        </div>

        <div className="flex justify-between">

          <span>Expense</span>

          <span className="font-bold text-red-600">

            {formatCurrency(expense)}

          </span>

        </div>

        <div className="flex justify-between">

          <span>Remaining</span>

          <span className="font-bold text-green-600">

            {formatCurrency(remaining)}

          </span>

        </div>

      </div>

      <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-200">

        <div
          className="h-full rounded-full bg-green-500 transition-all"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

    </Card>
  );
}