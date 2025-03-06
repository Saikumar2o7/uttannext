import type { Metadata } from 'next';
import ThemeProvider from './providers/ThemeProvider';
import StyledComponentsRegistry from './StyledComponentRegistry';
import { Suspense } from 'react';
import Loader from './components/Loader';

export const metadata: Metadata = {
  title: 'Utthan',
  icons: {
    icon: '/viki.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <Suspense fallback={<Loader />}>
              {children}
            </Suspense>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}