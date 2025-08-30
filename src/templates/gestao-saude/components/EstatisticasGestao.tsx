import { Card, CardContent } from "@/components/ui/card";

const EstatisticasGestao = () => {
  const estatisticas = [
    {
      numero: "500+",
      titulo: "Profissionais Formados",
      descricao: "Gestores capacitados em instituições de saúde",
      icone: "👥",
      cor: "from-blue-500 to-blue-600"
    },
    {
      numero: "95%",
      titulo: "Taxa de Aprovação",
      descricao: "Índice de conclusão e certificação do curso",
      icone: "🏆",
      cor: "from-emerald-500 to-emerald-600"
    },
    {
      numero: "40h",
      titulo: "Mentoria Direta",
      descricao: "Acompanhamento personalizado com especialistas",
      icone: "🎯",
      cor: "from-purple-500 to-purple-600"
    },
    {
      numero: "R$ 2M+",
      titulo: "Economia Gerada",
      descricao: "Valor economizado pelos alunos em suas instituições",
      icone: "💰",
      cor: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-cyan-200/20 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Resultados Comprovados
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Números que
            <span className="block text-blue-600"> Falam por Si</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossos alunos transformam suas carreiras e geram resultados reais 
            em suas instituições de saúde. Veja o impacto que estamos causando.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {estatisticas.map((stat, index) => (
            <Card 
              key={index}
              className="group text-center bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:transform hover:scale-105"
            >
              <CardContent className="p-8">
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${stat.cor} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl">{stat.icone}</span>
                </div>
                
                {/* Number */}
                <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.cor} bg-clip-text text-transparent mb-3`}>
                  {stat.numero}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {stat.titulo}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.descricao}
                </p>
                
                {/* Progress bar animation */}
                <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${stat.cor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left`}
                  ></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Faça Parte Destes Números de Sucesso
            </h3>
            <p className="text-gray-600 mb-6">
              Junte-se aos centenas de profissionais que já transformaram 
              suas carreiras e impactam positivamente o setor de saúde.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              🚀 Quero Ser o Próximo Caso de Sucesso
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstatisticasGestao;
