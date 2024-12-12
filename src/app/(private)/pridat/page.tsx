// src/app/pridat/page.tsx


import {Typography, Box} from '@mui/material';

export const metadata = {title: " Pridať | ZapZapp"}

export default function Add() {

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5, flexDirection: "column", }}>
      <Typography variant='h4'> Pridať post </Typography>
    </Box>
  );
}
