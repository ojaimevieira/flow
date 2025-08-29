# 🎯 Template Creation Instructions

Este documento contém instruções padronizadas para solicitar criação de templates profissionais para este projeto.

## 📁 Contexto do Projeto

### **Stack Tecnológico:**
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build**: Bun (package manager) + Vite (bundler)
- **Icons**: Lucide React
- **Routing**: React Router (configurado em App.tsx)

### **Arquitetura de Templates:**
```
src/
├── templates/
│   ├── [nome-template]/
│   │   ├── components/          # Seções individuais
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   └── PricingSection.tsx
│   │   └── pages/               # Página principal
│   │       └── [Nome]Landing.tsx
├── shared/ui/                   # Componentes base (Button, Card, Badge)
├── pages/                       # Páginas globais (Showcase, Index)
├── assets/                      # Imagens e recursos (finais)
└── temp/                        # Pasta temporária simples (tudo aqui)
```

### **Padrão de Qualidade:**
- **Design**: Moderno, gradientes, hover effects, animações suaves
- **Responsivo**: Mobile-first, breakpoints consistentes
- **Performance**: Lazy loading, imagens otimizadas
- **Acessibilidade**: Focus states, ARIA labels, contraste adequado
- **Componentes**: Modulares, reutilizáveis, bem tipados

### **Templates de Referência (Exemplos de Qualidade):**
- **Template 1**: `src/templates/template-1/` (Curso de Vídeo com IA)
- **Edição de Imagens**: `src/templates/edicao-imagens-ia/` (Curso de Edição com IA)
- **Film Example**: `src/templates/filmagente/` (Landing inspirada em filme)
- **Gaming**: `src/templates/gaming/` (Template com tema gaming)
- **Restaurante**: `src/templates/restaurante-curso/` (Curso para restaurantes)

## 📂 Pasta Temporária (src/temp/)

### **🎯 Finalidade:**
Pasta para armazenar **temporariamente** arquivos durante desenvolvimento de templates:

### **📁 Estrutura:**
- `src/temp/` - Pasta simples para qualquer arquivo temporário durante desenvolvimento

### **🔄 Workflow:**
1. **Referências visuais** → Enviar diretamente na conversa (anexar imagem)
2. **Assets/HTML** → Jogar tudo em `src/temp/` conforme necessário
3. **Desenvolver** template baseado nas referências
4. **Mover** assets para `src/assets/[template-name]/` automaticamente
5. **Limpar** pasta temp/ após conclusão (um projeto por vez)

### **⚠️ Importante:**
- Pasta é **temporária** e **descartável**
- Não commitada no Git (está no .gitignore)
- **Limpar após cada projeto** (um por vez)
- Estrutura simples: jogue tudo na raiz de temp/

---

## 🎯 8 Tipos de Template Requests

### **📋 1. TEMPLATE COM REFERÊNCIA VISUAL**

```
**TEMPLATE REQUEST - [NOME DO PROJETO]**

**🎨 REFERÊNCIA VISUAL:**
[Anexar imagem diretamente na conversa]
INSTRUÇÃO: Clone completo desta referência - replicar cada seção, layout e estilo visual

**📂 ASSETS DO TEMPLATE:**
[Se tiver imagens específicas, jogar em src/temp/]

**🎯 PROJETO:**
- Tema/Nicho: [Ex: Curso de Marketing Digital]
- Público-alvo: [Ex: Empreendedores iniciantes]
- Tom/Vibe: [Ex: Profissional, moderno, confiável]
- Objetivo: [Ex: Vender curso online]

**📝 CONTEÚDO ESTRUTURADO:**
## Hero
# [Título Principal]
## [Subtítulo]
[Descrição/promessa principal]

## Benefícios/Problems
- [Ponto 1]
- [Ponto 2]
- [Ponto 3]

## Solution/Método
[Explicação da solução]

## Curriculum/Módulos
[Lista de módulos/features]

## Preços/Offer
[Informações de preço e oferta]

## Depoimentos
[Social proof se houver]

**⚙️ ESPECIFICAÇÕES TÉCNICAS:**
- Nome do template: template-[nome-do-projeto]
- Rota: /[nome-da-rota]
- Tema de cores: [Ex: Gradientes roxo/azul, Verde/dourado]
- Componentes: Modulares (cada seção = componente)
- Imagens: URLs funcionais (Unsplash/Picsum)
- Responsivo: Mobile-first
- Animações: Hover effects + transições suaves

**🚀 RESULTADO ESPERADO:**
- Template profissional igual Template 1 e Edição de Imagens
- Cada seção como componente separado
- 100% funcional e integrado no Showcase
- Visual impactante que converte
- Performance otimizada
```

