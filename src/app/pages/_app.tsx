// src/pages/_app.tsx
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';
import NavBar from 'src/components/NavBar.tsx';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline /> {/* This provides a consistent baseline for styling */}
      <NavBar />
      <Component {...pageProps} /> {/* This renders the current page */}
    </>
  );
}

export default MyApp;
