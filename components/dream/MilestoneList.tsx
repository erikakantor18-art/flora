import { Card } from "@/components/ui/Card";

type Milestone = {
  title: string;
  completed: boolean;
};

type MilestoneListProps = {
  milestones: Milestone[];
};

export default function MilestoneList({
  milestones,
}: MilestoneListProps) {
  return (
    <Card>

      <h2 className="text-2xl font-bold">
        Milestones
      </h2>

      <div className="mt-6 space-y-4">

        {milestones.map((item) => (

          <div
            key={item.title}
            className="flex items-center justify-between rounded-2xl bg-slate-50 p-4"
          >

            <span>{item.title}</span>

            <span className="text-xl">
              {item.completed ? "✅" : "⬜"}
            </span>

          </div>

        ))}

      </div>

    </Card>
  );
}