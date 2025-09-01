import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { 
  Smartphone, 
  Monitor, 
  Tablet, 
  Download, 
  Star, 
  CheckCircle, 
  Play,
  Zap,
  Users,
  Trophy,
  Clock,
  Target
} from "lucide-react";
import Ferramenta600x400 from '@/assets/template-1/ferramenta_600x400.webp';
import Icone120x120 from '@/assets/template-1/icone_120x120.webp';
import Demo600x400 from '@/assets/template-1/demo_600x400.webp';

const ToolsSection = () => {
  const mainTool = {
    name: "CapCut Pro",
    logo: Icone120x120,
    description: "Editor profissional com IA integrada",
    rating: 4.8,
    downloads: "500M+",
    price: "Gratuito",
    features: [
      "IA para edição automática",
      "Efeitos cinematográficos",
      "Transições profissionais", 
      "Correção de cor avançada",
      "Sincronização de áudio",
      "Exportação em 4K"
    ],
    platforms: ["iOS", "Android", "Windows", "Mac"],
    difficulty: "Iniciante"
  };

  const alternativeTools = [
    {
      name: "DaVinci Resolve",
      logo: Icone120x120,
      type: "Profissional",
      price: "Gratuito",
      rating: 4.7,
      difficulty: "Avançado",
      specialty: "Correção de cor"
    },
    {
      name: "Adobe Premiere", 
      logo: Icone120x120,
      type: "Profissional",
      price: "Pago",
      rating: 4.5,
      difficulty: "Avançado",
      specialty: "Editor completo"
    },
    {
      name: "InShot",
      logo: Icone120x120,
      type: "Mobile",
      price: "Freemium",
      rating: 4.6,
      difficulty: "Fácil",
      specialty: "Edição rápida"
    },
    {
      name: "Final Cut Pro",
      logo: Icone120x120,
      type: "Mac Exclusivo",
      price: "Pago",
      rating: 4.8,
      difficulty: "Intermediário",
      specialty: "Performance"
    }
  ];

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "IA Automática",
      description: "Cortes inteligentes e transições sugeridas pela IA",
      benefit: "Economiza 80% do tempo"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Templates Virais",
      description: "Modelos pré-configurados para diferentes nichos",
      benefit: "Resultados garantidos"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunidade",
      description: "Acesso exclusivo ao grupo de criadores",
      benefit: "Suporte 24/7"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Certificação",
      description: "Certificado reconhecido no mercado",
      benefit: "Credibilidade profissional"
    }
  ];

  const stats = [
    { number: "500M+", label: "Downloads", icon: <Download className="w-5 h-5" /> },
    { number: "4.8★", label: "Avaliação", icon: <Star className="w-5 h-5" /> },
    { number: "150+", label: "Países", icon: <Users className="w-5 h-5" /> },
    { number: "24/7", label: "Suporte", icon: <Clock className="w-5 h-5" /> }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30 mb-6">
            Ferramentas Profissionais
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Domine as <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Melhores Ferramentas</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Aprenda a usar as ferramentas que os profissionais usam para criar conteúdo viral
          </p>
        </div>

        {/* Main Tool Showcase */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border border-blue-500/30 overflow-hidden">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Tool Info */}
                <div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-blue-500/30">
                      <img 
                        src={mainTool.logo}
                        alt={mainTool.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/placeholder-image.jpg';
                        }}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{mainTool.name}</h3>
                      <p className="text-blue-400">{mainTool.description}</p>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <div className="flex items-center justify-center space-x-1 mb-1 text-blue-400">
                          {stat.icon}
                          <span className="font-bold text-white">{stat.number}</span>
                        </div>
                        <div className="text-xs text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {mainTool.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Platforms */}
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-gray-400 text-sm">Disponível em:</span>
                    <div className="flex items-center space-x-3">
                      {mainTool.platforms.includes("iOS") && <Smartphone className="w-5 h-5 text-gray-400" />}
                      {mainTool.platforms.includes("Android") && <Smartphone className="w-5 h-5 text-gray-400" />}
                      {mainTool.platforms.includes("Windows") && <Monitor className="w-5 h-5 text-gray-400" />}
                      {mainTool.platforms.includes("Mac") && <Monitor className="w-5 h-5 text-gray-400" />}
                      <Tablet className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center space-x-4">
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700">
                      <Play className="w-5 h-5 mr-2" />
                      Ver Tutorial Completo
                    </Button>
                    <Badge className="bg-green-600/20 text-green-400 border-green-500/30 px-4 py-2">
                      {mainTool.price}
                    </Badge>
                  </div>
                </div>

                {/* Visual Demo */}
                <div className="relative">
                  <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden border border-blue-500/30">
                    <img 
                      src={Ferramenta600x400}
                      alt="Demo da ferramenta"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/placeholder-image.jpg';
                      }}
                    />
                    
                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating badges */}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-600/90 text-white">
                      ✨ IA Integrada
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-green-600/90 text-white">
                      4K Export
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alternative Tools */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Outras Ferramentas que Você Vai Dominar
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {alternativeTools.map((tool, index) => (
              <Card key={index} className="bg-gray-800/50 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden border border-blue-500/30">
                    <img 
                      src={tool.logo}
                      alt={tool.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/placeholder-image.jpg';
                      }}
                    />
                  </div>
                  
                  <h4 className="font-bold text-white mb-2">{tool.name}</h4>
                  
                  <div className="space-y-2 mb-4">
                    <Badge variant="outline" className="border-blue-500/30 text-blue-400 text-xs">
                      {tool.type}
                    </Badge>
                    <div className="flex items-center justify-center space-x-1 text-sm">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-white">{tool.rating}</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-gray-400 mb-3">
                    <div>💰 {tool.price}</div>
                    <div>📊 {tool.difficulty}</div>
                    <div>🎯 {tool.specialty}</div>
                  </div>
                  
                  <Button size="sm" variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-600/20 w-full">
                    Ver Aulas
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-800/50 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 text-center p-6">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full flex items-center justify-center text-blue-400">
                  {feature.icon}
                </div>
                <h4 className="font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{feature.description}</p>
                <Badge className="bg-green-600/20 text-green-400 border-green-500/30 text-xs">
                  {feature.benefit}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Domine Todas as Ferramentas em <span className="text-blue-400">30 Dias</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Do básico ao avançado, você vai sair editando como um profissional
            </p>
            
            <div className="flex items-center justify-center space-x-8 mb-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Certificação incluída</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-blue-400" />
                <span>Comunidade exclusiva</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <span>Acesso vitalício</span>
              </div>
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 hover:from-blue-700 hover:to-cyan-700">
              Começar Agora
              <Zap className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
