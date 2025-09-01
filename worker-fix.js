export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // Redirect HTTP to HTTPS
    if (url.protocol === 'http:') {
      return Response.redirect(`https://${url.host}${url.pathname}${url.search}`, 301);
    }
    
    const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="facebook-domain-verification" content="z7qywzgcz7nvf80k9egdj0i5lynbt6" />
    <title>Flow Templates</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    <div class="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-6">
        <div class="bg-black/20 backdrop-blur-sm border border-purple-500/30 shadow-2xl rounded-xl p-12 text-center max-w-md">
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-8 tracking-wide">
                Flow Templates
            </h1>
            
            <div class="space-y-4 mb-8">
                <a href="/jaimevieira" class="block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors">
                    Template Jaime Vieira
                </a>
                <a href="/showcase" class="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                    Ver Todos Templates
                </a>
            </div>
            
            <p class="text-gray-300">Powered by Cloudflare Workers</p>
        </div>
    </div>
</body>
</html>
    `;

    return new Response(html, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Cache-Control': 'public, max-age=3600'
      }
    });
  }
};
