// src/sections/PostsView.tsx

import { signIn } from "next-auth/react";
import Typography from "@mui/material/Typography";
import { prisma } from "@/app/api/auth/[...nextauth]/prisma";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";
import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from "@mui/material/CardMedia";

export default async function LoginPage() {
  const posts = await prisma.post.findMany({
    include: {
      user: true,
    },
  });



  return (
    <Box sx={{
      flexGrow: 1,
      display: "flex",
      justifyContent: "right",
      flexDirection: "column",
      alignItems: "center",
      height: "100%"
    }} key={Math.random()}>
      <Typography variant="h2" sx={{mb: 8, mt: 8,}}>Príspevky</Typography>
        {posts.map((post) => (
          <Card sx={{maxWidth: 600, width:"100%", boxShadow: 3, flexDirection: "column", justifyContent: "center", mb: 8, alignItems: "center", textAlign: "center"}}>
          <Link href={"prispevok/" + post.id} underline="none" color="text.primary">
            <CardMedia
                component="img"
                image={post.imageUrl}
              />
            <Typography sx={{ typography: { sm: 'body1', xs: 'body2' } }} color="text.primary">{post.caption}</Typography>
            <Typography sx={{ typography: { sm: 'body1', xs: 'body2' } }} color="text.secondary">{post.user.name}</Typography>
        </Link>
        </Card>
        ))}
    </Box>
  );
}
