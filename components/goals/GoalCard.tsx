import Card from "@/components/ui/Card";
import Progress from "@/components/ui/Progress";
import { formatCurrency } from "@/utils";

type Props = {
  title: string;
  current: number;
  target: number;
  deadline: string;
  onAddSaving?: () => void;
  onDelete?: () => void;
};

export default function GoalCard({
  title,
  current,
  target,
  deadline,
  onAddSaving,
  onDelete,
}: Props) {

  const percentage = Math.min(
    Math.round((current / target) * 100),
    100
  );

  return (
    <Card>

      <div className="flex items-start justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            {title}
          </h2>

          <p className="text-slate-500 mt-1">
            {deadline}
          </p>

        </div>

        <span className="text-3xl font-black text-green-600">

          {percentage}%

        </span>

      </div>

      <div className="mt-6">

        <Progress value={percentage} />

      </div>

      <div className="mt-6 flex justify-between">

        <div>

          <p className="text-sm text-slate-500">

            Current

          </p>

          <h3 className="font-bold text-green-600">

            {formatCurrency(current)}

          </h3>

        </div>

        <div className="text-right">

          <p className="text-sm text-slate-500">

            Target

          </p>

          <h3 className="font-bold">

            {formatCurrency(target)}

          </h3>

        </div>

      </div>

      <div className="mt-6 rounded-2xl bg-slate-100 p-4">

        <div className="flex justify-between">

          <span>

            Remaining

          </span>

          <span className="font-bold">

            {formatCurrency(
              target - current
            )}

          </span>

        </div>

      </div>

      <div className="mt-6 flex gap-3">

        <button
          onClick={onAddSaving}
          className="flex-1 rounded-xl bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
        >

          + Add Saving

        </button>

        <button
          onClick={onDelete}
          className="rounded-xl bg-red-500 px-5 text-white hover:bg-red-600"
        >

          Delete

        </button>

      </div>

    </Card>
  );
}