'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from 'react';
import { PaletteMode, ThemeProvider, createTheme } from '@mui/material';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState<PaletteMode>('light');

  useEffect(() => {
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 6 && hour < 18) {
      setMode('dark');
    } else {
      setMode('dark');
    }
  }, []);

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <html lang="cs">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <head>
          <title>Obyvatelstvo ČR</title>
        </head>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  )
}
