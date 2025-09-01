# Script para adicionar labels de identificação em todos os componentes
# Adiciona um label discreto no canto superior direito de cada componente

Write-Host "🏷️  Adicionando labels nos componentes..." -ForegroundColor Cyan

# Função para adicionar label em um arquivo
function Add-ComponentLabel {
    param(
        [string]$FilePath
    )
    
    $fileName = [System.IO.Path]::GetFileName($FilePath)
    $content = Get-Content $FilePath -Raw
    
    # Pula se já tem label
    if ($content -match "📄 $fileName") {
        Write-Host "⏩ $fileName já tem label" -ForegroundColor Yellow
        return
    }
    
    # Encontra o primeiro return ( e adiciona o label
    if ($content -match '(\s+return\s*\(\s*\n\s*)(<div[^>]*className="[^"]*")') {
        $beforeDiv = $matches[1]
        $divTag = $matches[2]
        
        # Adiciona 'relative' ao className se não tiver
        if ($divTag -notmatch 'relative') {
            $divTag = $divTag -replace 'className="([^"]*)"', 'className="$1 relative"'
        }
        
        $label = @"
{/* Label do Componente */}
      <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-mono backdrop-blur-sm border border-white/20 z-50">
        📄 $fileName
      </div>
      
"@
        
        $newContent = $content -replace '(\s+return\s*\(\s*\n\s*)(<div[^>]*className="[^"]*")', "`$1`$2>$label"
        
        Set-Content $FilePath $newContent -Encoding UTF8
        Write-Host "✅ Label adicionado em $fileName" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Padrão não encontrado em $fileName" -ForegroundColor Red
    }
}

# Busca todos os arquivos .tsx nos templates (exceto index.tsx principais)
$componentFiles = Get-ChildItem "src\templates\" -Recurse -Filter "*.tsx" | 
    Where-Object { 
        $_.Name -ne "index.tsx" -and 
        $_.Name -ne "Index.tsx" -and
        $_.Directory.Name -ne "biblioteca"
    }

Write-Host "📝 Encontrados $($componentFiles.Count) arquivos de componentes" -ForegroundColor Cyan

# Processa cada arquivo
foreach ($file in $componentFiles) {
    Add-ComponentLabel -FilePath $file.FullName
}

Write-Host "`n🎉 Processo concluído!" -ForegroundColor Green
Write-Host "💡 Agora todos os componentes têm labels para identificação" -ForegroundColor Cyan
