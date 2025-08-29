import { AlertTriangle, TrendingDown, DollarSign, Clock } from "lucide-react";

const ProblemsDelivery = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Vendas em queda livre?",
      description: "Seu restaurante está perdendo clientes todos os dias para a concorrência que domina o delivery?"
    },
    {
      icon: DollarSign,
      title: "Preços que não dão lucro?",
      description: "Você trabalha muito mas no final do mês sobra pouco dinheiro por causa dos custos mal calculados?"
    },
    {
      icon: Clock,
      title: "Perdendo tempo precioso?",
      description: "Gasta horas tentando entender como funciona o marketing digital mas não vê resultados?"
    },
    {
      icon: AlertTriangle,
      title: "Medo de fechar as portas?",
      description: "Sente que pode ser mais um dos restaurantes que não conseguiram se adaptar ao novo mercado?"
    }
  ];

  return (
    <section className="py-20 bg-gradient-purple">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O QUE VOCÊ ESTÁ FAZENDO 
            <span className="text-template-secondary"> PARA LEMBRAR-SE DO SEU RESTAURANTE</span> 
            NO MOMENTO DA DECISÃO?
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Por que meu restaurante CRESCE todos os meses enquanto outros FECHAM as portas? 
            Vou te mostrar exatamente o que estou fazendo de diferente...
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index} 
                className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-template-accent/10 rounded-lg p-3 flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-template-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {problem.title}
                    </h3>
                    <p className="text-gray-600">
                      {problem.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emotional Hook */}
        <div className="bg-template-secondary rounded-2xl p-8 text-center text-template-accent max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">
            Se você se identificou com pelo menos 1 dessas situações...
          </h3>
          <p className="text-xl mb-6">
            Então você PRECISA conhecer o método que já salvou mais de 500.000 restaurantes da falência!
          </p>
          <div className="bg-template-accent/20 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-lg font-medium text-template-accent">
              "O próprio iFood já falou que são mais de 200.000 restaurantes competindo por atenção. 
              Como você vai se destacar nessa multidão?"
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-template-primary mb-2">85%</div>
            <p className="text-sm text-muted-foreground">dos restaurantes fecham em 2 anos</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-template-primary mb-2">200k+</div>
            <p className="text-sm text-muted-foreground">restaurantes no iFood</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-template-primary mb-2">60%</div>
            <p className="text-sm text-muted-foreground">perderam vendas na pandemia</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-template-primary mb-2">90%</div>
            <p className="text-sm text-muted-foreground">não sabem fazer marketing</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsDelivery;
