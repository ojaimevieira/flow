# Lista todos os componentes encontrados nos templates para análise

Write-Host "🔍 MAPEAMENTO DE COMPONENTES" -ForegroundColor Cyan
Write-Host "=" * 50 -ForegroundColor Gray

# Busca todos os arquivos .tsx nos templates
$templateFiles = Get-ChildItem "src\templates\" -Recurse -Filter "*.tsx" | 
    Where-Object { 
        $_.Directory.Name -ne "biblioteca" 
    } |
    Sort-Object Directory, Name

$currentTemplate = ""
$componentCount = 0

foreach ($file in $templateFiles) {
    $template = $file.Directory.Name
    $fileName = $file.Name
    $relativePath = $file.FullName -replace [regex]::Escape((Get-Location).Path), "" -replace "^\\", ""
    
    # Cabeçalho do template
    if ($template -ne $currentTemplate) {
        if ($currentTemplate -ne "") { Write-Host "" }
        Write-Host "📁 TEMPLATE: $template" -ForegroundColor Yellow
        Write-Host "-" * 30 -ForegroundColor Gray
        $currentTemplate = $template
    }
    
    # Lista o componente
    $componentCount++
    
    # Verifica se já tem label
    $content = Get-Content $file.FullName -Raw -ErrorAction SilentlyContinue
    $hasLabel = $content -match "📄 $fileName"
    
    $status = if ($hasLabel) { "✅ COM LABEL" } else { "❌ SEM LABEL" }
    $statusColor = if ($hasLabel) { "Green" } else { "Red" }
    
    Write-Host "  $($componentCount.ToString().PadLeft(2)). $fileName" -ForegroundColor White -NoNewline
    Write-Host " - $status" -ForegroundColor $statusColor
    Write-Host "     📂 $relativePath" -ForegroundColor Gray
}

Write-Host ""
Write-Host "=" * 50 -ForegroundColor Gray
Write-Host "📊 TOTAL: $componentCount componentes encontrados" -ForegroundColor Cyan
Write-Host ""
Write-Host "💡 PRÓXIMOS PASSOS:" -ForegroundColor Yellow
Write-Host "   1. Acesse a Biblioteca: http://localhost:8080/biblioteca" -ForegroundColor Gray
Write-Host "   2. Teste outros templates para ver os labels" -ForegroundColor Gray
Write-Host "   3. Me sinalize quais componentes consolidar" -ForegroundColor Gray
