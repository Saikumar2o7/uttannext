"use client"

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themes } from '../styles/theme';
import { GlobalStyle } from '../styles/styles.globals';
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const currentTheme = process.env.NEXT_PUBLIC_APP_THEME || 'vikiSolar';
    const selectedTheme = themes[currentTheme];

    return (
        <StyledThemeProvider theme={selectedTheme}>
            <GlobalStyle />
            {children}
        </StyledThemeProvider>
    );
}
