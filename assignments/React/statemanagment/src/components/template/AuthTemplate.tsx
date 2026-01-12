type Props = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export default function AuthTemplate({ left, right }: Props) {
  return (
    <div className="auth-template">
      <div className="auth-left">{left}</div>
      <div className="auth-right">{right}</div>
    </div>
  );
}
