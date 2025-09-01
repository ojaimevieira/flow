import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { useRef } from "react";
import Hero500x500 from '@/assets/edicao-imagens-ia/hero_500x500.webp';
import ProdutoDepois500x500 from '@/assets/edicao-imagens-ia/produto_depois_500x500.webp';
import ProdutoAntes500x500 from '@/assets/edicao-imagens-ia/produto_antes_500x500.webp';
import { 

  Camera, 
  Sparkles, 
  Zap, 
  Target, 
  Wand2,
  ArrowRight
} from "lucide-react";

interface HeroSectionProps {
  heroBlobARef: React.RefObject<HTMLDivElement>;
  heroBlobBRef: React.RefObject<HTMLDivElement>;
}

const HeroSection = ({ heroBlobARef, heroBlobBRef }: HeroSectionProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-darker-bg via-background to-dark-card">
        <div ref={heroBlobARef} className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl will-change-transform motion-safe:animate-pulse" />
        <div ref={heroBlobBRef} className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-2xl will-change-transform motion-safe:animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-pink/10 rounded-full blur-xl motion-safe:animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center space-y-8">
        <Badge variant="outline" className="mb-6 border-primary text-primary text-lg px-6 py-2 motion-safe:animate-bounce">
          <Sparkles className="w-4 h-4 mr-2" />
          Hero
        </Badge>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-primary via-accent to-neon-pink bg-clip-text text-transparent">
            Edição de Produtos
          </span>
        </h1>
        
        <h2 className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
          Transforme uma simples foto com fundo branco em cenários profissionais
        </h2>

        <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground mt-8">
          <div className="flex items-center space-x-2">
            <Camera className="w-4 h-4 text-primary" />
            <span>Sem Fotógrafo</span>
          </div>
          <div className="flex items-center space-x-2">
            <Wand2 className="w-4 h-4 text-accent" />
            <span>Powered by IA</span>
          </div>
          <div className="flex items-center space-x-2">
            <Zap className="w-4 h-4 text-neon-pink" />
            <span>Resultados Instantâneos</span>
          </div>
        </div>

        {/* Promessa Principal - Card destacado */}
        <div className="max-w-3xl mx-auto mt-12">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                <Target className="w-6 h-6 text-primary" />
                <Badge variant="outline" className="border-primary/40 text-primary text-lg px-4 py-1">
                  Promessa Principal
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg leading-relaxed">
                Aprenda a criar cenários profissionais para seus produtos usando apenas uma foto com fundo branco e IA. Sem fotógrafo, sem estúdio, sem cenários físicos.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Demonstração Visual Hero - Before/After */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Antes */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/50 to-red-600/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-dark-card rounded-lg p-4">
                <div className="text-center mb-4">
                  <Badge className="bg-red-500 text-white">ANTES</Badge>
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={Hero500x500} 
                    alt="Produto com fundo branco - antes da edição"
                    className="w-full h-full object-cover grayscale"
                    onError={(e) => {
                      e.currentTarget.src = '{ProdutoAntes500x500}';
                    }}
                  />
                </div>
                <p className="text-center mt-4 text-muted-foreground">Foto simples com fundo branco</p>
              </div>
            </div>

            {/* Depois */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/50 to-cyan-500/50 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative bg-dark-card rounded-lg p-4">
                <div className="text-center mb-4">
                  <Badge className="bg-emerald-500 text-white">DEPOIS</Badge>
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src={ProdutoDepois500x500} 
                    alt="Produto em cenário profissional - depois da edição"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '{ProdutoDepois500x500}';
                    }}
                  />
                </div>
                <p className="text-center mt-4 text-foreground font-medium">Cenário profissional com IA</p>
              </div>
            </div>
          </div>

          {/* Seta de transformação */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-2xl motion-safe:animate-pulse">
                <Wand2 className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Transformação com IA</p>
                <p className="font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Em segundos!</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Hero */}
        <div className="pt-8">
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg shadow-2xl hover:shadow-neon transition-all duration-300 hover:scale-105">
            <ArrowRight className="w-5 h-5 mr-2" />
            Começar Agora
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 motion-safe:animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 motion-safe:animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
