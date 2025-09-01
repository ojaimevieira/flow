import { Card, CardContent } from "@/shared/ui/card";

const BeneficiosGestao = () => {
  const beneficios = [
    {
      icon: "🎯",
      title: "Gestão Estratégica",
      description: "Aprenda a desenvolver e implementar estratégias eficazes para instituições de saúde",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: "📊",
      title: "Indicadores de Performance",
      description: "Domine métricas e KPIs essenciais para monitorar e melhorar a performance",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: "💰",
      title: "Gestão Financeira",
      description: "Controle orçamentário, custos e receitas em ambientes de alta complexidade",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: "👥",
      title: "Liderança em Saúde",
      description: "Desenvolva habilidades de liderança específicas para equipes multidisciplinares",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: "🏥",
      title: "Operações Hospitalares",
      description: "Otimize processos operacionais e fluxos de trabalho em unidades de saúde",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: "⚡",
      title: "Transformação Digital",
      description: "Implemente tecnologias e sistemas para modernizar a gestão em saúde",
      color: "from-rose-500 to-rose-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Por que escolher nosso curso?
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Benefícios que
            <span className="block text-blue-600"> Transformam Carreiras</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolva competências essenciais para se destacar na gestão em saúde 
            com metodologia prática e orientação especializada.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {beneficios.map((beneficio, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm hover:bg-white hover:transform hover:scale-105"
            >
              <CardContent className="p-8 text-center">
                {/* Icon with gradient background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${beneficio.color} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{beneficio.icon}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {beneficio.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {beneficio.description}
                </p>
                
                {/* Hover indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Pronto para Transformar sua Carreira?
              </h3>
              <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                Junte-se a centenas de profissionais que já revolucionaram sua gestão em saúde
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  🚀 Inscrever-se Agora
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300">
                  📞 Falar com Consultor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosGestao;