### **📋 2. TEMPLATE SEM REFERÊNCIA VISUAL**

```
**TEMPLATE REQUEST - [NOME DO PROJETO]**

**🎯 PROJETO:**
- Tema/Nicho: [Ex: Curso de Fotografia]
- Público-alvo: [Ex: Fotógrafos iniciantes]
- Tipo: [Curso online/Produto físico/Serviço/Software/Consultoria]

**🎨 ESTILO DESEJADO:**
- Layout: [Moderno/Elegante/Minimalista/Dramático]
- Cores: [Ex: Gradientes azul/verde, Preto/dourado]
- Vibe: [Tech/Premium/Jovem/Corporativo/Criativo]
- Inspiração: [Ex: "Estilo Apple", "Netflix", "Startup tech"]
- Referência interna: [Ex: "Igual Template 1", "Estilo Edição de Imagens"]

**📝 CONTEÚDO ESTRUTURADO:**
[Mesmo formato da versão com referência]

**⚙️ ESPECIFICAÇÕES TÉCNICAS:**
[Mesmo formato da versão com referência]

**💡 LIBERDADE CRIATIVA:**
- Você decide o layout baseado nas melhores práticas do nicho
- Foque em conversão e impacto visual
- Use a arquitetura dos templates existentes como base

**🚀 RESULTADO ESPERADO:**
Template que supere a concorrência do nicho em design e funcionalidade
```

### **📋 3. TEMPLATE APENAS COM RELATO**

```
**TEMPLATE REQUEST - [NOME DO PROJETO]**

**📖 RELATO DO PROJETO:**
[Descreva em 2-3 parágrafos:]
- O que você quer vender/promover
- Quem é seu público
- Qual problema resolve
- Como quer ser percebido no mercado

**🎯 OBJETIVO:**
[Ex: Vender curso, capturar leads, promover serviço, vender produto]

**🎨 PREFERÊNCIAS DE ESTILO:**
- Cores favoritas: [Ex: Azul, verde, roxo]
- Vibe desejada: [Ex: Confiável, inovador, luxuoso]
- Nível de "agressividade": [Suave/Moderado/Intenso]

**⚙️ ESPECIFICAÇÕES TÉCNICAS:**
- Nome: template-[nome]
- Rota: /[rota]
- Componentes modulares: SIM
- Resultado: Profissional e impactante

**💡 INSTRUÇÃO:**
Crie um template completo baseado no relato, usando sua expertise em design e as melhores práticas do nicho. Inclua todas as seções necessárias para converter bem.

**🚀 RESULTADO ESPERADO:**
Template completo que eu possa usar imediatamente, com conteúdo sugerido por você baseado no projeto descrito.
```

### **📋 4. CLONE SEÇÃO POR SEÇÃO**

```
**CLONE REQUEST - [NOME DO SITE/PROJETO]**

**🎯 OBJETIVO:**
Clone completo do site [URL do site original] 
Replicar cada seção como componente individual

**📝 METODOLOGIA:**
Vou enviar cada seção separadamente para você criar componente por componente

**⚙️ ESPECIFICAÇÕES GERAIS:**
- Nome do template: template-[nome]
- Rota: /[nome]
- Tema/nicho: [definir tema]
- Componentes: 1 arquivo por seção
- Fidelidade: Clone exato do layout e estilo
- Conteúdo: Adaptar para [seu tema] mantendo estrutura

**🚀 FLUXO DE TRABALHO:**
1. Eu envio SEÇÃO 1 com screenshot + descrição
2. Você cria o componente correspondente
3. Eu confirmo se está correto
4. Repetimos até completar todas as seções
5. Você monta a página final integrando tudo

**📋 ESTRUTURA DE CADA ENVIO:**
============================================
SEÇÃO [X]: [NOME DA SEÇÃO]
============================================
📸 Screenshot: [imagem da seção]
📝 Descrição: [o que tem na seção]
🎨 Elementos visuais: [cores, layout, efeitos]
📱 Responsivo: [como se comporta no mobile]
💬 Conteúdo: [texto adaptado para meu tema]
============================================

**🎯 RESULTADO ESPERADO:**
Template completo que seja um clone fiel do original, adaptado para meu tema, com todos os componentes funcionais e integrados.

PREPARADO? Vou começar enviando a SEÇÃO 1...
```

