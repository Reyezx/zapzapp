// src/app/prispevok/[id]/page.tsx


import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container/Container';

export const metadata = {title: " Detail prispevkov | ZapZapp"}

export default async function PostDetail({ params, }: {params: Promise<{prispevokid: string}>;}) {
  return (
    <Container>
      <Typography> Detail prispevkov {(await params).prispevokid}</Typography>
    </Container>

  );
}
