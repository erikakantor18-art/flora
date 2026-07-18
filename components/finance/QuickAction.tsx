import { Card } from "@/components/ui/Card";

type Action = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  onClick?: () => void;
};

type QuickActionProps = {
  actions: Action[];
};

export default function QuickAction({
  actions,
}: QuickActionProps) {
  return (
    <Card>

      <h2 className="text-xl font-bold">
        Quick Actions
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-4">

        {actions.map((action, index) => (

          <button
            key={index}
            onClick={action.onClick}
            className="rounded-2xl border border-slate-200 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-50"
          >

            <div className="mb-4 inline-flex rounded-2xl bg-emerald-100 p-3 text-emerald-600">

              {action.icon}

            </div>

            <h3 className="font-semibold">

              {action.title}

            </h3>

            <p className="mt-1 text-sm text-slate-500">

              {action.subtitle}

            </p>

          </button>

        ))}

      </div>

    </Card>
  );
}