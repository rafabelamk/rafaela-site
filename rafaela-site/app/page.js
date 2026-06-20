'use client'

import { useState, useEffect } from 'react'

const WA =
  'https://wa.me/5511961590986?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20uma%20an%C3%A1lise%20gratuita!'

// ─────────── DATA ───────────
const STATS = [
  { value: '45+', label: 'Contas gerenciadas' },
  { value: '2+', label: 'Anos de experiência' },
  { value: '3', label: 'Plataformas de anúncios' },
  { value: 'R$20K+', label: 'Em investimentos em anúncios' },
]

const SERVICES = [
  {
    icon: '📱',
    platform: 'Meta Ads',
    title: 'Facebook & Instagram',
    desc: 'Campanhas estratégicas no Facebook e Instagram com foco em geração de leads, conversão e reconhecimento de marca — para negócios locais, infoprodutos e lançamentos.',
    tags: ['Lead Gen', 'Conversão', 'Remarketing'],
  },
  {
    icon: '🔍',
    platform: 'Google Ads',
    title: 'Pesquisa & Display',
    desc: 'Apareça no exato momento em que seu cliente está buscando o que você oferece. Campanhas de Search, Display e Performance Max com foco em intenção de compra.',
    tags: ['Search', 'Display', 'Performance Max'],
  },
  {
    icon: '💼',
    platform: 'LinkedIn Ads',
    title: 'B2B & Sponsored Messaging',
    desc: 'Alcance decisores e empresas com campanhas segmentadas por cargo, setor e empresa. Especialidade em Mensagem Patrocinada e Lead Gen Forms para objetivos B2B.',
    tags: ['Mensagem Patrocinada', 'Lead Gen Forms', 'B2B'],
  },
  {
    icon: '📊',
    platform: 'Performance',
    title: 'Relatórios & Análise',
    desc: 'Dashboards personalizados com as métricas que importam: CPL, CPA, ROAS e evolução semanal. Dados claros para decisões inteligentes e otimização contínua.',
    tags: ['Dashboard', 'CPL / CPA', 'Análise Semanal'],
  },
]

const FOR_YOU = [
  'Negócios locais que querem mais clientes de forma previsível',
  'Infoprodutores e especialistas do digital',
  'Empresas com produto ou serviço validado prontas para escalar',
  'Quem quer crescer com estratégia, dados e transparência',
  'Lançamentos, modelos perpétuos e captação de leads',
]

const NOT_FOR_YOU = [
  'Quem busca resultados instantâneos sem investimento',
  'Quem não tem um processo comercial estruturado',
  'Quem só quer métricas de vaidade (curtidas e visualizações)',
  'Quem não está disposto a investir minimamente em anúncios',
]

const METHODOLOGY = [
  {
    num: '01',
    title: 'Atrair',
    desc: 'Identificamos seu público ideal e criamos anúncios que capturam atenção no momento e plataforma certos, com criativos pensados para converter.',
    detail: 'Pesquisa de mercado · Definição de ICP · Criativos estratégicos',
    emoji: '🎯',
  },
  {
    num: '02',
    title: 'Direcionar',
    desc: 'Segmentação inteligente e funil bem estruturado para levar as pessoas certas — com real potencial de compra — até o seu negócio.',
    detail: 'Segmentação avançada · Pixel & rastreamento · Estrutura de campanha',
    emoji: '🚀',
  },
  {
    num: '03',
    title: 'Seduzir',
    desc: 'Mensagens, ofertas e criativos que convertem interesse genuíno em clientes reais, com otimização contínua baseada em dados.',
    detail: 'Otimização contínua · CRO · Relatórios de performance',
    emoji: '💡',
  },
]

