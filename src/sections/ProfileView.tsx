// src\sections\ProfileView.tsx

"use client"

import {Typography, Box, Avatar, CircularProgress, Card, CardContent, CardMedia, Link} from '@mui/material';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import FetchUserId from './GetUserId';
import hiii from "./GetUserId"

export default function ProfileDetailView() {
  


  hiii(useParams())


  return (
    <Box sx={{ 
      display: "flex", 
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100vh",
      width: "100%",
      pb: 8
    }}>
      <Typography variant='h4' sx={{ mb: 4, mt: 4 }}>Detail profilu</Typography>
      <Avatar sx={{width: 256, height: 256}} alt={user.name || "User"} src={user.image || undefined} />
      <Typography variant="h6" sx={{ mt: 2 }}>{user.name || 'Bez mena'}</Typography>
      <Typography color="text.secondary">{user.email}</Typography>

      <Typography variant="h5" sx={{ mt: 8, mb: 8 }}>Príspevky používateľa</Typography>
      <Box sx={{ 
        display: 'grid', 
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
        gap: 4,
        width: '100%',
        maxWidth: 1200,
        px: { xs: 2, md: 4 }
      }}>
        {user.posts.map((post) => (
          <Card 
            key={post.id} 
            sx={{
              width: "100%", 
              boxShadow: 3, 
              flexDirection: "column", 
              justifyContent: "center", 
              alignItems: "center", 
              textAlign: "center",
              height: '100%'
            }}
          >
            <Link href={`/prispevok/${post.id}`} underline="none" color="text.primary" sx={{ width: '100%' }}>
              <CardMedia
                component="img"
                image={post.imageUrl}
                alt="Post image"
                sx={{
                  width: '100%',
                  height: 300,
                  objectFit: 'cover'
                }}
              />
              {post.caption && (
                <Typography 
                  sx={{ 
                    typography: { sm: 'body1', xs: 'body2' },
                    color: "text.primary",
                    p: 2,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical'
                  }}
                >
                  {post.caption}
                </Typography>
              )}
            </Link>
          </Card>
        ))}
      </Box>
    </Box>
  );
}