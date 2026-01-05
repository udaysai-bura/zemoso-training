type InputProps = {
  value: string;
  onChange: (value: string) => void;
};

export const Input = ({ value, onChange }: InputProps) => {
  return (
    <input
      type="text"
      inputMode="numeric"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter a number"
    />
  );
};
