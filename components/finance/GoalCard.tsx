import { Card } from "@/components/ui/Card";
import Progress from "@/components/ui/Progress";

type GoalCardProps = {
  title: string;
  current: number;
  target: number;
};

export default function GoalCard({
  title,
  current,
  target,
}: GoalCardProps) {
  return (
    <Card>
      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <div className="mt-6">
        <Progress
          value={current}
          max={target}
          showLabel
          size="lg"
        />
      </div>

      <div className="mt-6 flex justify-between text-sm">
        <span>
          Rp {current.toLocaleString("id-ID")}
        </span>

        <span>
          Rp {target.toLocaleString("id-ID")}
        </span>
      </div>
    </Card>
  );
}