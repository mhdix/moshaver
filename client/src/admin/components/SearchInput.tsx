interface SearchInputProps {
  placeholder?: string;
  name?: string;
  defaultValue?: string;
}

export default function SearchInput({
  placeholder = "جستجو...",
  name = "q",
  defaultValue,
}: SearchInputProps) {
  return (
    <input
      type="search"
      name={name}
      defaultValue={defaultValue}
      placeholder={placeholder}
      className="h-11 w-full rounded-xl border border-line bg-bg px-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/15 md:max-w-sm"
    />
  );
}
