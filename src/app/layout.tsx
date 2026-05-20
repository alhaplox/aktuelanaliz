import Image from 'next/image'
import Script from 'next/script'
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
        {/* 2. Adım: Pixel Kodunu Buraya Ekleyin */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1037000398898875');
            fbq('track', 'PageView');
          `}
        </Script>

        {/* Noscript kısmı (Opsiyonel: JS kapalı tarayıcılar için) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1037000398898875&ev=PageView&noscript=1"
          />
        </noscript>

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