// src/app/auth/prihlasenie/page.tsx
"use client";

import { signIn } from "next-auth/react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function RegisterPage() {
  const handleSignIn = () => {
    signIn('google');
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
        mx: "auto",
        mt: 2
      }}
    >
      <Typography variant="h4" component="h1">
        Registrácia
      </Typography>
      <Typography color="text.secondary">
        Máte účet? <a href="prihlasenie">Prihláste sa</a>
      </Typography>

      <Button
        variant="outlined"
        startIcon={<GoogleIcon />}
        onClick={handleSignIn}
        sx={{ mb: 1, mt: 1 }}
      >
        Registrovať sa pomocou Google
      </Button>
      <Button
        variant="outlined"
        startIcon={<GitHubIcon />}
      >
        Registrovať sa pomocou Githubu
      </Button>
    </Container>
  );
}
