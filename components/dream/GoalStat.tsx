import { Card } from "@/components/ui/Card";

type GoalStatProps = {
  title: string;
  value: string;
};

export default function GoalStat({
  title,
  value,
}: GoalStatProps) {
  return (
    <Card>

      <p className="text-sm text-slate-500">
        {title}
      </p>

      <h2 className="mt-3 text-3xl font-black">
        {value}
      </h2>

    </Card>
  );
}