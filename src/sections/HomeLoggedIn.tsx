// src/sections/HomeLoggedIn.tsx
"use client"; // Required for client-side components

import { useSession } from "next-auth/react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function HomeLoggedIn() {
  const { data: session, status } = useSession();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {status === "authenticated" ? (
        <>
          <Typography variant="h4">Vitajte, {session?.user?.name}!</Typography>
          <Typography variant="body1">Ste prihlásený do aplikácie ZapZapp.</Typography>
        </>
      ) : (
        <Typography variant="h4">Vitajte na ZapZapp!</Typography>
      )}
    </Box>
  );
}
