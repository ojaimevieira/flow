export default function Solution() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-16">
          {/* Solution Introduction */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-6 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-lg font-medium">
              🎯 A SOLUÇÃO QUE VOCÊ ESPERAVA
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white">
              O MÉTODO
              <span className="block bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                FOTO IA PRO
              </span>
            </h2>
            
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              O sistema completo para transformar qualquer foto em 
              <span className="text-emerald-400 font-bold"> material de vendas profissional</span>
            </p>
          </div>

          {/* Method Overview */}
          <div className="bg-gradient-to-r from-emerald-900/20 to-cyan-900/20 border border-emerald-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-emerald-400 mb-8">COMO FUNCIONA:</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="bg-emerald-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-emerald-400">1</span>
                </div>
                <h4 className="text-xl font-bold text-white">FOTO SIMPLES</h4>
                <p className="text-gray-300">Tire foto com celular (pode ser em casa mesmo)</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-emerald-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-emerald-400">2</span>
                </div>
                <h4 className="text-xl font-bold text-white">IA TRANSFORMA</h4>
                <p className="text-gray-300">Aplique o método e deixe a IA trabalhar</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-emerald-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                  <span className="text-2xl font-bold text-emerald-400">3</span>
                </div>
                <h4 className="text-xl font-bold text-white">VENDA MAIS</h4>
                <p className="text-gray-300">Fotos que hipnotizam e multiplicam vendas</p>
              </div>
            </div>
          </div>

          {/* Course Modules */}
          <div className="space-y-12">
            <h3 className="text-4xl font-bold text-white">O QUE VOCÊ VAI APRENDER:</h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Module 1 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 text-left">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-emerald-500 text-black rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <h4 className="text-2xl font-bold text-emerald-400">FUNDAMENTOS IA PARA PRODUTOS</h4>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Setup das ferramentas essenciais</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Prompts que realmente funcionam</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Removendo fundos automaticamente</span>
                  </li>
                </ul>
              </div>

              {/* Module 2 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 text-left">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-emerald-500 text-black rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <h4 className="text-2xl font-bold text-emerald-400">BACKGROUNDS PROFISSIONAIS</h4>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Cenários que vendem mais</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Iluminação cinematográfica</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Ambientes impossíveis na vida real</span>
                  </li>
                </ul>
              </div>

              {/* Module 3 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 text-left">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-emerald-500 text-black rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <h4 className="text-2xl font-bold text-emerald-400">MODELOS E LIFESTYLE</h4>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Criando modelos virtuais</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Produtos em uso real</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Cenas de lifestyle irresistíveis</span>
                  </li>
                </ul>
              </div>

              {/* Module 4 */}
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 text-left">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-emerald-500 text-black rounded-lg w-12 h-12 flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <h4 className="text-2xl font-bold text-emerald-400">AUTOMAÇÃO E ESCALA</h4>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Workflows para produção em massa</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-400">✓</span>
                    <span>Templates reutilizáveis</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-emerald-400">✓</span>
                    <span>1 produto = 50 variações</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Results Promise */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-emerald-400 mb-6">RESULTADO GARANTIDO:</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">300%</div>
                <p className="text-gray-300">Aumento médio nas vendas</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">5min</div>
                <p className="text-gray-300">Para transformar cada foto</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">24h</div>
                <p className="text-gray-300">Para ver os primeiros resultados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
