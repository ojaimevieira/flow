import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const OfertaGestao = () => {
  const beneficios = [
    "🎓 48h de conteúdo exclusivo",
    "📚 72 aulas práticas e teóricas",
    "🏆 Certificado reconhecido",
    "💻 Acesso vitalício à plataforma",
    "📱 App mobile para estudar offline",
    "🤝 Suporte direto com instrutores",
    "📊 Cases reais e práticos",
    "🔄 Atualizações gratuitas do conteúdo",
    "👥 Comunidade exclusiva de alunos",
    "🎯 Projeto final personalizado"
  ];

  const bonus = [
    {
      titulo: "E-book: 50 KPIs Essenciais",
      descricao: "Guia completo com os principais indicadores para gestão em saúde",
      valor: "R$ 197",
      icone: "📈"
    },
    {
      titulo: "Templates de Gestão",
      descricao: "Planilhas e documentos prontos para usar na sua instituição",
      valor: "R$ 297",
      icone: "📋"
    },
    {
      titulo: "Webinar Exclusivo",
      descricao: "Sessão ao vivo sobre Tendências da Gestão em Saúde 2024",
      valor: "R$ 497",
      icone: "🎥"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-6 animate-pulse">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
            Oferta Limitada
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Transforme sua Carreira
            <span className="block text-blue-600"> com Desconto Especial</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Garante sua vaga no curso mais completo de Gestão em Saúde do Brasil 
            e acelere sua carreira com metodologias comprovadas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          
          {/* Main Offer */}
          <div className="lg:col-span-2">
            <Card className="relative overflow-hidden border-0 shadow-2xl">
              {/* Offer Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className="bg-red-500 text-white text-lg px-4 py-2 animate-bounce">
                  70% OFF
                </Badge>
              </div>

              <CardContent className="p-8">
                {/* Price Section */}
                <div className="text-center mb-8">
                  <div className="mb-4">
                    <span className="text-3xl text-gray-500 line-through">De R$ 1.997</span>
                    <span className="text-6xl font-bold text-blue-600 ml-4">R$ 597</span>
                  </div>
                  <p className="text-gray-600 text-lg">ou 12x de R$ 59,70 sem juros</p>
                  
                  {/* Countdown Timer */}
                  <div className="mt-6 p-4 bg-red-50 rounded-xl border border-red-200">
                    <p className="text-red-700 font-medium mb-2">⏰ Oferta válida apenas hoje!</p>
                    <div className="flex justify-center space-x-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-red-600">05</div>
                        <div className="text-xs text-red-500">HORAS</div>
                      </div>
                      <div className="text-2xl text-red-600">:</div>
                      <div>
                        <div className="text-2xl font-bold text-red-600">23</div>
                        <div className="text-xs text-red-500">MIN</div>
                      </div>
                      <div className="text-2xl text-red-600">:</div>
                      <div>
                        <div className="text-2xl font-bold text-red-600">47</div>
                        <div className="text-xs text-red-500">SEG</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits List */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-6">
                    O que está incluído:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {beneficios.map((beneficio, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <span className="text-2xl">{beneficio.split(' ')[0]}</span>
                        <span className="text-gray-700">{beneficio.substring(3)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <Button 
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-xl font-bold py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    🚀 GARANTIR MINHA VAGA AGORA
                  </Button>
                  
                  <div className="mt-4 flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <span className="flex items-center">🔒 Compra 100% segura</span>
                    <span>•</span>
                    <span className="flex items-center">↩️ 7 dias de garantia</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bonus Section */}
          <div>
            <Card className="border-2 border-yellow-300 bg-gradient-to-b from-yellow-50 to-white shadow-xl">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <Badge className="bg-yellow-500 text-yellow-900 text-lg px-4 py-2 mb-4">
                    🎁 BÔNUS EXCLUSIVOS
                  </Badge>
                  <h3 className="text-xl font-bold text-gray-900">
                    Receba Gratuitamente
                  </h3>
                </div>

                <div className="space-y-4">
                  {bonus.map((item, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-sm border border-yellow-200">
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl">{item.icone}</span>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 text-sm">{item.titulo}</h4>
                          <p className="text-xs text-gray-600 mb-2">{item.descricao}</p>
                          <span className="text-green-600 font-bold text-sm">
                            Valor: {item.valor}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <div className="text-lg font-bold text-gray-900">
                    Total em Bônus: <span className="text-green-600">R$ 991</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Você paga apenas pelo curso e leva tudo isso de graça!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto border-2 border-green-200 bg-gradient-to-r from-green-50 to-blue-50">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="text-6xl">🛡️</div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Garantia Incondicional de 7 Dias
                  </h3>
                  <p className="text-gray-700">
                    Se não ficar satisfeito com o curso, devolvemos 100% do seu dinheiro. 
                    Sem perguntas, sem burocracia.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-4">
            Restam apenas <span className="font-bold text-red-600">7 vagas</span> com desconto
          </p>
          <Button 
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white text-xl font-bold px-12 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 animate-pulse"
          >
            ⚡ ÚLTIMA CHANCE - GARANTA SUA VAGA
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OfertaGestao;
