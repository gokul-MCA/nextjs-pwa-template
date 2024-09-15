import './globals.css';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { Metadata, Viewport } from 'next';
import Template from './template';
import { ThemeProvider } from './components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

export const metadata: Metadata = {
  title: 'NextJs 14',
  description: 'Nextjs 14 starter template',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#e0c8fd" />

        <meta property="og:title" content="Nextjs App" />
        <meta name="twitter:title" content="Nextjs App" />

        <meta name="description" content="Nextjs 14 starter template" />
        <meta property="og:description" content="Nextjs 14 starter template" />
        <meta name="twitter:description" content="Nextjs 14 starter template" />

        <meta property="og:image" content="https://i.imgur.com/Z3bMJXy.jpg" />
        <meta name="twitter:image" content="https://i.imgur.com/Z3bMJXy.jpg" />
      </head>
      <body
        className={classNames({
          'debug-screens': process.env.NODE_ENV === 'development',
        })}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Template>{children}</Template>
        </ThemeProvider>
      </body>
    </html>
  );
}
