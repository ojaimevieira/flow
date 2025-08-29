import { Card, CardContent } from "@/shared/ui/card";
import { Button } from "@/shared/ui/button";
import { 
  Users, 
  Briefcase, 
  Camera, 
  TrendingUp, 
  BookOpen,
  ArrowRight
} from "lucide-react";

const TargetAudience = () => {
  const profiles = [
    {
      icon: Users,
      title: "Criadores de Conteúdo",
      description: "Que querem produzir vídeos de alta qualidade sem gastar horas editando",
      color: "text-blue-400"
    },
    {
      icon: Briefcase,
      title: "Empreendedores",
      description: "Que precisam de vídeos profissionais para promover seus produtos e serviços",
      color: "text-green-400"
    },
    {
      icon: Camera,
      title: "Profissionais de Marketing",
      description: "Que querem criar campanhas visuais impactantes usando IA",
      color: "text-purple-400"
    },
    {
      icon: TrendingUp,
      title: "Influenciadores",
      description: "Que buscam se destacar com conteúdo único e profissional",
      color: "text-template-primary"
    },
    {
      icon: BookOpen,
      title: "Educadores Online",
      description: "Que querem criar cursos e conteúdos educacionais envolventes",
      color: "text-yellow-400"
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-6">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-template-primary rounded-full"></div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-template-primary to-template-secondary bg-clip-text text-transparent">
              Pra quem é esse curso?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            O FilmAgente foi criado para pessoas que querem criar vídeos incríveis usando o poder da IA, 
            independente do nível de experiência atual.
          </p>
        </div>

        {/* Target Profiles */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {profiles.map((profile, index) => (
            <Card 
              key={index}
              className="bg-dark-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r from-template-primary/20 to-template-secondary/20 p-4 mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <profile.icon className={`w-8 h-8 ${profile.color}`} />
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-template-primary transition-colors">
                  {profile.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {profile.description}
                </p>
              </CardContent>
            </Card>
          ))}

          {/* Special Card - Call to Action */}
          <Card className="bg-gradient-to-br from-template-primary/20 to-template-secondary/20 border-primary/40 group md:col-span-2 lg:col-span-1">
            <CardContent className="p-8 text-center h-full flex flex-col justify-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-4 text-foreground">
                Você se identificou?
              </h3>
              <p className="text-muted-foreground mb-6">
                Então o FilmAgente é perfeito para você!
              </p>
              <Button 
                className="bg-gradient-primary hover:shadow-neon transition-all duration-300 w-full group"
              >
                COMEÇAR AGORA
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-dark-card border border-primary/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              💡 Não importa se você nunca editou um vídeo na vida
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              O curso foi desenvolvido pensando em iniciantes completos. Você vai aprender desde o básico 
              até técnicas avançadas, tudo de forma simples e prática.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-muted-foreground">✅ Fácil de seguir</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-muted-foreground">✅ Passo a passo</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-muted-foreground">✅ Suporte completo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
