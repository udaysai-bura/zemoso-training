import { useState } from "react";
import { NumberChecker } from "../molecules/NumberChecker";
import { Counter } from "../molecules/Counter";
import "./EvenOddTracker.css";
export const EvenOddTracker = () => {
  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [evenCount, setEvenCount] = useState<number>(0);
  const [oddCount, setOddCount] = useState<number>(0);
  const handleChange = (input: string) => {
    setValue(input);
  };

  const handleSubmit = () => {
    const num = Number(value);

    if (value === "" || isNaN(num)) {
      setResult("Please enter a valid number");
      return;
    }

    if (num % 2 === 0) {
      setResult("Even Number");
      setEvenCount((prev) => prev + 1);
    } else {
      setResult("Odd Number");
      setOddCount((prev) => prev + 1);
    }
    setValue("");
  };

  return (
    <div className="main">
      <NumberChecker
        value={value}
        result={result}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <Counter evenCount={evenCount} oddCount={oddCount} />
    </div>
  );
};
