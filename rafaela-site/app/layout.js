import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Rafaela Geiger — Especialista em Tráfego Pago',
  description:
    'Gestora de tráfego e analista de mídia paga e performance. Ajudo negócios locais, infoprodutores e marcas a crescerem de forma previsível com estratégia, dados e otimização contínua.',
  keywords:
    'tráfego pago, meta ads, google ads, gestão de anúncios, Rafaela Geiger, analista de mídia paga, anúncios online, performance digital',
  openGraph: {
    title: 'Rafaela Geiger — Especialista em Tráfego Pago',
    description:
      'Transforme investimento em anúncios em crescimento real e mensurável.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KPXWVVVV');`,
          }}
        />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KPXWVVVV"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  )
}
