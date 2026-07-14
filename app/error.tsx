"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-8">

      <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-xl">

        <h1 className="text-7xl">
          ⚠️
        </h1>

        <h2 className="mt-6 text-3xl font-bold">
          Something went wrong
        </h2>

        <p className="mt-4 text-slate-500">
          {error.message}
        </p>

        <button
          onClick={reset}
          className="mt-8 rounded-2xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
        >
          Try Again
        </button>

      </div>

    </main>
  );
}