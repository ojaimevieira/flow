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
  TrendingUp
} from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="text-white space-y-8">
            <Badge className="bg-amber-600/20 text-amber-400 border-amber-500/30 text-lg px-6 py-2">
              <Building2 className="w-5 h-5 mr-2" />
              LANÇAMENTO EXCLUSIVO
            </Badge>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                <span className="block text-white">LANÇAMENTO</span>
                <span className="block bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                  LARANJEIRAS
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                Chegou o lançamento que vai <strong>transformar o seu jeito de viver</strong>. 
                Localização privilegiada no coração de Laranjeiras.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 text-blue-100">
                <Building2 className="w-5 h-5 text-amber-400" />
                <span>Studios, 1, 2 e 3 Quartos</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <Car className="w-5 h-5 text-amber-400" />
                <span>Vaga de Garagem</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <Waves className="w-5 h-5 text-amber-400" />
                <span>Rooftop com Vista</span>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <Shield className="w-5 h-5 text-amber-400" />
                <span>Projeto Retrofit</span>
              </div>
            </div>

            {/* Location */}
            <div className="bg-blue-800/30 backdrop-blur-sm border border-blue-700/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-3">
                <MapPin className="w-6 h-6 text-amber-400" />
                <span className="text-lg font-semibold text-white">Rua Moura Brasil, 44 - Laranjeiras</span>
              </div>
              <p className="text-blue-100">
                A apenas 5 minutos do metrô, shopping e principais pontos da zona sul.
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white font-semibold px-8 py-4 text-lg"
              >
                Agendar Visita Agora
                <Building2 className="w-5 h-5 ml-2" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg"
              >
                Baixar Material
                <TrendingUp className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Contact */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="text-sm text-blue-200">
                <strong>Fale com Especialista:</strong>
              </div>
              <div className="text-xl font-bold text-amber-400">
                (21) 97884-3534
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/src/assets/imoveis-sawala/hero-building.webp"
                alt="Edifício Laranjeiras - Sawala Incorporadora"
                className="w-full h-[600px] object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/placeholder-building.jpg';
                }}
              />
              
              {/* Overlay com informações */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="text-white">
                  <p className="text-sm opacity-90 mb-1">RUA MOURA BRASIL, 44 - LARANJEIRAS</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold">VEM AÍ!</p>
                    </div>
                    <div className="text-right">
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2">
                        <img 
                          src="/src/assets/imoveis-sawala/logo-sawala.webp" 
                          alt="Sawala"
                          className="h-8"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgMTAwIDQwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0ZXh0IHg9IjEwIiB5PSIyNSIgZmlsbD0iI0ZGRkZGRiIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCI+c2F3YWxhPC90ZXh0Pjwvc3ZnPg==';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -left-4 bg-amber-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
              🔥 PRÉ-LANÇAMENTO
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold shadow-lg">
              💎 ALTO PADRÃO
            </div>
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
