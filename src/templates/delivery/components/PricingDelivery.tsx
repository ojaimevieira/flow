import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Zap, Gift, AlertTriangle } from "lucide-react";

const PricingDelivery = () => {
  const originalPrice = 197;
  const currentPrice = 19;
  const discount = Math.round(((originalPrice - currentPrice) / originalPrice) * 100);

  const includes = [
    "3 Módulos completos do método",
    "Planilha de controle de custos",
    "Templates de posts para redes sociais", 
    "Grupo VIP no Telegram",
    "Aulas ao vivo mensais",
    "Acesso por 1 ano completo",
    "Certificado de conclusão",
    "Suporte direto com especialistas"
  ];

  const guarantees = [
    "100% Garantia de satisfação",
    "7 dias para testar sem riscos",
    "Reembolso total se não gostar",
    "Acesso imediato após o pagamento"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header com Urgência */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-template-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-pulse">
            <AlertTriangle className="w-4 h-4" />
            OFERTA ESPECIAL POR TEMPO LIMITADO
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            INVESTIMENTO IRRECUSÁVEL!
            <br />
            <span className="text-template-primary">MENOS QUE O PREÇO DE UMA PIZZA</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Por menos do que você gasta em uma pizza, você vai aprender a transformar 
            seu restaurante em uma máquina de vendas que trabalha 24h por dia!
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-yellow-purple rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white/20 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 w-32 h-32 border-2 border-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="relative z-10">
              {/* Discount Badge */}
              <div className="absolute -top-4 -right-4 bg-template-primary rounded-full w-20 h-20 flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="text-xl font-bold">-{discount}%</div>
                  <div className="text-xs">OFF</div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left - Pricing */}
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl font-bold mb-4">
                    CURSO COMPLETO
                    <br />
                    "RESTAURANTE MILIONÁRIO"
                  </h3>
                  
                  <div className="mb-6">
                    <div className="text-lg opacity-75 line-through mb-2">
                      De R$ {originalPrice},00
                    </div>
                    <div className="text-6xl font-bold mb-2">
                      R$ {currentPrice}
                    </div>
                    <div className="text-xl opacity-90">
                      ou 12x de R$ 1,90 no cartão
                    </div>
                  </div>

                  {/* Timer Placeholder */}
                  <div className="bg-white/20 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-center gap-2 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>Oferta expira em:</span>
                    </div>
                    <div className="text-2xl font-bold mt-2">
                      23:45:12
                    </div>
                  </div>

                  <Button 
                    size="lg" 
                    className="bg-white text-template-primary hover:bg-gray-100 px-8 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full mb-4"
                  >
                    🔥 QUERO FATURAR MAIS AGORA!
                  </Button>
                  
                  <p className="text-sm opacity-75">
                    💳 Acesso imediato • 📱 Todos os dispositivos • 🔒 Pagamento 100% seguro
                  </p>
                </div>

                {/* Right - Includes */}
                <div>
                  <h4 className="text-2xl font-bold mb-6">TUDO ISSO ESTÁ INCLUSO:</h4>
                  
                  <div className="space-y-3 mb-8">
                    {includes.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-template-secondary flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bonus Highlight */}
                  <div className="bg-template-secondary/30 rounded-lg p-4 border border-template-secondary/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Gift className="w-5 h-5 text-template-secondary" />
                      <span className="font-bold text-template-secondary">BÔNUS ESPECIAL:</span>
                    </div>
                    <p className="text-sm">
                      Consultoria individual de 30 minutos comigo para analisar seu restaurante!
                      <span className="block font-bold mt-1 text-template-secondary">(Valor: R$ 300,00)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div className="bg-template-surface rounded-2xl p-8 mt-8">
            <h4 className="text-2xl font-bold text-center mb-8">
              SUAS GARANTIAS DE SATISFAÇÃO:
            </h4>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {guarantees.map((guarantee, index) => {
                const icons = [Shield, Clock, Zap, CheckCircle];
                const IconComponent = icons[index];
                
                return (
                  <div key={index} className="text-center">
                    <div className="bg-template-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-template-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{guarantee}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Mais de 2.847 pessoas compraram nas últimas 48 horas!</p>
            <div className="flex justify-center items-center gap-2 text-template-secondary">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 bg-template-secondary rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-primary rounded-2xl p-8 text-center text-white mt-12">
            <h3 className="text-3xl font-bold mb-4">
              NÃO DEIXE ESSA OPORTUNIDADE PASSAR!
            </h3>
            <p className="text-xl mb-6">
              Enquanto você pensa, seus concorrentes estão aplicando essas estratégias e roubando seus clientes.
            </p>
            
            <Button
              size="lg"
              className="bg-template-secondary hover:bg-yellow-400 text-template-accent px-6 md:px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-4 w-full md:w-auto max-w-full mx-auto"
            >
              💰 SIM! QUERO TRANSFORMAR MEU RESTAURANTE
            </Button>
            
            <p className="text-sm opacity-90">
              ⚡ Últimas vagas com desconto de {discount}% • Acesso imediato
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingDelivery;
