import { Card, CardContent } from "@/components/ui/card";
import { DollarSign, Clock, Camera, Building, Palette, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: DollarSign,
    title: "Gastar fortunas",
    description: "com fotógrafos e estúdios profissionais",
    color: "text-red-400"
  },
  {
    icon: Clock,
    title: "Perder tempo",
    description: "organizando sessões fotográficas complexas",
    color: "text-orange-400"
  },
  {
    icon: Camera,
    title: "Ter fotos amadoras",
    description: "que não convertem em vendas",
    color: "text-yellow-400"
  },
  {
    icon: Building,
    title: "Depender de espaços",
    description: "e equipamentos caros para fotos",
    color: "text-blue-400"
  },
  {
    icon: Palette,
    title: "Limitações criativas",
    description: "por falta de recursos e orçamento",
    color: "text-purple-400"
  },
  {
    icon: TrendingDown,
    title: "Ver seus produtos",
    description: "não renderem como merecem",
    color: "text-pink-400"
  }
];

const Problems = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-darker-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Você está <span className="text-red-400">cansado</span> de...
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Problemas que todo empreendedor enfrenta na hora de fotografar produtos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="bg-dark-card border-border hover:border-red-400/50 transition-all duration-300 hover:shadow-card-custom group"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-red-500/20 to-orange-500/20 p-4 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <problem.icon className={`w-8 h-8 ${problem.color}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-red-400 transition-colors">
                  {problem.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-dark-card border border-red-400/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-red-400 mb-4">
              Isso precisa acabar HOJE!
            </h3>
            <p className="text-muted-foreground text-lg">
              Chegou a hora de ter fotos profissionais sem gastar uma fortuna
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;