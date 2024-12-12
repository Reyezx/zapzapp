// src/app/auth/prihlasenie/page.tsx
"use client";

import { signIn } from "next-auth/react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function LoginPage() {
  const handleSignIn = () => {
    signIn('google');
  };


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh"
      }}
    >
      <Card sx={{ boxShadow: 3, minWidth: 450 }}>
        <CardContent sx={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" component="h1">
            Prihlásenie
          </Typography>
          <Typography sx={{ mb: 2, mt: 2 }}>
            Nemáte účet? <Link href="registracia" color="secondary" underline="hover" fontStyle="italic">Zaregistrujte sa</Link>
          </Typography>

          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            onClick={handleSignIn}
            sx={{ mb: 1, mt: 1 }}
          >
            Prihlásiť sa pomocou Google
          </Button>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
          >
            Prihlásiť sa pomocou Githubu
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}
