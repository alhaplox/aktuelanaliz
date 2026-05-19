import Image from 'next/image'
import logo from '@/assets/images/logo-dark.png'
import '@/assets/scss/style.scss'
import AppProviders from '../components/wrappers/AppProviders'
import { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: {
    default: 'Aktüel Analiz | Finans ve Yatırım Akademisi',
    template: '%s | Aktüel Analiz',
  },
  description:
    'BIST, Nasdaq, Kripto Para, Emtia ve Parite piyasalarında profesyonel analiz ve yatırım eğitimi. Aktüel Analiz online eğitim platformu ile finansal özgürlüğünüzü adım adım inşa edin.',
  keywords: [
    'online finans eğitimi',
    'borsa eğitimi',
    'bist 100 analiz',
    'nasdaq yatırım',
    'kripto para eğitimi',
    'emtia ticareti',
    'forex parite eğitimi',
    'teknik analiz kursu',
    'aktüel analiz',
  ],
}

const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <head>
        <style suppressHydrationWarning>{splashScreenStyles}</style>
      </head>
      <body className={`antialiased`}>
        <div id="splash-screen">
          <Image
            alt="Aktüel Analiz Logo"
            width={112}
            height={24}
            src={logo}
            style={{ height: '6%', width: 'auto' }}
            priority
          />
        </div>
        <div id="__next_splash">
          <AppProviders>{children}</AppProviders>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
