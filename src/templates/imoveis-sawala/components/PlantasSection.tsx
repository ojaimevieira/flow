import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { 
  Home, 
  Maximize, 
  Bath, 
  Car,
  Eye,
  Calculator,
  ArrowRight
} from "lucide-react";

const PlantasSection = () => {
  const tipologias = [
    {
      tipo: "Studio",
      metragem: "35m²",
      valor: "A partir de R$ 485.000",
      caracteristicas: [
        "Ambiente integrado otimizado",
        "Varanda com vista", 
        "Cozinha americana",
        "1 vaga de garagem"
      ],
      disponivel: 12,
      color: "from-blue-500 to-cyan-500"
    },
    {
      tipo: "1 Quarto",
      metragem: "52m²", 
      valor: "A partir de R$ 640.000",
      caracteristicas: [
        "Suíte com closet",
        "Sala com varanda",
        "Cozinha separada", 
        "1 vaga de garagem"
      ],
      disponivel: 18,
      color: "from-amber-500 to-yellow-500",
      destaque: true
    },
    {
      tipo: "2 Quartos",
      metragem: "75m²",
      valor: "A partir de R$ 890.000", 
      caracteristicas: [
        "Suíte + quarto",
        "2 banheiros completos",
        "Varanda gourmet",
        "1 vaga de garagem"
      ],
      disponivel: 24,
      color: "from-green-500 to-emerald-500"
    },
    {
      tipo: "3 Quartos", 
      metragem: "95m²",
      valor: "A partir de R$ 1.180.000",
      caracteristicas: [
        "Suíte master + 2 quartos",
        "3 banheiros completos", 
        "Varanda gourmet ampla",
        "2 vagas de garagem"
      ],
      disponivel: 8,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const condicoes = [
    "💰 Entrada: A partir de R$ 48.500 (10%)",
    "📅 Financiamento: Direto com a construtora",
    "🏦 FGTS: Aceito como entrada ou amortização", 
    "⚡ Desconto: 5% à vista ou 3% financiado",
    "🎯 Entrega: Dezembro 2026",
    "📋 Documentação: Inclusa no valor"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-amber-600/10 text-amber-600 border-amber-200 mb-6 text-lg px-6 py-2">
            <Home className="w-5 h-5 mr-2" />
            PLANTAS E VALORES
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Encontre o <span className="bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">Apartamento Perfeito</span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            De studios compactos a apartamentos familiares. Todos com a mesma qualidade e localização excepcional.
          </p>
        </div>

        {/* Tipologias Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {tipologias.map((planta, index) => (
            <Card 
              key={index}
              className={`relative bg-slate-700/50 border-slate-600 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl group backdrop-blur-sm ${planta.destaque ? 'ring-2 ring-amber-400/50 border-amber-400/30' : ''}`}
            >
              {planta.destaque && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold z-10">
                  MAIS PROCURADO
                </div>
              )}
              
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${planta.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {planta.tipo}
                  </h3>
                  
                  <div className="flex items-center justify-center space-x-2 text-slate-300 mb-2">
                    <Maximize className="w-4 h-4" />
                    <span className="font-semibold">{planta.metragem}</span>
                  </div>
                  
                  <div className="text-2xl font-bold text-amber-400">
                    {planta.valor}
                  </div>
                </div>

                {/* Características */}
                <div className="space-y-3 mb-6">
                  {planta.caracteristicas.map((caracteristica, i) => (
                    <div key={i} className="flex items-start space-x-2 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <span>{caracteristica}</span>
                    </div>
                  ))}
                </div>

                {/* Disponibilidade */}
                <div className="text-center mb-4">
                  <Badge variant="outline" className="border-green-400/50 text-green-400">
                    {planta.disponivel} unidades disponíveis
                  </Badge>
                </div>

                {/* CTA */}
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  size="lg"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Ver Planta
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Condições de Pagamento */}
        <div className="bg-gradient-to-r from-slate-800 to-blue-900 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">
              <Calculator className="w-8 h-8 inline mr-3" />
              Condições Especiais de Lançamento
            </h3>
            <p className="text-xl text-blue-100">
              Facilitamos seu sonho da casa própria com as melhores condições do mercado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {condicoes.map((condicao, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center"
              >
                <div className="text-lg font-semibold text-blue-100">
                  {condicao}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white font-bold px-8 py-4 text-lg"
            >
              Simular Financiamento
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PlantasSection;
