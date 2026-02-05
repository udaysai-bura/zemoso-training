import { useEffect, useState } from "react";
import AuthTemplate from "../template/AuthTemplate";
import ForgetPasswordCard from "../organism/ForgetPasswordCard";
import OtpCard from "../organism/OtpCard";
import LoadingModal from "../organism/LoadingModal";
import "../template/AuthTemplate.css";
import "./ForgetPasswordPage.css";
import "../organism/ForgetPasswordCardCSS.css";

type Step = "forgot" | "modal" | "otp";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState<Step>("forgot");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [otp, setOtp] = useState("");
  
  const EMAIL_REGEX =/^(?!\.)(?!.*\.\.)([A-Za-z0-9._%+-]+)@([A-Za-z0-9-]+\.)+[A-Za-z]{2,}$/;

  function validateEmail(email: string): string {
    if (!email) {
      return "Email is required";
    }
    if (!EMAIL_REGEX.test(email)) {
      return "Please enter a valid email address";
    }
    return "";
  }
  
  function validateOtp(otp: string): string {
    if (!otp) {
      return "OTP is required";
    }
    if (!/^\d{4}$/.test(otp)) {
      return "OTP must be exactly 4 digits";
    }
    return "";
  }

  function handleOtpSubmission() {
    const otpError = validateOtp(otp);
    if (otpError) {
      alert(otpError); 
      return;
    }
    console.log("Email:", email);
    console.log("OTP:", otp);
    alert(`OTP Submitted Successfully \n\nEmail: ${email}\nOTP: ${otp}`);
    setOtp("");
  }

  function handleContinue() {
    const error = validateEmail(email);
    if (error) {
      setEmailError(error);  
      return;
    }
    setEmailError("");       
    setStep("modal");   
  }


  useEffect(() => {
    if (step === "modal") {
      const t = setTimeout(() => setStep("otp"), 5000);
      return () => clearTimeout(t);
    }
  }, [step]);

  return (
    <AuthTemplate
      left={<img src="/ForgetPasswordIMG.png" alt="Forgot password" />}
      right={
        <>
          {step !== "otp" && (
            <ForgetPasswordCard
              email={email}
              error={emailError}
              onEmailChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError("");
              }}
              onContinue={handleContinue}
            />
          )}
          {step === "otp" && (
            <OtpCard
              otp={otp}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setOtp(e.target.value)
              }
              onBack={() => setStep("forgot")}
              onSubmit={handleOtpSubmission}
            />
          )}
          {step === "modal" && <LoadingModal />}
        </>
      }
    />
  );
}
