import type { Metadata } from 'next'
import ThemeProvider from './providers/ThemeProvider'
import StyledComponentsRegistry from './StyledComponentRegistry'

export const metadata: Metadata = {
    title: 'Utthan',
    icons : {
        icon : "/viki.png"
    }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    )
}

