// src/components/Navbar.tsx
"use client";

import * as React from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useRouter } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navbar() {
  const { data: session } = useSession();
  const [value, setValue] = React.useState('/');
  const router = useRouter();

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const authIcons = [<BottomNavigationAction key="domov" label="Domov" icon={<HomeIcon />} onClick={() => {router.push("/")}} />,
                     <BottomNavigationAction key="profily" label="Profily" icon={<AccountCircleIcon />} onClick={() => {router.push("/profil")}}/>,
                     <BottomNavigationAction key="prispevky" label="Príspevky" icon={<AddCircleIcon />} onClick={() => {router.push("/prispevok")}} />,
                     <BottomNavigationAction key="logout" label="Odhlásiť sa" onClick={() => signOut()} icon={<LogoutIcon />} />]
  
  const nonAuthIcons = [<BottomNavigationAction key="domov" label="Domov" icon={<HomeIcon />} onClick={() => {router.push("/")}} />,
                        <BottomNavigationAction key="login" label="Prihlásenie" icon={<LoginIcon />} onClick={() => {router.push("/auth/prihlasenie")}} />]


  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleNavigation}
      >
        {session ? authIcons : nonAuthIcons}

      </BottomNavigation>
    </Box>
  );
}
``
