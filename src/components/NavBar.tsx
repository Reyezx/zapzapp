// src/components/Navbar.tsx
"use client";

import * as React from 'react';
import { BottomNavigation, BottomNavigationAction, Box , Avatar, IconButton} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import SecurityIcon from '@mui/icons-material/Security';
import { useTheme } from "../components/ThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import InfoIcon from '@mui/icons-material/Info';
import Article from '@mui/icons-material/Article';

export default function Navbar() {
  const { data: session } = useSession();
  const [value, setValue] = React.useState('/');
  const router = useRouter();
  const { toggleTheme, isDarkMode} = useTheme();

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  const nonAuthIcons = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "O nás", value: "/o-mne", icon: <InfoIcon />},
    { label: "Registrácia", value: "/auth/registracia", icon: <AppRegistrationIcon /> },
    { label: "Prihlásenie", value: "/auth/prihlasenie", icon: <LoginIcon /> },
  ];
  
  const authIcons = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "Hľadať", value: "/hladanie", icon: <SearchIcon /> },
    { label: "Pridať", value: "/pridat", icon: <AddCircleIcon /> },
    {
      label: "Profil",
      value: "/profil",
      icon: <Avatar alt={session?.user?.name || "User"} src={session?.user?.image || undefined} />
    },
    { label: "Odhlásiť", value: "/auth/odhlasenie", icon: <LogoutIcon /> },
  ];

  const navigationPaths = session ? authIcons : nonAuthIcons;
  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <BottomNavigation showLabels value={value} onChange={handleNavigation}>
        {navigationPaths.map((path) => (
          <BottomNavigationAction key={path.value} label={path.label} value={path.value} icon={path.icon} />
        ))}
      </BottomNavigation>

      <IconButton
        onClick={toggleTheme}
        sx={{ position: "absolute", top: 10, right: 10 }}
      >
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Box>
  );
}
