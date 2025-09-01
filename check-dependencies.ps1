# ANÁLISE DE DEPENDÊNCIAS - shared/components
# ============================================

Write-Host "🔍 Verificando dependências dos componentes shared..." -ForegroundColor Cyan

$sharedComponents = Get-ChildItem "src\shared\components" -Filter "*.tsx" | Select-Object -ExpandProperty BaseName

foreach ($component in $sharedComponents) {
    Write-Host "`n📦 Verificando: $component" -ForegroundColor Yellow
    
    # Busca por importações diretas
    $imports = Select-String -Path "src\templates\**\*.tsx" -Pattern "$component" -AllMatches
    
    if ($imports) {
        Write-Host "   ✅ USADO EM:" -ForegroundColor Green
        foreach ($import in $imports) {
            $file = $import.Filename
            $line = $import.LineNumber
            Write-Host "      - $file (linha $line)" -ForegroundColor White
        }
    } else {
        Write-Host "   ❌ NÃO USADO" -ForegroundColor Red
    }
}

Write-Host "`n🎯 Resumo da análise concluída!" -ForegroundColor Cyan
