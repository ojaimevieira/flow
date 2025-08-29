import { Button } from "@/components/ui/button";
import { Star, Clock, Shield, Zap } from "lucide-react";

const HeroDelivery = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-template-surface via-white to-template-surface-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-template-secondary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-template-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-template-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Selo de Urgência */}
            <div className="inline-flex items-center gap-2 bg-template-secondary text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-glow-pulse">
              <Zap className="w-4 h-4" />
              AUMENTE SEU FATURAMENTO EM ATÉ 30% ATRAINDO MAIS CLIENTES TODOS OS DIAS!
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Descubra como você pode{" "}
              <span className="text-template-primary bg-gradient-to-r from-template-primary to-template-accent bg-clip-text text-transparent">
                SER DUPLICAR suas vendas no delivery
              </span>{" "}
              em apenas 19 dias!
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Por que meu restaurante CRESCE enquanto outros FECHAM as portas? 
              Descubra os segredos que mais de 500.000 restaurantes já aplicaram para dominar o delivery.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-template-secondary text-template-secondary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground">500k+ restaurantes</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 text-template-primary mb-2">
                  <Clock className="w-6 h-6" />
                  <span className="text-2xl font-bold">19</span>
                </div>
                <p className="text-sm text-muted-foreground">dias para resultados</p>
              </div>
              <div className="text-center md:col-span-1 col-span-2">
                <div className="flex items-center justify-center gap-1 text-template-primary mb-2">
                  <Shield className="w-6 h-6" />
                  <span className="text-2xl font-bold">100%</span>
                </div>
                <p className="text-sm text-muted-foreground">garantia</p>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-template-primary hover:bg-template-accent text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full md:w-auto"
              >
                🔥 EU QUERO ESTES CURSOS!
              </Button>
              
              <p className="text-sm text-muted-foreground">
                Por apenas <span className="line-through">R$ 197</span>{" "}
                <span className="text-template-primary font-bold text-lg">R$ 19</span>{" "}
                (Oferta especial limitada)
              </p>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="bg-gradient-to-br from-template-primary to-template-accent rounded-2xl p-8 shadow-2xl">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    VENDA MAIS!
                  </h3>
                  <p className="text-gray-600">
                    Aumente suas vendas com estratégias comprovadas de delivery
                  </p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-template-secondary text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl animate-bounce">
                +30%
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-template-secondary text-white rounded-lg px-4 py-2 shadow-lg animate-pulse">
                <div className="text-sm font-semibold">🚀 Resultados Garantidos!</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - Social Proof */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Já ajudamos mais de 500.000 restaurantes:</p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            {/* Placeholder for logos */}
            <div className="text-2xl">🍕</div>
            <div className="text-2xl">🍔</div>
            <div className="text-2xl">🍜</div>
            <div className="text-2xl">🥗</div>
            <div className="text-2xl">🌮</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroDelivery;
