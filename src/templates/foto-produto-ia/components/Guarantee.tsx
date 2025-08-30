export default function Guarantee() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          {/* Section Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-6 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-lg font-medium">
              🛡️ RISCO ZERO
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white">
              GARANTIA
              <span className="block text-emerald-400">BLINDADA</span>
              <span className="block text-white">DE 30 DIAS</span>
            </h2>
          </div>

          {/* Main Guarantee */}
          <div className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-2 border-emerald-500/30 rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_rgba(34,197,94,0.1)_0%,_transparent_50%)]"></div>
            
            <div className="relative z-10 space-y-8">
              {/* Guarantee Badge */}
              <div className="inline-flex items-center justify-center w-24 h-24 bg-emerald-500 rounded-full mx-auto">
                <span className="text-3xl">🛡️</span>
              </div>

              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-emerald-400">
                  GARANTIA MULTIPLICAÇÃO DE VENDAS
                </h3>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Se você aplicar o método e não conseguir criar fotos que 
                  <span className="text-white font-bold"> multipliquem suas vendas em até 30 dias</span>, 
                  devolvemos 100% do seu investimento.
                </p>
              </div>

              {/* Guarantee Details */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center space-y-4">
                  <div className="bg-emerald-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">RESULTADOS GARANTIDOS</h4>
                  <p className="text-gray-300 text-sm">
                    Se não aumentar suas vendas, devolvemos tudo
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="bg-emerald-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <span className="text-2xl">❓</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">SEM PERGUNTAS</h4>
                  <p className="text-gray-300 text-sm">
                    Sem complicação, sem burocracia
                  </p>
                </div>
                
                <div className="text-center space-y-4">
                  <div className="bg-emerald-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">DEVOLUÇÃO RÁPIDA</h4>
                  <p className="text-gray-300 text-sm">
                    Reembolso em até 5 dias úteis
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How it Works */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-white">COMO FUNCIONA A GARANTIA:</h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center space-y-4">
                <div className="bg-emerald-500 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto font-bold text-lg">
                  1
                </div>
                <h4 className="text-emerald-400 font-bold">SE INSCREVA</h4>
                <p className="text-gray-300 text-sm">Acesse o curso completo</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-emerald-500 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto font-bold text-lg">
                  2
                </div>
                <h4 className="text-emerald-400 font-bold">APLIQUE O MÉTODO</h4>
                <p className="text-gray-300 text-sm">Use as técnicas por 30 dias</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-emerald-500 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto font-bold text-lg">
                  3
                </div>
                <h4 className="text-emerald-400 font-bold">NÃO FUNCIONOU?</h4>
                <p className="text-gray-300 text-sm">Mande uma mensagem</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-emerald-500 text-black rounded-full w-12 h-12 flex items-center justify-center mx-auto font-bold text-lg">
                  4
                </div>
                <h4 className="text-emerald-400 font-bold">REEMBOLSO 100%</h4>
                <p className="text-gray-300 text-sm">Dinheiro de volta em 5 dias</p>
              </div>
            </div>
          </div>

          {/* Why We Offer This Guarantee */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-8 text-left max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6 text-center">
              POR QUE OFERECEMOS ESTA GARANTIA?
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <span className="text-emerald-400 text-xl mt-1">✓</span>
                <div>
                  <h4 className="text-white font-bold text-lg">CONFIANÇA NO MÉTODO</h4>
                  <p className="text-gray-300">
                    Mais de 500 empreendedores já multiplicaram vendas com essas técnicas. 
                    Sabemos que funciona.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <span className="text-emerald-400 text-xl mt-1">✓</span>
                <div>
                  <h4 className="text-white font-bold text-lg">RESULTADOS COMPROVADOS</h4>
                  <p className="text-gray-300">
                    95% dos nossos alunos conseguem criar fotos profissionais na primeira semana.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <span className="text-emerald-400 text-xl mt-1">✓</span>
                <div>
                  <h4 className="text-white font-bold text-lg">COMPROMETIMENTO COM VOCÊ</h4>
                  <p className="text-gray-300">
                    Seu sucesso é nosso sucesso. Se você não conseguir resultado, não merecemos seu dinheiro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial about Guarantee */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-emerald-500/30 rounded-lg p-8">
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-emerald-400 text-2xl">💬</span>
              </div>
              <div className="text-left">
                <blockquote className="text-lg text-gray-300 italic mb-4">
                  "Fiquei com medo de ser mais um golpe na internet, mas a garantia me deu confiança. 
                  No final nem precisei usar, porque os resultados vieram em 15 dias!"
                </blockquote>
                <div>
                  <p className="text-white font-bold">Marina Santos</p>
                  <p className="text-gray-400 text-sm">Bijuterias Artesanais</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Reassurance */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-emerald-400">
              VOCÊ NÃO TEM NADA A PERDER
            </h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ou você multiplica suas vendas com fotos profissionais, 
              <span className="text-white font-bold"> ou recebe seu dinheiro de volta</span>. 
              O risco é todo nosso.
            </p>
            
            <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-emerald-400 font-bold text-lg">
                GARANTIA VÁLIDA POR 30 DIAS COMPLETOS
              </p>
              <p className="text-gray-300 text-sm mt-2">
                A partir da data de compra
              </p>
            </div>
          </div>

          {/* CTA with Guarantee */}
          <div className="space-y-4">
            <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-xl px-12 py-6 rounded-full transform transition-all duration-300 hover:scale-105 shadow-2xl shadow-emerald-500/25">
              COMEÇAR AGORA COM GARANTIA TOTAL
            </button>
            
            <p className="text-gray-400 text-sm">
              🛡️ Protegido pela Garantia Blindada de 30 dias
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
