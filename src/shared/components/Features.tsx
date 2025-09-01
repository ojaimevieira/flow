import { Card, CardContent } from "@/shared/ui/card";
import { Lightbulb, Zap, Target, Award, Rocket, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Método Revolucionário",
    description: "Uma foto simples com fundo branco + IA = Infinitas possibilidades de cenários profissionais.",
    gradient: "from-primary to-accent"
  },
  {
    icon: Zap,
    title: "Tecnologia Avançada",
    description: "Modelos Nano Banana (Google) + Flux Context que mantêm consistência perfeita.",
    gradient: "from-accent to-neon-purple"
  },
  {
    icon: Target,
    title: "Resultados Imediatos",
    description: "Você vai criar suas primeiras edições no mesmo dia do curso. É totalmente prático.",
    gradient: "from-neon-purple to-primary"
  },
  {
    icon: Award,
    title: "Templates Testados",
    description: "20+ prompts testados e aprovados com variáveis personalizáveis prontos para usar.",
    gradient: "from-primary to-accent"
  },
  {
    icon: Rocket,
    title: "ROI Imediato",
    description: "O curso se paga com a primeira foto editada. Uma sessão fotográfica custa R$ 500-1500.",
    gradient: "from-accent to-neon-purple"
  },
  {
    icon: CheckCircle,
    title: "Garantia Total",
    description: "7 dias para testar todo o conteúdo. Não gostou? Devolvemos 100% do valor.",
    gradient: "from-neon-purple to-primary"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-darker-bg to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            A Solução que Vai Mudar Seu Negócio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubra como transformar qualquer produto em uma obra de arte profissional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-dark-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card-custom group"
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-secondary border border-primary/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              E tudo isso custou apenas:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-primary">R$ 0</div>
                <div className="text-sm text-muted-foreground">em fotógrafo</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">R$ 0</div>
                <div className="text-sm text-muted-foreground">em estúdio</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">R$ 0</div>
                <div className="text-sm text-muted-foreground">em cenários</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">R$ 0</div>
                <div className="text-sm text-muted-foreground">em equipamentos</div>
              </div>
            </div>
            <p className="text-lg text-foreground mt-6 font-semibold">
              Total investido: Apenas o tempo para aplicar os templates!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
