import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  Stack,
} from "@mui/material";

export default function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 380,
          backgroundColor: "background.paper",
          p: 4,
          borderRadius: 3,
          boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        }}
      >
        <Stack spacing={3} alignItems="center">
          <Avatar 
            sx={{ 
              width: 80, 
              height: 80, 
              bgcolor: "primary.main",
              fontSize: "2rem",
              fontWeight: 600,
            }}
          >
            U
          </Avatar>

          <Typography variant="h6">
            Profile Settings
          </Typography>

          <TextField
            label="Username"
            fullWidth
            placeholder="Enter your name"
            variant="outlined"
          />

          <TextField
            label="Email"
            fullWidth
            placeholder="example@mail.com"
            variant="outlined"
            type="email"
          />
          
          <Button
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ mt: 1 }}
          >
            Save Changes
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}