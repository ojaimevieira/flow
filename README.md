# 🚀 Flow - Sistema de Templates React

> Sistema avançado para criação, gestão e showcase de templates de landing pages profissionais

[![React](https://img.shields.io/badge/React-18.3-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue)](https://typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-purple)](https://vitejs.dev/)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-cyan)](https://tailwindcss.com/)

## � Templates Disponíveis (8)

| Template | Categoria | Status | Descrição |
|----------|-----------|--------|-----------|
| **Gaming** | Curso Online | ✅ Ativo | Design neon cyberpunk para gamers |
| **FilmAgente** | Vídeo/IA | ✅ Ativo | Landing para cursos de vídeo IA |
| **Restaurante** | Food/Marketing | ✅ Ativo | Marketing para restaurantes |
| **Edição Imagens IA** | Design/IA | ✅ Ativo | Curso de edição com IA |
| **Template 1** | Vídeo/IA | ✅ Ativo | Edição profissional CapCut |
| **Gestão Saúde** | Saúde/Gestão | ✅ Ativo | Templates hospitalares |
| **Foto Produto IA** | IA/E-commerce | ✅ Ativo | Fotografia de produtos |
| **Jaime Vieira** | Portfolio | ✅ Ativo | Landing minimalista |

## 🛠️ Stack Tecnológico

- **Frontend**: React 18 + TypeScript + Vite
- **UI**: ShadCN/UI + Tailwind CSS + Lucide Icons
- **Router**: React Router DOM
- **Build**: Bun package manager + Vite bundler
- **Miniaturas**: Playwright + Sharp → WEBP
- **Deploy**: Lovable Platform

## ⚡ Quick Start

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev          # Servidor local (localhost:8080)

# Miniaturas
npm run thumbs       # Gerar thumbnails automáticas
npm run thumbs:dev   # Dev server + thumbnails

# Build
npm run build        # Build para produção
npm run preview      # Preview do build
```

## 🎨 Sistema de Temas

### Como Funciona
Cada template tem sua paleta isolada via CSS variables, permitindo cores únicas sem interferência:

```css
.theme-gaming {
  --template-primary: 330 100% 60%;    /* Neon pink */
  --template-secondary: 270 100% 60%;  /* Neon purple */
  --template-accent: 300 100% 50%;     /* Magenta */
}

.theme-filmagente {
  --template-primary: 166 85% 57%;     /* Teal #4cf2d0 */
  --template-secondary: 283 69% 59%;   /* Roxo #bb4de4 */
  --template-accent: 166 85% 47%;      /* Teal escuro */
}
```

### Aplicando Tema
```tsx
// No componente principal do template
<div className="theme-gaming min-h-screen">
  <button className="bg-template-primary">Botão</button>
  <div className="bg-gradient-to-r from-template-primary to-template-secondary">
    Gradiente automático
  </div>
</div>
```

### Criando Novo Tema
```css
.theme-meu-tema {
  --template-primary: 120 100% 50%;    /* Sua cor primária */
  --template-secondary: 240 100% 50%;  /* Sua cor secundária */
  --template-accent: 60 100% 50%;      /* Cor de destaque */
}
```

## 📋 Instruções para Templates

### 🎯 Tipos de Solicitação

**1. Template com Referência Visual**
```
"Crie template baseado nesta imagem: [anexar]
- Nicho: [ex: Curso de fotografia]
- Público: [ex: Fotógrafos iniciantes]
- Estilo: Clone exato da referência"
```

**2. Template Descritivo**
```
"Crie template para [nicho]
- Cores: [preferências]
- Estilo: [moderno/elegante/tech]
- Inspiração: [Netflix/Apple/Gaming]"
```

**3. Migração HTML**
```
"Migre este HTML para React: [anexar arquivos]
- Manter design 100% fiel
- Converter para componentes
- Otimizar performance"
```

### 🏗️ Arquitetura de Template

Cada template segue estrutura isolada:

```
src/templates/[nome]/
├── components/           # Seções individuais
│   ├── Hero.tsx         # Seção principal
│   ├── Features.tsx     # Benefícios/features
│   ├── Pricing.tsx      # Preços/ofertas
│   └── index.ts         # Exports
├── pages/
│   └── [Nome]Landing.tsx # Página completa
└── README.md            # Documentação específica
```

### ✅ Padrões de Qualidade

**Design:**
- ✅ Gradientes modernos e hover effects
- ✅ Animações suaves (transition-all duration-300)
- ✅ Espaçamentos consistentes
- ✅ Tipografia hierárquica clara

**Código:**
- ✅ TypeScript sem erros
- ✅ Componentes modulares
- ✅ Imports organizados
- ✅ Performance otimizada

**Responsividade:**
- ✅ Mobile-first approach
- ✅ Breakpoints: sm, md, lg, xl
- ✅ Navegação mobile funcional

## 🎨 Customização

### Como Funciona
1. **Playwright** automatiza browser para screenshot
2. **Captura** cada template em 1200x800px  
3. **Sharp** converte PNG → WEBP (95% economia)
4. **Resultado**: 7-74KB por thumbnail (vs ~1000KB PNG)

### Geração
```bash
# Certificar que dev server está rodando
npm run dev

# Gerar todas as miniaturas
npm run thumbs

# ✅ Resultado: public/thumbs/*.webp
```

### Para Novos Templates
1. Adicione template em `src/data/templates.ts`
2. Execute: `npm run thumbs`
3. Miniatura gerada automaticamente!

## 📁 Arquitetura

```
flow/
├── src/
│   ├── components/              # Componentes globais reutilizáveis
│   ├── data/
│   │   └── templates.ts         # 📊 Dados centralizados (8 templates)
│   ├── pages/
│   │   ├── Index.tsx           # Homepage
│   │   ├── Showcase.tsx        # 🎯 Galeria de templates
│   │   └── FilmExample.tsx     # Exemplos específicos
│   ├── templates/              # 📁 Templates isolados
│   │   ├── gaming/             # Template Gaming
│   │   ├── filmagente/         # Template FilmAgente  
│   │   ├── restaurante-curso/  # Template Restaurante
│   │   └── ...                 # 8 templates total
│   ├── shared/                 # Componentes compartilhados
│   │   ├── ui/                 # ShadCN/UI components
│   │   └── Footer.tsx
│   └── assets/                 # Imagens e recursos
├── public/
│   └── thumbs/                 # 🖼️ Miniaturas WEBP (344KB total)
├── scripts/
│   ├── generate-thumbnails.js  # 🤖 Gerador automático
│   └── restart.ps1             # Utilitário servidor
└── docs/                       # Documentação detalhada
```

## ➕ Adicionando Novo Template

### 1. Estrutura Básica
```bash
# Criar pasta do template
mkdir src/templates/meu-template
mkdir src/templates/meu-template/components
mkdir src/templates/meu-template/pages
```

### 2. Componentes
```tsx
// src/templates/meu-template/components/Hero.tsx
export const Hero = () => (
  <section className="bg-gradient-to-r from-blue-500 to-purple-600">
    {/* Seu design */}
  </section>
);

// src/templates/meu-template/pages/MeuTemplateLanding.tsx
import { Hero } from "../components/Hero";

export const MeuTemplateLanding = () => (
  <div className="theme-meu-template">
    <Hero />
    {/* Outras seções */}
  </div>
);
```

### 3. Registrar Template
```typescript
// src/data/templates.ts
{
  id: 'meu-template',
  name: 'Meu Template',
  description: 'Descrição do template',
  category: 'Categoria',
  href: '/meu-template',
  thumb: '/thumbs/meu-template.webp',
  tags: ['tag1', 'tag2'],
  status: 'Novo',
  color: 'from-blue-500 to-purple-600'
}
```

### 4. Adicionar Rota
```tsx
// App.tsx
<Route path="/meu-template" element={<MeuTemplateLanding />} />
```

### 5. Gerar Miniatura
```bash
npm run thumbs
```

**✅ Pronto! Template aparece automaticamente no showcase.**

## 🎨 Sistema de Temas

### Cores por Template
Cada template tem sua paleta isolada via CSS variables:

```css
.theme-gaming {
  --template-primary: 330 100% 60%;    /* Neon pink */
  --template-secondary: 270 100% 60%;  /* Neon purple */
}

.theme-filmagente {
  --template-primary: 166 85% 57%;     /* Teal #4cf2d0 */
  --template-secondary: 283 69% 59%;   /* Roxo #bb4de4 */
}
```

### Usando no Código
```tsx
// Aplicar tema
<div className="theme-gaming">
  
  // Usar cores do tema atual
  <button className="bg-template-primary text-white">
    Botão Principal
  </button>
  
  <div className="bg-gradient-to-r from-template-primary to-template-secondary">
    Gradiente do tema
  </div>
  
</div>
```

## 🚀 Deploy

### Lovable (Principal)
1. Acesse [Projeto Lovable](https://lovable.dev/projects/5999dd02-e121-4525-a852-23ebf5e233cb)
2. Click **Share → Publish**

### Outros Provedores
```bash
npm run build
# Deploy pasta dist/ em Vercel, Netlify, etc.
```

## 📈 Performance

- ⚡ **Vite**: Builds ultra-rápidos com HMR
- 🖼️ **WEBP**: Miniaturas 95% menores que PNG
- 🎨 **Tailwind**: CSS otimizado e minificado
- 📱 **Responsive**: Mobile-first em todos templates
- 🔄 **Lazy Loading**: Carregamento sob demanda

## 📝 Documentação Técnica

### Scripts de Template
| Comando | Função |
|---------|--------|
| `npm run dev` | Servidor desenvolvimento |
| `npm run thumbs` | Gerar miniaturas |
| `.\scripts\restart.ps1` | Reiniciar servidor |

### Estrutura de Template
- **Componentes**: 1 arquivo por seção (Hero, Features, Pricing)
- **Página**: Integração de todas as seções
- **Tema**: Classe CSS isolada para cores
- **Assets**: Pasta específica em `/assets/`

### 🎨 Metodologia Criativa
- **[📖 Guia de Adaptação de Conteúdo](docs/CONTENT_ADAPTATION_GUIDE.md)** - Como criar conteúdo contextual por nicho
- **[🧠 Metodologia Criativa](docs/CREATIVE_METHODOLOGY.md)** - Sistema de geração de universos fictícios convincentes

### Performance das Miniaturas
- **Dimensões**: 1200x800px (qualidade total)
- **Formato**: WEBP (melhor compressão)
- **Tamanho médio**: 43KB (vs 1000KB PNG)
- **Total**: 344KB para 8 templates

## 🤝 Workflow de Desenvolvimento

### Para Novos Templates
1. **Peça à IA**: *"Crie template para [nicho]"*
2. **IA cria**: Componentes + página + rota + dados
3. **Você executa**: `npm run thumbs`
4. **Resultado**: Template no showcase automaticamente

### Para Miniaturas
- **Comando simples**: *"Atualiza as miniaturas da home"*
- **IA executa**: `npm run thumbs` + verifica resultado
- **Zero configuração**: Sistema totalmente automatizado

## 📄 Licença

MIT License - Desenvolvido por [Jaime Vieira](https://github.com/ojaimevieira)

---

**🎯 Sistema completo para criar templates profissionais com qualidade de produção!**
