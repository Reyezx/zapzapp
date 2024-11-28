// src/app/prispevok/[id]/page.tsx


import Typography from '@mui/material/Typography';

export const metadata = {title: " Detail prispevkov | ZapZapp"}

export default async function PostDetail({ params, }: {params: Promise<{prispevokid: string}>;}) {
  return (

    <Typography> Detail prispevkov {(await params).prispevokid}</Typography>

  );
}
