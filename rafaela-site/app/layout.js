import './globals.css'

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
      </head>
      <body>{children}</body>
    </html>
  )
}
