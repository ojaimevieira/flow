import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent } from "@/shared/ui/card";
import { 
  PlayCircle, 
  Users, 
  Clock, 
  Star, 
  CheckCircle, 
  Zap, 
  Award,
  Shield,
  Infinity
} from "lucide-react";

const FilmFeatures = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-darker-bg to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            🎬 Criação de Vídeos com IA
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Do Zero ao Profissional
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aprenda a criar vídeos incríveis usando inteligência artificial, mesmo sem experiência prévia
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Video Preview */}
          <div className="relative">
            <Card className="bg-dark-card border-primary/20 shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20" />
                  <Button 
                    size="lg" 
                    className="bg-white/20 backdrop-blur-sm hover:bg-white/30 border-2 border-white/50 rounded-full w-20 h-20 p-0 group"
                  >
                    <PlayCircle className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
                  </Button>
                  <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-medium">Demonstração Completa</span>
                      <span className="text-white/80 text-sm">5:42</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Features */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              O que você vai aprender:
            </h3>
            
            <div className="space-y-4">
              {[
                {
                  icon: Zap,
                  title: "IA Generativa para Vídeos",
                  description: "Domine as principais ferramentas de IA para criação de conteúdo visual"
                },
                {
                  icon: PlayCircle,
                  title: "Roteiros Inteligentes",
                  description: "Crie roteiros envolventes usando prompts otimizados"
                },
                {
                  icon: Award,
                  title: "Edição Profissional",
                  description: "Técnicas avançadas de edição com auxílio da inteligência artificial"
                },
                {
                  icon: Users,
                  title: "Estratégias de Engajamento",
                  description: "Como criar conteúdo que converte e engaja sua audiência"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-xl bg-dark-card/50 border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {[
            { icon: Users, number: "2,500+", label: "Alunos Ativos" },
            { icon: Star, number: "4.9", label: "Avaliação" },
            { icon: Clock, number: "20h", label: "de Conteúdo" },
            { icon: Infinity, number: "Vitalício", label: "Acesso" }
          ].map((stat, index) => (
            <Card key={index} className="bg-dark-card border-primary/20 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantee Section */}
        <Card className="bg-gradient-to-r from-dark-card to-darker-bg border-primary/30 shadow-2xl">
          <CardContent className="p-8 text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Garantia Incondicional de 7 Dias
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Se por qualquer motivo você não ficar satisfeito com o conteúdo, 
              devolvemos 100% do seu investimento sem perguntas.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-foreground font-medium">Risco Zero para Você</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FilmFeatures;
