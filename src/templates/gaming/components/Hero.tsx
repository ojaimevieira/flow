import { Button } from "@/shared/ui/button";
import { ArrowRight, Play, Clock, Users } from "lucide-react";
import heroImage from "@/assets/hero-product-editing.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-darker-bg via-background to-dark-card">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional product photo editing with AI"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-1">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Urgency Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-gradient-primary border border-primary rounded-full mb-8 shadow-glow animate-pulse">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm font-medium text-white">Oferta por tempo limitado - Apenas hoje!</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Transforme Fotos Simples em
            <br />
            <span className="text-primary">Cenários Profissionais</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            Aprenda a criar cenários profissionais para seus produtos usando apenas uma foto com fundo branco e IA.
          </p>

          {/* Value Proposition */}
          <div className="bg-dark-card border border-border rounded-2xl p-6 mb-10 max-w-2xl mx-auto">
            <p className="text-lg text-foreground mb-2">
              <span className="font-bold text-primary">Sem fotógrafo, sem estúdio, sem cenários físicos.</span>
            </p>
            <p className="text-muted-foreground">
              Uma foto simples + IA = Infinitas possibilidades profissionais
            </p>
          </div>

          {/* Pricing Highlight */}
          <div className="mb-10">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-2xl text-muted-foreground line-through">R$ 297,00</span>
              <span className="text-5xl font-bold text-primary">R$ 47,00</span>
            </div>
            <p className="text-muted-foreground text-lg">Economia de R$ 250,00 - Apenas hoje!</p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-neon transition-all duration-300 text-lg px-10 py-4 group animate-glow-pulse"
            >
              Garantir Minha Vaga Agora
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:shadow-glow transition-all duration-300 text-lg px-8 py-4 group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Ver Demonstração
            </Button>
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Vagas Limitadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">7 Dias</div>
              <div className="text-muted-foreground">Garantia Total</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">Vitalício</div>
              <div className="text-muted-foreground">Acesso Completo</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
