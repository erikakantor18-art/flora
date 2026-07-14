export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100">

      <div className="text-center">

        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-slate-300 border-t-green-600" />

        <p className="mt-6 text-lg font-semibold text-slate-600">
          Loading Erika OS...
        </p>

      </div>

    </main>
  );
}