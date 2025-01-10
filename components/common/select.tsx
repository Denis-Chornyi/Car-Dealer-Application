interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder: string;
  disabled?: boolean;
}

export function Select({ value, onChange, options, placeholder, disabled }: SelectProps) {
  return (
    <select
      value={value}
      onChange={e => onChange(e.target.value)}
      disabled={disabled}
      className="w-full px-3 py-2 rounded-md border border-gray-300 bg-white text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
