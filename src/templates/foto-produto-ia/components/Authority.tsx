export default function Authority() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-lg font-medium">
              👨‍🏫 SEU MENTOR
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white">
              QUEM VAI TE
              <span className="block text-emerald-400">ENSINAR?</span>
            </h2>
          </div>

          {/* Instructor Profile */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo and Basic Info */}
            <div className="text-center lg:text-left space-y-6">
              <div className="relative inline-block">
                <div className="w-80 h-80 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
                  <div className="w-72 h-72 bg-gray-800 rounded-xl flex items-center justify-center">
                    <span className="text-4xl">👨‍💻</span>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-emerald-500 text-black rounded-full w-16 h-16 flex items-center justify-center font-bold">
                  <span className="text-sm">EXPERT</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-white">Pedro Oliveira</h3>
                <p className="text-xl text-emerald-400 font-medium">Especialista em IA Visual & Marketing Digital</p>
              </div>
            </div>

            {/* Credentials and Achievements */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-emerald-400">CREDENCIAIS:</h4>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-500/20 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-400 text-xl">🎓</span>
                    </div>
                    <div>
                      <h5 className="text-white font-bold">5+ Anos em IA Visual</h5>
                      <p className="text-gray-300">Especialista certificado em Midjourney, DALL-E e Stable Diffusion</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-500/20 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-400 text-xl">👥</span>
                    </div>
                    <div>
                      <h5 className="text-white font-bold">1.000+ Alunos Transformados</h5>
                      <p className="text-gray-300">Empreendedores que multiplicaram vendas com o método</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-500/20 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-400 text-xl">💰</span>
                    </div>
                    <div>
                      <h5 className="text-white font-bold">R$ 10+ Milhões Gerados</h5>
                      <p className="text-gray-300">Em vendas pelos alunos usando as técnicas ensinadas</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-emerald-500/20 rounded-lg w-12 h-12 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-400 text-xl">🏆</span>
                    </div>
                    <div>
                      <h5 className="text-white font-bold">Consultor de Grandes Marcas</h5>
                      <p className="text-gray-300">Já ajudou empresas de e-commerce a criar campanhas milionárias</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story/Why */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
                <h4 className="text-xl font-bold text-emerald-400 mb-4">POR QUE CRIEI ESTE MÉTODO?</h4>
                <p className="text-gray-300 leading-relaxed">
                  "Depois de ver milhares de empreendedores perdendo vendas por fotos amadoras, 
                  decidi compilar todas as técnicas de IA que uso para grandes empresas e 
                  transformar em um método simples que qualquer pessoa pode aplicar. 
                  <span className="text-white font-bold"> O resultado? Mais de 1.000 histórias de sucesso.</span>"
                </p>
              </div>
            </div>
          </div>

          {/* Results and Social Proof */}
          <div className="mt-16 space-y-12">
            {/* Featured in */}
            <div className="text-center space-y-6">
              <h4 className="text-2xl font-bold text-white">RECONHECIMENTO:</h4>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="bg-gray-800 rounded-lg px-6 py-3">
                  <span className="text-gray-400">Featured in Tech Blog</span>
                </div>
                <div className="bg-gray-800 rounded-lg px-6 py-3">
                  <span className="text-gray-400">Podcast Empreendedor</span>
                </div>
                <div className="bg-gray-800 rounded-lg px-6 py-3">
                  <span className="text-gray-400">YouTube 100K+</span>
                </div>
              </div>
            </div>

            {/* Student Results */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-2xl p-8">
              <h4 className="text-2xl font-bold text-emerald-400 text-center mb-8">
                RESULTADOS DOS MEUS ALUNOS:
              </h4>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-white">500+</div>
                  <div className="text-gray-300">Empreendedores transformados</div>
                  <div className="text-emerald-400 text-sm">Nos últimos 12 meses</div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-white">300%</div>
                  <div className="text-gray-300">Aumento médio de vendas</div>
                  <div className="text-emerald-400 text-sm">Primeiros 30 dias</div>
                </div>
                
                <div className="space-y-3">
                  <div className="text-4xl font-bold text-white">95%</div>
                  <div className="text-gray-300">Taxa de satisfação</div>
                  <div className="text-emerald-400 text-sm">Avaliações 5 estrelas</div>
                </div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="text-center space-y-6">
              <h4 className="text-3xl font-bold text-emerald-400">MINHA MISSÃO:</h4>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                "Democratizar o acesso a fotos profissionais. Todo empreendedor merece ter 
                imagens que vendem, independente do orçamento. 
                <span className="text-white font-bold"> A IA tornou isso possível, e eu vou te ensinar como."</span>
              </p>
            </div>

            {/* Guarantee Personal */}
            <div className="bg-gray-800/50 border-l-4 border-emerald-500 rounded-lg p-6 max-w-4xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-emerald-400 text-2xl">✋</span>
                </div>
                <div>
                  <h5 className="text-xl font-bold text-emerald-400 mb-2">GARANTIA PESSOAL:</h5>
                  <p className="text-gray-300">
                    "Se você aplicar o método e não conseguir criar fotos que multipliquem suas vendas, 
                    eu devolvoo 100% do seu investimento + R$ 200 pelo seu tempo. 
                    Essa é minha garantia pessoal para você."
                  </p>
                  <p className="text-white font-bold mt-2">- Pedro Oliveira</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
