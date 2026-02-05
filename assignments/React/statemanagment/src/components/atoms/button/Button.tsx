type ButtonProps = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
};

export default function Button({ label, onClick, className = "" }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}
