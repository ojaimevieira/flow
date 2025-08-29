import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { 
  BookOpen, 
  Video, 
  Mic, 
  Palette, 
  Target, 
  TrendingUp,
  ArrowRight,
  Clock,
  Users
} from "lucide-react";

const Methodology = () => {
  const modules = [
    {
      number: "01",
      icon: BookOpen,
      title: "Criação de Roteiro",
      description: "Como criar roteiros que prendem a atenção do início ao fim",
      lessons: ["Estrutura narrativa", "Hooks de abertura", "Call to actions eficazes", "Storytelling para vídeos"],
      duration: "2h 30min",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02", 
      icon: Video,
      title: "Ferramentas de IA",
      description: "Dominando as principais plataformas de criação de vídeo com IA",
      lessons: ["Runway ML", "Midjourney para vídeos", "ChatGPT para roteiros", "Ferramentas de edição IA"],
      duration: "3h 15min", 
      color: "from-template-secondary to-template-primary"
    },
    {
      number: "03",
      icon: Mic,
      title: "Áudio e Narração",
      description: "Criando áudios profissionais usando inteligência artificial",
      lessons: ["IA para voz sintética", "Trilhas sonoras automáticas", "Mixing e masterização", "Sincronização de áudio"],
      duration: "1h 45min",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "04",
      icon: Palette,
      title: "Design e Estética", 
      description: "Elementos visuais que fazem seus vídeos se destacarem",
      lessons: ["Paleta de cores", "Tipografia para vídeos", "Transições criativas", "Efeitos visuais com IA"],
      duration: "2h 00min",
      color: "from-orange-500 to-red-500"
    },
    {
      number: "05",
      icon: Target,
      title: "Estratégia de Conteúdo",
      description: "Como criar vídeos que convertem e geram resultados",
      lessons: ["Análise de audiência", "Gatilhos mentais", "Funis de conversão", "Métricas importantes"],
      duration: "1h 30min",
      color: "from-indigo-500 to-purple-500"
    },
    {
      number: "06",
      icon: TrendingUp,
      title: "Distribuição e Growth",
      description: "Fazendo seus vídeos alcançarem milhares de pessoas",
      lessons: ["SEO para YouTube", "Algoritmos de redes sociais", "Thumbnails que convertem", "Timing de publicação"],
      duration: "2h 15min",
      color: "from-template-primary to-template-secondary"
    }
  ];

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
          <Badge variant="outline" className="mb-6 border-template-primary text-template-primary text-lg px-6 py-2">
            📚 Metodologia Completa
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">O método completo para criar</span>
            <br />
            <span className="bg-gradient-to-r from-template-primary to-template-secondary bg-clip-text text-transparent">
              vídeos com IA, do zero ao viral
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um currículo estruturado que te leva do básico ao avançado em criação de vídeos usando inteligência artificial
          </p>
        </div>

        {/* Modules Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-16">
          {modules.map((module, index) => (
            <Card 
              key={index}
              className="bg-dark-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Module Header */}
                <div className={`bg-gradient-to-r ${module.color} p-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <module.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-white/80 text-sm font-medium">Módulo {module.number}</div>
                        <h3 className="text-xl font-bold text-white">{module.title}</h3>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-white/80 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{module.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Module Content */}
                <div className="p-6">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  
                  {/* Lessons List */}
                  <div className="space-y-3">
                    <h4 className="text-foreground font-semibold mb-3">Você vai aprender:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats and CTA */}
        <div className="text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-template-primary mb-2">12h+</div>
              <div className="text-muted-foreground">de Conteúdo</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-muted-foreground">Vídeo Aulas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-template-primary mb-2">∞</div>
              <div className="text-muted-foreground">Acesso Vitalício</div>
            </div>
          </div>

          <Button 
            size="lg" 
            className="bg-gradient-primary hover:shadow-neon transition-all duration-300 text-lg px-12 py-4 rounded-full group"
          >
            QUERO DOMINAR O MÉTODO COMPLETO
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
