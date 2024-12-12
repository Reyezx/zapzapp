// src/app/(home)/page.tsx


import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export const metadata = { title: "Domov | ZapZapp" };

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/prispevok");
  }

  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", mt: 5, flexDirection: "column"}}>
      <Typography variant='h4'> Domovská stránka - Neprihlásený user </Typography>
      <Typography variant='h6'> Prihláste sa, aby ste mohli pridať príspevky a zobraziť profil. </Typography>
    </Box>
  );
}