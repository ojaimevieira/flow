import { Button } from "@/components/ui/button";
import { CheckCircle, Play, Target, Zap, TrendingUp, Users } from "lucide-react";

const SolutionDelivery = () => {
  const modules = [
    {
      number: "01",
      title: "MÓDULO: POSICIONAMENTO",
      subtitle: "DESTAQUE-SE DA MULTIDÃO",
      description: "Como criar um posicionamento único que faz seu restaurante ser lembrado na hora da fome",
      benefits: [
        "Definir seu avatar perfeito",
        "Criar proposta de valor única",
        "Posicionar preço sem competir por desconto"
      ]
    },
    {
      number: "02", 
      title: "MÓDULO: PUBLICIDADE EM",
      subtitle: "TODOS OS APLICATIVOS",
      description: "Domine as estratégias de marketing digital para dominar iFood, Uber Eats e Rappi",
      benefits: [
        "Estratégias de anúncios no iFood",
        "Como aparecer em primeiro lugar",
        "Técnicas de conversão comprovadas"
      ]
    },
    {
      number: "03",
      title: "MÓDULO: PRODUÇÃO DE",
      subtitle: "IMAGENS VENDEDORAS", 
      description: "Aprenda a fotografar pratos que vendem, mesmo usando apenas o celular",
      benefits: [
        "Técnicas de fotografia gastronômica",
        "Edição profissional no celular",
        "Como criar cardápio visual atrativo"
      ]
    }
  ];

  const bonuses = [
    "BÔNUS: Planilha de controle de custos e precificação",
    "BÔNUS: Templates de posts para redes sociais",
    "BÔNUS: Grupo VIP no Telegram com suporte direto",
    "BÔNUS: Aulas ao vivo mensais com especialistas"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-template-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Target className="w-4 h-4" />
            A SOLUÇÃO DEFINITIVA
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            VOCÊ VAI APRENDER COMO 
            <span className="text-template-primary"> REALMENTE VIVE NO CAMPO</span> 
            DO MARKETING DOS RESTAURANTES
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Mais de 500.000 restaurantes já aplicaram esse método e aumentaram suas vendas em até 300% em apenas 19 dias!
          </p>

          {/* Video Placeholder */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="aspect-video bg-gradient-to-br from-template-primary to-template-accent rounded-2xl flex items-center justify-center shadow-2xl">
              <div className="text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-2">ASSISTA AGORA</h3>
                <p className="text-lg opacity-90">Como Eric Egea transformou restaurantes em máquinas de vendas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Modules */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            VEJA O QUE VOCÊ VAI APRENDER:
          </h3>
          
          <div className="space-y-8">
            {modules.map((module, index) => (
              <div key={index} className="bg-template-surface rounded-2xl p-8 border border-gray-100 shadow-lg">
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div className="text-center lg:text-left">
                    <div className="text-template-primary text-6xl font-bold mb-2">{module.number}</div>
                    <h4 className="text-2xl font-bold text-foreground mb-2">{module.title}</h4>
                    <h5 className="text-xl text-template-primary font-semibold mb-4">{module.subtitle}</h5>
                    <p className="text-muted-foreground">{module.description}</p>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="grid md:grid-cols-1 gap-4">
                      {module.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-template-primary flex-shrink-0" />
                          <span className="text-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bonuses */}
        <div className="bg-gradient-to-r from-template-secondary to-yellow-400 rounded-2xl p-8 mb-12">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            E AINDA RECEBA ESSES BÔNUS EXCLUSIVOS:
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {bonuses.map((bonus, index) => (
              <div key={index} className="bg-white/20 rounded-lg p-4 text-white">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                  <span className="font-medium">{bonus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">QUEM É ESTE CURSO?</h3>
          
          <div className="bg-template-surface rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="text-6xl mb-4">👨‍🍳</div>
            <h4 className="text-2xl font-bold text-foreground mb-4">Eric Egea</h4>
            <p className="text-lg text-muted-foreground mb-6">
              Especialista em marketing para restaurantes há mais de 10 anos. 
              Já ajudou mais de 500.000 estabelecimentos a aumentarem suas vendas.
            </p>
            
            <div className="grid grid-cols-3 gap-8 text-center">
              <div>
                <TrendingUp className="w-8 h-8 text-template-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-template-primary">300%</div>
                <div className="text-sm text-muted-foreground">Aumento médio em vendas</div>
              </div>
              <div>
                <Users className="w-8 h-8 text-template-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-template-primary">500k+</div>
                <div className="text-sm text-muted-foreground">Restaurantes atendidos</div>
              </div>
              <div>
                <Target className="w-8 h-8 text-template-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-template-primary">10+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-template-primary hover:bg-template-accent text-white px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-4"
          >
            🚀 QUERO TRANSFORMAR MEU RESTAURANTE AGORA!
          </Button>
          
          <p className="text-muted-foreground">
            ⚡ Acesso imediato • 📱 Funciona em qualquer dispositivo • 🎯 100% prático
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionDelivery;
