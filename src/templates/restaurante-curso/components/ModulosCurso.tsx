import { CheckCircle, Clock, Users, Target, DollarSign, Smartphone, Camera, MessageSquare } from "lucide-react";

const ModulosCurso = () => {
  const modulos = [
    {
      icon: Target,
      title: "MÓDULO 1: POSICIONAMENTO",
      subtitle: "DESTAQUE-SE DA MULTIDÃO",
      items: [
        "Como encontrar seu nicho específico",
        "Técnicas para se diferenciar da concorrência", 
        "Criação de proposta de valor única",
        "Posicionamento de preço sem competir por desconto"
      ]
    },
    {
      icon: Smartphone,
      title: "MÓDULO 2: PUBLICIDADE EM APPS",
      subtitle: "DOMINE O DELIVERY",
      items: [
        "Estratégias para iFood, Uber Eats e Rappi",
        "Como aparecer em primeiro nas buscas",
        "Técnicas de otimização de cardápio",
        "Segredos dos anúncios pagos"
      ]
    },
    {
      icon: Camera,
      title: "MÓDULO 3: IMAGENS VENDEDORAS", 
      subtitle: "FOTOGRAFE COMO UM PRO",
      items: [
        "Fotografia gastronômica com celular",
        "Edição profissional gratuita",
        "Composição e iluminação perfeita",
        "Templates prontos para usar"
      ]
    },
    {
      icon: MessageSquare,
      title: "MÓDULO 4: WHATSAPP VENDEDOR",
      subtitle: "AUTOMAÇÃO INTELIGENTE",
      items: [
        "Configuração de chatbot vendedor",
        "Mensagens que convertem",
        "Remarketing via WhatsApp",
        "Fidelização de clientes"
      ]
    },
    {
      icon: DollarSign,
      title: "MÓDULO 5: PRECIFICAÇÃO",
      subtitle: "LUCRO GARANTIDO",
      items: [
        "Cálculo correto de custos",
        "Margem de lucro ideal",
        "Estratégias de preço psicológico",
        "Planilha completa inclusa"
      ]
    },
    {
      icon: Users,
      title: "MÓDULO 6: FIDELIZAÇÃO",
      subtitle: "CLIENTES PARA SEMPRE",
      items: [
        "Programa de fidelidade eficaz",
        "Técnicas de retenção",
        "Upsell e cross-sell",
        "Métricas de satisfação"
      ]
    }
  ];

  const bonus = [
    "🎁 BÔNUS: Mais de 200 templates prontos",
    "🎁 BÔNUS: Planilha de controle financeiro", 
    "🎁 BÔNUS: Grupo VIP no Telegram",
    "🎁 BÔNUS: Aulas ao vivo mensais"
  ];

  return (
    <section className="py-20 bg-gradient-yellow">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-template-accent mb-8">
              VOCÊ VAI APRENDER COMO QUEM REALMENTE VIVE NO CAMPO DO 
              <span className="text-template-primary"> MARKETING DOS RESTAURANTES</span>
            </h2>
          </div>

          {/* Modules Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {modulos.map((modulo, index) => {
              const IconComponent = modulo.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-template-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-template-accent mb-2">{modulo.title}</h3>
                    <p className="text-template-primary font-semibold">{modulo.subtitle}</p>
                  </div>
                  
                  <div className="space-y-3">
                    {modulo.items.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bonus Section */}
          <div className="bg-gradient-pink-purple rounded-2xl p-8 text-white text-center mb-12">
            <h3 className="text-3xl font-bold mb-8">
              E AINDA VOCÊ RECEBE ESTES BÔNUS EXCLUSIVOS:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {bonus.map((item, index) => (
                <div key={index} className="bg-white/20 rounded-lg p-4">
                  <p className="font-medium text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Expert Section */}
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 max-w-4xl mx-auto shadow-xl">
              <div className="text-6xl mb-4">👨‍🍳</div>
              <h3 className="text-3xl font-bold text-template-accent mb-4">Eric Egea</h3>
              <p className="text-xl text-gray-600 mb-6">
                Especialista em Marketing para Restaurantes há mais de 15 anos
              </p>
              
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <Clock className="w-8 h-8 text-template-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-template-primary">15+</div>
                  <div className="text-sm text-gray-600">Anos de experiência</div>
                </div>
                <div>
                  <Users className="w-8 h-8 text-template-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-template-primary">500k+</div>
                  <div className="text-sm text-gray-600">Restaurantes ajudados</div>
                </div>
                <div>
                  <Target className="w-8 h-8 text-template-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-template-primary">300%</div>
                  <div className="text-sm text-gray-600">Aumento médio de vendas</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulosCurso;
