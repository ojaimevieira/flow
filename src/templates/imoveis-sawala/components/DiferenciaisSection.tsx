import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { 
  MapPin, 
  Building2, 
  Car, 
  Waves, 
  TreePine,
  Dumbbell,
  Shield,
  Crown,
  Home,
  Zap,
  TrendingUp
} from "lucide-react";

const DiferenciaisSection = () => {
  const diferenciais = [
    {
      icon: MapPin,
      title: "Localização Privilegiada",
      description: "No coração de Laranjeiras, a 5 min do metrô e principais pontos da Zona Sul",
      color: "from-blue-600 to-blue-800",
      highlight: "Rua Moura Brasil, 44"
    },
    {
      icon: Building2,
      title: "Projeto Retrofit Exclusivo",
      description: "Arquitetura moderna preservando a essência histórica do bairro",
      color: "from-amber-600 to-amber-800", 
      highlight: "Assinatura FEU Arquitetura"
    },
    {
      icon: Waves,
      title: "Rooftop com Vista Encantadora",
      description: "Área de lazer completa no último andar com vista panorâmica",
      color: "from-cyan-600 to-blue-600",
      highlight: "360° da cidade"
    },
    {
      icon: Car,
      title: "Vaga de Garagem Inclusa",
      description: "Todos os apartamentos acompanham vaga de garagem coberta",
      color: "from-slate-600 to-slate-800",
      highlight: "Segurança total"
    },
    {
      icon: Shield,
      title: "Segurança 24h",
      description: "Portaria completa, controle de acesso e monitoramento integral",
      color: "from-green-600 to-emerald-700",
      highlight: "Tranquilidade total"
    },
    {
      icon: TreePine,
      title: "Área Verde Preservada",
      description: "Jardins privativos e área de convivência em meio à natureza",
      color: "from-emerald-600 to-green-700",
      highlight: "Sustentabilidade"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-600/10 text-blue-600 border-blue-200 mb-6 text-lg px-6 py-2">
            <Crown className="w-5 h-5 mr-2" />
            DIFERENCIAIS EXCLUSIVOS
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Por que escolher o
            <span className="block bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
              Lançamento Laranjeiras?
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Cada detalhe foi pensado para oferecer o máximo em <strong>conforto, segurança e valorização</strong> 
            no bairro mais charmoso da Zona Sul.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {diferenciais.map((item, index) => (
            <Card 
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl group backdrop-blur-sm"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {item.description}
                </p>
                
                <Badge variant="outline" className="border-blue-400/50 text-blue-400">
                  {item.highlight}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Investment Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-amber-600 rounded-2xl p-8 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <TrendingUp className="w-8 h-8 text-amber-200" />
              <h3 className="text-3xl font-bold">Investimento Inteligente</h3>
            </div>
            
            <p className="text-xl text-blue-100 mb-6">
              Laranjeiras é um dos bairros com <strong>maior valorização imobiliária</strong> do Rio de Janeiro. 
              Histórico de <strong>12-15% ao ano</strong> de valorização.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-amber-200">+15%</div>
                <div className="text-sm text-blue-100">Valorização anual média</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-amber-200">5 min</div>
                <div className="text-sm text-blue-100">Do metrô Laranjeiras</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-2xl font-bold text-amber-200">100%</div>
                <div className="text-sm text-blue-100">Área nobre consolidada</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DiferenciaisSection;
