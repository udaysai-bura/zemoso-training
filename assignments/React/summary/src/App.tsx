import { Box } from "@mui/material";
import { CreditSummaryPage } from "./components/pages/CreditSummaryPage/CreditSummaryPage";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#121318", 
      }}
    >
      <CreditSummaryPage />
    </Box>
  );
}

export default App;
