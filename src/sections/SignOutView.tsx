// src\sections\SignOutView.tsx

"use client";

import { signOut } from "next-auth/react";
import { Button, Box, Typography, Card, CardContent } from "@mui/material";


export default function SignOutView() {
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
      <Card sx={{ boxShadow: 3, minWidth: 400}}>
        <CardContent sx={{ textAlign: "center", display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" >
            Naozaj sa chcete odhlásiť?
          </Typography>
          <Typography sx={{ mb: 2, mt: 2 }}>
            Vidíme sa nabudúce
          </Typography>
          <Button variant="outlined" onClick={() => signOut()}>
            Odhlásiť sa
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}