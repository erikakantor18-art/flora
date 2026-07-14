import Card from "./Card";

type Props = {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
  color: "green" | "red" | "blue" | "yellow";
};

const colors = {
  green: "bg-green-100 text-green-600",
  red: "bg-red-100 text-red-600",
  blue: "bg-blue-100 text-blue-600",
  yellow: "bg-yellow-100 text-yellow-600",
};

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  color,
}: Props) {
  return (
    <Card className="transition hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 break-words text-2xl font-black lg:text-3xl">
            {value}
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            {subtitle}
          </p>

        </div>

        <div
          className={`rounded-2xl p-4 ${colors[color]}`}
        >
          {icon}
        </div>

      </div>

    </Card>
  );
}