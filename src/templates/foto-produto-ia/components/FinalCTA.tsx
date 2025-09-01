import { Button } from "@/shared/ui/button";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-900/30 via-black to-emerald-900/30 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center space-y-16">
          {/* Urgency Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-6 py-3 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-lg font-medium animate-pulse">
              🚨 ÚLTIMA CHANCE
            </div>
            
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight">
              NÃO PERCA MAIS
              <span className="block text-red-400">VENDAS</span>
            </h2>
          </div>

          {/* Main Message */}
          <div className="space-y-8">
            <p className="text-2xl md:text-3xl text-gray-300 leading-relaxed">
              <span className="text-red-400 font-bold">Cada dia que passa</span> é dinheiro que você deixa na mesa
            </p>
            
            <div className="bg-gray-800/50 border-l-4 border-red-500 rounded-lg p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-red-400 mb-4">ENQUANTO VOCÊ PENSA:</h3>
              <ul className="text-left space-y-3 text-lg text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <span>Seus concorrentes já estão usando IA para multiplicar vendas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <span>Você continua perdendo clientes por fotos amadoras</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <span>Suas vendas ficam estagnadas enquanto poderia estar crescendo</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-400 text-xl">❌</span>
                  <span>O preço promocional vai acabar e você vai pagar mais caro</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Success Stories Reminder */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6">
              OUTROS JÁ ESCOLHERAM MUDAR:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-3">
                <div className="text-3xl">🍰</div>
                <div>
                  <p className="text-white font-bold">Ana - Doces</p>
                  <p className="text-emerald-400 text-lg">+300% vendas</p>
                  <p className="text-gray-300 text-sm">"Fila de espera todo dia"</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="text-3xl">🍱</div>
                <div>
                  <p className="text-white font-bold">Carlos - Marmitas</p>
                  <p className="text-emerald-400 text-lg">+50% no preço</p>
                  <p className="text-gray-300 text-sm">"Cobro R$ 18 ao invés de R$ 12"</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="text-3xl">💍</div>
                <div>
                  <p className="text-white font-bold">Maria - Bijuterias</p>
                  <p className="text-emerald-400 text-lg">+600% vendas</p>
                  <p className="text-gray-300 text-sm">"Virei referência no bairro"</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Choice */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">
              VOCÊ TEM DUAS ESCOLHAS:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Option 1 - Stay the Same */}
              <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-8">
                <h4 className="text-xl font-bold text-red-400 mb-6">❌ CONTINUAR COMO ESTÁ:</h4>
                <ul className="space-y-3 text-gray-300 text-left">
                  <li>• Fotos amadoras que não vendem</li>
                  <li>• Concorrer só por preço baixo</li>
                  <li>• Ver concorrentes crescendo</li>
                  <li>• Perder vendas todo dia</li>
                  <li>• Ficar para trás na revolução IA</li>
                </ul>
                <div className="mt-6 p-4 bg-red-800/20 rounded-lg">
                  <p className="text-red-400 font-bold">Resultado: Estagnação e perda de mercado</p>
                </div>
              </div>

              {/* Option 2 - Transform */}
              <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-8">
                <h4 className="text-xl font-bold text-emerald-400 mb-6">✅ TRANSFORMAR AGORA:</h4>
                <ul className="space-y-3 text-gray-300 text-left">
                  <li>• Fotos profissionais que hipnotizam</li>
                  <li>• Cobrar preços premium</li>
                  <li>• Ser referência no seu nicho</li>
                  <li>• Multiplicar vendas em 30 dias</li>
                  <li>• Liderar com tecnologia de ponta</li>
                </ul>
                <div className="mt-6 p-4 bg-emerald-800/20 rounded-lg">
                  <p className="text-emerald-400 font-bold">Resultado: Crescimento e sucesso garantido</p>
                </div>
              </div>
            </div>
          </div>

          {/* Final Urgency */}
          <div className="space-y-6">
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
              <div className="flex items-center justify-center space-x-4">
                <span className="text-4xl">⚠️</span>
                <div className="text-center">
                  <h4 className="text-yellow-400 font-bold text-xl">A REVOLUÇÃO JÁ COMEÇOU</h4>
                  <p className="text-gray-300">Você vai liderar ou vai assistir de fora?</p>
                </div>
              </div>
            </div>

            <p className="text-xl text-gray-300">
              Esta é sua chance de <span className="text-emerald-400 font-bold">estar na frente</span> 
              ao invés de correr atrás mais tarde
            </p>
          </div>

          {/* Final CTA */}
          <div className="space-y-8">
            <div className="bg-black/50 border-2 border-emerald-500/50 rounded-2xl p-8">
              <h3 className="text-3xl font-bold text-emerald-400 mb-6">
                FAÇA A ESCOLHA CERTA AGORA:
              </h3>
              
              <div className="space-y-6">
                <Button 
                  size="lg" 
                  className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-2xl px-16 py-8 rounded-full transform transition-all duration-300 hover:scale-105 shadow-2xl shadow-emerald-500/25 animate-pulse"
                >
                  GARANTIR MINHA VAGA AGORA
                </Button>
                
                <div className="text-center space-y-2">
                  <p className="text-lg text-gray-300">
                    Apenas <span className="text-red-400 font-bold">47 vagas restantes</span>
                  </p>
                  <p className="text-gray-400">
                    🔒 Pagamento seguro • ⭐ Garantia de 30 dias • 🚀 Acesso imediato
                  </p>
                </div>
              </div>
            </div>

            {/* Last Reminder */}
            <div className="space-y-4">
              <p className="text-lg text-gray-400">
                Lembre-se: se não funcionar, você recebe 100% do seu dinheiro de volta
              </p>
              <p className="text-2xl text-white font-bold">
                O RISCO É TODO NOSSO. O SUCESSO É TODO SEU.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
