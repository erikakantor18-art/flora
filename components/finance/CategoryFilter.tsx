"use client";

type Props = {
  category: string;
  setCategory: (value: string) => void;
};

const categories = [
  "All",
  "Food",
  "Transport",
  "Shopping",
  "Education",
  "Entertainment",
  "Other",
];

export default function CategoryFilter({
  category,
  setCategory,
}: Props) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">

      {categories.map((item) => (

        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`rounded-full px-5 py-2 transition ${
            category === item
              ? "bg-green-600 text-white"
              : "bg-slate-200 hover:bg-slate-300"
          }`}
        >
          {item}
        </button>

      ))}

    </div>
  );
}