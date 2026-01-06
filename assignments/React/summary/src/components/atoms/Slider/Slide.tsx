type SliderProps = {
  value: number;
  onChange: (value: number) => void;
};
export const Slide = ({ value, onChange }: SliderProps) => {
  return (
    <input
      type="range"
      min={0}
      max={100}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  );
};
