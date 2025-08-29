import { Button } from "@/shared/ui/button";
import { ArrowRight, Shield, Clock, CheckCircle } from "lucide-react";

const HeroFilm = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://filmagente.jaimevieira.com/images/bg-capa_1.webp" 
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-neon-purple/30 rounded-full blur-2xl opacity-40 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl">
          {/* Brand Logo */}
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-template-primary rounded-full"></div>
              </div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-template-primary to-template-secondary bg-clip-text text-transparent">
              @FilmAgente
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 mb-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground via-template-primary to-template-secondary bg-clip-text text-transparent">
                Domine a Criação de
              </span>
              <br />
              <span className="bg-gradient-to-r from-template-secondary via-template-primary to-template-secondary bg-clip-text text-transparent">
                Vídeos com IA
              </span>
              <br />
              <span className="text-foreground">
                e leve seu conteúdo a outro nível
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mb-8">
            Você não precisa saber por onde começar. A inteligência artificial te ajuda a construir vídeos 
            com estratégia para vender, ensinar ou atrair audiência.
          </p>

          {/* CTA Button */}
          <div className="space-y-6">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-neon transition-all duration-300 text-lg px-12 py-6 rounded-full group animate-glow-pulse text-white font-semibold"
            >
              QUERO APRENDER A CRIAR VÍDEOS COM IA
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Pricing */}
            <div className="space-y-2">
              <div className="flex items-baseline space-x-3">
                <span className="text-muted-foreground line-through text-lg">De R$997,00</span>
                <span className="text-muted-foreground">por</span>
                <span className="text-3xl font-bold text-template-primary">12x de R$19,70*</span>
              </div>
            </div>

            {/* Benefits */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-template-primary flex-shrink-0" />
                <span className="text-foreground font-medium">Acesso imediato</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground font-medium">Garantia de 7 dias</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground font-medium">Não precisa experiência</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-template-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-template-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroFilm;
