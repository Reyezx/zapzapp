// src/pages/_app.tsx
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline /> {/* This provides a consistent baseline for styling */}
      <Component {...pageProps} /> {/* This renders the current page */}
    </>
  );
}

export default MyApp;
