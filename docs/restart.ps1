# Script para reiniciar o servidor de desenvolvimento PERSISTENTE
Write-Host "🔄 Reiniciando servidor de desenvolvimento..." -ForegroundColor Cyan

# 1. Para todos os processos Node.js
Write-Host "1️⃣ Parando todos os processos Node.js..." -ForegroundColor Yellow
try {
    $nodeProcesses = Get-Process -Name "node" -ErrorAction SilentlyContinue
    if ($nodeProcesses) {
        $nodeProcesses | Stop-Process -Force
        Write-Host "✅ $($nodeProcesses.Count) processo(s) Node.js parado(s)" -ForegroundColor Green
    } else {
        Write-Host "ℹ️  Nenhum processo Node.js encontrado" -ForegroundColor Cyan
    }
}
catch {
    Write-Host "⚠️  Erro ao parar processos Node.js: $($_.Exception.Message)" -ForegroundColor Yellow
}

# 2. Aguarda um pouco para liberação de porta
Write-Host "2️⃣ Aguardando liberação de porta..." -ForegroundColor Yellow
Start-Sleep -Seconds 3

# 3. Volta para o diretório raiz do projeto
Set-Location "E:\Github\flow"
Write-Host "📂 Diretório: $(Get-Location)" -ForegroundColor Gray

# 4. Inicia servidor em processo persistente
Write-Host "3️⃣ Iniciando servidor persistente..." -ForegroundColor Yellow

try {
    # Usa cmd para executar npm de forma persistente
    $process = Start-Process -FilePath "cmd" -ArgumentList "/c", "npm run dev" -WindowStyle Hidden -PassThru
    
    # Aguarda o servidor iniciar
    Write-Host "⏳ Aguardando servidor iniciar..." -ForegroundColor Yellow
    Start-Sleep -Seconds 8
    
    # Verifica se iniciou com sucesso (tenta várias portas)
    $serverRunning = $null
    $port = 8080
    
    for ($i = 0; $i -lt 5; $i++) {
        $serverRunning = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
        if ($serverRunning) {
            break
        }
        $port++
    }
    
    if ($serverRunning) {
        Write-Host "✅ Servidor reiniciado com sucesso!" -ForegroundColor Green
        Write-Host "📍 Local:   http://localhost:$port/" -ForegroundColor Cyan
        Write-Host "🌐 Network: http://192.168.1.4:$port/" -ForegroundColor Cyan
        Write-Host "🔢 PID:     $($process.Id)" -ForegroundColor White
        Write-Host "💡 Servidor rodando de forma PERSISTENTE" -ForegroundColor Magenta
    } else {
        Write-Host "❌ Servidor pode não ter iniciado corretamente" -ForegroundColor Red
        Write-Host "💡 Verifique se há erros no package.json" -ForegroundColor Yellow
    }
}
catch {
    Write-Host "❌ Erro ao iniciar servidor: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "💡 Tente executar 'npm run dev' manualmente" -ForegroundColor Yellow
}

Write-Host "🎉 Processo de reinicialização concluído!" -ForegroundColor Green
