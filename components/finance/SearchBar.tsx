"use client";

type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({
  search,
  setSearch,
}: Props) {
  return (
    <div className="mt-8">

      <input
        type="text"
        placeholder="🔍 Search expense..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-green-500"
      />

    </div>
  );
}