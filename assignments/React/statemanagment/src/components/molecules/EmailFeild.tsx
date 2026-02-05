import Input from "../atoms/input/Input";
type Props = {
  email: string;
  error: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function EmailField({ email, error, onChange }: Props) {
  return (
    <div className="field">
      <label className="field-label">Email</label>
      <Input
        type="email"
        value={email}
        placeholder="example@gmail.com"
        onChange={onChange}
      />
      {error && <span className="error">{error}</span>}
    </div>
  );
}
