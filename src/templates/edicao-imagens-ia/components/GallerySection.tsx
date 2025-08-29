import { Badge } from "@/shared/ui/badge";
import { Card, CardContent } from "@/shared/ui/card";
import { Image, Palette, Zap, Target } from "lucide-react";

interface GallerySectionProps {
  visible: Record<string, boolean>;
}

const GallerySection = ({ visible }: GallerySectionProps) => {
  const examples = [
    { 
      title: "Exemplo 1: Alteração de Cenário — Template \"Balcão Heineken\"",
      gradient: "from-blue-500/20 to-blue-700/20",
      icon: Palette,
      color: "blue",
      beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&h=300&fit=crop"
    },
    { 
      title: "Exemplo 2: Efeito de Iluminação — Template \"Neon Dramático\"",
      gradient: "from-purple-500/20 to-pink-500/20",
      icon: Zap,
      color: "purple",
      beforeImage: "https://images.unsplash.com/photo-1586323392179-72b69319aaa8?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop"
    },
    { 
      title: "Exemplo 3: Adição de Elementos — Template \"Combo Hambúrguer Rústico\"",
      gradient: "from-orange-500/20 to-red-500/20",
      icon: Target,
      color: "orange",
      beforeImage: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop"
    },
    { 
      title: "Exemplo 4: Mudança de Superfície — Template \"Superfície Granito\"",
      gradient: "from-gray-500/20 to-zinc-500/20",
      icon: Image,
      color: "gray",
      beforeImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1594824881650-3b0aa67ad5d3?w=400&h=300&fit=crop"
    },
  ];

  return (
    <section id="gallery" className="py-20" data-animate>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-purple-500/40 text-purple-400 text-lg px-6 py-2">
            <Image className="w-4 h-4 mr-2" />
            Gallery
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transformações Incríveis
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-purple-500/60 to-pink-500/60 rounded-full mx-auto" />
        </div>

        <div 
          className="grid md:grid-cols-2 gap-8 transition-all duration-700"
          style={{ 
            opacity: visible["gallery"] ? 1 : 0, 
            transform: visible["gallery"] ? "translateY(0px)" : "translateY(40px)" 
          }}
        >
          {examples.map((item, i) => (
            <Card key={i} className="bg-dark-card/60 border-primary/30 overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:scale-105">
              <div className="aspect-video relative overflow-hidden">
                {/* Before/After split view */}
                <div className="absolute inset-0 flex">
                  <div className="w-1/2 relative overflow-hidden">
                    <img 
                      src={item.beforeImage} 
                      alt="Before transformation"
                      className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute bottom-2 left-2">
                      <Badge className="bg-red-500/80 text-white border-none text-xs">
                        Antes
                      </Badge>
                    </div>
                  </div>
                  <div className="w-1/2 relative overflow-hidden">
                    <img 
                      src={item.afterImage} 
                      alt="After transformation"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 right-2">
                      <Badge className="bg-green-500/80 text-white border-none text-xs">
                        Depois
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Divider line */}
                <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white/50 transform -translate-x-0.5" />
                
                {/* Icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-black/70 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </div>
              
              <CardContent className="p-6">
                <p className="font-medium leading-relaxed group-hover:text-primary transition-colors">
                  {item.title}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
