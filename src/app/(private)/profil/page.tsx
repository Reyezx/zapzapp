// src/app/profil/page.tsx


import {Typography, Box} from '@mui/material';

export const metadata = {title: " Zoznam profilov | ZapZapp"}

export default function ProfileList() {

  return (

    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5, flexDirection: "column", }}>
      <Typography variant='h4'> Zoznam profilov </Typography>
    </Box>

  );
}
