# Script para reiniciar o servidor de desenvolvimento
Write-Host "🔄 Reiniciando servidor de desenvolvimento..." -ForegroundColor Cyan

# Para o servidor atual
Write-Host "1️⃣ Parando servidor atual..." -ForegroundColor Yellow

# Para processos na porta 8080
$port8080 = Get-NetTCPConnection -LocalPort 8080 -State Listen -ErrorAction SilentlyContinue
if ($port8080) {
    $processId = $port8080.OwningProcess
    try {
        Stop-Process -Id $processId -Force
        Write-Host "✅ Servidor parado (PID: $processId)" -ForegroundColor Green
    }
    catch {
        Write-Host "⚠️  Erro ao parar servidor: $($_.Exception.Message)" -ForegroundColor Yellow
    }
} else {
    Write-Host "ℹ️  Nenhum servidor rodando na porta 8080" -ForegroundColor Cyan
}

# Para jobs PowerShell do servidor anterior
$jobs = Get-Job -State Running -ErrorAction SilentlyContinue
foreach ($job in $jobs) {
    try {
        Stop-Job -Id $job.Id -ErrorAction SilentlyContinue
        Remove-Job -Id $job.Id -Force -ErrorAction SilentlyContinue
    }
    catch { }
}

Write-Host "2️⃣ Aguardando 3 segundos..." -ForegroundColor Yellow
Start-Sleep -Seconds 3

Write-Host "3️⃣ Iniciando servidor..." -ForegroundColor Yellow

# Cria um processo em background usando PowerShell Job
$job = Start-Job -ScriptBlock {
    Set-Location $using:PWD
    npm run dev
}

# Aguarda o servidor iniciar
Start-Sleep -Seconds 4

# Verifica se iniciou com sucesso
$newProcess = Get-NetTCPConnection -LocalPort 8080 -State Listen -ErrorAction SilentlyContinue
if ($newProcess) {
    Write-Host "✅ Servidor reiniciado com sucesso!" -ForegroundColor Green
    Write-Host "📍 Local:   http://localhost:8080/" -ForegroundColor Cyan
    Write-Host "🌐 Network: http://192.168.1.4:8080/" -ForegroundColor Cyan
} else {
    Write-Host "❌ Falha ao reiniciar servidor!" -ForegroundColor Red
    $jobState = Get-Job -Id $job.Id
    Write-Host "Job Status: $($jobState.State)" -ForegroundColor Gray
    Write-Host "💡 Tente executar .\start.ps1 manualmente" -ForegroundColor Yellow
}

Write-Host "🎉 Reinicialização concluída!" -ForegroundColor Green
Start-Sleep -Seconds 2
