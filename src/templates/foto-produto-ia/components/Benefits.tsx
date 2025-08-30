export default function Benefits() {
  const benefits = [
    {
      icon: "🎯",
      title: "TRANSFORMAR FOTOS CASEIRAS",
      description: "De foto de celular para qualidade profissional",
      details: [
        "Remover fundos automaticamente",
        "Corrigir iluminação e cores",
        "Melhorar nitidez e definição",
        "Criar composições perfeitas"
      ]
    },
    {
      icon: "🌟",
      title: "CENÁRIOS IMPOSSÍVEIS",
      description: "Crie ambientes que não existem na vida real",
      details: [
        "Estúdios profissionais virtuais",
        "Cenários de luxo e sofisticação",
        "Ambientes temáticos únicos",
        "Iluminação cinematográfica"
      ]
    },
    {
      icon: "👥",
      title: "MODELOS VIRTUAIS",
      description: "Pessoas reais usando seus produtos",
      details: [
        "Modelos de qualquer idade/etnia",
        "Expressões e poses perfeitas",
        "Lifestyle shots autênticos",
        "Economia de milhares em casting"
      ]
    },
    {
      icon: "⚡",
      title: "AUTOMAÇÃO COMPLETA",
      description: "Produção em massa de conteúdo visual",
      details: [
        "Workflows otimizados",
        "Templates reutilizáveis",
        "Batch processing",
        "1 produto = 50+ variações"
      ]
    },
    {
      icon: "💰",
      title: "MULTIPLICAR VENDAS",
      description: "Aumento real e mensurável de conversão",
      details: [
        "300% mais vendas em média",
        "Preços premium justificados",
        "Maior engajamento nas redes",
        "ROI de 1000%+ comprovado"
      ]
    },
    {
      icon: "🚀",
      title: "VANTAGEM COMPETITIVA",
      description: "Estar na frente dos concorrentes",
      details: [
        "Tecnologia de ponta",
        "Diferenciação visual única",
        "Primeira impressão impactante",
        "Brand authority elevado"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-16">
          {/* Section Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-6 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-lg font-medium">
              ✨ TRANSFORMAÇÃO COMPLETA
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white">
              O QUE VOCÊ VAI
              <span className="block text-emerald-400">DOMINAR</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Cada técnica foi testada e aprovada por centenas de empreendedores. 
              <span className="text-emerald-400 font-bold"> Resultados garantidos desde o primeiro dia.</span>
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-gray-800/50 border border-gray-700 rounded-lg p-8 text-left hover:border-emerald-500/50 hover:bg-emerald-900/10 transition-all duration-300"
              >
                <div className="space-y-6">
                  {/* Icon and Title */}
                  <div className="space-y-4">
                    <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-emerald-400">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Details List */}
                  <div className="space-y-3">
                    {benefit.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start space-x-3">
                        <span className="text-emerald-400 text-sm mt-1">✓</span>
                        <span className="text-gray-400 text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-2xl p-8 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-emerald-400 mb-8 text-center">
              VALOR REAL DO QUE VOCÊ VAI APRENDER:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">SE VOCÊ FOSSE CONTRATAR:</h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Fotógrafo profissional (10 sessões)</span>
                    <span className="text-red-400">R$ 5.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Modelos (20 horas)</span>
                    <span className="text-red-400">R$ 6.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estúdio (6 meses)</span>
                    <span className="text-red-400">R$ 12.000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Editor de imagens</span>
                    <span className="text-red-400">R$ 3.000</span>
                  </div>
                  <div className="border-t border-gray-600 pt-3 flex justify-between font-bold text-lg">
                    <span className="text-white">TOTAL:</span>
                    <span className="text-red-400">R$ 26.000</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">COM O MÉTODO IA PRO:</h4>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Curso completo</span>
                    <span className="text-emerald-400">R$ 497</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ferramentas IA (1 ano)</span>
                    <span className="text-emerald-400">R$ 420</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fotos ilimitadas</span>
                    <span className="text-emerald-400">R$ 0</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Suporte e atualizações</span>
                    <span className="text-emerald-400">R$ 0</span>
                  </div>
                  <div className="border-t border-gray-600 pt-3 flex justify-between font-bold text-lg">
                    <span className="text-white">TOTAL:</span>
                    <span className="text-emerald-400">R$ 917</span>
                  </div>
                </div>

                <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-400">ECONOMIA:</div>
                  <div className="text-3xl font-black text-white">R$ 25.083</div>
                  <div className="text-sm text-gray-300">96% de economia</div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Timeline */}
          <div className="space-y-12">
            <h3 className="text-3xl font-bold text-white">SEU CRONOGRAMA DE RESULTADOS:</h3>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center space-y-4">
                <div className="bg-emerald-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto font-bold text-xl">
                  1
                </div>
                <h4 className="text-emerald-400 font-bold">DIA 1</h4>
                <p className="text-gray-300 text-sm">Setup completo das ferramentas</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-emerald-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto font-bold text-xl">
                  7
                </div>
                <h4 className="text-emerald-400 font-bold">SEMANA 1</h4>
                <p className="text-gray-300 text-sm">Primeiras fotos profissionais criadas</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-emerald-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto font-bold text-xl">
                  15
                </div>
                <h4 className="text-emerald-400 font-bold">15 DIAS</h4>
                <p className="text-gray-300 text-sm">Aumento visível no engajamento</p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="bg-emerald-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto font-bold text-xl">
                  30
                </div>
                <h4 className="text-emerald-400 font-bold">MÊS 1</h4>
                <p className="text-gray-300 text-sm">Vendas multiplicadas e ROI positivo</p>
              </div>
            </div>
          </div>

          {/* Transformation Promise */}
          <div className="bg-gray-800/50 border-l-4 border-emerald-500 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-emerald-400 mb-4">PROMESSA DE TRANSFORMAÇÃO:</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              "Em 30 dias, você terá dominado completamente a criação de fotos profissionais com IA. 
              Seus produtos terão a aparência visual de marcas milionárias, e seus clientes 
              <span className="text-white font-bold"> pagarão preços premium sem questionar.</span>"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
