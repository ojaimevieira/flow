import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Shield, Zap, Gift, Crown } from "lucide-react";

const OfertaCurso = () => {
  const inclusos = [
    "6 Módulos completos do método VendãoComida",
    "Mais de 200 templates prontos para usar",
    "Planilha completa de controle financeiro", 
    "Grupo VIP no Telegram com suporte",
    "Aulas ao vivo mensais com Eric Egea",
    "Certificado digital de conclusão",
    "Acesso vitalício ao conteúdo",
    "Garantia incondicional de 7 dias"
  ];

  const bonusEspeciais = [
    {
      titulo: "MÓDULO BÔNUS",
      descricao: "Automação completa para delivery",
      valor: "R$ 497"
    },
    {
      titulo: "PLANILHAS EXCLUSIVAS", 
      descricao: "Kit completo de gestão financeira",
      valor: "R$ 297"
    },
    {
      titulo: "TEMPLATES PREMIUM",
      descricao: "Mais de 200 artes para redes sociais", 
      valor: "R$ 397"
    },
    {
      titulo: "MENTORIA EM GRUPO",
      descricao: "12 meses de acompanhamento direto",
      valor: "R$ 997"
    }
  ];

  return (
    <section className="py-20 bg-gradient-purple">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-template-secondary text-template-accent px-6 py-3 rounded-full text-lg font-bold mb-6 animate-pulse">
              <Crown className="w-5 h-5" />
              OFERTA ESPECIAL LIMITADA
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              INVESTIMENTO ESPECIAL
              <br />
              <span className="text-template-secondary">APENAS HOJE!</span>
            </h2>
          </div>

          {/* Main Offer Card */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl relative overflow-hidden mb-12">
            {/* Discount Badge */}
            <div className="absolute -top-6 -right-6 bg-template-primary rounded-full w-24 h-24 flex items-center justify-center shadow-xl rotate-12">
              <div className="text-center text-white">
                <div className="text-xl font-bold">-90%</div>
                <div className="text-xs">DESCONTO</div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Pricing */}
              <div className="text-center lg:text-left">
                <h3 className="text-3xl font-bold text-template-accent mb-6">
                  CURSO COMPLETO
                  <br />
                  <span className="text-template-primary">"VENDÃO COMIDA"</span>
                </h3>
                
                {/* Original Price */}
                <div className="mb-6">
                  <div className="text-gray-500 text-lg line-through mb-2">
                    Valor normal: R$ 1.997,00
                  </div>
                  <div className="text-6xl font-bold text-template-primary mb-2">
                    R$ 197
                  </div>
                  <div className="text-xl text-gray-600">
                    ou 12x de R$ 19,70 sem juros
                  </div>
                </div>

                {/* Timer */}
                <div className="bg-template-primary/10 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center gap-2 text-template-accent">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">Esta oferta expira em:</span>
                  </div>
                  <div className="text-3xl font-bold text-template-primary mt-2">
                    23:45:12
                  </div>
                </div>

                {/* Main CTA */}
                <Button 
                  size="lg" 
                  className="bg-template-primary hover:bg-template-primary/90 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full mb-4"
                >
                  🔥 QUERO O CURSO AGORA!
                </Button>
                
                <p className="text-gray-500 text-sm">
                  🔒 Pagamento 100% seguro • 📱 Acesso imediato • ✅ Garantia de 7 dias
                </p>
              </div>

              {/* Right - Includes */}
              <div>
                <h4 className="text-2xl font-bold text-template-accent mb-6">
                  TUDO ISSO ESTÁ INCLUÍDO:
                </h4>
                
                <div className="space-y-3 mb-8">
                  {inclusos.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bonus Highlight */}
            <div className="border-t pt-8 mt-8">
              <h4 className="text-2xl font-bold text-template-accent text-center mb-6">
                🎁 BÔNUS EXCLUSIVOS (Valor: R$ 2.188)
              </h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                {bonusEspeciais.map((bonus, index) => (
                  <div key={index} className="bg-template-primary/5 rounded-lg p-4 border border-template-primary/20">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-bold text-template-accent">{bonus.titulo}</h5>
                      <span className="text-template-primary font-bold">{bonus.valor}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{bonus.descricao}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Guarantees */}
          <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h4 className="text-2xl font-bold text-white text-center mb-8">
              SUAS GARANTIAS DE SATISFAÇÃO:
            </h4>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Shield className="w-12 h-12 text-template-secondary mx-auto mb-4" />
                <h5 className="font-bold text-white mb-2">GARANTIA TOTAL</h5>
                <p className="text-white/80 text-sm">7 dias para testar sem riscos</p>
              </div>
              
              <div>
                <Zap className="w-12 h-12 text-template-secondary mx-auto mb-4" />
                <h5 className="font-bold text-white mb-2">ACESSO IMEDIATO</h5>
                <p className="text-white/80 text-sm">Comece a estudar agora mesmo</p>
              </div>
              
              <div>
                <Gift className="w-12 h-12 text-template-secondary mx-auto mb-4" />
                <h5 className="font-bold text-white mb-2">SUPORTE VITALÍCIO</h5>
                <p className="text-white/80 text-sm">Ajuda sempre que precisar</p>
              </div>
            </div>
          </div>

          {/* Final Push */}
          <div className="text-center mt-12">
            <div className="bg-template-secondary rounded-2xl p-8 text-template-accent">
              <h3 className="text-3xl font-bold mb-4">
                NÃO PERCA ESTA OPORTUNIDADE ÚNICA!
              </h3>
              <p className="text-xl mb-6">
                Mais de 3.247 pessoas já se inscreveram nos últimos 7 dias.
              </p>
              
              <Button 
                size="lg" 
                className="bg-template-primary hover:bg-template-primary/90 text-white px-16 py-4 text-2xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                💰 GARANTIR MINHA VAGA AGORA!
              </Button>
              
              <p className="text-template-accent/80 text-sm mt-4">
                ⚡ Oferta válida apenas hoje • 🎯 Últimas vagas disponíveis
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfertaCurso;
