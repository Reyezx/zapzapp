// src/app/o-mne/page.tsx

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import { Link } from '@mui/material';

export const metadata = { title: " O mne | ZapZapp" }

export default function Home() {

  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 5, flexDirection: "column", }}>
      <Typography sx={{ mb: 3 }} variant='h4'> Stránke o mne </Typography>
      <Typography sx={{ maxWidth: 800, textAlign: "center", lineHeight: 2 }}>Ahojte! Volám sa Roan Durbák a som študent. <br />

        Môj cieľ je dorobiť túto stránku najlepšie čo viem, a verím, že s každým novým dňom môžem pridať k hodnotám, ktoré prinášam do života druhých. Ak sa chcete dozvedieť viac o mojej práci alebo spolupráci, pokojne sa na mňa obráťte! <br />
        <Link href="https://www.youtube.com/@reyez1983" color="secondary" underline="hover" fontStyle="italic">Youtube</Link> <br />
        <Link href="https://www.instagram.com/_r_.e._n_/profilecard/?igsh=MTJ6dDV4eDM2c3Ziaw==" color="secondary" underline="hover" fontStyle="italic">Instagram</Link> <br />
        <Link href="https://zochova.sk/" color="secondary" underline="hover" fontStyle="italic">Moja škola</Link>
      </Typography>
    </Box>
  );
}
