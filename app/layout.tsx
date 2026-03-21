import React from 'react'
import { ThemeProvider } from './context/ThemeContext'
import './globals.css' // Assuming your Tailwind styles are here
import Header from '@/Components/Header'
import Footer from '@/Components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Prevents dark mode flicker before React loads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem("theme");
                  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                  if (theme === "dark" || (!theme && systemDark)) {
                    document.documentElement.classList.add("dark");
                  } else {
                    document.documentElement.classList.remove("dark");
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 antialiased transition-colors duration-300">
        <ThemeProvider>
          {/* Flex column keeps the footer at the bottom if the page is short */}
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}