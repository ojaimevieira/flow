import { useState, useEffect } from 'react';

export default function Urgency() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 3,
    minutes: 47,
    seconds: 23
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-red-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-12">
          {/* Urgency Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-6 py-3 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-lg font-medium animate-pulse">
              🔥 ÚLTIMOS DIAS - TURMA FECHANDO
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white">
              RESTAM APENAS
              <span className="block text-red-400">47 VAGAS</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Esta é a última turma de 2024 com preço promocional.
              <span className="text-red-400 font-bold"> Não perca esta oportunidade!</span>
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-red-400 mb-8">PREÇO ESPECIAL ACABA EM:</h3>
            
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <div className="text-4xl md:text-6xl font-black text-red-400 mb-2">
                  {timeLeft.days.toString().padStart(2, '0')}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">Dias</div>
              </div>
              
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <div className="text-4xl md:text-6xl font-black text-red-400 mb-2">
                  {timeLeft.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">Horas</div>
              </div>
              
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <div className="text-4xl md:text-6xl font-black text-red-400 mb-2">
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">Min</div>
              </div>
              
              <div className="bg-black/50 rounded-lg p-6 text-center">
                <div className="text-4xl md:text-6xl font-black text-red-400 mb-2">
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-gray-300 text-sm uppercase tracking-wider">Seg</div>
              </div>
            </div>
          </div>

          {/* Scarcity Indicators */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-red-900/10 border border-red-500/20 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-red-400 mb-3">VAGAS LIMITADAS</h3>
              <p className="text-gray-300">Apenas 47 vagas restantes para garantir suporte de qualidade</p>
              <div className="mt-4 bg-gray-800 rounded-full h-4 overflow-hidden">
                <div className="bg-red-500 h-full w-[85%] rounded-full"></div>
              </div>
              <p className="text-red-400 text-sm mt-2">85% das vagas já foram preenchidas</p>
            </div>
            
            <div className="bg-red-900/10 border border-red-500/20 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-red-400 mb-3">PREÇO PROMOCIONAL</h3>
              <p className="text-gray-300">Após esta turma o preço volta para R$ 1.997</p>
              <div className="mt-4 text-center">
                <span className="text-gray-500 line-through text-lg">R$ 1.997</span>
                <span className="text-emerald-400 text-2xl font-bold ml-2">R$ 497</span>
              </div>
              <p className="text-red-400 text-sm mt-2">Economia de R$ 1.500</p>
            </div>
            
            <div className="bg-red-900/10 border border-red-500/20 rounded-lg p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-red-400 mb-3">BÔNUS EXCLUSIVOS</h3>
              <p className="text-gray-300">Bônus no valor de R$ 1.988 apenas para esta turma</p>
              <div className="mt-4 space-y-1 text-sm text-gray-400">
                <div>• 500 Prompts Profissionais</div>
                <div>• Pack Backgrounds Premium</div>
                <div>• Grupo VIP + Suporte</div>
              </div>
            </div>
          </div>

          {/* Social Proof of Urgency */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-emerald-400 mb-6 text-center">
              ÚLTIMAS INSCRIÇÕES (TEMPO REAL):
            </h3>
            
            <div className="space-y-3 max-h-40 overflow-hidden">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">Marina S. - Bijuterias</span>
                <span className="text-emerald-400">Há 2 minutos</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">Carlos M. - Marmitaria</span>
                <span className="text-emerald-400">Há 5 minutos</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">Ana P. - Doces Caseiros</span>
                <span className="text-emerald-400">Há 8 minutos</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-300">João R. - E-commerce</span>
                <span className="text-emerald-400">Há 12 minutos</span>
              </div>
            </div>
          </div>

          {/* Warning Messages */}
          <div className="space-y-8">
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6 max-w-3xl mx-auto">
              <div className="flex items-center space-x-4">
                <span className="text-3xl">⚠️</span>
                <div className="text-left">
                  <h4 className="text-yellow-400 font-bold text-lg">ATENÇÃO!</h4>
                  <p className="text-gray-300">
                    Não seja mais um que vende barato por ter fotos ruins. 
                    Seus concorrentes já estão usando IA para multiplicar vendas.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center space-y-4">
              <p className="text-xl text-gray-300">
                <span className="text-red-400 font-bold">Cada dia que passa</span> é dinheiro que você deixa na mesa
              </p>
              <p className="text-lg text-gray-400">
                Enquanto você pensa, seus concorrentes já estão implementando...
              </p>
            </div>
          </div>

          {/* Final Urgency CTA */}
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-red-400 mb-6">
              NÃO DEIXE PARA AMANHÃ!
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Esta oportunidade não vai se repetir. O preço volta ao normal após esta turma.
            </p>
            
            <div className="space-y-4">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold text-xl px-12 py-6 rounded-full transform transition-all duration-300 hover:scale-105 shadow-2xl shadow-red-500/25 animate-pulse">
                GARANTIR MINHA VAGA AGORA
              </button>
              
              <p className="text-gray-400 text-sm">
                🔒 Pagamento seguro • ⭐ Garantia de 30 dias • 🚀 Acesso imediato
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