const FAQ_DATA = [
  {
    q: 'Eu realmente preciso de um profissional para gerenciar meus anúncios?',
    a: 'Sim. Um profissional experiente traz resultados mais rápidos e evita erros comuns que desperdiçam verba. O digital muda constantemente e exige dedicação exclusiva para extrair o máximo de cada plataforma — e de cada real investido.',
  },
  {
    q: 'Consigo anunciar só para clientes na minha região?',
    a: 'Com certeza. Trabalho com geolocalização precisa — um pin sobre seu endereço, raio de distância (1km, 5km, 50km), cidade, estado ou até bairros específicos. Tudo ajustado ao que faz mais sentido para o seu produto ou serviço.',
  },
  {
    q: 'Qual o investimento mínimo em anúncios para ter resultados?',
    a: 'Recomendo no mínimo R$30/dia em anúncios (≈R$900/mês) para ter resultados iniciais. O valor ideal varia por nicho, ticket médio e audiência — e definimos juntos na análise inicial, sem chute e sem achismo.',
  },
  {
    q: 'Como você garante meu resultado?',
    a: 'Resultados não têm garantia por nenhum profissional sério — eles dependem do conjunto: anúncios + atendimento + processo de venda. O que garanto é estratégia bem planejada, otimização contínua e total transparência nos dados.',
  },
  {
    q: 'Quando vou começar a ver os resultados?',
    a: 'Resultados iniciais podem surgir logo nas primeiras semanas. Resultados consistentes e crescentes costumam aparecer após 60–90 dias, que é o tempo necessário para coletar dados, testar variáveis e otimizar as campanhas com segurança.',
  },
  {
    q: 'Preciso ter um site para anunciar?',
    a: 'Para Meta Ads (Facebook e Instagram) não é necessário — a captação pode acontecer via formulário nativo da plataforma. Para Google Ads é essencial ter um site ou landing page. Também ofereço esse serviço à parte.',
  },
  {
    q: 'Como funciona o contrato e o pagamento?',
    a: 'A taxa de gestão é mensal e pré-paga. Trabalho com período mínimo de 3 meses para que as campanhas amadureçam e gerem resultados consistentes. Os serviços iniciam em até 48 horas úteis após a confirmação do pagamento.',
  },
  {
    q: 'Como funciona o suporte durante a gestão?',
    a: 'Atendimento via WhatsApp em horário comercial (e fins de semana em emergências). Reuniões quinzenais ou mensais de alinhamento com entrega de relatórios de performance detalhados — sem enrolação, só dados e próximos passos.',
  },
]

