import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-8">

      <div className="w-full max-w-xl rounded-3xl bg-white p-10 text-center shadow-xl">

        <h1 className="text-8xl font-black text-green-600">
          404
        </h1>

        <h2 className="mt-6 text-3xl font-bold">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-500">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-2xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
        >
          Back to Dashboard
        </Link>

      </div>

    </main>
  );
}