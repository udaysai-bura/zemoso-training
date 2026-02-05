import { Slider } from "@mui/material";
import { Text } from "../../atoms/Text/Text";

type SliderWithValueProps = {
  value: number;
  max: number;
  onChange: (value: number) => void;
};

export const SliderWithValue = ({
  value,
  max,
  onChange,
}: SliderWithValueProps) => {
  return (
    <>
      <Slider
        value={value}
        max={max}
        onChange={(_, v) => onChange(v as number)}
        sx={{
          color: "#7367e4",
          height: 8,
          mt:1,
          "& .MuiSlider-thumb": {
            width: 22,
            height: 22,
            borderRadius: "6px",
            border: "3px solid #b3aaff",
          },
        }}
      />
      <Text variant="caption">{value}% selected</Text>
    </>
  );
};
