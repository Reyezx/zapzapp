// src/app/hladanie/page.tsx

'use client';

import { Typography, Box, TextField, InputAdornment, Avatar, CircularProgress } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect, useRef, useCallback } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { searchUsers } from '@/app/actions/search';
import { useRouter } from 'next/navigation';

interface User {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
}

export const metadata = {title: " Hladať | ZapZapp"}

export default function SearchView() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebounce(searchQuery, 500);
  const observer = useRef<IntersectionObserver>();
  const lastUserRef = useCallback((node: HTMLDivElement) => {
    if (isLoading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [isLoading, hasMore]);

  useEffect(() => {
    setPage(1);
    setSearchResults([]);
  }, [debouncedSearch]);

  useEffect(() => {
    const performSearch = async () => {
      setIsLoading(true);
      try {
        const response = await searchUsers(debouncedSearch, page);
        setSearchResults(prev => page === 1 ? response.users : [...prev, ...response.users]);
        setHasMore(response.hasMore);
      } catch (error) {
        console.error('Error searching users:', error);
      } finally {
        setIsLoading(false);
      }
    };

    performSearch();
  }, [debouncedSearch, page]);

  const handleUserClick = (userId: string) => {
    router.push(`/profil/${userId}`);
  };

  return (
    <Box sx={{ 
      display: "flex", 
      flexDirection: "column",
      height: 'calc(100vh - 100px)',
      maxWidth: 600,
      mx: 'auto',
      px: 2,
      pt: 5
    }}>
      <TextField
        fullWidth
        placeholder="Zadajte hľadaný text..."
        variant="outlined"
        value={searchQuery}
        autoComplete="off"
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        sx={{
          mb: 3,
          '& .MuiOutlinedInput-root': {
            borderRadius: 2,
            backgroundColor: 'background.paper',
            '&:hover fieldset': {
              borderColor: 'primary.main',
              borderWidth: '2px',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
              borderWidth: '2px',
            }
          }
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      {isLoading && page === 1 && (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <CircularProgress />
        </Box>
      )}

      <Box sx={{ 
        width: '100%',
        flex: 1,
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '4px',
        },
      }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {searchQuery ? 'Výsledky vyhľadávania:' : ''}
        </Typography>
        {searchResults.map((user, index) => (
          <Box 
            key={user.id} 
            ref={index === searchResults.length - 1 ? lastUserRef : undefined}
            onClick={() => handleUserClick(user.id)}
            sx={{ 
              p: 2, 
              borderBottom: '1px solid',
              borderColor: 'divider',
              '&:last-child': { borderBottom: 'none' },
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: 'action.hover',
              },
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}
          >
            <Avatar 
              src={user.image || undefined} 
              alt={user.name || 'User'} 
              sx={{ width: 40, height: 40 }}
            />
            <Box>
              <Typography variant="subtitle1">{user.name || 'Bez mena'}</Typography>
              <Typography variant="body2" color="text.secondary">{user.email}</Typography>
            </Box>
          </Box>
        ))}
        {isLoading && page > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 2 }}>
            <CircularProgress size={24} />
          </Box>
        )}
      </Box>
    </Box>
  );
}
