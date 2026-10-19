import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import { site } from '@/data/site';
import './globals.css';
import './signature.css';
import './campaign.css';
import './essence.css';
import './isabela.css';
const metadataBase = new URL(site.seo.url || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000'));
export const metadata: Metadata = {
  metadataBase,
  title: site.seo.title,
  description: site.seo.description,
  ...(site.seo.url ? { alternates: { canonical: '/' } } : {}),
  openGraph: { title: site.seo.title, description: site.seo.description, locale: 'pt_BR', type: 'website' },
};
export default function RootLayout({children}: Readonly<{children:React.ReactNode}>) {
  return <html lang="pt-BR"><body style={{
    '--paper': site.colors.paper,
    '--ink': site.colors.ink,
    '--taupe': site.colors.taupe,
    '--champagne': site.colors.champagne,
    '--dark': site.colors.dark,
    '--rose': site.colors.taupe,
    '--rose-deep': site.colors.accentDeep,
    '--rose-light': site.colors.champagne,
    '--ivory': site.colors.paper,
    '--wine': site.colors.wine,
    '--muted': site.colors.muted,
    '--line': `${site.colors.dark}30`,
    '--sand': site.colors.sand,
    '--accent-deep': site.colors.accentDeep,
    '--surface': site.colors.surface,
  } as CSSProperties}>{children}</body></html>
}
