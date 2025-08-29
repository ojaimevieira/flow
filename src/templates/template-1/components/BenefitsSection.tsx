import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { 
  Clock, 
  DollarSign, 
  TrendingUp, 
  Users, 
  Zap, 
  Shield,
  Star,
  Target,
  Lightbulb,
  Globe,
  Award,
  Rocket
} from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Edite vídeos 10x mais rápido que métodos tradicionais",
      color: "from-blue-500 to-cyan-500",
      stat: "95% menos tempo"
    },
    {
      icon: DollarSign,
      title: "Economia de Dinheiro", 
      description: "Elimine custos com editores profissionais e softwares caros",
      color: "from-green-500 to-emerald-500",
      stat: "R$ 5.000+ economizados"
    },
    {
      icon: TrendingUp,
      title: "Resultados Profissionais",
      description: "Qualidade cinematográfica mesmo sendo iniciante",
      color: "from-purple-500 to-pink-500",
      stat: "Qualidade Hollywood"
    },
    {
      icon: Zap,
      title: "IA de Última Geração",
      description: "Tecnologia mais avançada do mercado em suas mãos",
      color: "from-yellow-500 to-orange-500",
      stat: "GPT-4 Powered"
    },
    {
      icon: Users,
      title: "Comunidade Exclusiva",
      description: "Acesso a grupo privado com milhares de criadores",
      color: "from-indigo-500 to-purple-500",
      stat: "2.5k+ membros"
    },
    {
      icon: Shield,
      title: "Suporte Vitalício",
      description: "Suporte técnico e atualizações para sempre",
      color: "from-red-500 to-pink-500",
      stat: "24/7 disponível"
    },
    {
      icon: Star,
      title: "Satisfação Garantida",
      description: "98% dos alunos recomendam o curso",
      color: "from-amber-500 to-yellow-500",
      stat: "4.9/5 estrelas"
    },
    {
      icon: Target,
      title: "Foco no Resultado",
      description: "Metodologia testada e aprovada por milhares",
      color: "from-teal-500 to-cyan-500",
      stat: "Método comprovado"
    },
    {
      icon: Lightbulb,
      title: "Criatividade Ilimitada",
      description: "Explore estilos e efeitos que antes eram impossíveis",
      color: "from-violet-500 to-purple-500",
      stat: "∞ possibilidades"
    },
    {
      icon: Globe,
      title: "Acesso Global",
      description: "Estude de qualquer lugar, a qualquer hora",
      color: "from-sky-500 to-blue-500",
      stat: "100% online"
    },
    {
      icon: Award,
      title: "Certificado de Conclusão",
      description: "Comprove suas habilidades com certificado oficial",
      color: "from-orange-500 to-red-500",
      stat: "Certificado incluso"
    },
    {
      icon: Rocket,
      title: "Acelere sua Carreira",
      description: "Destaque-se no mercado de criação de conteúdo",
      color: "from-pink-500 to-rose-500",
      stat: "10x mais oportunidades"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900/20 via-gray-900 to-pink-900/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 mb-6">
            Vantagens Exclusivas
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Por que Escolher o <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Método IA</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Descubra todos os benefícios que você terá ao dominar a edição de vídeos com inteligência artificial
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-gray-800/50 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 group h-full">
              <CardContent className="p-6 text-center h-full flex flex-col">
                {/* Icon */}
                <div className="mb-4">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{benefit.description}</p>
                  </div>

                  {/* Stat */}
                  <div className="mt-auto">
                    <Badge className={`bg-gradient-to-r ${benefit.color} bg-opacity-20 text-white border-0 text-xs font-semibold`}>
                      {benefit.stat}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-8 border border-purple-500/30">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Mais de <span className="text-purple-400">12 benefícios</span> em um só curso
              </h3>
              <p className="text-gray-400 text-lg mb-6">
                Investimento que se paga na primeira edição profissional
              </p>
              
              {/* Highlight Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    R$ 15.000+
                  </div>
                  <div className="text-gray-400">Valor economizado anualmente</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    500+ horas
                  </div>
                  <div className="text-gray-400">Tempo poupado por ano</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    ∞
                  </div>
                  <div className="text-gray-400">Possibilidades criativas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
