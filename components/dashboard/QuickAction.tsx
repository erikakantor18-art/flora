import Link from "next/link";

import { Card } from "@/components/ui/Card";

const actions = [
  {
    title: "Add Expense",
    href: "/finance",
    emoji: "💰",
    color: "bg-green-500",
  },
  {
    title: "Goals",
    href: "/goals",
    emoji: "🎯",
    color: "bg-blue-500",
  },
  {
    title: "Study",
    href: "/study",
    emoji: "📚",
    color: "bg-purple-500",
  },
  {
    title: "Planner",
    href: "/planner",
    emoji: "📅",
    color: "bg-orange-500",
  },
];

export default function QuickAction() {
  return (
    <Card>

      <h2 className="text-2xl font-bold">
        Quick Actions
      </h2>

      <div className="mt-6 grid grid-cols-2 gap-4">

        {actions.map((item) => (

          <Link
            key={item.title}
            href={item.href}
            className={`${item.color} rounded-2xl p-5 text-white transition hover:scale-[1.02]`}
          >

            <p className="text-3xl">
              {item.emoji}
            </p>

            <h3 className="mt-4 font-bold">
              {item.title}
            </h3>

          </Link>

        ))}

      </div>

    </Card>
  );
}