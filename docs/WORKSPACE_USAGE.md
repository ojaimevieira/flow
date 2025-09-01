# 📂 Guia de Uso do Workspace

Este documento explica como usar eficientemente o workspace para criação de templates.

## 🎯 **Fluxo de Trabalho:**

**Para criar novos templates:**
- Screenshots de referência
- Sites HTML completos para migração
- Imagens que vão para o template
- Logos, ícones, assets diversos
- Qualquer arquivo temporário

## 📁 **Estrutura Recomendada:**
```
temp/ (criar quando necessário)
├── layout-referencia.png
├── index.html
├── style.css
├── hero-bg.jpg
├── logo.svg
└── qualquer-arquivo-temp.*
```

## 🔄 **Workflow:**
1. **Criar pasta temp/** quando necessário
2. **Jogar arquivos** na pasta temp/ conforme necessário
3. **Solicitar template** mencionando os arquivos
4. **IA processa** automaticamente
5. **Assets finais** vão para `src/assets/[template-name]/`
6. **Limpar pasta** após conclusão

## 💡 **Exemplos de Uso:**

### **Template com Assets:**
```bash
# Jogar referência + assets
temp/
├── referencia-layout.png
├── hero-bg.jpg
├── produto-1.png
└── logo.svg

# Solicitar: "Novo template baseado em referencia-layout.png, usar assets de temp/"
```

### **Template de Referência Web:**
```bash
# Baixar site completo
temp/
├── index.html
├── styles.css
├── assets/
└── referencia.png

# Solicitar: "Converter site HTML de temp/ para React template"
```

## ⚠️ **Importante:**
- Pasta temp/ é **temporária** e **descartável**
- Não é commitada no Git (está no .gitignore)
- **Limpar após cada projeto**
- Um projeto por vez
- Criar/remover conforme necessário

## 🏗️ **Estrutura de Templates:**

Cada template fica independente em:
```
src/templates/[nome-template]/
├── components/
│   ├── Hero[Nome].tsx
│   ├── Features[Nome].tsx
│   └── ... (outros componentes)
├── assets/ (se necessário)
└── index.tsx
```

## 🎨 **Sistema de Temas:**

Templates usam CSS Variables para adaptabilidade:
```css
.theme-[template-name] {
  --template-primary: #color;
  --template-secondary: #color;
  /* ... outras variáveis */
}
```

---

**📁 Workspace flexível e organizado - use este guia para maximizar a produtividade!**
