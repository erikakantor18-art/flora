type InputProps = {
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

export default function Input({
  placeholder,
  value,
  type = "text",
  onChange,
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full rounded-2xl border border-slate-200 px-5 py-3 outline-none transition-all duration-300 focus:border-green-500"
    />
  );
}