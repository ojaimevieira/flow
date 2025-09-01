import { Button } from "@/shared/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-emerald-900 via-black to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_rgba(0,0,0,0.8)_100%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium">
            🚀 REVOLUÇÃO VISUAL COM IA
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
            REVOLUCIONE SUAS
            <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              VENDAS COM FOTOS
            </span>
            <span className="block text-emerald-400">DE PRODUTO IA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transforme fotos caseiras em imagens profissionais que 
            <span className="text-emerald-400 font-bold"> multiplicam suas vendas</span>
          </p>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Sem fotógrafo, sem estúdio, apenas você + Inteligência Artificial
          </p>

          {/* Before/After Showcase */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto my-16">
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <h3 className="text-red-400 font-bold text-lg mb-4">❌ ANTES</h3>
              <div className="bg-gray-800 rounded-lg h-40 flex items-center justify-center">
                <span className="text-gray-500">Foto caseira mal feita</span>
              </div>
              <p className="text-red-300 mt-4">Poucos clientes, preço baixo</p>
            </div>
            
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-6">
              <h3 className="text-emerald-400 font-bold text-lg mb-4">✅ DEPOIS</h3>
              <div className="bg-gradient-to-br from-emerald-800 to-cyan-800 rounded-lg h-40 flex items-center justify-center">
                <span className="text-emerald-200">Foto profissional IA</span>
              </div>
              <p className="text-emerald-300 mt-4">Vendas multiplicadas, preço premium</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-xl px-12 py-6 rounded-full transform transition-all duration-300 hover:scale-105 shadow-2xl shadow-emerald-500/25"
            >
              QUERO MULTIPLICAR MINHAS VENDAS
            </Button>
            
            <p className="text-gray-400 text-sm">
              🔒 Acesso imediato • ⭐ Garantia de 30 dias
            </p>
          </div>

          {/* Social Proof */}
          <div className="mt-16 flex justify-center items-center space-x-8 text-gray-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">500+</div>
              <div className="text-sm">Empreendedores</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">300%</div>
              <div className="text-sm">Aumento médio vendas</div>
            </div>
            <div className="w-px h-12 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">24h</div>
              <div className="text-sm">Primeiros resultados</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
