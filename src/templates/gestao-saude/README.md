# Template: Curso Gestão em Saúde

## 📋 Descrição

Template moderno e responsivo para cursos de Gestão em Saúde, desenvolvido com React, TypeScript e Tailwind CSS. Ideal para promover cursos, treinamentos e especializações na área da saúde.

## ✨ Características

- **Design Moderno**: Interface clean e profissional com gradientes em azul e ciano
- **Totalmente Responsivo**: Mobile-first design com breakpoints otimizados
- **Animações Suaves**: Hover effects, transições e micro-interações
- **Componentes Modulares**: Cada seção é um componente independente
- **Otimizado para Conversão**: CTAs estrategicamente posicionados
- **Imagens Otimizadas**: URLs funcionais do Unsplash/Picsum

## 🎨 Paleta de Cores

```css
/* Cores Principais */
--primary-blue: #2563eb    /* Azul principal */
--primary-cyan: #0891b2    /* Ciano complementar */
--primary-gray: #1f2937    /* Cinza para textos */
--accent-blue: #3b82f6     /* Azul de destaque */
--light-blue: #eff6ff      /* Azul claro para fundos */
```

## 🧩 Componentes

### 1. HeroGestaoSaude
- **Propósito**: Seção principal de apresentação
- **Características**: 
  - Hero image com profissionais de saúde
  - Call-to-action duplo
  - Indicadores sociais (500+ alunos, 4.9★)
  - Animações de floating elements

### 2. BeneficiosGestao
- **Propósito**: Apresenta os principais benefícios do curso
- **Características**:
  - Grid de 6 cards com ícones
  - Efeitos hover com gradientes
  - CTA section integrada

### 3. ModulosCurso
- **Propósito**: Detalha o programa do curso
- **Características**:
  - 6 módulos com informações completas
  - Contadores de horas e aulas
  - Progress bars animadas
  - Cards com gradientes por módulo

### 4. DepoimentosGestao
- **Propósito**: Exibe depoimentos e casos de sucesso
- **Características**:
  - 6 depoimentos com fotos reais
  - Avaliações com estrelas
  - Badges de destaque com resultados
  - Grid responsivo

### 5. OfertaGestao
- **Propósito**: Seção de preço e oferta especial
- **Características**:
  - Preço com desconto destacado
  - Timer de contagem regressiva
  - Lista de benefícios inclusos
  - Seção de bônus exclusivos
  - Garantia de 7 dias

### 6. FAQGestao
- **Propósito**: Perguntas frequentes em accordion
- **Características**:
  - 10 perguntas e respostas relevantes
  - Accordion component do shadcn/ui
  - CTA de contato integrado

## 🚀 Como Usar

### Importação Completa
```tsx
import { GestaoSaudeLanding } from '@/templates/gestao-saude';

function App() {
  return <GestaoSaudeLanding />;
}
```

### Importação de Componentes Individuais
```tsx
import { 
  HeroGestaoSaude, 
  BeneficiosGestao, 
  ModulosCurso 
} from '@/templates/gestao-saude';

function CustomPage() {
  return (
    <div>
      <HeroGestaoSaude />
      <BeneficiosGestao />
      <ModulosCurso />
    </div>
  );
}
```

## 🎯 Customização

### Alterando Cores
Edite o arquivo `styles/theme.css`:
```css
.theme-gestao-saude {
  --primary-blue: #sua-cor-aqui;
  --primary-cyan: #sua-cor-aqui;
}
```

### Modificando Conteúdo
Cada componente possui arrays de dados que podem ser facilmente modificados:

```tsx
// Exemplo: ModulosCurso.tsx
const modulos = [
  {
    numero: "01",
    titulo: "Seu Módulo Customizado",
    duracao: "10h",
    aulas: "15",
    topicos: ["Tópico 1", "Tópico 2"],
    // ...
  }
];
```

### Substituindo Imagens
As imagens estão configuradas com URLs do Unsplash. Para alterar:

```tsx
// Substitua a URL na propriedade src
<img 
  src="https://sua-imagem-aqui.jpg"
  alt="Descrição da imagem"
/>
```

## 📱 Responsividade

O template utiliza breakpoints padrão do Tailwind CSS:
- **sm**: 640px+
- **md**: 768px+
- **lg**: 1024px+
- **xl**: 1280px+

### Classes Responsivas Utilizadas
```css
/* Exemplos */
.grid-cols-1 md:grid-cols-2 lg:grid-cols-3
.text-4xl lg:text-6xl
.flex-col lg:flex-row
.px-4 lg:px-8
```

## 🎭 Animações

### CSS Animations
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

### Hover Effects
```css
.hover:scale-105 /* Escala 105% no hover */
.hover:shadow-xl /* Sombra extra no hover */
.transition-all duration-300 /* Transição suave */
```

## 🔧 Dependências

### Principais
- React 18+
- TypeScript 5+
- Tailwind CSS 3+
- shadcn/ui components

### Componentes UI Utilizados
```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add badge
npx shadcn-ui@latest add accordion
```

## 🎨 Guia de Estilo

### Typography
- **Headings**: Inter/System fonts, font-bold
- **Body**: text-gray-600, text-gray-700
- **CTAs**: font-semibold, font-bold

### Spacing
- **Sections**: py-20 (80px vertical)
- **Containers**: max-w-7xl mx-auto
- **Cards**: p-6, p-8 internamente

### Shadows
- **Cards**: shadow-lg, hover:shadow-xl
- **Buttons**: shadow-xl, hover:shadow-2xl

## 🚀 Performance

### Otimizações Implementadas
- Lazy loading de imagens
- CSS otimizado com Tailwind CSS
- Componentes funcionais React
- Minimal re-renders

### Recomendações
- Use `loading="lazy"` em imagens below-fold
- Implemente código splitting se necessário
- Otimize imagens (WebP quando possível)

## 📊 Métricas de Conversão

### CTAs Estratégicos
1. **Hero Section**: CTA primário e secundário
2. **Benefícios**: CTA no final da seção
3. **Módulos**: CTA de matrícula
4. **Depoimentos**: CTA de garantia de vaga
5. **Oferta**: CTA principal com urgência
6. **FAQ**: CTA final de última chance

### Elementos de Urgência
- Timer de contagem regressiva
- "Restam apenas X vagas"
- "Oferta válida apenas hoje"
- Badges de "Oferta Limitada"

## 🔍 SEO & Acessibilidade

### Semântica HTML
- Uso correto de headings (h1, h2, h3)
- Tags semânticas (section, main, article)
- Alt texts em todas as imagens

### Acessibilidade
- Contraste adequado de cores
- Focus indicators visíveis
- Keyboard navigation support
- Screen reader friendly

## 🛠️ Manutenção

### Atualizações Regulares
- Revisar preços e ofertas
- Atualizar depoimentos
- Verificar URLs de imagens
- Testar responsividade

### Monitoramento
- Google Analytics/GTM
- Heatmaps (Hotjar/Crazy Egg)
- A/B testing das CTAs
- Performance metrics

---

**Desenvolvido com ❤️ para o setor de saúde**
