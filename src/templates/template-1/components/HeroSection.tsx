import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { ArrowRight, Play, Sparkles, Video, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated circles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-32 w-24 h-24 bg-pink-500/30 rounded-full blur-lg animate-bounce" />
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-blue-400/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-pink-600/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center">
              <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 text-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Método Revolucionário
              </Badge>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Domine a</span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Edição de Vídeos
                </span>
                <br />
                <span className="text-white">com IA</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-lg">
                Aprenda a criar vídeos profissionais usando inteligência artificial em apenas algumas horas
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: Video, text: "Sem experiência necessária" },
                { icon: Zap, text: "Resultados em minutos" },
                { icon: Sparkles, text: "IA de última geração" },
                { icon: Play, text: "Aulas práticas" }
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <span className="text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                <Play className="w-5 h-5 mr-2" />
                Começar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              
              <Button variant="outline" size="lg" className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 text-lg font-semibold">
                Ver Demonstração
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">2.5K+</div>
                <div className="text-sm text-gray-400">Alunos</div>
              </div>
              <div className="w-px h-8 bg-gray-600" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-gray-400">Satisfação</div>
              </div>
              <div className="w-px h-8 bg-gray-600" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.9★</div>
                <div className="text-sm text-gray-400">Avaliação</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-3xl blur-3xl scale-110" />
              
              {/* Main image */}
              <div className="relative bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-3xl p-8 backdrop-blur-sm border border-purple-500/30">
                <img
                  src="https://images.unsplash.com/photo-1619364726002-dfd4fdaee5de?w=600&h=800&fit=crop&crop=face"
                  alt="Criadora de conteúdo editando vídeos"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = 'https://picsum.photos/600/800?random=1000';
                  }}
                />
                
                {/* Floating elements */}
                <div className="absolute -top-4 -left-4 bg-purple-600 text-white px-4 py-2 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Video className="w-4 h-4" />
                    <span className="font-semibold">IA Editor</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 bg-pink-600 text-white px-4 py-2 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span className="font-semibold">Resultados</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
