# 📂 Pasta Temporária

Esta pasta é usada para armazenar **temporariamente** qualquer arquivo durante a criação de templates.

## 🎯 **Uso Simples:**

**Jogue tudo aqui quando estiver trabalhando em um projeto:**
- Screenshots de referência
- Sites HTML completos para migração  
- Imagens que vão para o template
- Logos, ícones, assets diversos
- Qualquer arquivo temporário

## 📁 **Estrutura Flexível:**
```
temp/
├── README.md
├── layout-referencia.png
├── index.html
├── style.css
├── hero-bg.jpg
├── logo.svg
└── qualquer-arquivo-temp.*
```

## 🔄 **Workflow:**
1. **Jogar arquivos** na pasta temp/ conforme necessário
2. **Solicitar template** mencionando os arquivos
3. **IA processa** automaticamente
4. **Assets finais** vão para `src/assets/[template-name]/`
5. **Limpar pasta** após conclusão

## � **Exemplos de Uso:**

### **Migração HTML:**
```bash
# Copiar site para temp/
temp/
├── index.html
├── style.css
├── script.js
└── images/

# Solicitar: "Migre os arquivos de src/temp/ para template-projeto"
```

### **Template com Assets:**
```bash
# Jogar referência + assets
temp/
├── referencia-layout.png
├── hero-bg.jpg
├── produto-1.png
└── logo.svg

# Solicitar: "Novo template baseado em referencia-layout.png, usar assets de src/temp/"
```

## ⚠️ **Importante:**
- Pasta é **temporária** e **descartável**
- Não commitada no Git (está no .gitignore)
- **Limpar após cada projeto**
- Um projeto por vez

---

**📁 Estrutura simples e flexível - jogue tudo aqui quando precisar!**
