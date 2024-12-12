import { createTheme } from '@mui/material/styles';

// Light theme colors
const lightPalette = {
  primary: {
    main: '#F5A9B8', // pink
  },
  secondary: {
    main: '#5BCEFA', // light blue
  },
  background: {
    default: '#fafafa', 
    paper: '#ffffff', 
  },
  text: {
    primary: '#000000', 
    secondary: '#555555', 
  },
};

// Dark theme colors
const darkPalette = {
  primary: {
    main: '#D162A4', // pink
  },
  secondary: {
    main: '#FF9A56', // light orange
  },
  background: {
    default: '#1a1a1a', 
    paper: '#2c2c2c', 
  },
  text: {
    primary: '#fff', 
    secondary: '#a0a0a0', 
  },
};

// Create the theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light', // Set the mode to 'light'
    ...lightPalette, // Add light palette colors
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Set the mode to 'dark'
    ...darkPalette, // Add dark palette colors
  },
});