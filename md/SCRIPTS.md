# 🚀 Scripts de Desenvolvimento

Este projeto inclui scripts PowerShell para facilitar o gerenciamento do servidor de desenvolvimento. **Os scripts fecham automaticamente** e o servidor **roda em background** sem travar o terminal.

## 📋 Scripts Disponíveis

### `start.ps1` - Iniciar Servidor
```powershell
.\start.ps1
```
- **Inicia servidor em background** (não trava o terminal)
- Verifica dependências (Node.js/npm)
- Detecta se servidor já está rodando
- **Fecha automaticamente após 2 segundos**

### `stop.ps1` - Parar Servidor
```powershell
.\stop.ps1
```
- Para servidor na porta 8080
- Limpa processos Vite/Node relacionados
- **Fecha automaticamente após 1 segundo**

### `restart.ps1` - Reiniciar Servidor
```powershell
.\restart.ps1
```
- Para servidor atual
- Aguarda 3 segundos
- Inicia servidor novamente
- **Fecha automaticamente**

### `status.ps1` - Status do Servidor
```powershell
.\status.ps1
```
- Mostra status detalhado do servidor
- Informações de processos e memória
- Lista comandos disponíveis
- **Fecha automaticamente após 2 segundos**

## 🎯 Uso Rápido

```powershell
# Iniciar (servidor roda em background)
.\start.ps1

# Verificar status
.\status.ps1

# Parar servidor
.\stop.ps1
```

## ✨ Características Especiais

- **🔄 Background**: Servidor roda independente do terminal
- **⚡ Auto-close**: Scripts fecham automaticamente
- **🛡️ Safe**: Detecta servidores já rodando
- **🎨 Visual**: Interface colorida e informativa
- **🧹 Cleanup**: Remove processos órfãos automaticamente

## 📡 URLs de Acesso

Quando o servidor estiver rodando:
- **Local**: http://localhost:8080/
- **Network**: http://192.168.1.4:8080/

## 🛠️ Requisitos

- Windows com PowerShell
- Node.js instalado
- npm disponível

## 💡 Dicas

- **Scripts não travam**: Executam e fecham automaticamente
- **Servidor continua rodando**: Mesmo após fechar o script
- **Use `status.ps1`**: Para verificar se está rodando
- **Background seguro**: Servidor não para ao fechar terminal
