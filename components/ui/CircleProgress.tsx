type Props = {
  value: number;
  size?: number;
  stroke?: number;
};

export default function CircleProgress({

  value,

  size = 170,

  stroke = 14,

}: Props) {

  const radius =
    (size - stroke) / 2;

  const circumference =
    2 * Math.PI * radius;

  const offset =
    circumference -
    (value / 100) *
      circumference;

  return (

    <div
      className="relative"
      style={{
        width: size,
        height: size,
      }}
    >

      <svg
        width={size}
        height={size}
      >

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e2e8f0"
          strokeWidth={stroke}
          fill="none"
        />

        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#22c55e"
          strokeWidth={stroke}
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size/2} ${size/2})`}
          style={{
            transition:
              "stroke-dashoffset .5s",
          }}
        />

      </svg>

      <div className="absolute inset-0 flex items-center justify-center">

        <div className="text-center">

          <h2 className="text-3xl font-black">

            {value}%

          </h2>

          <p className="text-xs text-slate-500">

            Complete

          </p>

        </div>

      </div>

    </div>

  );

}