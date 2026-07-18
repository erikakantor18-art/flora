import { Card } from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";

type ExpenseChartProps = {
  data: {
    label: string;
    value: number;
  }[];
};

export default function ExpenseChart({
  data,
}: ExpenseChartProps) {
  const max = Math.max(...data.map((d) => d.value), 1);

  return (
    <Card>

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Monthly Expenses
          </h2>

          <p className="mt-1 text-slate-500">
            Expense overview this month
          </p>

        </div>

        <Badge color="blue">
          July
        </Badge>

      </div>

      <div className="mt-10 flex h-72 items-end gap-4">

        {data.map((item) => (

          <div
            key={item.label}
            className="flex flex-1 flex-col items-center"
          >

            <div
              className="w-full rounded-2xl bg-gradient-to-t from-emerald-500 to-green-300 transition-all duration-500 hover:opacity-80"
              style={{
                height: `${(item.value / max) * 100}%`,
              }}
            />

            <span className="mt-3 text-sm text-slate-500">
              {item.label}
            </span>

            <span className="mt-1 text-xs text-slate-400">
              Rp {(item.value / 1000).toFixed(0)}K
            </span>

          </div>

        ))}

      </div>

    </Card>
  );
}