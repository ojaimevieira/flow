# Sistema de Temas

Este projeto utiliza um sistema de temas baseado em CSS custom properties (variáveis CSS) que permite alterar facilmente as cores de cada template sem afetar outros.

## Como Funciona

### 1. Variáveis do Sistema Template

No `tailwind.config.ts`, todas as cores personalizadas usam o sistema `template`:

```typescript
'template': {
  primary: 'hsl(var(--template-primary))',
  secondary: 'hsl(var(--template-secondary))',
  accent: 'hsl(var(--template-accent))',
  surface: 'hsl(var(--template-surface))',
  'surface-dark': 'hsl(var(--template-surface-dark))',
},

// Compatibilidade com nomes antigos
'neon-pink': 'hsl(var(--template-primary))',
'neon-purple': 'hsl(var(--template-secondary))',
'dark-card': 'hsl(var(--template-surface))',
'darker-bg': 'hsl(var(--template-surface-dark))',
```

### 2. Temas Disponíveis

#### Tema Padrão (Gaming)
```css
:root {
  --template-primary: 330 100% 60%;      /* Neon pink */
  --template-secondary: 270 100% 60%;    /* Neon purple */
  --template-accent: 300 100% 50%;       /* Magenta */
  --template-surface: 0 0% 8%;           /* Dark card */
  --template-surface-dark: 0 0% 4%;      /* Darker background */
}
```

#### Tema Filmagente (Teal & Purple - Cores específicas)
```css
.theme-filmagente {
  --template-primary: 166 85% 57%;      /* #4cf2d0 - Teal específico */
  --template-secondary: 283 69% 59%;    /* #bb4de4 - Roxo específico */
  --template-accent: 166 85% 47%;       /* Tom mais escuro do teal */
}
```

**Efeitos especiais do Filmagente:**
- `animate-nebula-glow`: Efeito de nebulosa com as cores #4cf2d0 e #bb4de4
- `animate-particle-float`: Partículas flutuantes com rotação
- `.glow-text`: Texto com brilho teal (#4cf2d0)
- `.neon-border`: Bordas com gradiente das duas cores específicas

#### Tema Gaming (Explícito)
```css
.theme-gaming {
  --template-primary: 330 100% 60%;      /* Neon pink */
  --template-secondary: 270 100% 60%;    /* Neon purple */
  --template-accent: 300 100% 50%;       /* Magenta */
}
```

#### Tema Corporate
```css
.theme-corporate {
  --template-primary: 220 100% 50%;      /* Azul corporativo */
  --template-secondary: 200 100% 40%;    /* Azul escuro */
  --template-accent: 40 100% 50%;        /* Dourado */
  --template-surface: 0 0% 98%;          /* Superfície clara */
  --template-surface-dark: 0 0% 95%;     /* Cinza claro */
}
```

## Como Usar

### 1. Aplicar Tema em um Template

No componente principal do template (ex: `FilmAgenteLanding.tsx`):

```tsx
const FilmAgenteLanding = () => {
  return (
    <div className="theme-filmagente min-h-screen bg-background">
      {/* Conteúdo do template */}
    </div>
  );
};
```

### 2. Usar as Cores nos Componentes

```tsx
// Usando as cores do sistema template
<button className="bg-template-primary text-white hover:bg-template-secondary">
  Botão Principal
</button>

// Ou usando os nomes compatíveis
<div className="bg-neon-pink border border-neon-purple">
  Card com bordas
</div>

// Usando gradientes
<div className="bg-gradient-primary">
  Background com gradiente
</div>
```

## Criando Novos Temas

### 1. Adicionar no CSS (index.css)

```css
.theme-meu-tema {
  --template-primary: 120 100% 50%;      /* Verde */
  --template-secondary: 240 100% 50%;    /* Azul */
  --template-accent: 60 100% 50%;        /* Amarelo */
  --template-surface: 0 0% 95%;          /* Cinza claro */
  --template-surface-dark: 0 0% 90%;     /* Cinza */
}
```

### 2. Aplicar no Template

```tsx
<div className="theme-meu-tema">
  {/* Seu template */}
</div>
```

## Vantagens

✅ **Isolamento**: Cada template tem suas próprias cores  
✅ **Facilidade**: Alterar cores em um lugar só  
✅ **Compatibilidade**: Mantém nomes antigos funcionando  
✅ **Flexibilidade**: Fácil criar novos temas  
✅ **Consistência**: Sistema unificado para todos os templates  

## Cores Atuais

### Filmagente
- **Primary**: `#4cf2d0` (Teal específico)
- **Secondary**: `#bb4de4` (Roxo específico)  
- **Accent**: Tom mais escuro do teal
- **Efeitos**: Nebulosa com essas duas cores, partículas flutuantes, glow intenso

### Gaming (Padrão)
- **Primary**: `#ff1493` (Neon pink)
- **Secondary**: `#8a2be2` (Neon purple)
- **Accent**: `#ff00ff` (Magenta)

### Corporate
- **Primary**: Azul corporativo
- **Secondary**: Azul escuro
- **Accent**: Dourado
