// src/app/profil/[id]/page.tsx


import Typography from '@mui/material/Typography';

export const metadata = {title: " Detail profilu | ZapZapp"}

export default function ProfileDetail({ params, }: {params: {id: string};}) {

  return (

    <Typography> Detail profilu {params.id} </Typography>

  );
}
