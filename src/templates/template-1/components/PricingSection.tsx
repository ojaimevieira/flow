import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { 
  Check, 
  X, 
  Crown, 
  Star, 
  Clock, 
  Users, 
  Zap, 
  Shield, 
  Gift,
  Timer,
  TrendingUp,
  Target
} from "lucide-react";

const PricingSection = () => {
  const plans = [
    {
      name: "Básico",
      subtitle: "Para iniciantes",
      originalPrice: "R$ 497",
      currentPrice: "R$ 197",
      discount: "60% OFF",
      duration: "Acesso por 6 meses",
      badge: null,
      popular: false,
      description: "Ideal para quem está começando",
      features: [
        { name: "Curso completo (8 módulos)", included: true },
        { name: "Templates básicos", included: true },
        { name: "Suporte por email", included: true },
        { name: "Certificado de conclusão", included: true },
        { name: "Acesso ao grupo exclusivo", included: false },
        { name: "Mentoria 1:1", included: false },
        { name: "Projetos personalizados", included: false },
        { name: "Atualizações vitalícias", included: false }
      ],
      buttonText: "Começar Agora",
      buttonClass: "border-purple-500/30 text-purple-400 hover:bg-purple-600/20"
    },
    {
      name: "Profissional",
      subtitle: "Mais vendido",
      originalPrice: "R$ 997",
      currentPrice: "R$ 397",
      discount: "60% OFF",
      duration: "Acesso vitalício",
      badge: "MAIS VENDIDO",
      popular: true,
      description: "Para quem quer resultados rápidos",
      features: [
        { name: "Curso completo (8 módulos)", included: true },
        { name: "Templates profissionais", included: true },
        { name: "Suporte prioritário", included: true },
        { name: "Certificado de conclusão", included: true },
        { name: "Acesso ao grupo exclusivo", included: true },
        { name: "4 Bônus especiais", included: true },
        { name: "Projetos personalizados", included: true },
        { name: "Atualizações vitalícias", included: true }
      ],
      buttonText: "Quero Este Plano",
      buttonClass: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
    },
    {
      name: "Master",
      subtitle: "Máximo resultado",
      originalPrice: "R$ 1.997",
      currentPrice: "R$ 697",
      discount: "65% OFF",
      duration: "Acesso vitalício + mentoria",
      badge: "PREMIUM",
      popular: false,
      description: "Para quem quer virar profissional",
      features: [
        { name: "Curso completo (8 módulos)", included: true },
        { name: "Templates profissionais + exclusivos", included: true },
        { name: "Suporte VIP 24/7", included: true },
        { name: "Certificado de conclusão", included: true },
        { name: "Acesso ao grupo exclusivo", included: true },
        { name: "4 Bônus especiais + 2 extras", included: true },
        { name: "Mentoria 1:1 (3 sessões)", included: true },
        { name: "Atualizações vitalícias", included: true }
      ],
      buttonText: "Quero Ser Master",
      buttonClass: "bg-gradient-to-r from-yellow-600 to-orange-600 text-white hover:from-yellow-700 hover:to-orange-700"
    }
  ];

  const bonuses = [
    {
      title: "Pack 500+ Templates",
      value: "R$ 497",
      description: "Templates prontos para todas as ocasiões",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Trilhas Sonoras Premium",
      value: "R$ 297",
      description: "Música livre de direitos para seus vídeos",
      icon: <Star className="w-6 h-6" />
    },
    {
      title: "Grupo VIP no Telegram",
      value: "R$ 197",
      description: "Networking e suporte da comunidade",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Atualizações Vitalícias",
      value: "R$ 397",
      description: "Sempre com o conteúdo mais atual",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const guarantees = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "7 Dias de Garantia",
      description: "100% do seu dinheiro de volta se não gostar"
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Suporte Vitalício",
      description: "Sempre aqui para te ajudar a ter sucesso"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Resultados Garantidos",
      description: "Ou devolvemos seu investimento"
    }
  ];

  const urgency = {
    timeLeft: "23:45:12",
    spotsLeft: 47,
    totalSpots: 500
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 to-purple-950/40">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-yellow-600/20 text-yellow-400 border-yellow-500/30 mb-6">
            Oferta Especial
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Escolha Seu <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Plano</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transforme sua paixão em profissão com nossos planos especiais
          </p>
        </div>

        {/* Urgency Banner */}
        <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-xl p-6 max-w-4xl mx-auto mb-12 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Timer className="w-6 h-6 text-red-400" />
            <h3 className="text-xl font-bold text-white">Oferta Por Tempo Limitado!</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div>
              <div className="text-3xl font-bold text-red-400 mb-2">{urgency.timeLeft}</div>
              <div className="text-gray-400">Tempo restante para o desconto</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">{urgency.spotsLeft}/{urgency.totalSpots}</div>
              <div className="text-gray-400">Vagas restantes com desconto</div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative overflow-hidden ${
                plan.popular 
                  ? 'bg-gradient-to-b from-purple-600/20 to-pink-600/20 border-2 border-purple-500/50 scale-105' 
                  : 'bg-gray-800/50 border border-purple-500/30'
              } hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300`}
            >
              {/* Popular Badge */}
              {plan.badge && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className={`${
                    plan.popular 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                      : 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white'
                  } px-4 py-1 text-sm font-bold`}>
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardContent className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.subtitle}</p>
                  
                  {/* Pricing */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-2xl text-gray-400 line-through">{plan.originalPrice}</span>
                      <Badge className="bg-red-600/20 text-red-400 border-red-500/30">
                        {plan.discount}
                      </Badge>
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{plan.currentPrice}</div>
                    <div className="text-sm text-gray-400">{plan.duration}</div>
                  </div>
                  
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                      <span className={`${feature.included ? 'text-white' : 'text-gray-500 line-through'}`}>
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  size="lg" 
                  className={`w-full ${plan.buttonClass} font-bold`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.buttonText}
                  {plan.popular && <Crown className="w-5 h-5 ml-2" />}
                </Button>

                {/* Payment info */}
                <div className="text-center mt-4">
                  <p className="text-xs text-gray-400">
                    💳 Cartão, PIX ou Boleto • 🔒 Compra 100% Segura
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bonuses Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            + Bônus Exclusivos (Valor: <span className="text-yellow-400">R$ 1.388</span>)
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="bg-gradient-to-br from-yellow-600/10 to-orange-600/10 border border-yellow-500/30">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-full flex items-center justify-center text-yellow-400">
                    {bonus.icon}
                  </div>
                  <h4 className="font-bold text-white mb-2">{bonus.title}</h4>
                  <div className="text-yellow-400 font-bold mb-2">{bonus.value}</div>
                  <p className="text-gray-400 text-sm">{bonus.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Guarantees */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {guarantees.map((guarantee, index) => (
            <Card key={index} className="bg-green-600/10 border border-green-500/30 text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-600/20 rounded-full flex items-center justify-center text-green-400">
                  {guarantee.icon}
                </div>
                <h4 className="font-bold text-white mb-2">{guarantee.title}</h4>
                <p className="text-gray-400 text-sm">{guarantee.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Gift className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Última Chance!</h3>
            </div>
            
            <p className="text-gray-400 mb-6">
              Mais de <span className="text-white font-bold">12.847 alunos</span> já transformaram suas vidas
            </p>
            
            <div className="flex items-center justify-center space-x-8 mb-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-green-400" />
                <span>Acesso imediato</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-400" />
                <span>Garantia de 7 dias</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-purple-400" />
                <span>Comunidade exclusiva</span>
              </div>
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 hover:from-purple-700 hover:to-pink-700 text-xl">
              🚀 Garantir Minha Vaga Agora
            </Button>
            
            <div className="mt-4 text-xs text-gray-400">
              ⚡ Processamento instantâneo • 🔒 Seus dados estão seguros
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
