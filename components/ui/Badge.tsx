type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({
  children,
}: BadgeProps) {
  return (
    <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
      {children}
    </span>
  );
}