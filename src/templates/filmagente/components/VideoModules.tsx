import { Card, CardContent } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { Play, ArrowRight } from "lucide-react";

const VideoModules = () => {
  const modules = [
    {
      id: 1,
      title: "Passo 1: Estrutura e roteiro",
      description: "Aprenda a criar roteiros envolventes e estruturar seus vídeos para máximo impacto",
      image: "/api/placeholder/300/200",
      duration: "2h 30min"
    },
    {
      id: 2,
      title: "Passo 2: IA na edição",
      description: "Domine as principais ferramentas de IA para edição profissional em minutos",
      image: "/api/placeholder/300/200", 
      duration: "3h 15min"
    },
    {
      id: 3,
      title: "Passo 3: Áudio e trilha sonora",
      description: "Crie trilhas sonoras perfeitas e áudios limpos usando inteligência artificial",
      image: "/api/placeholder/300/200",
      duration: "1h 45min"
    },
    {
      id: 4,
      title: "Passo 4: Otimizar para o YouTube",
      description: "Estratégias para fazer seus vídeos viralizarem e gerarem mais visualizações",
      image: "/api/placeholder/300/200",
      duration: "2h 00min"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-darker-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Veja como </span>
            <span className="bg-gradient-to-r from-template-primary to-template-secondary bg-clip-text text-transparent">dominar</span>
            <span className="text-foreground"> a criação de vídeos com IA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um método passo a passo para você criar vídeos profissionais usando inteligência artificial
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {modules.map((module) => (
            <Card 
              key={module.id}
              className="bg-dark-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Module Image */}
                <div className="relative aspect-video bg-gradient-to-br from-template-primary/20 to-template-secondary/20 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white text-sm font-medium">{module.duration}</span>
                  </div>
                </div>

                {/* Module Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-template-primary transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {module.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-neon transition-all duration-300 text-lg px-12 py-4 rounded-full group"
          >
            QUERO DOMINAR A CRIAÇÃO DE VÍDEOS COM IA
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoModules;
