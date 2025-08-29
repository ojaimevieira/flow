import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const PorqueCresce = () => {
  return (
    <section className="py-20 bg-gradient-purple">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              POR QUE MEU RESTAURANTE CRESCE TODOS OS MESES ENQUANTO OUTROS FECHAM?
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Vou te mostrar por que na pandemia meus restaurantes cresceram 40% enquanto 60% fecharam as portas. 
              Não é sorte, são estratégias que qualquer restaurante pode aplicar. Eu descobri como fazer os clientes 
              lembrarem do meu restaurante na hora da fome e você também pode.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-template-secondary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg">
                    <strong>Primeiro:</strong> Vou te mostrar como descobrir quais são os restaurantes que mais vendem na sua região e o que eles fazem de diferente.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-template-secondary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg">
                    <strong>Segundo:</strong> Como criar um cardápio que vende sozinho usando técnicas de neuromarketing.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-template-secondary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg">
                    <strong>Terceiro:</strong> Vou te ensinar as estratégias que uso para fazer meus clientes pedirem mais vezes por semana.
                  </p>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-template-secondary rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg">
                    <strong>Por último:</strong> Como usar o WhatsApp para aumentar suas vendas em 30% sem gastar 1 real com publicidade.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-template-secondary text-lg font-semibold mb-4">
                  Veja na sua tela todos esses restaurantes que já aplicaram esse método:
                </p>
                <p className="text-white/80">
                  O próprio iFood já informou que são mais de <strong>200.000 restaurantes</strong> competindo por atenção dos clientes no aplicativo. Como o seu restaurante vai se destacar dessa multidão?
                </p>
              </div>
            </div>

            {/* Right Content - Video/Image */}
            <div className="relative">
              {/* Main Video/Image */}
              <div className="relative bg-white rounded-2xl p-6 shadow-2xl">
                <div className="aspect-video bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="text-6xl mb-4">📱</div>
                    <h3 className="text-2xl font-bold mb-2">VENDA MAIS!</h3>
                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* iFood logo area */}
                  <div className="absolute bottom-4 left-4 bg-white rounded px-3 py-2">
                    <span className="text-red-500 font-bold text-lg">iFood</span>
                  </div>
                </div>
                
                {/* Person image placeholder */}
                <div className="flex items-center gap-4 mt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">👨‍🍳</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-800">Eric Egea</p>
                    <p className="text-sm text-gray-600">Especialista em Marketing para Restaurantes</p>
                  </div>
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 bg-template-secondary text-template-accent rounded-lg px-4 py-2 shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">500k+</div>
                  <div className="text-xs">Clientes</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-template-secondary hover:bg-template-secondary/90 text-template-accent px-6 md:px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto max-w-full mx-auto"
            >
              ▶️ ASSISTIR AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PorqueCresce;
