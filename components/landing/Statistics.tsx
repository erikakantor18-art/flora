const stats = [
  {
    value: "6+",
    label: "Modules",
  },
  {
    value: "100%",
    label: "Responsive",
  },
  {
    value: "24/7",
    label: "Available",
  },
  {
    value: "∞",
    label: "Your Progress",
  },
];

export default function Statistics() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-6xl px-8">

        <div className="grid gap-8 text-center md:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.label}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-10 transition hover:-translate-y-2 hover:shadow-xl"
            >

              <h2 className="text-5xl font-black text-green-600">

                {item.value}

              </h2>

              <p className="mt-4 text-lg text-slate-500">

                {item.label}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}