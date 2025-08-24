import { Ubuntu, Ubuntu_Mono } from 'next/font/google';
import { Providers } from '@/components/providers';
import type { Metadata, Viewport } from 'next';
import '@workspace/ui/globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://sj.sanjuan.gob.ar'),
  title: 'Inicio | Gobierno de San Juan',
  description:
    'Portal oficial del Gobierno de la Provincia de San Juan. Accedé a servicios, trámites, noticias y información institucional de la administración provincial.',
  keywords: [
    'gobierno san juan',
    'provincia san juan',
    'trámites san juan',
    'servicios públicos',
    'argentina',
    'gobierno provincial',
  ],
  authors: [{ name: 'Gobierno de San Juan' }],
  creator: 'Gobierno de San Juan',
  publisher: 'Gobierno de San Juan',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://sj.sanjuan.gob.ar',
    siteName: 'Gobierno de San Juan',
    title: 'Gobierno de San Juan | Oficial',
    description:
      'Portal oficial del Gobierno de la Provincia de San Juan. Accedé a servicios, trámites, noticias y información institucional de la administración provincial.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gobierno de San Juan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@GobiernoSanJuan',
    creator: '@GobiernoSanJuan',
    title: 'Gobierno de San Juan | Oficial',
    description:
      'Portal oficial del Gobierno de la Provincia de San Juan. Accedé a servicios, trámites, noticias y información institucional.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'verification_token_here',
  },
  category: 'government',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

const fontSans = Ubuntu({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '700'],
});

const fontMono = Ubuntu_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
