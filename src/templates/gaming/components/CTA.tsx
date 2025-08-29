import { Button } from "@/shared/ui/button";
import { ArrowRight, Clock, Shield, Trophy } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-darker-bg via-background to-dark-card relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-accent rounded-full blur-2xl opacity-20 animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-neon-purple rounded-full blur-3xl opacity-15 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Alert */}
          <div className="inline-flex items-center px-6 py-3 bg-red-600/20 border border-red-500 rounded-full mb-8 shadow-glow animate-pulse">
            <Clock className="w-5 h-5 mr-2 text-red-400" />
            <span className="text-red-400 font-semibold">Últimas Horas - Oferta Limitada!</span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Não Perca Esta Oportunidade!
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            Apenas os primeiros <span className="text-primary font-bold">100 alunos</span> terão acesso por R$ 47,00
          </p>

          {/* Price Comparison */}
          <div className="bg-dark-card border border-primary/30 rounded-2xl p-8 mb-10 max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-muted-foreground mb-2">Preço Normal</h3>
                <div className="text-3xl font-bold text-muted-foreground line-through">R$ 297,00</div>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-primary mb-2">Hoje Apenas</h3>
                <div className="text-5xl font-bold text-primary animate-pulse">R$ 47,00</div>
              </div>
            </div>
            <div className="text-center mt-6">
              <p className="text-green-400 font-semibold text-xl">Economia de R$ 250,00!</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-12">
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-neon transition-all duration-300 text-xl px-6 md:px-12 py-6 group animate-glow-pulse w-full md:w-auto max-w-full mx-auto"
            >
              🚀 Garantir Minha Vaga Agora - R$ 47,00
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <p className="text-sm text-muted-foreground mt-4">
              ⚡ Acesso instantâneo após a compra
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-border">
            <div className="text-center">
              <Shield className="w-8 h-8 text-primary mb-2 mx-auto" />
              <div className="text-lg font-bold text-primary mb-1">7 Dias</div>
              <div className="text-sm text-muted-foreground">Garantia Total</div>
            </div>
            <div className="text-center">
              <Trophy className="w-8 h-8 text-primary mb-2 mx-auto" />
              <div className="text-lg font-bold text-primary mb-1">Vitalício</div>
              <div className="text-sm text-muted-foreground">Acesso Completo</div>
            </div>
            <div className="text-center">
              <Clock className="w-8 h-8 text-primary mb-2 mx-auto" />
              <div className="text-lg font-bold text-primary mb-1">Instantâneo</div>
              <div className="text-sm text-muted-foreground">Acesso Imediato</div>
            </div>
          </div>

          {/* Final Warning */}
          <div className="mt-12 bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/50 rounded-2xl p-6">
            <p className="text-red-400 font-semibold text-lg">
              ⚠️ Após o fim da promoção, o valor volta para R$ 297,00
            </p>
            <p className="text-muted-foreground mt-2">
              Não perca a chance de transformar suas fotos por uma fração do preço!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
