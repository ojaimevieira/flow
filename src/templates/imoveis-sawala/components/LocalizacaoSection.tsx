import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { 
  MapPin, 
  Train, 
  ShoppingCart, 
  GraduationCap,
  Hospital,
  Coffee,
  Trees,
  Clock,
  Navigation
} from "lucide-react";

const LocalizacaoSection = () => {
  const pontosInteresse = [
    {
      categoria: "Transporte",
      icon: Train,
      color: "from-blue-500 to-cyan-500",
      itens: [
        { nome: "Metrô Laranjeiras", distancia: "5 min a pé", tipo: "metro" },
        { nome: "Estação Cosme Velho", distancia: "8 min a pé", tipo: "metro" },
        { nome: "Túnel Rebouças", distancia: "3 min", tipo: "acesso" },
        { nome: "Aeroporto Santos Dumont", distancia: "15 min", tipo: "aeroporto" }
      ]
    },
    {
      categoria: "Compras & Lazer",
      icon: ShoppingCart,
      color: "from-amber-500 to-yellow-500",
      itens: [
        { nome: "Shopping Rio Sul", distancia: "10 min", tipo: "shopping" },
        { nome: "Rua das Laranjeiras", distancia: "2 min", tipo: "comercio" },
        { nome: "Parque Guinle", distancia: "7 min", tipo: "lazer" },
        { nome: "Praia de Botafogo", distancia: "12 min", tipo: "praia" }
      ]
    },
    {
      categoria: "Educação & Saúde", 
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500",
      itens: [
        { nome: "Colégio Santo Inácio", distancia: "6 min", tipo: "escola" },
        { nome: "PUC-Rio", distancia: "15 min", tipo: "universidade" },
        { nome: "Hospital Copa Star", distancia: "8 min", tipo: "hospital" },
        { nome: "Clínica São Vicente", distancia: "4 min", tipo: "clinica" }
      ]
    }
  ];

  const diferencaisLocalizacao = [
    {
      icon: Trees,
      title: "Bairro Histórico",
      description: "Charme e tradição de um dos bairros mais nobres do Rio",
      stat: "110 anos de história"
    },
    {
      icon: Navigation,
      title: "Mobilidade Total",
      description: "Acesso fácil a toda Zona Sul e Centro da cidade",
      stat: "3 linhas de metrô próximas"
    },
    {
      icon: Coffee,
      title: "Vida Cultural",
      description: "Cafés charmosos, restaurantes e vida noturna sofisticada",
      stat: "50+ estabelecimentos"
    },
    {
      icon: Hospital,
      title: "Infraestrutura Completa",
      description: "Saúde, educação e serviços de qualidade a poucos metros",
      stat: "Tudo a pé"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-600/10 text-green-600 border-green-200 mb-6 text-lg px-6 py-2">
            <MapPin className="w-5 h-5 mr-2" />
            LOCALIZAÇÃO PRIVILEGIADA
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            No Coração de
            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Laranjeiras
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Viva no bairro mais charmoso da Zona Sul, com toda infraestrutura e qualidade de vida 
            que você e sua família merecem.
          </p>
        </div>

        {/* Endereço Destaque */}
        <div className="bg-gradient-to-r from-blue-900 to-slate-800 border border-blue-700/50 rounded-2xl p-8 text-white text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <MapPin className="w-8 h-8 text-amber-400" />
            <h3 className="text-3xl font-bold">Rua Moura Brasil, 44</h3>
          </div>
          <p className="text-xl text-blue-200">
            Endereço nobre em uma das ruas mais valorizadas de Laranjeiras
          </p>
        </div>

        {/* Pontos de Interesse */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pontosInteresse.map((categoria, index) => (
            <Card key={index} className="bg-slate-700/50 border-slate-600 hover:border-blue-400/50 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-br ${categoria.color} rounded-xl flex items-center justify-center`}>
                    <categoria.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{categoria.categoria}</h3>
                </div>
                
                <div className="space-y-3">
                  {categoria.itens.map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-slate-300 font-medium">{item.nome}</span>
                      <Badge variant="outline" className="border-slate-400/50 text-slate-300 text-xs">
                        {item.distancia}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Diferenciais da Localização */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {diferencaisLocalizacao.map((diferencial, index) => (
            <Card 
              key={index}
              className="bg-slate-800/50 border-slate-700 hover:border-blue-400/50 transition-all duration-300 group text-center backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-amber-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <diferencial.icon className="w-7 h-7 text-white" />
                </div>
                
                <h4 className="text-lg font-bold text-white mb-2">
                  {diferencial.title}
                </h4>
                
                <p className="text-slate-300 mb-3 text-sm leading-relaxed">
                  {diferencial.description}
                </p>
                
                <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30">
                  {diferencial.stat}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mapa Interativo Placeholder */}
        <div className="bg-slate-800/50 border-2 border-dashed border-slate-600 rounded-2xl p-12 text-center backdrop-blur-sm">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">
              Mapa Interativo da Região
            </h3>
            
            <p className="text-slate-300 mb-6">
              Explore todos os pontos de interesse ao redor do empreendimento
            </p>
            
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white"
              size="lg"
            >
              <Navigation className="w-5 h-5 mr-2" />
              Ver Mapa Completo
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LocalizacaoSection;
