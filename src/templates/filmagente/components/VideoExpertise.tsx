import { Badge } from "@/shared/ui/badge";

const VideoExpertise = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-darker-bg to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-left mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="text-foreground">Criar vídeos </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">já foi</span>
              <br />
              <span className="text-foreground">coisa de especialista.</span>
              <br />
              <span className="bg-gradient-to-r from-accent to-neon-pink bg-clip-text text-transparent">Hoje é mais.</span>
            </h2>
          </div>

          {/* Description */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Inteligência Artificial não veio para substituir os videomakers, mas para democratizar a criação de vídeos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Agora qualquer pessoa pode criar vídeos de alta qualidade sem precisar dominar técnicas complexas de edição ou ter equipamentos caros.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Com as ferramentas certas e o conhecimento adequado, você pode produzir conteúdo visual impactante em minutos, não em horas.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                O FilmAgente te ensina não apenas como usar essas ferramentas, mas como pensar estrategicamente sobre criação de vídeos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Você vai aprender a criar vídeos que convertem, engajam e vendem - tudo isso usando o poder da IA a seu favor.
              </p>
              
              {/* Highlight Badge */}
              <div className="inline-block">
                <Badge className="bg-gradient-primary text-white px-6 py-2 text-sm font-bold">
                  🎯 Foco em Resultados
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoExpertise;
