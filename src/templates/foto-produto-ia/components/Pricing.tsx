import { Button } from "@/components/ui/button";

export default function Pricing() {
  const bonuses = [
    {
      title: "500 Prompts Profissionais",
      value: "R$ 297",
      description: "Prompts testados para cada tipo de produto e nicho"
    },
    {
      title: "Pack Backgrounds Premium",
      value: "R$ 197",
      description: "200+ cenários profissionais para seus produtos"
    },
    {
      title: "Grupo VIP Telegram",
      value: "R$ 97",
      description: "Comunidade exclusiva com networking e suporte"
    },
    {
      title: "Suporte Direto 30 Dias", 
      value: "R$ 397",
      description: "Tire dúvidas diretamente comigo via WhatsApp"
    },
    {
      title: "Templates Redes Sociais",
      value: "R$ 197",
      description: "Posts, stories e anúncios prontos para usar"
    },
    {
      title: "Atualizações Vitalícias",
      value: "R$ 497",
      description: "Todas as novas técnicas e ferramentas incluídas"
    }
  ];

  const totalBonusValue = bonuses.reduce((sum, bonus) => {
    return sum + parseInt(bonus.value.replace('R$ ', ''));
  }, 0);

  return (
    <section className="py-20 bg-gradient-to-b from-red-900/20 to-black">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-16">
          {/* Section Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-6 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-lg font-medium">
              💎 OFERTA ESPECIAL
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white">
              TUDO QUE VOCÊ
              <span className="block text-emerald-400">PRECISA PARA</span>
              <span className="block text-white">DOMINAR IA</span>
            </h2>
          </div>

          {/* Main Offer */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-2 border-emerald-500/30 rounded-2xl p-8 relative overflow-hidden">
              {/* Bestseller Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-emerald-500 text-black px-6 py-2 rounded-full font-bold text-sm">
                  🔥 MAIS VENDIDO
                </div>
              </div>

              <div className="pt-6 space-y-8">
                {/* Course Title */}
                <div className="text-center space-y-4">
                  <h3 className="text-3xl font-bold text-emerald-400">MÉTODO FOTO IA PRO</h3>
                  <p className="text-xl text-gray-300">Sistema completo para multiplicar vendas com fotos profissionais</p>
                </div>

                {/* Price Comparison */}
                <div className="text-center space-y-4">
                  <div className="space-y-2">
                    <div className="text-gray-500 line-through text-2xl">De: R$ 1.997</div>
                    <div className="text-5xl font-black text-emerald-400">R$ 497</div>
                    <div className="text-gray-300">ou 12x de R$ 49,90</div>
                  </div>
                  
                  <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-medium">
                    💰 Economia de R$ 1.500 (75% OFF)
                  </div>
                </div>

                {/* What's Included */}
                <div className="bg-gray-900/50 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-white mb-6 text-center">INCLUSO NO CURSO:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-emerald-400">✓</span>
                        <span className="text-gray-300">4 Módulos Completos</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-emerald-400">✓</span>
                        <span className="text-gray-300">15+ Horas de Conteúdo</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-emerald-400">✓</span>
                        <span className="text-gray-300">Acesso Vitalício</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <span className="text-emerald-400">✓</span>
                        <span className="text-gray-300">Certificado de Conclusão</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-emerald-400">✓</span>
                        <span className="text-gray-300">Projetos Práticos</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-emerald-400">✓</span>
                        <span className="text-gray-300">Garantia 30 Dias</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bonuses Section */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-bold text-emerald-400">+ BÔNUS EXCLUSIVOS</h3>
              <p className="text-xl text-gray-300">Receba GRÁTIS estes materiais de apoio:</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {bonuses.map((bonus, index) => (
                <div key={index} className="bg-gray-800/50 border border-emerald-500/30 rounded-lg p-6 text-center">
                  <div className="space-y-4">
                    <div className="text-2xl">🎁</div>
                    <h4 className="text-lg font-bold text-emerald-400">{bonus.title}</h4>
                    <div className="text-2xl font-bold text-white">{bonus.value}</div>
                    <p className="text-gray-300 text-sm">{bonus.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Value Calculation */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-emerald-400 mb-6 text-center">VALOR TOTAL:</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Curso Método Foto IA Pro</span>
                <span className="text-white font-bold">R$ 1.997</span>
              </div>
              {bonuses.map((bonus, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-300">+ {bonus.title}</span>
                  <span className="text-white">{bonus.value}</span>
                </div>
              ))}
              <div className="border-t border-gray-600 pt-4 flex justify-between items-center text-xl font-bold">
                <span className="text-white">VALOR TOTAL:</span>
                <span className="text-emerald-400">R$ {1997 + totalBonusValue}</span>
              </div>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4">
                <div className="text-3xl font-black text-white mb-2">VOCÊ PAGA APENAS:</div>
                <div className="text-5xl font-black text-emerald-400">R$ 497</div>
                <div className="text-gray-300">Economia de R$ {1997 + totalBonusValue - 497}</div>
              </div>
            </div>
          </div>

          {/* Payment Options */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">FORMAS DE PAGAMENTO:</h3>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-emerald-400 mb-4">À VISTA</h4>
                <div className="text-3xl font-bold text-white mb-2">R$ 447</div>
                <div className="text-emerald-400 font-medium mb-4">Economia de R$ 50</div>
                <div className="text-sm text-gray-300">PIX, Boleto ou Cartão</div>
              </div>
              
              <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 text-center">
                <h4 className="text-xl font-bold text-white mb-4">PARCELADO</h4>
                <div className="text-3xl font-bold text-white mb-2">12x R$ 49,90</div>
                <div className="text-gray-400 font-medium mb-4">Total: R$ 497</div>
                <div className="text-sm text-gray-300">Cartão de Crédito</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-6">
            <Button 
              size="lg" 
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-xl px-12 py-6 rounded-full transform transition-all duration-300 hover:scale-105 shadow-2xl shadow-emerald-500/25"
            >
              QUERO TRANSFORMAR MINHAS VENDAS AGORA
            </Button>
            
            <div className="flex justify-center items-center space-x-6 text-gray-400 text-sm">
              <span>🔒 Pagamento 100% Seguro</span>
              <span>⭐ Garantia de 30 Dias</span>
              <span>🚀 Acesso Imediato</span>
            </div>
          </div>

          {/* Risk Reversal */}
          <div className="bg-gray-800/50 border-l-4 border-emerald-500 rounded-lg p-6 max-w-3xl mx-auto">
            <h4 className="text-xl font-bold text-emerald-400 mb-4">RISCO ZERO PARA VOCÊ:</h4>
            <p className="text-gray-300 leading-relaxed">
              Teste o método por 30 dias. Se não conseguir criar fotos que multipliquem suas vendas, 
              devolvemos 100% do seu investimento sem perguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
