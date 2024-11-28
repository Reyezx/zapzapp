// src/app/auth/prihlasenie/page.tsx
"use client";

import { signIn } from "next-auth/react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import GoogleIcon from '@mui/icons-material/Google'; // Icon for Google login

export default function LoginPage() {
  const handleSignIn = () => {
    signIn('google'); // Initiates Google login
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        gap: 2,
      }}
    >
      <Typography variant="h4" component="h1">
        Prihláste sa pomocou Google
      </Typography>

      <Button
        variant="contained"
        startIcon={<GoogleIcon />}
        onClick={handleSignIn}
        sx={{ mt: 2 }}
      >
        Prihlásiť sa pomocou Google
      </Button>
    </Box>
  );
}
