# Script para adicionar labels nos componentes
Write-Host "Adicionando labels nos componentes..." -ForegroundColor Cyan

# Busca todos os arquivos .tsx nos templates (exceto index.tsx principais)
$componentFiles = Get-ChildItem "src\templates\" -Recurse -Filter "*.tsx" | 
    Where-Object { 
        $_.Name -ne "index.tsx" -and 
        $_.Name -ne "Index.tsx" -and
        $_.Directory.Name -ne "biblioteca"
    }

Write-Host "Encontrados $($componentFiles.Count) arquivos" -ForegroundColor Cyan

foreach ($file in $componentFiles) {
    $fileName = $file.Name
    $content = Get-Content $file.FullName -Raw
    
    # Pula se ja tem label
    if ($content -match "📄 $fileName") {
        Write-Host "Skip $fileName - ja tem label" -ForegroundColor Yellow
        continue
    }
    
    # Procura pelo primeiro div principal com className
    if ($content -match '(\s+return\s*\(\s*\n\s*)(<div[^>]*className="[^"]*"[^>]*>)') {
        $beforeReturn = $matches[1]
        $divTag = $matches[2]
        
        # Adiciona relative se nao tiver
        if ($divTag -notmatch 'relative') {
            $divTag = $divTag -replace 'className="([^"]*)"', 'className="$1 relative"'
        }
        
        $labelComponent = @"
{/* Label Componente */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded text-xs font-mono backdrop-blur-sm border border-white/20 z-50">
        $fileName
      </div>
      
"@
        
        $replacement = $beforeReturn + $divTag + "`n" + $labelComponent
        $newContent = $content -replace '(\s+return\s*\(\s*\n\s*)(<div[^>]*className="[^"]*"[^>]*>)', $replacement
        
        Set-Content $file.FullName $newContent -Encoding UTF8
        Write-Host "OK $fileName" -ForegroundColor Green
    } else {
        Write-Host "SKIP $fileName - padrao nao encontrado" -ForegroundColor Red
    }
}

Write-Host "Concluido!" -ForegroundColor Green
