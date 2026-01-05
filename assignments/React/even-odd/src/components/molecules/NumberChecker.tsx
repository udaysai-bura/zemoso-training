import { Input } from "../atoms/Input";
import { Text } from "../atoms/Text";
import { Button } from "../atoms/Button";

type Props = {
  value: string;
  result: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

export const NumberChecker = ({
  value,
  result,
  onChange,
  onSubmit,
}: Props) => {
  return (
    <div>
      <Input value={value} onChange={onChange} />
      <Button label="Submit" onClick={onSubmit} />
      {result && <Text text={result} />}
    </div>
  );
};
