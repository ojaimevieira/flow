export default function Testimonials() {
  const testimonials = [
    {
      name: "Ana Silva",
      business: "Doces Caseiros",
      result: "Aumentei 300% as vendas",
      image: "/api/placeholder/80/80",
      quote: "Antes eu vendia 20 docinhos por semana. Depois que aprendi o método, vendo mais de 80! As fotos ficaram tão bonitas que os clientes pedem para reservar.",
      metrics: {
        before: "20 doces/semana",
        after: "80 doces/semana",
        increase: "+300%"
      }
    },
    {
      name: "Carlos Mendes", 
      business: "Marmitaria",
      result: "Dobrei o preço dos produtos",
      image: "/api/placeholder/80/80",
      quote: "Consegui cobrar R$ 18 por marmita ao invés de R$ 12. As fotos com IA fazem parecer restaurante gourmet. Tenho fila de espera todo dia!",
      metrics: {
        before: "R$ 12/marmita",
        after: "R$ 18/marmita", 
        increase: "+50%"
      }
    },
    {
      name: "Maria Santos",
      business: "Bijuterias",
      result: "Virei referência no bairro",
      image: "/api/placeholder/80/80",
      quote: "Minhas fotos ficaram iguais das lojas do shopping! Agora as clientes me procuram porque sabem que meus produtos são de qualidade.",
      metrics: {
        before: "5 peças/semana",
        after: "35 peças/semana",
        increase: "+600%"
      }
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-16">
          {/* Section Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-6 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-lg font-medium">
              ⭐ RESULTADOS REAIS
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white">
              ALUNOS QUE
              <span className="block text-emerald-400">TRANSFORMARAM</span>
              <span className="block text-white">SUAS VENDAS</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Veja como empreendedores comuns multiplicaram suas vendas 
              com fotos profissionais criadas por IA
            </p>
          </div>

          {/* Video Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-left hover:border-emerald-500/50 transition-all duration-300"
              >
                {/* Video Placeholder */}
                <div className="relative bg-gray-900 rounded-lg h-48 mb-6 flex items-center justify-center group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-lg"></div>
                  <div className="relative z-10 text-center">
                    <div className="bg-emerald-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-white font-medium">Assistir depoimento</p>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="space-y-4">
                  {/* User Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                      <span className="text-emerald-400 font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.business}</p>
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-300 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Metrics */}
                  <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4">
                    <h5 className="text-emerald-400 font-bold text-sm mb-3">RESULTADOS:</h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Antes:</span>
                        <span className="text-red-400">{testimonial.metrics.before}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Depois:</span>
                        <span className="text-emerald-400">{testimonial.metrics.after}</span>
                      </div>
                      <div className="flex justify-between font-bold">
                        <span className="text-white">Aumento:</span>
                        <span className="text-emerald-400">{testimonial.metrics.increase}</span>
                      </div>
                    </div>
                  </div>

                  {/* Result Badge */}
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium">
                      🚀 {testimonial.result}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Before/After Gallery */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-white">TRANSFORMAÇÕES REAIS:</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Example 1 */}
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h4 className="text-emerald-400 font-bold mb-4">Doces Gourmet</h4>
                <div className="space-y-4">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                    <p className="text-red-400 font-bold text-sm mb-2">ANTES:</p>
                    <div className="bg-gray-900 rounded h-24 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Brigadeiro na forminha</span>
                    </div>
                  </div>
                  <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4">
                    <p className="text-emerald-400 font-bold text-sm mb-2">DEPOIS:</p>
                    <div className="bg-gradient-to-br from-emerald-800 to-cyan-800 rounded h-24 flex items-center justify-center">
                      <span className="text-emerald-200 text-sm">Display gourmet</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mt-4 text-center">
                  <span className="text-red-400">R$ 2/unidade</span> → 
                  <span className="text-emerald-400"> R$ 5/unidade</span>
                </p>
              </div>

              {/* Example 2 */}
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h4 className="text-emerald-400 font-bold mb-4">Marmitas Premium</h4>
                <div className="space-y-4">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                    <p className="text-red-400 font-bold text-sm mb-2">ANTES:</p>
                    <div className="bg-gray-900 rounded h-24 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Bandeja na pia</span>
                    </div>
                  </div>
                  <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4">
                    <p className="text-emerald-400 font-bold text-sm mb-2">DEPOIS:</p>
                    <div className="bg-gradient-to-br from-emerald-800 to-cyan-800 rounded h-24 flex items-center justify-center">
                      <span className="text-emerald-200 text-sm">Mesa gourmet</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mt-4 text-center">
                  <span className="text-red-400">R$ 12/marmita</span> → 
                  <span className="text-emerald-400"> R$ 18/marmita</span>
                </p>
              </div>

              {/* Example 3 */}
              <div className="bg-gray-800/50 rounded-lg p-6">
                <h4 className="text-emerald-400 font-bold mb-4">Bijuterias Exclusivas</h4>
                <div className="space-y-4">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                    <p className="text-red-400 font-bold text-sm mb-2">ANTES:</p>
                    <div className="bg-gray-900 rounded h-24 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Colar no cabide</span>
                    </div>
                  </div>
                  <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-4">
                    <p className="text-emerald-400 font-bold text-sm mb-2">DEPOIS:</p>
                    <div className="bg-gradient-to-br from-emerald-800 to-cyan-800 rounded h-24 flex items-center justify-center">
                      <span className="text-emerald-200 text-sm">Modelo elegante</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mt-4 text-center">
                  <span className="text-red-400">5/semana</span> → 
                  <span className="text-emerald-400"> 35/semana</span>
                </p>
              </div>
            </div>
          </div>

          {/* Social Proof Numbers */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
                <p className="text-gray-300">Empreendedores transformados</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">300%</div>
                <p className="text-gray-300">Aumento médio de vendas</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">95%</div>
                <p className="text-gray-300">Taxa de satisfação</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">24h</div>
                <p className="text-gray-300">Primeiros resultados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
