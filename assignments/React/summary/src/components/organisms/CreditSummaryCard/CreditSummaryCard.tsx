import { useState } from "react";
import { Box, Stack } from "@mui/material";
import { Text } from "../../atoms/Text/Text";
import { Button } from "../../atoms/Button/Button";
import { Divider } from "../../atoms/divider/Divider";
import { LabelValueRow } from "../../molecules/LabelValueRow/LabelValueRow";
import { SliderWithValue } from "../../molecules/SliderWithValue/SliderWithValue";

const TOTAL_CREDIT = 880000;
const RATE = 12;
const TERM = 12;
const DEFAULT_PERCENTAGE = 30;

export const CreditSummaryCard = () => {
  const [percentage, setPercentage] = useState(DEFAULT_PERCENTAGE);

  const selectedAmount = Math.round(
    (TOTAL_CREDIT * percentage) / 100
  );
  const rateAmount = Math.round(
    (selectedAmount * RATE) / 100
  );
  const totalPayout = selectedAmount + rateAmount;

  return (
    <Box
      sx={{
        width: 380,
        p: 3,
        borderRadius: 3,
        bgcolor: "#1f2026",
        color: "#fff",
      }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Text variant="title">Summary</Text>
        <Box
          sx={{
            width: 18,
            mx:1,
            my:2,
            height: 18,
            borderRadius: "50%",
            border: "1px solid #aaa",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
          }}
        >
          i
        </Box>
      </Stack>

      <LabelValueRow label="Term" value={`${TERM} months`} />
      <LabelValueRow label="Selected contracts" value="3" />

      <Stack
        direction="row"
        justifyContent="space-between"
        mt={1}
      >
        <Text variant="caption">Slide to autoselect</Text>
        <Button
          label="Reset"
          size="small"
          variant="secondary"
          fullWidth={false}
          onClick={() => setPercentage(DEFAULT_PERCENTAGE)}
        />
      </Stack>

      <SliderWithValue
        value={percentage}
        max={100}
        onChange={setPercentage}
      />

      <Text variant="caption">
        ${selectedAmount.toLocaleString()} selected of $ 
          {TOTAL_CREDIT.toLocaleString()}
      </Text>

      <Divider />

      <LabelValueRow
        label="Pay back amount"
        value={`$${totalPayout.toLocaleString()}`}
      />
      <LabelValueRow
        label={`Rate (${RATE}%)`}
        value={`$${rateAmount.toLocaleString()}`}
      />

      <Divider />

      <Stack
        direction="row"
        justifyContent="space-between"
      >
        <Text variant="caption">Total Payout</Text>
        <Text variant="title">
          ${totalPayout.toLocaleString()}
        </Text>
      </Stack>

      <Button label="Review Your Credit" />
    </Box>
  );
};
