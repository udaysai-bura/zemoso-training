import {Text} from "../atoms/Text";
type Props={
    evenCount: number;
    oddCount:number;
};
export const Counter=({evenCount,oddCount}:Props)=>{
    return(
        <div>
            <Text text={`Even Count: ${evenCount}`} />
            <Text text={`Odd Count: ${oddCount}`} />
        </div>
    );
};