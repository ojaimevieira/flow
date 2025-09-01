# Script para reiniciar o servidor de desenvolvimento
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

# 2. Limpa jobs PowerShell antigos
Write-Host "2️⃣ Limpando jobs antigos..." -ForegroundColor Yellow
try {
    Get-Job -ErrorAction SilentlyContinue | Remove-Job -Force -ErrorAction SilentlyContinue
    Write-Host "✅ Jobs limpos" -ForegroundColor Green
}
catch {
    Write-Host "ℹ️  Nenhum job para limpar" -ForegroundColor Cyan
}

# 3. Aguarda um pouco
Write-Host "3️⃣ Aguardando 2 segundos..." -ForegroundColor Yellow
Start-Sleep -Seconds 2

# 4. Inicia o servidor diretamente no terminal atual
Write-Host "4️⃣ Iniciando servidor..." -ForegroundColor Yellow

# Usa Start-Job de forma mais robusta
try {
    $job = Start-Job -ScriptBlock {
        Set-Location $args[0]
        & npm run dev
    } -ArgumentList (Get-Location).Path
    
    # Aguarda o servidor iniciar
    Write-Host "⏳ Aguardando servidor iniciar..." -ForegroundColor Yellow
    Start-Sleep -Seconds 6
    
    # Verifica se iniciou com sucesso
    $serverRunning = Get-NetTCPConnection -LocalPort 8080 -State Listen -ErrorAction SilentlyContinue
    if ($serverRunning) {
        Write-Host "✅ Servidor reiniciado com sucesso!" -ForegroundColor Green
        Write-Host "📍 Local:   http://localhost:8080/" -ForegroundColor Cyan
        Write-Host "🌐 Network: http://192.168.1.4:8080/" -ForegroundColor Cyan
        Write-Host "🔢 Job ID:  $($job.Id)" -ForegroundColor White
    } else {
        Write-Host "❌ Servidor pode não ter iniciado corretamente" -ForegroundColor Red
        Write-Host "💡 Verificando status do job..." -ForegroundColor Yellow
        $jobState = Get-Job -Id $job.Id
        Write-Host "Job Status: $($jobState.State)" -ForegroundColor Gray
        if ($jobState.State -eq "Failed") {
            Write-Host "Erro do Job:" -ForegroundColor Red
            Receive-Job -Id $job.Id -ErrorAction SilentlyContinue
        }
    }
}
catch {
    Write-Host "❌ Erro ao iniciar servidor: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "💡 Tente executar 'npm run dev' manualmente" -ForegroundColor Yellow
}

Write-Host "🎉 Processo de reinicialização concluído!" -ForegroundColor Green
