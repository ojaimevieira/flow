import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { PlayCircle, Eye, Heart, MessageCircle, Share, TrendingUp } from "lucide-react";

const GallerySection = () => {
  const transformations = [
    {
      title: "Vlog Pessoal → Viral",
      before: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      category: "Lifestyle",
      views: "2.3M",
      engagement: "+547%",
      student: "Maria Santos"
    },
    {
      title: "Tutorial → Profissional",
      before: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop",
      category: "Educação",
      views: "856K",
      engagement: "+423%",
      student: "João Silva"
    },
    {
      title: "Produto → Cinematográfico",
      before: "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop",
      category: "Marketing",
      views: "1.8M",
      engagement: "+692%",
      student: "Ana Costa"
    },
    {
      title: "Gaming → Épico",
      before: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      after: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      category: "Gaming",
      views: "3.1M", 
      engagement: "+834%",
      student: "Pedro Games"
    }
  ];

  const categories = [
    { name: "Todos", count: 2547, active: true },
    { name: "Lifestyle", count: 892, active: false },
    { name: "Business", count: 634, active: false },
    { name: "Gaming", count: 445, active: false },
    { name: "Educação", count: 378, active: false },
    { name: "Marketing", count: 198, active: false }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 mb-6">
            Galeria de Sucessos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transformações <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Incríveis</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Veja como nossos alunos transformaram vídeos simples em conteúdo viral
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={category.active ? "default" : "outline"}
              className={
                category.active
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0"
                  : "border-purple-500/30 text-purple-400 hover:bg-purple-600/20"
              }
            >
              {category.name}
              <Badge className="ml-2 bg-white/20 text-white border-0 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Transformations Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {transformations.map((item, index) => (
            <Card key={index} className="bg-gray-800/50 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden group">
              <CardContent className="p-0">
                {/* Before/After Comparison */}
                <div className="relative">
                  <div className="grid grid-cols-2">
                    {/* Before */}
                    <div className="relative">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={item.before}
                          alt="Antes"
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/400/300?random=${2000 + index * 2}`;
                          }}
                        />
                      </div>
                      <div className="absolute top-3 left-3">
                        <Badge className="bg-red-600/90 text-white text-xs">ANTES</Badge>
                      </div>
                    </div>

                    {/* After */}
                    <div className="relative">
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={item.after}
                          alt="Depois"
                          className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                          onError={(e) => {
                            (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/400/300?random=${2001 + index * 2}`;
                          }}
                        />
                      </div>
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-green-600/90 text-white text-xs">DEPOIS</Badge>
                      </div>
                      
                      {/* Play button overlay */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <PlayCircle className="w-8 h-8 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow indicator */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content Info */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30">
                      {item.category}
                    </Badge>
                    <span className="text-gray-400 text-sm">por {item.student}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <Eye className="w-4 h-4 text-purple-400" />
                        <span className="text-white font-bold">{item.views}</span>
                      </div>
                      <div className="text-xs text-gray-400">visualizações</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-white font-bold">{item.engagement}</span>
                      </div>
                      <div className="text-xs text-gray-400">engagement</div>
                    </div>
                    
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <Heart className="w-4 h-4 text-pink-400" />
                        <span className="text-white font-bold">4.9★</span>
                      </div>
                      <div className="text-xs text-gray-400">avaliação</div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center space-x-3">
                      <Button size="sm" variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-600/20">
                        <PlayCircle className="w-4 h-4 mr-1" />
                        Ver
                      </Button>
                      <Button size="sm" variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-600/20">
                        <Share className="w-4 h-4 mr-1" />
                        Compartilhar
                      </Button>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <MessageCircle className="w-4 h-4" />
                      <span>127</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-2 border-purple-500/30 text-purple-400 hover:bg-purple-600/20 px-8 py-3">
            Ver Mais Transformações
            <TrendingUp className="w-5 h-5 ml-2" />
          </Button>
          
          <div className="mt-8">
            <p className="text-gray-400 mb-4">
              Mais de <span className="text-white font-bold">2.547 transformações</span> feitas por nossos alunos
            </p>
            
            {/* Quick stats */}
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">847M+</div>
                <div className="text-sm text-gray-400">Views geradas</div>
              </div>
              <div className="w-px h-8 bg-gray-600" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.2M+</div>
                <div className="text-sm text-gray-400">Likes recebidos</div>
              </div>
              <div className="w-px h-8 bg-gray-600" />
              <div className="text-center">
                <div className="text-2xl font-bold text-white">89%</div>
                <div className="text-sm text-gray-400">Ficaram virais</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
