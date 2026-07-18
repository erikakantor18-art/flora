import { Card } from "@/components/ui/Card";

type TimelineItem = {
  year: string;
  title: string;
  done?: boolean;
};

type DreamTimelineProps = {
  items: TimelineItem[];
};

export default function DreamTimeline({
  items,
}: DreamTimelineProps) {
  return (
    <Card>

      <h2 className="text-2xl font-bold">
        Timeline
      </h2>

      <div className="mt-8 space-y-6">

        {items.map((item) => (

          <div
            key={item.year}
            className="flex gap-5"
          >

            <div className="flex flex-col items-center">

              <div
                className={`h-4 w-4 rounded-full ${
                  item.done
                    ? "bg-emerald-500"
                    : "bg-slate-300"
                }`}
              />

              <div className="mt-2 h-full w-px bg-slate-200" />

            </div>

            <div>

              <p className="text-sm text-slate-400">
                {item.year}
              </p>

              <h3 className="font-bold">
                {item.title}
              </h3>

            </div>

          </div>

        ))}

      </div>

    </Card>
  );
}