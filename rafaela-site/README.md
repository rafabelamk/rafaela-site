# Rafaela Geiger — Site de Tráfego Pago

Site profissional de apresentação para gestão de tráfego pago (Meta Ads, Google Ads e LinkedIn Ads), construído com **Next.js 14** + **Tailwind CSS** e pronto para deploy no Vercel.

---

## 🚀 Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/SEU-USUARIO/SEU-REPO.git
cd SEU-REPO

# 2. Instale as dependências
npm install

# 3. Rode em modo de desenvolvimento
npm run dev
```

Acesse em: **http://localhost:3000**

---

## 📦 Como fazer deploy no Vercel

### Opção A — Via painel do Vercel (recomendado)

1. Faça push do projeto para um repositório no GitHub
2. Acesse [vercel.com](https://vercel.com) e clique em **"Add New Project"**
3. Importe o repositório do GitHub
4. Clique em **"Deploy"** — o Vercel detecta Next.js automaticamente
5. Pronto! Seu site estará no ar em ≈ 60 segundos

### Opção B — Via Vercel CLI

```bash
npm i -g vercel
vercel
```

---

## 🖼️ Como adicionar sua foto

1. Adicione sua foto em `/public/foto.jpg` (ou `.png`, `.webp`)
2. No arquivo `app/page.js`, localize o comentário `{/* Replace this div with your <Image> */}`
3. Substitua o bloco placeholder pelo código abaixo:

```jsx
import Image from 'next/image'

// dentro do componente, substitua o placeholder por:
<Image
  src="/foto.jpg"
  alt="Rafaela Geiger"
  fill
  className="object-cover object-top"
  priority
/>
```

---

## ✏️ Como personalizar o conteúdo

Todo o conteúdo do site está centralizado no arquivo `app/page.js` como constantes no topo do arquivo:

| Constante | O que editar |
|-----------|-------------|
| `WA` | Link do WhatsApp com mensagem personalizada |
| `STATS` | Números de destaque (contas, anos, etc.) |
| `SERVICES` | Os 4 serviços oferecidos |
| `FOR_YOU` | Lista "é para você se..." |
| `NOT_FOR_YOU` | Lista "não é para você se..." |
| `METHODOLOGY` | As 3 etapas do Método ADS |
| `FAQ_DATA` | Perguntas e respostas do FAQ |

---

## 🎨 Paleta de cores

| Token | Hex | Uso |
|-------|-----|-----|
| Navy | `#0d1b3e` | Backgrounds escuros, hero, navbar |
| Blue | `#1d4ed8` | CTAs, destaques, accents |
| Ice | `#f0f4ff` | Sections alternadas (fundo claro) |
| Navy Dark | `#060f22` | Footer |

---

## 📁 Estrutura do projeto

```
rafaela-site/
├── app/
│   ├── globals.css       # Tailwind + estilos customizados
│   ├── layout.js         # Layout raiz + metadata SEO
│   └── page.js           # Página principal (todas as seções)
├── public/               # Adicione sua foto aqui
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

---

## 🔧 Scripts disponíveis

```bash
npm run dev      # Desenvolvimento local (http://localhost:3000)
npm run build    # Build para produção
npm run start    # Roda o build de produção localmente
npm run lint     # Lint do código
```

---

## 📞 Contato

- **WhatsApp:** +55 11 96159-0986
- **Instagram:** [@arafaelageiger](https://instagram.com/arafaelageiger)
- **LinkedIn:** [rafaelageiger](https://linkedin.com/in/rafaelageiger)
