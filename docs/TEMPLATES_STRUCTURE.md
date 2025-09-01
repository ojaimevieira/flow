# 📁 Estrutura de Templates

Este projeto foi reestruturado para suportar múltiplos templates de landing page com identidades visuais completamente diferentes.

## 🏗️ Arquitetura

```
src/
├── templates/                     # 🎨 Templates isolados
│   ├── gaming/                   # Template Gaming (neon/cyberpunk)
│   │   ├── components/           # Componentes específicos do gaming
│   │   │   ├── Hero.tsx
│   │   │   ├── Problems.tsx
│   │   │   ├── Features.tsx
│   │   │   └── index.ts
│   │   └── pages/
│   │       └── GamingLanding.tsx
│   │
│   ├── filmagente/              # Template FilmAgente (IA/vídeos)
│   │   ├── components/
│   │   │   ├── HeroFilm.tsx
│   │   │   ├── FilmFeatures.tsx
│   │   │   └── FilmPricing.tsx
│   │   └── pages/
│   │       └── FilmAgenteLanding.tsx
│   │
│   └── corporate/               # Template Corporativo (clean/profissional)
│       ├── components/
│       │   └── HeroCorporate.tsx
│       └── pages/
│
├── shared/                      # 🔧 Componentes compartilhados
│   ├── ui/                     # shadcn/ui components
│   ├── Footer.tsx              # Footer reutilizável
│   └── index.ts
│
└── pages/
    └── Showcase.tsx            # 🏠 Página inicial (galeria)
```

## 🎨 Identidades Visuais

### Gaming Template
- **Cores**: Neon pink, purple, cyan
- **Estilo**: Cyberpunk, gaming, futurístico
- **Público**: Gamers, tech, cursos de design

### FilmAgente Template  
- **Cores**: Purple, pink gradients
- **Estilo**: Moderno, IA, criativo
- **Público**: Criadores de conteúdo, IA, vídeos

### Corporate Template
- **Cores**: Blue, clean, professional
- **Estilo**: Limpo, confiável, B2B
- **Público**: Empresas, soluções corporativas

## 🚀 Como Adicionar um Novo Template

1. **Criar estrutura de pastas**:
```bash
src/templates/meu-template/
├── components/
├── pages/
└── styles/ (se precisar)
```

2. **Criar componentes isolados**:
```tsx
// src/templates/meu-template/components/Hero.tsx
import { Button } from "@/shared/ui/button";

const HeroMeuTemplate = () => {
  return (
    <section className="bg-green-50"> {/* Cores específicas */}
      {/* Seu design único */}
    </section>
  );
};
```

3. **Adicionar no Showcase**:
```tsx
// src/pages/Showcase.tsx
const projects = [
  // ...outros templates
  {
    id: 4,
    title: "Meu Template",
    description: "Descrição do template",
    category: "Categoria",
    route: "/meu-template",
    tags: ["Tag1", "Tag2"],
    status: "Novo"
  }
];
```

4. **Adicionar rota no App.tsx**:
```tsx
<Route path="/meu-template" element={<MeuTemplateLanding />} />
```

## 🎯 Vantagens desta Estrutura

✅ **Isolamento completo** - cada template tem suas próprias cores e estilos
✅ **Reutilização seletiva** - componentes ui compartilhados
✅ **Escalabilidade** - fácil adicionar novos templates  
✅ **Manutenibilidade** - mudanças não afetam outros templates
✅ **Organização clara** - cada template em sua pasta

## 🔧 Desenvolvimento

- **Templates isolados**: Cada um em sua pasta
- **UI compartilhada**: Componentes shadcn/ui em `/shared/ui/`
- **Imports**: Usar `@/shared/ui/` para componentes compartilhados
- **Estilos**: Tailwind classes específicas para cada template

## 📊 Templates Disponíveis

| Template | Status | Rota | Descrição |
|----------|--------|------|-----------|
| Gaming | ✅ Concluído | `/original` | Design neon gaming |
| FilmAgente | ✅ Concluído | `/film-example` | Template para IA/vídeos |
| Corporate | 🔄 Preview | `/corporate` | Design corporativo |

---

**🎨 Cada template mantém sua identidade visual única sem interferência!**
