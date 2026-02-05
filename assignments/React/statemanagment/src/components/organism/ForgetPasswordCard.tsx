import EmailField from "../molecules/EmailFeild";
import Button from "../atoms/button/Button";
import "./ForgetPasswordCardCSS.css";

type Props = {
  email: string;
  error: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onContinue: () => void;
};

export default function ForgetPasswordCard({
  email,
  error,
  onEmailChange,
  onContinue,
}: Props) {
  return (
    <div className="card">
      <h2>Forgot Password</h2>
      <p>No worries, we will send reset instructions</p>
      <EmailField
        email={email}
        error={error}
        onChange={onEmailChange}
      />
      <Button
        label="Continue"
        onClick={onContinue}
        className="primary-btn"
      />

    </div>
  );
}
