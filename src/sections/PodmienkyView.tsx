// src\sections\PodmienkyView.tsx

"use client"

import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';


export default function PodmienkyView() {

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5, flexDirection: "column", }}>
      <Typography variant='h4'> Podmienky používania </Typography>
    </Box>
  );
}