### **📋 5. REFATORAÇÃO/MELHORIA**

```
**REFACTOR REQUEST - [NOME DO TEMPLATE EXISTENTE]**

**🎯 OBJETIVO:**
Melhorar template existente mantendo estrutura base

**📋 TEMPLATE ATUAL:**
- Nome: [template-existente]
- Localização: src/templates/[nome]/
- Problemas identificados: [Ex: Performance, visual datado, responsividade]
- Manter: [O que está funcionando bem]
- Melhorar: [O que precisa evoluir]

**🚀 MELHORIAS SOLICITADAS:**
- [ ] Performance (lazy loading, otimizações)
- [ ] Visual (cores, tipografia, espaçamentos)
- [ ] Responsividade (mobile-first)
- [ ] Acessibilidade (ARIA, foco, contraste)
- [ ] Animações (micro-interações, reveals)
- [ ] SEO (meta tags, estrutura)
- [ ] Conversão (CTAs, urgência, social proof)

**⚙️ ESCOPO:**
- Manter componentes existentes: [SIM/NÃO]
- Reescrever do zero: [SIM/NÃO]
- Adicionar seções: [Quais?]
- Remover seções: [Quais?]

**🎯 RESULTADO:**
Template otimizado que mantém identidade mas com qualidade profissional atual
```

### **📋 6. TEMPLATE MULTI-DEVICE**

```
**MULTI-DEVICE REQUEST - [NOME DO PROJETO]**

**🎯 OBJETIVO:**
Template otimizado para dispositivo específico ou todos

**📱 FOCO PRINCIPAL:**
- [ ] Mobile-first (maioria mobile)
- [ ] Desktop-first (audiência desktop)
- [ ] Tablet otimizado (iPads, apresentações)
- [ ] All devices (experiência uniforme)

**🎨 ADAPTAÇÕES POR DEVICE:**
**Mobile:**
- Layout: [Stack vertical, navegação simplificada]
- Interações: [Touch-friendly, swipe gestures]
- Performance: [Imagens otimizadas, carregamento rápido]

**Desktop:**
- Layout: [Grids complexos, sidebars]
- Interações: [Hover states, múltiplas colunas]
- Features: [Parallax, animações avançadas]

**Tablet:**
- Layout: [Híbrido mobile/desktop]
- Orientação: [Portrait/landscape behaviors]

**⚙️ ESPECIFICAÇÕES:**
- Breakpoints customizados: [Definir se necessário]
- Navegação adaptativa: [Como muda entre devices]
- Conteúdo condicional: [O que aparece onde]

**🎯 RESULTADO:**
Template que oferece experiência otimizada para cada tipo de dispositivo
```

### **📋 7. VARIAÇÕES/A-B TEST**

