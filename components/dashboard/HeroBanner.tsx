import Card from "@/components/ui/Card";
import Progress from "@/components/ui/Progress";

import {
  Wallet,
  TrendingUp,
  Sparkles,
} from "lucide-react";

import { formatCurrency } from "@/utils/currency";

type Props = {
  income: number;
  expense: number;
};

export default function HeroBanner({
  income,
  expense,
}: Props) {

  const remaining = income - expense;

  const percentage = Math.min(
    Math.round((expense / income) * 100),
    100
  );

  return (
    <Card className="overflow-hidden bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 text-white">

      <div className="flex flex-col justify-between gap-8 lg:flex-row">

        {/* LEFT */}

        <div className="flex-1">

          <div className="flex items-center gap-2">

            <Sparkles size={22} />

            <span className="font-semibold tracking-wide">

              Erika OS

            </span>

          </div>

          <h1 className="mt-5 text-5xl font-black">

            Good Morning, Erika 👋

          </h1>

          <p className="mt-4 max-w-xl text-lg text-white/90">

            Every small saving today is bringing
            your Australia dream closer.

          </p>

          <div className="mt-8">

            <Progress
              value={percentage}
            />

            <div className="mt-3 flex justify-between text-sm">

              <span>

                Spending Progress

              </span>

              <span>

                {percentage}%

              </span>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="flex w-full max-w-sm flex-col justify-between rounded-3xl bg-white/15 p-6 backdrop-blur-lg">

          <div className="flex items-center justify-between">

            <Wallet size={32} />

            <TrendingUp size={26} />

          </div>

          <div className="mt-8">

            <p className="text-white/80">

              Remaining Balance

            </p>

            <h2 className="mt-2 text-4xl font-black">

              {formatCurrency(
                remaining
              )}

            </h2>

            <p className="mt-4 text-sm text-white/80">

              Income

            </p>

            <p className="font-bold">

              {formatCurrency(
                income
              )}

            </p>

            <p className="mt-3 text-sm text-white/80">

              Expense

            </p>

            <p className="font-bold">

              {formatCurrency(
                expense
              )}

            </p>

          </div>

        </div>

      </div>

    </Card>
  );
}