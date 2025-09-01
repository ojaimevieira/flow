# ANÁLISE DO PROBLEMA E PROPOSTA DE SOLUÇÃO
# ===============================================

## 🎯 PROBLEMA IDENTIFICADO:

### ❌ **Situação Atual:**
- Componentes são na verdade **SECTIONS** (seções completas)
- Nomes específicos para cada nicho: `HeroGaming`, `ProblemsRestaurante`, `FAQFotografia`
- Dificulta reutilização e identificação de padrões
- Muitas variáveis específicas de contexto

### ✅ **Solução Proposta:**

## 📦 NOVA ESTRUTURA: SECTIONS GENÉRICAS

```
src/shared/sections/
├── Hero/
│   ├── Hero1.tsx     // Marca pessoal com domínio + redes sociais
│   ├── Hero2.tsx     // Produto/curso com CTA + benefícios  
│   ├── Hero3.tsx     // Landing sales com urgência + preço
│   └── Hero4.tsx     // Apresentação com vídeo + estatísticas
├── Problems/
│   ├── Problems1.tsx // Grid de dores com ícones
│   ├── Problems2.tsx // Lista vertical com bullets
│   └── Problems3.tsx // Before/After comparison
├── FAQ/
│   ├── FAQ1.tsx      // Accordion simples
│   ├── FAQ2.tsx      // FAQ com categorias/tabs
│   └── FAQ3.tsx      // FAQ com busca
├── Pricing/
│   ├── Pricing1.tsx  // Plano único com urgência
│   ├── Pricing2.tsx  // Comparação de planos
│   └── Pricing3.tsx  // Pricing com calculadora
└── CTA/
    ├── CTA1.tsx      // Botão simples
    ├── CTA2.tsx      // CTA com garantia
    └── CTA3.tsx      // CTA com contagem regressiva
```

## 🏗️ PLANO DE AÇÃO:

### **FASE 1: MAPEAMENTO** (Agora)
1. ✅ Labels nos componentes atuais (feito)
2. 📝 Você navega e identifica padrões:
   - "Esse Hero é do tipo 'marca pessoal'"
   - "Esse Problems é do tipo 'grid com ícones'"
   - "Esse FAQ é do tipo 'accordion simples'"

### **FASE 2: CATEGORIZAÇÃO** (Próximo)
3. 🗂️ Agrupa componentes similares por **tipo funcional**:
   - Todos os Heroes que fazem "marca pessoal" → Hero1
   - Todos os Heroes que fazem "produto/curso" → Hero2
   - Todos os FAQs que são "accordion" → FAQ1

### **FASE 3: CRIAÇÃO DE SECTIONS GENÉRICAS** (Depois)
4. 🔧 Cria sections parametrizáveis:
   ```tsx
   // Hero1.tsx - Marca Pessoal
   interface Hero1Props {
     domain: string;
     handle: string;
     instagramUrl?: string;
     facebookUrl?: string;
     theme?: 'purple' | 'blue' | 'green';
   }
   
   // Hero2.tsx - Produto/Curso  
   interface Hero2Props {
     title: string;
     subtitle: string;
     ctaText: string;
     price?: string;
     urgency?: string;
     theme?: 'emerald' | 'blue' | 'red';
   }
   ```

## 🚀 VANTAGENS DA NOVA ABORDAGEM:

✅ **Nomes Genéricos**: `Hero1`, `Problems2`, `FAQ3`
✅ **Reutilização**: Uma section serve múltiplos nichos
✅ **Parametrização**: Props controlam conteúdo e tema
✅ **Escalabilidade**: Fácil adicionar Hero5, Problems4, etc.
✅ **Manutenção**: Um lugar para cada tipo de section

## 📋 PRÓXIMO PASSO:

**Você me diz:**
- "Hero do gaming e foto-produto-ia são do mesmo tipo → Hero2"
- "Problems do gaming é único → Problems1" 
- "FAQ do restaurante e gestão são iguais → FAQ1"

Assim criamos as sections genéricas com base nos padrões reais!
