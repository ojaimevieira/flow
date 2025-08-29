import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { ArrowRight, PlayCircle } from "lucide-react";

const ResultsSection = () => {
  const results = [
    {
      title: "Vídeo Profissional",
      before: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      description: "De gravação básica para produção cinematográfica"
    },
    {
      title: "Edição Avançada",
      before: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop",
      description: "Transformação completa com efeitos de IA"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 mb-6">
            Resultados Comprovados
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Veja as <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Transformações</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Nossos alunos saem do básico para o profissional usando apenas IA
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <Card key={index} className="bg-gray-800/50 border border-purple-500/30 overflow-hidden hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
              <CardContent className="p-0">
                {/* Before/After Images */}
                <div className="relative">
                  <div className="grid grid-cols-2">
                    {/* Before */}
                    <div className="relative group">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={result.before}
                          alt="Antes"
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/400/300?random=${1100 + index * 2}`;
                          }}
                        />
                      </div>
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-red-600/90 text-white text-xs">ANTES</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* After */}
                    <div className="relative group">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={result.after}
                          alt="Depois"
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/400/300?random=${1101 + index * 2}`;
                          }}
                        />
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-green-600/90 text-white text-xs">DEPOIS</Badge>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <PlayCircle className="w-12 h-12 text-white/80" />
                      </div>
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{result.title}</h3>
                  <p className="text-gray-400">{result.description}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-sm font-bold text-purple-400">5min</div>
                        <div className="text-xs text-gray-500">Tempo de edição</div>
                      </div>
                      <div className="text-center">
                        <div className="text-sm font-bold text-pink-400">100%</div>
                        <div className="text-xs text-gray-500">IA Powered</div>
                      </div>
                    </div>
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30">
                      {index === 0 ? "Iniciante" : "Avançado"}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Estes resultados foram feitos por alunos iniciantes</p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-2 border-gray-800 flex items-center justify-center text-white text-xs font-bold">
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-gray-400">+2.547 alunos já transformaram seus vídeos</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
