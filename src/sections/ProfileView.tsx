// src\sections\ProfileView.tsx

"use client"

import {Typography, Box, Avatar} from '@mui/material';
import { useSession } from 'next-auth/react';

export default function ProfileDetailView() {
    const { data: session, status} = useSession();
  
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5, flexDirection: "column", }}>
        <Typography variant='h4'> Detail profilu </Typography>
        <Avatar sx={{width: 256, height: 256}} alt={session?.user?.name || "User"} src={session?.user?.image || undefined} />
        <Typography>{session?.user?.name}</Typography>
      </Box>
    );
  }