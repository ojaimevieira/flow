# Script para iniciar o servidor de desenvolvimento em background
Write-Host "🚀 Iniciando servidor de desenvolvimento..." -ForegroundColor Green

# Verifica se o Node.js está instalado
if (!(Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "❌ Node.js não encontrado! Instale o Node.js primeiro." -ForegroundColor Red
    Start-Sleep -Seconds 2
    exit 1
}

# Verifica se npm está disponível
if (!(Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "❌ npm não encontrado! Instale o Node.js primeiro." -ForegroundColor Red
    Start-Sleep -Seconds 2
    exit 1
}

# Verifica se já existe servidor rodando
$existingProcess = Get-NetTCPConnection -LocalPort 8080 -State Listen -ErrorAction SilentlyContinue
if ($existingProcess) {
    Write-Host "⚠️  Servidor já está rodando na porta 8080!" -ForegroundColor Yellow
    Write-Host "📍 Local:   http://localhost:8080/" -ForegroundColor Cyan
    Write-Host "🌐 Network: http://192.168.1.4:8080/" -ForegroundColor Cyan
    Start-Sleep -Seconds 2
    exit 0
}

# Cria um processo em background usando PowerShell Job
Write-Host "📦 Iniciando servidor em background..." -ForegroundColor Yellow

$job = Start-Job -ScriptBlock {
    Set-Location $using:PWD
    npm run dev
}

# Aguarda um pouco para o servidor iniciar
Start-Sleep -Seconds 4

# Verifica se iniciou com sucesso
$newProcess = Get-NetTCPConnection -LocalPort 8080 -State Listen -ErrorAction SilentlyContinue
if ($newProcess) {
    Write-Host "✅ Servidor iniciado com sucesso!" -ForegroundColor Green
    Write-Host "📍 Local:   http://localhost:8080/" -ForegroundColor Cyan
    Write-Host "🌐 Network: http://192.168.1.4:8080/" -ForegroundColor Cyan
    Write-Host "💡 Use stop.ps1 para parar o servidor" -ForegroundColor Magenta
} else {
    Write-Host "❌ Falha ao iniciar servidor!" -ForegroundColor Red
    Write-Host "💡 Verificando job..." -ForegroundColor Yellow
    $jobState = Get-Job -Id $job.Id
    Write-Host "Job Status: $($jobState.State)" -ForegroundColor Gray
    if ($jobState.State -eq "Failed") {
        Write-Host "Erro do Job:" -ForegroundColor Red
        Receive-Job -Id $job.Id
    }
    Write-Host "💡 Tente executar 'npm run dev' manualmente" -ForegroundColor Yellow
}

Start-Sleep -Seconds 2