```
**VARIATION REQUEST - [TEMPLATE BASE]**

**🎯 OBJETIVO:**
Criar variações do mesmo template para testes ou diferentes públicos

**📋 TEMPLATE BASE:**
Template origem: [template-existente]
Manter estrutura: [SIM - só mudar estilo/conteúdo]

**🎨 VARIAÇÕES DESEJADAS:**
**Variação A - [Nome/Público]:**
- Cores: [Paleta diferente]
- Tom: [Mais agressivo/suave/premium]
- CTAs: [Textos diferentes]
- Foco: [Benefício principal diferente]

**Variação B - [Nome/Público]:**
- Layout: [Reorganização de seções]
- Abordagem: [Social proof vs features]
- Pricing: [Estrutura diferente]

**Variação C - [Nome/Público]:**
- Nicho: [Mesmo produto, público diferente]
- Linguagem: [Técnica vs casual]
- Elementos: [B2B vs B2C]

**⚙️ IMPLEMENTAÇÃO:**
- Rota A: /[nome]-variacao-a
- Rota B: /[nome]-variacao-b  
- Rota C: /[nome]-variacao-c
- Componentes: [Reutilizar máximo possível]

**📊 MÉTRICAS DE TESTE:**
- Conversão principal: [O que medir]
- Elementos a testar: [CTAs, cores, headlines]
- Público-alvo: [Segmentação para cada variação]

**🎯 RESULTADO:**
Multiple templates do mesmo produto para testar qual converte melhor
```

### **📋 8. MIGRAÇÃO HTML → REACT**

```
**HTML MIGRATION REQUEST - [NOME DO PROJETO]**

**📂 PASTA TEMPORÁRIA CRIADA:**
src/temp/
├── index.html (ou outros HTMLs)
├── style.css (ou CSS files)
├── script.js (ou JS files)
├── images/ (todas as imagens)
├── assets/ (outros recursos)
└── fonts/ (se houver)

**🎯 INSTRUÇÃO DE MIGRAÇÃO:**
Migre este site HTML/CSS/JS completo para nosso sistema React:

**📋 ANÁLISE COMPLETA:**
- Analise TODA a estrutura HTML (seções, layout, hierarquia)
- Extraia TODOS os estilos CSS para equivalentes Tailwind
- Converta TODAS as funcionalidades JS para React hooks/states
- Processe TODAS as imagens (otimize, mova para assets/)
- Mantenha design e funcionalidades 100% fiéis ao original

**⚙️ ESPECIFICAÇÕES TÉCNICAS:**
- Nome do template: template-[nome-projeto]
- Rota: /[nome-projeto]
- Estrutura: 1 componente React por seção HTML
- Imagens: Mover para src/assets/[nome-projeto]/
- Conteúdo: Extrair todo texto/copy do HTML original
- Responsividade: Manter + melhorar se necessário
- Performance: Otimizar durante migração

**🔄 PROCESSO DE CONVERSÃO:**
1. **HTML → JSX**: Converter tags e estrutura
2. **CSS → Tailwind**: Mapear estilos para classes utilitárias
3. **JS → React**: Hooks, states, event handlers
4. **Assets → Otimizados**: Compressão, formatos web
5. **Componentização**: Dividir em seções lógicas
6. **Integração**: Rota, showcase, funcionalidade completa

**🚀 ENTREGÁVEIS:**
✅ Componentes React modulares (1 por seção)
✅ Assets otimizados em src/assets/
✅ Template totalmente funcional
✅ Rota configurada no App.tsx
✅ Card adicionado no Showcase.tsx
✅ Responsividade garantida
✅ Performance otimizada

**🗑️ LIMPEZA:**
Após migração concluída, limpar src/temp/ para próximo projeto

**PREPARADO PARA INICIAR A MIGRAÇÃO COMPLETA?**
```

---

## 🎨 Padrões de Design

### **Cores Populares por Nicho:**
- **Tech/IA**: Gradientes roxo/azul, ciano/roxo
- **Negócios**: Azul/verde, preto/dourado
- **Saúde**: Verde/azul, branco/verde claro
- **Criativo**: Rosa/roxo, laranja/vermelho
- **Luxo**: Preto/dourado, cinza/prata
- **Gaming**: Neon (verde/roxo/azul), gradientes vibrantes

### **Tipografia:**
- **Headlines**: text-4xl md:text-6xl, font-bold
- **Subheadlines**: text-xl md:text-2xl, font-semibold
- **Body**: text-base, leading-relaxed
- **CTAs**: text-lg, font-semibold

### **Espaçamentos:**
- **Seções**: py-16 md:py-24
- **Containers**: container mx-auto px-6
- **Cards**: p-6 md:p-8
- **Gaps**: space-y-8, gap-8

