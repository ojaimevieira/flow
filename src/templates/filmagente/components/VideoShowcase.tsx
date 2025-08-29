import { Card, CardContent } from "@/shared/ui/card";
import { Play } from "lucide-react";

const VideoShowcase = () => {
  const videos = [
    {
      id: 1,
      thumbnail: "/api/placeholder/300/200",
      title: "Vídeo Comercial - Produto Tech",
      views: "12K visualizações"
    },
    {
      id: 2,
      thumbnail: "/api/placeholder/300/200", 
      title: "Tutorial Educacional - IA",
      views: "8.5K visualizações"
    },
    {
      id: 3,
      thumbnail: "/api/placeholder/300/200",
      title: "Vídeo Promocional - Serviços",
      views: "15K visualizações"
    },
    {
      id: 4,
      thumbnail: "/api/placeholder/300/200",
      title: "Conteúdo Social Media",
      views: "22K visualizações"
    },
    {
      id: 5,
      thumbnail: "/api/placeholder/300/200",
      title: "Apresentação Corporativa", 
      views: "6.2K visualizações"
    },
    {
      id: 6,
      thumbnail: "/api/placeholder/300/200",
      title: "Vídeo Explicativo - App",
      views: "18K visualizações"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-darker-bg to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Veja na prática </span>
            <span className="bg-gradient-to-r from-template-primary to-template-secondary bg-clip-text text-transparent">alguns vídeos</span>
            <br />
            <span className="text-foreground">criados com </span>
            <span className="bg-gradient-to-r from-template-secondary to-template-primary bg-clip-text text-transparent">IA mainframe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exemplos reais de vídeos criados pelos nossos alunos usando as técnicas ensinadas no curso
          </p>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {videos.map((video) => (
            <Card 
              key={video.id}
              className="bg-dark-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group overflow-hidden cursor-pointer"
            >
              <CardContent className="p-0">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-template-primary/20 to-template-secondary/20 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 group-hover:bg-primary/30 transition-all duration-300">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>

                  {/* Video Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-white font-semibold text-sm mb-1">
                      {video.title}
                    </h3>
                    <p className="text-white/80 text-xs">
                      {video.views}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-lg">
            <span className="text-template-primary font-semibold">Todos esses vídeos</span> foram criados por pessoas que nunca haviam editado vídeos antes
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
