import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { Star, Quote, TrendingUp, Home, Heart, ArrowRight } from "lucide-react";

const TestemunhosSection = () => {
  const depoimentos = [
    {
      name: "Dr. Ricardo Almeida",
      role: "Médico Cardiologista",
      avatar: "RA",
      rating: 5,
      content: "Localização perfeita! Moro a 5 minutos do hospital onde trabalho. O apartamento já valorizou 18% em apenas 1 ano.",
      tipologia: "3 quartos",
      investimento: "R$ 1.2M",
      valorizacao: "+18%",
      tempo: "1 ano",
      destaque: "Profissional da saúde"
    },
    {
      name: "Marina e Carlos Oliveira",
      role: "Casal de Advogados", 
      avatar: "MC",
      rating: 5,
      content: "Compramos na planta e foi a melhor decisão! Acabamento impecável, localização única. Nossos filhos adoram o rooftop.",
      tipologia: "2 quartos",
      investimento: "R$ 890K",
      valorizacao: "+22%",
      tempo: "2 anos",
      destaque: "Família jovem"
    },
    {
      name: "Roberto Silva",
      role: "Empresário",
      avatar: "RS", 
      rating: 5,
      content: "Investimento certeiro! Comprei 2 studios para locação. ROI de 8% ao ano + valorização. Sawala é sinônimo de qualidade.",
      tipologia: "2 Studios",
      investimento: "R$ 970K",
      valorizacao: "+25%",
      tempo: "18 meses",
      destaque: "Investidor"
    },
    {
      name: "Ana Patricia Costa",
      role: "Arquiteta",
      avatar: "AP",
      rating: 5,
      content: "Como profissional da área, posso afirmar: projeto excepcional! Retrofit preservou a essência, modernizou com elegância.",
      tipologia: "1 quarto",
      investimento: "R$ 640K", 
      valorizacao: "+15%",
      tempo: "8 meses",
      destaque: "Visão técnica"
    },
    {
      name: "Juliana Santos",
      role: "Consultora Financeira",
      avatar: "JS",
      rating: 5,
      content: "Análise criteriosa me levou à Sawala. Localização, construtora sólida, potencial de valorização. Recomendo como investimento.",
      tipologia: "2 quartos",
      investimento: "R$ 920K",
      valorizacao: "+20%", 
      tempo: "14 meses",
      destaque: "Análise financeira"
    },
    {
      name: "Pedro e Lucia Mendes",
      role: "Casal de Professores",
      avatar: "PL",
      rating: 5,
      content: "Sonho realizado! Conseguimos financiar com a própria Sawala. Atendimento humanizado, processo transparente.",
      tipologia: "2 quartos",
      investimento: "R$ 850K",
      valorizacao: "+16%",
      tempo: "10 meses", 
      destaque: "Financiamento facilitado"
    }
  ];

  const estatisticas = [
    {
      numero: "94%",
      descricao: "Dos clientes recomendam",
      icon: Heart
    },
    {
      numero: "127",
      descricao: "Famílias já morando",
      icon: Home
    },
    {
      numero: "+18%",
      descricao: "Valorização média",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-600/10 text-green-600 border-green-200 mb-6 text-lg px-6 py-2">
            <Star className="w-5 h-5 mr-2" />
            CASOS DE SUCESSO
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O Que Nossos
            <span className="block bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
              Clientes Dizem
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Histórias reais de quem já vive o sonho em Laranjeiras. Investimento que vale a pena.
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {estatisticas.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-amber-400 mb-2">{stat.numero}</div>
              <div className="text-slate-300 font-medium">{stat.descricao}</div>
            </div>
          ))}
        </div>

        {/* Depoimentos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <Card 
              key={index}
              className="bg-slate-700/50 border-slate-600 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl relative group backdrop-blur-sm"
            >
              <CardContent className="p-6">
                
                {/* Header com avatar e rating */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-br from-blue-600 to-amber-600 text-white font-bold">
                        {depoimento.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-bold text-white">{depoimento.name}</h4>
                      <p className="text-sm text-slate-300">{depoimento.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    {[...Array(depoimento.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Destaque */}
                <Badge variant="outline" className="border-blue-400/50 text-blue-400 mb-4">
                  {depoimento.destaque}
                </Badge>

                {/* Conteúdo */}
                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-blue-400 absolute -top-2 -left-1" />
                  <p className="text-slate-300 italic pl-6 leading-relaxed">
                    "{depoimento.content}"
                  </p>
                </div>

                {/* Dados do Investimento */}
                <div className="bg-slate-800/50 rounded-lg p-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Tipologia:</span>
                    <span className="font-semibold text-slate-200">{depoimento.tipologia}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Investimento:</span>
                    <span className="font-semibold text-slate-200">{depoimento.investimento}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Valorização:</span>
                    <span className="font-bold text-green-400">{depoimento.valorizacao}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Tempo:</span>
                    <span className="font-semibold text-slate-200">{depoimento.tempo}</span>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/10 to-amber-600/10 border border-blue-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-800 mb-4">
              Seja o Próximo Caso de <span className="text-blue-600">Sucesso</span>
            </h3>
            <p className="text-xl text-slate-600 mb-6">
              Mais de <strong>127 famílias</strong> já escolheram viver em Laranjeiras. 
              Garante já o seu apartamento dos sonhos.
            </p>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white font-bold px-8 py-4 text-lg"
            >
              Quero Meu Apartamento
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestemunhosSection;