// ─────────── ICONS ───────────
function IconWhatsApp({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function IconInstagram({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function IconLinkedIn({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
      <path d="M3 8l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconX() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

// ─────────── MAIN ───────────
export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openFAQ, setOpenFAQ] = useState(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0d1b3e]/96 backdrop-blur-md shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex flex-col leading-tight">
            <span className="text-white font-black text-lg tracking-tight">Rafaela Geiger</span>
            <span className="text-[#1d4ed8] text-[10px] font-bold tracking-[0.22em] uppercase">
              Tráfego Pago
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {[
              ['#servicos', 'Serviços'],
              ['#metodo', 'Método ADS'],
              ['#sobre', 'Sobre'],
              ['#faq', 'FAQ'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {label}
              </a>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#1d4ed8] hover:bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-900/40"
            >
              <IconWhatsApp className="w-4 h-4" />
              Fale comigo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#0d1b3e] border-t border-white/10 py-6 px-5 flex flex-col gap-2">
            {[
              ['#servicos', 'Serviços'],
              ['#metodo', 'Método ADS'],
              ['#sobre', 'Sobre'],
              ['#faq', 'FAQ'],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="text-gray-200 hover:text-white text-base font-medium py-3 border-b border-white/5 transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#1d4ed8] text-white text-center px-6 py-3.5 rounded-full font-bold mt-3"
            >
              <IconWhatsApp className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative bg-[#0d1b3e] pt-36 pb-28 px-5 sm:px-8 overflow-hidden"
      >
        {/* BG decorations */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-[#1d4ed8]/8 to-transparent pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#1d4ed8]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-600/5 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-[#1d4ed8]" />
              <span className="text-[#1d4ed8] text-sm font-bold tracking-[0.18em] uppercase">
                Meta Ads · Google Ads · LinkedIn Ads
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.08] mb-6">
              Transforme investimento em anúncios em{' '}
              <span className="text-[#1d4ed8]">crescimento real</span> e mensurável.
            </h1>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              Sou Rafaela Geiger, especialista em tráfego pago. Ajudo negócios locais,
              infoprodutores e marcas a crescerem de forma previsível com estratégia,
              dados e otimização contínua.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={WA}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-[#1d4ed8] hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/40 btn-glow"
              >
                <IconWhatsApp className="w-5 h-5" />
                Quero uma análise gratuita
              </a>
              <a
                href="#servicos"
                className="border border-white/25 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:bg-white/5"
              >
                Ver serviços ↓
              </a>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10">
            {STATS.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="text-4xl md:text-5xl font-black text-white">{s.value}</span>
                <span className="text-gray-400 text-sm leading-snug">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD CAPTURE STRIP ── */}
      <section className="bg-[#1d4ed8] py-10 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white/70 text-xs font-bold uppercase tracking-widest mb-1">
              Análise gratuita e sem compromisso
            </p>
            <h2 className="text-white text-2xl md:text-3xl font-black leading-tight">
              Descubra como escalar seu negócio com tráfego pago estratégico
            </h2>
          </div>
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 flex items-center gap-2 bg-white hover:bg-gray-100 text-[#1d4ed8] px-8 py-4 rounded-full font-bold text-base transition-all duration-200 hover:scale-105 hover:shadow-xl"
          >
            <IconWhatsApp className="w-5 h-5" />
            Falar no WhatsApp →
          </a>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="servicos" className="bg-white py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="text-[#1d4ed8] text-sm font-bold tracking-widest uppercase">
              O que entrego
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0d1b3e] mt-3 max-w-lg leading-tight">
              Gestão completa nas plataformas que mais convertem
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((svc) => (
              <div
                key={svc.platform}
                className="group border border-gray-100 rounded-2xl p-8 card-hover hover:border-[#1d4ed8]/20 cursor-default"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 bg-[#f0f4ff] group-hover:bg-[#1d4ed8] rounded-xl flex items-center justify-center text-2xl transition-colors duration-200 flex-shrink-0">
                    {svc.icon}
                  </div>
                  <div>
                    <span className="text-[#1d4ed8] text-[11px] font-black tracking-widest uppercase block">
                      {svc.platform}
                    </span>
                    <h3 className="text-[#0d1b3e] font-black text-xl leading-tight">{svc.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5 text-[15px]">{svc.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((t) => (
                    <span
                      key={t}
                      className="bg-[#f0f4ff] text-[#1d4ed8] text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IS IT FOR YOU ── */}
      <section className="bg-[#f0f4ff] py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#1d4ed8] text-sm font-bold tracking-widest uppercase">
              Fit ideal
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0d1b3e] mt-3">
              Para quem são meus serviços
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* For you */}
            <div className="bg-white rounded-2xl p-8 border border-green-100 shadow-sm">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center text-green-600 font-black text-lg">
                  ✓
                </div>
                <h3 className="text-[#0d1b3e] font-black text-xl">É para você se…</h3>
              </div>
              <ul className="space-y-4">
                {FOR_YOU.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <IconCheck />
                    </span>
                    <span className="text-gray-700 text-[15px] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not for you */}
            <div className="bg-white rounded-2xl p-8 border border-red-100 shadow-sm">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-500 font-black text-lg">
                  ✕
                </div>
                <h3 className="text-[#0d1b3e] font-black text-xl">Não é para você se…</h3>
              </div>
              <ul className="space-y-4 mb-8">
                {NOT_FOR_YOU.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 bg-red-400 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-0.5">
                      <IconX />
                    </span>
                    <span className="text-gray-700 text-[15px] leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-4 bg-[#f0f4ff] rounded-xl">
                <p className="text-gray-600 text-sm leading-relaxed">
                  <strong className="text-[#0d1b3e]">Nota:</strong> tráfego pago atrai as
                  pessoas certas até o seu negócio, mas as vendas dependem do processo
                  comercial. Trabalho com quem leva isso a sério.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY — Signature Section ── */}
      <section id="metodo" className="bg-[#0d1b3e] py-24 px-5 sm:px-8 relative overflow-hidden">
        {/* bg glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#1d4ed8_0%,_transparent_55%)] opacity-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1d4ed8]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-16">
            <span className="text-[#1d4ed8] text-sm font-bold tracking-widest uppercase">
              Como funciona
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-3">
              O{' '}
              <span className="text-[#1d4ed8]">Método ADS</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto leading-relaxed">
              Três etapas integradas que transformam investimento em anúncios em clientes
              reais e mensuráveis — sem achismo, com estratégia e dados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {METHODOLOGY.map((step, i) => (
              <div
                key={step.num}
                className="group relative bg-white/5 border border-white/10 hover:border-[#1d4ed8]/50 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/8 hover:shadow-xl hover:shadow-blue-900/20"
              >
                {/* Connector arrow (desktop only, between cards) */}
                {i < 2 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 bg-[#1d4ed8] rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                )}

                <div className="flex items-start justify-between mb-5">
                  <span className="text-7xl font-black text-white/8 group-hover:text-[#1d4ed8]/20 transition-colors duration-300 leading-none select-none">
                    {step.num}
                  </span>
                  <span className="text-3xl">{step.emoji}</span>
                </div>

                <h3 className="text-3xl font-black text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-6 text-[15px]">{step.desc}</p>

                <div className="border-t border-white/10 pt-5">
                  <p className="text-[#1d4ed8] text-xs font-semibold leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#1d4ed8] hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-blue-900/40"
            >
              <IconWhatsApp className="w-5 h-5" />
              Quero aplicar o Método ADS no meu negócio
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="sobre" className="bg-white py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Photo placeholder side */}
            <div className="relative order-2 md:order-1">
              <div className="bg-[#f0f4ff] rounded-3xl aspect-[4/5] flex flex-col items-center justify-center relative overflow-hidden">
                {/* Replace this div with your <Image> component once you add your photo to /public */}
                <div className="flex flex-col items-center gap-3 text-gray-400">
                  <svg className="w-24 h-24 opacity-30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                  </svg>
                  <p className="text-sm text-gray-400 font-medium px-8 text-center">
                    Substitua esta área pela sua foto em{' '}
                    <code className="bg-gray-100 px-1 py-0.5 rounded text-xs">/public/foto.jpg</code>
                  </p>
                </div>

                {/* Handle bar */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#0d1b3e] rounded-xl p-4">
                  <p className="text-white font-bold text-sm">@arafaelageiger</p>
                  <p className="text-gray-400 text-xs">Especialista em Tráfego Pago · HEBR Tráfego</p>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#1d4ed8] rounded-2xl px-4 py-3 text-center shadow-xl shadow-blue-900/30">
                <p className="text-white text-2xl font-black leading-none">2+</p>
                <p className="text-white/80 text-xs mt-0.5">anos de experiência</p>
              </div>
            </div>

            {/* Text side */}
            <div className="order-1 md:order-2">
              <span className="text-[#1d4ed8] text-sm font-bold tracking-widest uppercase">
                Quem sou eu
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#0d1b3e] mt-3 mb-6 leading-tight">
                A especialista por trás dos resultados
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
                Sou <strong className="text-[#0d1b3e]">Rafaela Geiger</strong>, gestora e
                analista de tráfego pago com atuação em Meta Ads, Google Ads e LinkedIn
                Ads. Faço parte da equipe da{' '}
                <strong className="text-[#0d1b3e]">HEBR - Tráfego</strong>, onde gerencio
                mais de 45 contas de anúncios para clientes de diferentes segmentos.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
                Minha formação é baseada no{' '}
                <strong className="text-[#0d1b3e]">Subido de Tráfego</strong>, metodologia
                desenvolvida por Pedro Sobral — maior referência em tráfego pago do Brasil
                e fundador da maior comunidade de gestores do país, com mais de 57 mil membros.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
                Acredito que tráfego pago não é sobre gastar dinheiro — é sobre investir com
                estratégia e extrair o máximo de cada real. Dados, testes e otimização contínua
                são minha rotina.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {['Meta Ads', 'Google Ads', 'LinkedIn Ads', 'Criativos Estratégicos', 'Análise de Performance'].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-[#f0f4ff] text-[#0d1b3e] text-sm font-semibold px-4 py-2 rounded-full"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={WA}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#1d4ed8] hover:bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 hover:scale-105"
                >
                  <IconWhatsApp className="w-4 h-4" />
                  Falar no WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/in/rafaelageiger/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border border-gray-200 hover:border-[#1d4ed8] text-gray-600 hover:text-[#1d4ed8] px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
                >
                  <IconLinkedIn className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-[#f0f4ff] py-24 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#1d4ed8] text-sm font-bold tracking-widest uppercase">
              Dúvidas frequentes
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0d1b3e] mt-3">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ_DATA.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors duration-150"
                >
                  <span className="font-bold text-[#0d1b3e] pr-6 text-[15px] leading-snug">
                    {item.q}
                  </span>
                  <span
                    className={`text-[#1d4ed8] text-2xl font-light flex-shrink-0 transition-transform duration-200 ${
                      openFAQ === i ? 'rotate-45' : ''
                    }`}
                  >
                    +
                  </span>
                </button>
                {openFAQ === i && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed text-[15px] border-t border-gray-50 pt-4">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-[#0d1b3e] py-24 px-5 sm:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1d4ed8]/12 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1d4ed8]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
            Pronto para crescer com{' '}
            <span className="text-[#1d4ed8]">estratégia e dados reais?</span>
          </h2>
          <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Agende uma análise gratuita e descubra oportunidades reais para o seu negócio
            decolar com tráfego pago.
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-[#1d4ed8] hover:bg-blue-600 text-white px-10 py-5 rounded-full font-black text-xl transition-all duration-200 hover:scale-105 hover:shadow-2xl hover:shadow-blue-900/40"
          >
            <IconWhatsApp className="w-6 h-6" />
            Agendar análise gratuita →
          </a>
          <p className="text-gray-500 text-sm mt-6">
            Sem compromisso · Resposta rápida · Via WhatsApp
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#060f22] py-16 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex flex-col mb-4">
                <span className="text-white font-black text-lg">Rafaela Geiger</span>
                <span className="text-[#1d4ed8] text-[10px] font-bold tracking-[0.22em] uppercase">
                  Tráfego Pago
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Especialista em Meta Ads, Google Ads e LinkedIn Ads. Parte da equipe
                HEBR&nbsp;-&nbsp;Tráfego.
              </p>
            </div>

            {/* Serviços */}
            <div>
              <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">
                Serviços
              </h4>
              <ul className="space-y-2">
                {['Meta Ads', 'Google Ads', 'LinkedIn Ads', 'Relatórios de Performance'].map(
                  (s) => (
                    <li key={s}>
                      <a
                        href="#servicos"
                        className="text-gray-500 hover:text-white text-sm transition-colors duration-150"
                      >
                        {s}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h4 className="text-white font-bold mb-4 text-xs uppercase tracking-widest">
                Contato
              </h4>
              <div className="space-y-3">
                <a
                  href={WA}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors duration-150"
                >
                  <IconWhatsApp className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/arafaelageiger/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors duration-150"
                >
                  <IconInstagram className="w-4 h-4" />
                  @arafaelageiger
                </a>
                <a
                  href="https://www.linkedin.com/in/rafaelageiger/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-gray-500 hover:text-white text-sm transition-colors duration-150"
                >
                  <IconLinkedIn className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              © 2026 Rafaela Geiger · Tráfego Pago. Todos os direitos reservados.
            </p>
            <p className="text-gray-600 text-sm">Dados protegidos pela LGPD.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
