type ProgressProps = {
  value: number;
};

export default function Progress({
  value,
}: ProgressProps) {
  return (
    <div className="h-3 w-full rounded-full bg-slate-200">

      <div
        className="h-3 rounded-full bg-green-600 transition-all duration-500"
        style={{
          width: `${value}%`,
        }}
      />

    </div>
  );
}