### **Animações Padrão:**
- **Hover**: transition-all duration-300
- **Scale**: hover:scale-105
- **Shadows**: hover:shadow-xl
- **Colors**: hover:bg-primary/10

---

## 📊 Integração Automática

### **Após Criar Template:**
1. **Rota**: Adicionar em `src/App.tsx`
2. **Showcase**: Adicionar card em `src/pages/Showcase.tsx`
3. **Assets**: Organizar em `src/assets/[template-name]/`
4. **Test**: Verificar responsividade e performance

### **Estrutura de Showcase Card:**
```jsx
{
  id: [próximo-número],
  title: "[Nome do Template]",
  description: "[Descrição concisa]",
  category: "[Categoria]",
  route: "/[rota]",
  tags: ["Tag1", "Tag2", "Tag3"],
  status: "Novo",
  color: "from-[cor1] to-[cor2]"
}
```

---

## ✅ Checklist de Qualidade

### **Design:**
- [ ] Gradientes modernos e atraentes
- [ ] Hover effects em todos os elementos interativos
- [ ] Animações suaves (transition-all duration-300)
- [ ] Espaçamentos consistentes
- [ ] Tipografia hierárquica

### **Responsividade:**
- [ ] Mobile-first approach
- [ ] Breakpoints: sm, md, lg, xl
- [ ] Navegação mobile funcional
- [ ] Imagens responsivas

### **Performance:**
- [ ] Imagens otimizadas (WebP quando possível)
- [ ] Lazy loading implementado
- [ ] Código TypeScript sem erros
- [ ] Bundle size otimizado

### **Funcionalidade:**
- [ ] Todos os links funcionam
- [ ] Formulários (se houver) validados
- [ ] Estados de loading/error
- [ ] Acessibilidade básica (focus, ARIA)

### **Integração:**
- [ ] Rota configurada em App.tsx
- [ ] Card adicionado no Showcase
- [ ] Componentes bem organizados
- [ ] Imports/exports corretos

---

## 🚀 Exemplos de Uso

### **Exemplo 1 - Template com Referência:**
```
TEMPLATE REQUEST - CURSO DE CULINÁRIA VEGANA

🎨 REFERÊNCIA VISUAL: [anexar screenshot diretamente na conversa]
INSTRUÇÃO: Clone completo desta referência

📂 ASSETS DO TEMPLATE: 
Imagens específicas em:
src/temp/
├── hero-bg.jpg
├── receita-1.jpg
├── receita-2.jpg
└── logo.svg

🎯 PROJETO:
- Tema: Curso de Culinária Vegana
- Público: Pessoas interessadas em alimentação saudável
- Tom: Natural, saudável, acolhedor
- Objetivo: Vender curso online

📝 CONTEÚDO:
# Culinária Vegana Deliciosa
## Aprenda 50 receitas incríveis em 30 dias
Transforme sua cozinha em um laboratório de sabores

⚙️ ESPECIFICAÇÕES:
- template-culinaria-vegana
- /culinaria-vegana
- Cores: Verde natural + laranja aconchegante
- Componentes modulares: SIM
```

### **Exemplo 2 - Migração HTML:**
```
HTML MIGRATION REQUEST - SITE EMPRESA

📂 Arquivos em src/temp/:
├── index.html
├── styles.css
├── script.js
└── images/

🎯 INSTRUÇÃO: Migração completa para React
⚙️ ESPECIFICAÇÕES: template-empresa, /empresa

PREPARADO PARA MIGRAÇÃO COMPLETA?
```

---

## 📞 Suporte

Para dúvidas sobre essas instruções ou problemas na criação de templates:

1. **Verificar templates existentes**: Consulte src/templates/ para exemplos
2. **Consultar documentação**: THEME_SYSTEM.md e TEMPLATES_STRUCTURE.md
3. **Testar localmente**: npm run dev para verificar resultado
4. **Solicitar ajuda**: Use essas instruções como base para pedidos claros

---

**🎯 Lembre-se: Templates de qualidade seguem o padrão dos existentes (Template 1, Edição de Imagens) com componentes modulares, design moderno e performance otimizada.**
