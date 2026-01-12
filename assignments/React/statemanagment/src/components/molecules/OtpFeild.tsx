import Input from "../atoms/input/Input";
type props={
    otp: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>)=>void;
}
export default function OtpFeild({otp,onChange}:props){
    return(
        <Input
        value={otp}
        placeholder="Enter OTP"
        onChange={onChange}
        />
    )
}