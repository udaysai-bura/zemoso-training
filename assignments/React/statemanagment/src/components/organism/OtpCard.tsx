import Button from "../atoms/button/Button";
import OtpField from "../molecules/OtpFeild";
import "./OtpCardCSS.css";
type Props = {
  otp: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBack: () => void;
  onSubmit: () => void;
};
export default function OtpCard({
  otp,
  onChange,
  onBack,
  onSubmit,
}: Props) {
  return (
    <div className="card">
      <button className="back-link" onClick={onBack}>
        ← Go Back
      </button>
      <h2>Enter OTP</h2>
      <OtpField otp={otp} onChange={onChange} />
      <Button label="Verify OTP" onClick={onSubmit} />
    </div>
  );
}
