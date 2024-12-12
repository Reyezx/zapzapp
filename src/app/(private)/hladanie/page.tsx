// src/app/hladanie/page.tsx


import {Typography, Box} from '@mui/material/';

export const metadata = {title: " Hladať | ZapZapp"}

export default function Search() {

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5, flexDirection: "column", }}>
      <Typography variant='h4'> Hľadanie </Typography>
    </Box>
  );
}
