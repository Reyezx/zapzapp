// src/app/prispevok/[id]/page.tsx


import Typography from '@mui/material/Typography';
import { prisma } from "@/app/api/auth/[...nextauth]/prisma";
import { Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import IconButton from '@mui/material/IconButton';


export const metadata = {title: " Detail prispevkov | ZapZapp"}

export default async function PostDetail({ params, }: {params: Promise<{prispevokid: string}>;}) {
  const posts = await prisma.post.findMany({
    where: {
      id: {
        contains: (await params).prispevokid
      }
    },
    include: {
      user: true
    }
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh"
      }}
    >
        {posts.map((post) => (
          <Card sx={{maxWidth: 800, width:"100%", boxShadow: 3, flexDirection: "column", justifyContent: "center", mb: 8, alignItems: "center", textAlign: "center"}}>
            <CardMedia
                component="img"
                image={post.imageUrl}
              />
            <Typography sx={{ typography: { sm: 'body1', xs: 'body2' } }} color="text.primary">{post.caption}</Typography>
            <Typography sx={{ typography: { sm: 'body1', xs: 'body2' } }} color="text.secondary">{post.user.name}</Typography>
        </Card>
        ))}
      <IconButton
        sx={{ position: "absolute", top: 10, left: 10}} href="/prispevok"
      >
        <ArrowBackIcon></ArrowBackIcon>
      </IconButton>
    </Box>
  );
}
