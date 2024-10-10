// src/app/prispevok/[id]/page.tsx


import Typography from '@mui/material/Typography';

export const metadata = {title: " Detail prispevkov | Miligram"}

export default function PostDetail({ params, }: {params: {prispevokid: string};}) {

  return (

    <Typography> Detail prispevkov {params.prispevokid}</Typography>

  );
}
