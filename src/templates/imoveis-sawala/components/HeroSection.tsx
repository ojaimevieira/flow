import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import {
  MapPin,
  Building2,
  Car,
  Waves,
  TreePine,
  Dumbbell,
  Shield,
  TrendingUp,
  MessageCircle
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/src/assets/imoveis-sawala/hero-building.jpg"
          alt="Edifício Laranjeiras - Sawala Incorporadora"
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src = '/placeholder-building.jpg';
          }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* Content */}
  <div className="container mx-auto px-8 md:px-12 py-10 md:py-14 relative z-10 h-full flex items-center">
        <div className="w-full">
          
          {/* Hero Content - Centralizado com espaçamento otimizado */}
          <div className="w-full max-w-5xl mx-auto text-center text-white space-y-12 md:space-y-14 animate-fade-in">
            
            {/* Badge - Menor e mais sutil */}
            <div className="animate-slide-down">
              <Badge className="bg-amber-600/90 backdrop-blur-sm text-white border-amber-500/50 text-sm px-4 py-2 shadow-lg inline-flex items-center">
                <Building2 className="w-4 h-4 mr-2" />
                LANÇAMENTO EXCLUSIVO
              </Badge>
            </div>

            {/* Main Title - Hierarquia ajustada */}
            <div className="space-y-4 animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                <span className="block text-white drop-shadow-2xl">LANÇAMENTO</span>
                <span className="block bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent drop-shadow-lg text-5xl md:text-6xl lg:text-7xl font-black italic">
                  LARANJEIRAS
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-white/95 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
                O empreendimento que vai <strong className="text-amber-400 font-bold">transformar seu jeito de viver</strong> no coração de Laranjeiras.
              </p>
            </div>

            {/* Location - Mais compacto */}
            <div className="relative max-w-lg mx-auto animate-fade-in-delayed mt-6 md:mt-8">
              <div className="bg-gradient-to-r from-amber-500/20 via-yellow-400/20 to-amber-500/20 backdrop-blur-xl border border-amber-400/60 rounded-full py-2 px-4 shadow-2xl">
                <div className="flex items-center justify-center space-x-2">
                  <div className="bg-amber-400 p-1.5 rounded-full">
                    <MapPin className="w-4 h-4 text-black" />
                  </div>
                  <div className="text-left">
                    <div className="text-base font-bold text-white">Rua Moura Brasil, 44</div>
                    <div className="text-xs text-amber-400 font-medium">Laranjeiras - 5min do metrô</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features - Redondos com padding menor */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 max-w-3xl mx-auto animate-slide-up-delayed mt-10 md:mt-12">
              <div className="bg-black/40 backdrop-blur-sm border border-blue-400/30 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center p-1 hover:bg-black/60 transition-all duration-300 hover:scale-105">
                <Building2 className="w-5 h-5 text-amber-400 mb-1" />
                <span className="text-white font-medium text-xs text-center leading-tight">Studios a<br/>3 Quartos</span>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-amber-400/30 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center p-1 hover:bg-black/60 transition-all duration-300 hover:scale-105">
                <Car className="w-5 h-5 text-amber-400 mb-1" />
                <span className="text-white font-medium text-xs text-center leading-tight">Vaga de<br/>Garagem</span>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-blue-400/30 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center p-1 hover:bg-black/60 transition-all duration-300 hover:scale-105">
                <Waves className="w-5 h-5 text-amber-400 mb-1" />
                <span className="text-white font-medium text-xs text-center leading-tight">Rooftop<br/>com Vista</span>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-amber-400/30 rounded-full w-24 h-24 md:w-28 md:h-28 flex flex-col items-center justify-center p-1 hover:bg-black/60 transition-all duration-300 hover:scale-105">
                <Shield className="w-5 h-5 text-amber-400 mb-1" />
                <span className="text-white font-medium text-xs text-center leading-tight">Projeto<br/>Retrofit</span>
              </div>
            </div>

            {/* CTA Principal - Agora estilo WhatsApp verde */}
            <div className="animate-bounce-subtle mt-12 md:mt-16">
              <Button
                size="lg"
                className="bg-gradient-to-br from-green-600 via-emerald-500 to-green-700 hover:from-green-700 hover:to-emerald-600 text-white font-black px-8 py-4 text-lg shadow-2xl hover:shadow-green-500/40 transition-all duration-500 transform hover:scale-110 rounded-2xl border-2 border-green-400/60"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                AGENDAR VISITA AGORA
              </Button>
            </div>

            {/* Secondary CTA */}
            <div className="animate-fade-in-delayed mt-6 md:mt-10">
              <Button 
                variant="outline" 
                className="border border-white/50 text-white hover:bg-white hover:text-slate-900 px-6 py-2 text-sm backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-105 rounded-full"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Material Completo
              </Button>
            </div>

            {/* Card do corretor removido conforme solicitação */}

          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 text-slate-50" viewBox="0 0 1200 120" fill="currentColor">
          <path d="M0,100 C150,80 350,40 600,50 C850,60 1050,80 1200,100 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
