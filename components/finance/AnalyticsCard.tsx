import Card from "@/components/ui/Card";
import { formatCurrency } from "@/utils";
import Button from "@/components/ui/Button";
import { exportExpenseToExcel } from "@/lib/exportExcel";
type Expense = {
  name: string;
  amount: number;
  category: string;
};

type Props = {
  expenses: Expense[];
};
export default function AnalyticsCard({
  expenses,
}: Props) {
  const totalTransaction = expenses.length;

  const totalExpense = expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const average =
    totalTransaction === 0
      ? 0
      : totalExpense / totalTransaction;

  const highestExpense =
    expenses.length > 0
      ? expenses.reduce((a, b) =>
          a.amount > b.amount ? a : b
        )
      : null;

  const categoryCount: Record<string, number> = {};

  expenses.forEach((item) => {
    categoryCount[item.category] =
      (categoryCount[item.category] || 0) +
      item.amount;
  });

  const topCategory =
    Object.entries(categoryCount).sort(
      (a, b) => b[1] - a[1]
    )[0];

  return (
    <Card>

      <h2 className="text-2xl font-bold">
        Finance Analytics
      </h2>

      <div className="mt-6 grid gap-4">

        <div className="rounded-2xl bg-slate-100 p-5">

          <p className="text-sm text-slate-500">
            Total Transaction
          </p>

          <h2 className="mt-2 text-3xl font-black">
            {totalTransaction}
          </h2>

        </div>

        <div className="rounded-2xl bg-slate-100 p-5">

          <p className="text-sm text-slate-500">
            Average Expense
          </p>

          <h2 className="mt-2 text-2xl font-black">
            {formatCurrency(average)}
          </h2>

        </div>

        <div className="rounded-2xl bg-slate-100 p-5">

          <p className="text-sm text-slate-500">
            Highest Expense
          </p>

          <h2 className="mt-2 text-xl font-bold">
            {highestExpense
              ? highestExpense.name
              : "-"}
          </h2>

          <p className="mt-1 text-green-600 font-semibold">
            {highestExpense
              ? formatCurrency(
                  highestExpense.amount
                )
              : "-"}
          </p>

        </div>

        <div className="rounded-2xl bg-slate-100 p-5">

          <p className="text-sm text-slate-500">
            Top Category
          </p>

          <h2 className="mt-2 text-xl font-bold">
            {topCategory
              ? topCategory[0]
              : "-"}
          </h2>

        </div>

      </div>
    <Button
        className="mt-6 w-full"
        onClick={() =>
            exportExpenseToExcel(expenses)
        }
        >
        📊 Export Excel
    </Button>
    </Card>
  );
}