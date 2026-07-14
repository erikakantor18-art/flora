export default function Topbar() {
  return (
    <header className="flex items-center justify-between rounded-3xl bg-white p-6 shadow">

      <div>

        <h1 className="text-3xl font-black text-slate-800">
          Dashboard
        </h1>

        <p className="mt-1 text-slate-500">
          Welcome back, Erika 👋
        </p>

      </div>

      <div className="flex items-center gap-5">

        <input
          type="text"
          placeholder="🔍 Search..."
          className="w-72 rounded-2xl border border-slate-200 px-5 py-3 outline-none transition focus:border-green-500"
        />

        <button className="rounded-2xl bg-slate-100 p-4 transition hover:bg-slate-200">
          🔔
        </button>

        <div className="flex items-center gap-3 rounded-2xl bg-slate-100 px-4 py-2">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
            E
          </div>

          <div>

            <h2 className="font-semibold">
              Erika
            </h2>

            <p className="text-sm text-slate-500">
              Developer
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}