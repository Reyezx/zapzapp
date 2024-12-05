// src/sections/HomeNotLoggedIn.tsx

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { signIn } from 'next-auth/react';

export default function HomeNotLoggedIn() {
  return (
    <>
      <Typography variant="h4">Vitajte na ZapZapp!</Typography>
      <Typography>Aby ste získali prístup k príspevkom a profilom, prosím prihláste sa.</Typography>
      <Button variant="contained" onClick={() => signIn()} color="secondary">
        Prihlásiť sa
      </Button>
    </>
  );
}
