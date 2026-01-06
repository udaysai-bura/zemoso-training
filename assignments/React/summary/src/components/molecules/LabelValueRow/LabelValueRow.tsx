import { Stack } from "@mui/material";
import { Text } from "../../atoms/Text/Text";

type LabelValueRowProps = {
  label: string;
  value: string;
};

export const LabelValueRow = ({
  label,
  value,
}: LabelValueRowProps) => {
  return (
    <Stack direction="row" justifyContent="space-between" mt={1} >
      <Text variant="caption">{label}</Text>
      <Text>{value}</Text>
    </Stack>
  );
};
