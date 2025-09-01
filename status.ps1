# Script de status do servidor
Write-Host "📊 Status do Servidor de Desenvolvimento" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray

# Verifica porta 8080
Write-Host "🔍 Verificando porta 8080..." -ForegroundColor Yellow
$port8080 = Get-NetTCPConnection -LocalPort 8080 -State Listen -ErrorAction SilentlyContinue

if ($port8080) {
    $processId = $port8080.OwningProcess
    $process = Get-Process -Id $processId -ErrorAction SilentlyContinue
    
    Write-Host "✅ SERVIDOR RODANDO" -ForegroundColor Green
    Write-Host "   📍 Local:   http://localhost:8080/" -ForegroundColor White
    Write-Host "   🌐 Network: http://192.168.1.4:8080/" -ForegroundColor White
    Write-Host "   🔢 PID:     $processId" -ForegroundColor White
    if ($process) {
        Write-Host "   📦 Processo: $($process.ProcessName)" -ForegroundColor White
        Write-Host "   ⏰ Iniciado: $($process.StartTime)" -ForegroundColor White
        Write-Host "   💾 Memória: $([math]::Round($process.WorkingSet64/1MB, 2)) MB" -ForegroundColor White
    }
} else {
    Write-Host "❌ SERVIDOR PARADO" -ForegroundColor Red
    Write-Host "   💡 Execute .\start.ps1 para iniciar" -ForegroundColor Yellow
}

# Verifica processos Node.js relacionados ao Vite
Write-Host "🔍 Verificando processos Node.js..." -ForegroundColor Yellow
$nodeProcesses = Get-Process -Name "node" -ErrorAction SilentlyContinue

if ($nodeProcesses) {
    $viteCount = 0
    foreach ($proc in $nodeProcesses) {
        try {
            $cmdLine = (Get-CimInstance Win32_Process -Filter "ProcessId = $($proc.Id)").CommandLine
            if ($cmdLine -like "*vite*" -or $cmdLine -like "*dev*") {
                $viteCount++
            }
        }
        catch { }
    }
    
    if ($viteCount -gt 0) {
        Write-Host "📦 $viteCount processo(s) Vite/Dev encontrado(s)" -ForegroundColor White
    } else {
        Write-Host "📦 $($nodeProcesses.Count) processo(s) Node.js (não relacionados ao Vite)" -ForegroundColor Gray
    }
} else {
    Write-Host "ℹ️  Nenhum processo Node.js encontrado" -ForegroundColor Cyan
}

Write-Host "🎮 Comandos disponíveis:" -ForegroundColor Magenta
Write-Host "   .\start.ps1   - Iniciar servidor" -ForegroundColor White
Write-Host "   .\stop.ps1    - Parar servidor" -ForegroundColor White
Write-Host "   .\restart.ps1 - Reiniciar servidor" -ForegroundColor White
Write-Host "   .\status.ps1  - Ver este status" -ForegroundColor White

Start-Sleep -Seconds 2
