import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { 
  PlayCircle, 
  Clock, 
  CheckCircle, 
  Star,
  Download,
  Users,
  Zap,
  Video,
  Palette,
  Music,
  Scissors,
  Sparkles,
  Target,
  TrendingUp,
  Globe,
  Smartphone,
  Monitor
} from "lucide-react";

const CurriculumSection = () => {
  const modules = [
    {
      title: "Módulo 1: Fundamentos da IA",
      duration: "2h 30min",
      lessons: 8,
      level: "Iniciante",
      icon: Sparkles,
      color: "from-blue-500 to-cyan-500",
      topics: [
        "Introdução à edição com IA",
        "Configuração das ferramentas",
        "Primeiros passos práticos",
        "Interface e navegação",
        "Tipos de projeto",
        "Qualidade e resolução",
        "Exportação básica",
        "Erros comuns e soluções"
      ]
    },
    {
      title: "Módulo 2: Cortes Inteligentes",
      duration: "3h 15min", 
      lessons: 12,
      level: "Iniciante",
      icon: Scissors,
      color: "from-purple-500 to-pink-500",
      topics: [
        "IA para cortes automáticos",
        "Detecção de momentos importantes",
        "Remoção de pausas e hesitações",
        "Cortes dinâmicos",
        "Transições automáticas",
        "Timing perfeito",
        "Cortes por palavras-chave",
        "Otimização para redes sociais",
        "Cortes por emoção",
        "Jump cuts profissionais",
        "Multicâmera com IA",
        "Correção de erros"
      ]
    },
    {
      title: "Módulo 3: Efeitos Visuais",
      duration: "4h 20min",
      lessons: 15,
      level: "Intermediário", 
      icon: Palette,
      color: "from-green-500 to-emerald-500",
      topics: [
        "Filtros automáticos",
        "Correção de cor com IA",
        "Estabilização inteligente",
        "Remoção de fundo",
        "Efeitos de movimento",
        "Slow motion e time-lapse",
        "Partículas e elementos gráficos",
        "Text overlays dinâmicos",
        "Zoom e enquadramento automático",
        "Detecção facial",
        "Tracking de objetos",
        "Composição avançada",
        "Correção de iluminação",
        "Efeitos sazonais",
        "Templates personalizados"
      ]
    },
    {
      title: "Módulo 4: Áudio Profissional",
      duration: "2h 45min",
      lessons: 10,
      level: "Intermediário",
      icon: Music,
      color: "from-yellow-500 to-orange-500",
      topics: [
        "Limpeza de áudio com IA",
        "Remoção de ruído",
        "Equalização automática",
        "Trilha sonora inteligente",
        "Sincronização automática",
        "Voiceover com IA",
        "Efeitos sonoros",
        "Mixagem profissional",
        "Compressão dinâmica",
        "Audio ducking automático"
      ]
    },
    {
      title: "Módulo 5: Storytelling com IA", 
      duration: "3h 40min",
      lessons: 13,
      level: "Avançado",
      icon: Target,
      color: "from-red-500 to-pink-500",
      topics: [
        "Estrutura narrativa automática",
        "Detecção de momentos emocionais",
        "Criação de gancho",
        "Ritmo e timing",
        "Clímax e resolução",
        "Storytelling para vendas",
        "Engagement automático",
        "Call-to-action inteligente",
        "Análise de performance",
        "Otimização por audiência",
        "A/B testing automático",
        "Métricas de engajamento",
        "Retenção de audiência"
      ]
    },
    {
      title: "Módulo 6: Redes Sociais",
      duration: "5h 10min",
      lessons: 18,
      level: "Avançado",
      icon: Smartphone,
      color: "from-indigo-500 to-purple-500",
      topics: [
        "Formatos para cada rede",
        "Instagram Reels automático",
        "TikTok viral",
        "YouTube Shorts",
        "LinkedIn profissional",
        "Facebook otimizado",
        "Twitter/X dinâmico",
        "Pinterest atrativo",
        "WhatsApp Status",
        "Stories automáticos",
        "Thumbnails com IA",
        "Legendas automáticas",
        "Hashtags inteligentes",
        "Agendamento otimizado",
        "Cross-platform",
        "Analytics integrado",
        "Tendências automáticas",
        "Viral scoring"
      ]
    },
    {
      title: "Módulo 7: Monetização",
      duration: "2h 20min",
      lessons: 9,
      level: "Avançado",
      icon: TrendingUp,
      color: "from-emerald-500 to-teal-500",
      topics: [
        "Vídeos que vendem",
        "Funil de vendas visual",
        "Vídeo marketing",
        "Depoimentos automáticos",
        "Product placement",
        "Affiliate marketing",
        "Curso online em vídeo",
        "Serviços de edição",
        "Licenciamento de conteúdo"
      ]
    },
    {
      title: "Módulo 8: Automação Total",
      duration: "3h 55min",
      lessons: 14,
      level: "Expert",
      icon: Zap,
      color: "from-violet-500 to-purple-500",
      topics: [
        "Workflows automáticos",
        "Batch processing",
        "Templates inteligentes",
        "API integrations",
        "Triggers automáticos",
        "Cloud processing",
        "Renderização remota",
        "Backup automático",
        "Versionamento inteligente",
        "Colaboração em tempo real",
        "Aprovação automática",
        "Distribuição multi-canal",
        "Relatórios automáticos",
        "Otimização contínua"
      ]
    }
  ];

  const bonuses = [
    {
      title: "Banco de Templates Premium",
      description: "500+ templates profissionais para todos os nichos",
      icon: Download,
      value: "R$ 997"
    },
    {
      title: "Música e Efeitos Livres",
      description: "Biblioteca com 10.000+ áudios sem copyright",
      icon: Music,
      value: "R$ 497"
    },
    {
      title: "Comunidade VIP",
      description: "Acesso vitalício ao grupo exclusivo de alunos",
      icon: Users,
      value: "R$ 297"
    },
    {
      title: "Atualizações Vitalícias",
      description: "Todas as futuras atualizações e novos módulos",
      icon: Star,
      value: "R$ 697"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 mb-6">
            Conteúdo Completo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Currículo Completo</span>
            <br />do Curso
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            8 módulos completos + 4 bônus exclusivos. Mais de 25 horas de conteúdo prático
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">8</div>
              <div className="text-sm text-gray-400">Módulos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">99</div>
              <div className="text-sm text-gray-400">Aulas</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">25h</div>
              <div className="text-sm text-gray-400">Conteúdo</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4</div>
              <div className="text-sm text-gray-400">Bônus</div>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {modules.map((module, index) => (
            <Card key={index} className="bg-gray-800/50 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-xl flex items-center justify-center`}>
                      <module.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-white text-lg">{module.title}</CardTitle>
                      <div className="flex items-center space-x-4 mt-1">
                        <div className="flex items-center space-x-1 text-gray-400 text-sm">
                          <Clock className="w-4 h-4" />
                          <span>{module.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-400 text-sm">
                          <PlayCircle className="w-4 h-4" />
                          <span>{module.lessons} aulas</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Badge className={`bg-gradient-to-r ${module.color} bg-opacity-20 text-white border-0 text-xs`}>
                    {module.level}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {module.topics.map((topic, topicIndex) => (
                    <div key={topicIndex} className="flex items-center space-x-2 text-gray-400 text-sm">
                      <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bonuses Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bônus <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Exclusivos</span>
            </h3>
            <p className="text-gray-400 text-lg">
              Valor total dos bônus: <span className="text-white font-bold">R$ 2.488</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonuses.map((bonus, index) => (
              <Card key={index} className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-purple-500/50 hover:border-purple-400/70 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
                    <bonus.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{bonus.title}</h4>
                  <p className="text-gray-400 text-sm mb-4">{bonus.description}</p>
                  <Badge className="bg-green-600/20 text-green-400 border-green-500/30">
                    Valor: {bonus.value}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-8 border border-purple-500/30">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Valor Total do Curso: <span className="text-purple-400">Mais de R$ 15.000</span>
            </h3>
            <p className="text-gray-400 text-lg mb-6">
              Conteúdo equivalente a uma faculdade inteira de audiovisual
            </p>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg font-semibold">
              <PlayCircle className="w-5 h-5 mr-2" />
              Ver Prévia das Aulas
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
