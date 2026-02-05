type InputProps={
    value:string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    placeholder?: string;
    type?:string;
};
export default function Input({value,onChange,placeholder,type}:InputProps){
    return (
        <input type={type} value={value} placeholder={placeholder} onChange={onChange}/>
    )
};