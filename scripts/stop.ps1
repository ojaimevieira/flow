# Script para parar o servidor de desenvolvimento
Write-Host "🛑 Parando servidor de desenvolvimento..." -ForegroundColor Red

# Verifica se existe servidor rodando na porta 8080
$port8080 = Get-NetTCPConnection -LocalPort 8080 -State Listen -ErrorAction SilentlyContinue

if ($port8080) {
    $processId = $port8080.OwningProcess
    try {
        Stop-Process -Id $processId -Force
        Write-Host "✅ Servidor parado com sucesso (PID: $processId)" -ForegroundColor Green
    }
    catch {
        Write-Host "❌ Erro ao parar servidor: $($_.Exception.Message)" -ForegroundColor Red
    }
} else {
    Write-Host "ℹ️  Nenhum servidor encontrado rodando na porta 8080" -ForegroundColor Cyan
}

# Para processos Node.js relacionados ao Vite (extra safety)
$viteProcesses = Get-Process -Name "node" -ErrorAction SilentlyContinue | Where-Object {
    try {
        $cmdLine = (Get-CimInstance Win32_Process -Filter "ProcessId = $($_.Id)").CommandLine
        $cmdLine -like "*vite*" -or $cmdLine -like "*dev*"
    }
    catch {
        $false
    }
}

if ($viteProcesses) {
    foreach ($process in $viteProcesses) {
        try {
            Stop-Process -Id $process.Id -Force
            Write-Host "✅ Processo Vite parado (PID: $($process.Id))" -ForegroundColor Green
        }
        catch {
            Write-Host "⚠️  Processo $($process.Id) já estava parado" -ForegroundColor Yellow
        }
    }
}

Write-Host "🎉 Operação concluída!" -ForegroundColor Green
Start-Sleep -Seconds 1
