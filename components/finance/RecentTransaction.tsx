import { Card } from "@/components/ui/Card";

type Transaction = {
  title: string;
  category: string;
  amount: string;
};

type RecentTransactionProps = {
  transactions: Transaction[];
};

export default function RecentTransaction({
  transactions,
}: RecentTransactionProps) {
  return (
    <Card>
      <h2 className="text-xl font-bold">
        Recent Transactions
      </h2>

      <div className="mt-6 space-y-4">
        {transactions.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-2xl bg-slate-50 p-4"
          >
            <div>
              <h4 className="font-semibold">
                {item.title}
              </h4>

              <p className="text-sm text-slate-500">
                {item.category}
              </p>
            </div>

            <span className="font-bold">
              {item.amount}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}