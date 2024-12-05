// src/app/(home)/page.tsx


import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export const metadata = { title: "Domov | ZapZapp" };

export default async function HomePage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/prispevok");
  }

  return (
    <Container>
      <Typography variant='h4'> Domovská stránka - Neprihlásený user </Typography>
      <Typography variant='h6'> Prihláste sa, aby ste mohli pridať príspevky a zobraziť profil. </Typography>
    </Container>
  );
}