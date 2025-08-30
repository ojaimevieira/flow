import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ModulosCurso = () => {
  const modulos = [
    {
      numero: "01",
      titulo: "Fundamentos da Gestão em Saúde",
      duracao: "8h",
      aulas: "12",
      topicos: [
        "Introdução à gestão hospitalar",
        "Estrutura organizacional em saúde",
        "Legislação e regulamentações",
        "Ética e responsabilidade social"
      ],
      cor: "from-blue-500 to-blue-600",
      icone: "🏥"
    },
    {
      numero: "02",
      titulo: "Gestão de Processos e Qualidade",
      duracao: "10h",
      aulas: "15",
      topicos: [
        "Mapeamento de processos",
        "Indicadores de qualidade",
        "Acreditação hospitalar",
        "Melhoria contínua"
      ],
      cor: "from-emerald-500 to-emerald-600",
      icone: "⚙️"
    },
    {
      numero: "03",
      titulo: "Gestão Financeira e Orçamentária",
      duracao: "12h",
      aulas: "18",
      topicos: [
        "Planejamento financeiro",
        "Controle de custos",
        "Análise de viabilidade",
        "Gestão de contratos"
      ],
      cor: "from-purple-500 to-purple-600",
      icone: "💰"
    },
    {
      numero: "04",
      titulo: "Liderança e Gestão de Pessoas",
      duracao: "8h",
      aulas: "12",
      topicos: [
        "Liderança em saúde",
        "Gestão de equipes multidisciplinares",
        "Comunicação eficaz",
        "Resolução de conflitos"
      ],
      cor: "from-orange-500 to-orange-600",
      icone: "👥"
    },
    {
      numero: "05",
      titulo: "Tecnologia e Inovação",
      duracao: "6h",
      aulas: "9",
      topicos: [
        "Sistemas de informação em saúde",
        "Transformação digital",
        "Telemedicina e e-health",
        "Inteligência artificial aplicada"
      ],
      cor: "from-cyan-500 to-cyan-600",
      icone: "🔬"
    },
    {
      numero: "06",
      titulo: "Projeto Final e Certificação",
      duracao: "4h",
      aulas: "6",
      topicos: [
        "Desenvolvimento do projeto",
        "Apresentação e defesa",
        "Avaliação final",
        "Emissão de certificado"
      ],
      cor: "from-rose-500 to-rose-600",
      icone: "🎓"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Programa Completo
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Módulos do
            <span className="block text-blue-600"> Curso</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Um programa estruturado e progressivo que te levará do básico ao avançado 
            na gestão em saúde, com conteúdo prático e aplicável.
          </p>

          {/* Course Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">48h</div>
              <div className="text-gray-600">Carga Horária</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">72</div>
              <div className="text-gray-600">Aulas Online</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">6</div>
              <div className="text-gray-600">Módulos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">1</div>
              <div className="text-gray-600">Certificado</div>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {modulos.map((modulo, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:transform hover:scale-105 overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Header */}
                <div className={`bg-gradient-to-r ${modulo.cor} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 text-6xl opacity-20 transform translate-x-4 -translate-y-2">
                    {modulo.icone}
                  </div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-white/20 text-white border-0">
                        Módulo {modulo.numero}
                      </Badge>
                      <div className="text-3xl">{modulo.icone}</div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{modulo.titulo}</h3>
                    <div className="flex gap-4 text-sm opacity-90">
                      <span>📚 {modulo.aulas} aulas</span>
                      <span>⏱️ {modulo.duracao}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">O que você vai aprender:</h4>
                  <ul className="space-y-3">
                    {modulo.topicos.map((topico, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{topico}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Progress indicator */}
                  <div className="mt-6">
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${modulo.cor} transition-all duration-1000 group-hover:w-full`}
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Comece Hoje Mesmo!
            </h3>
            <p className="text-gray-600 mb-6">
              Tenha acesso imediato a todo o conteúdo e comece a transformar 
              sua carreira na gestão em saúde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                🚀 Matricular-se Agora
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                📋 Baixar Programa
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulosCurso;
