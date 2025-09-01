import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Camera, Lightbulb, Image, Palette, Layers, Gift } from "lucide-react";

const modules = [
  {
    icon: Camera,
    title: "Módulo Introdutório",
    items: [
      "Como tirar a foto perfeita com fundo branco",
      "Configuração das ferramentas de IA",
      "Primeiros passos com Nano Banana e Flux Context"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Palette,
    title: "Técnicas de Fundo",
    items: [
      "Superfícies e texturas profissionais",
      "Cores e paredes neutras",
      "Bases personalizadas para produtos"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: "Iluminação Profissional",
    items: [
      "Efeitos dramáticos e cinematográficos",
      "Tons quentes vs frios",
      "Iluminação neon moderna"
    ],
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Image,
    title: "Cenários Completos",
    items: [
      "Ambientes gastronômicos",
      "Contextos comerciais",
      "Cenários temáticos personalizados"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Layers,
    title: "Elementos e Composição",
    items: [
      "Adicionar utensílios e complementos",
      "Combinar múltiplas fotos",
      "Remover elementos indesejados",
      "Expandir imagens profissionalmente"
    ],
    color: "from-indigo-500 to-purple-500"
  }
];

const bonuses = [
  {
    title: "Guia Completo de Templates",
    description: "20+ prompts testados e aprovados com variáveis personalizáveis",
    icon: "📋"
  },
  {
    title: "Banco de 50+ Fundos",
    description: "Fundos profissionais para gastronomia, bijuteria, calçados e beleza",
    icon: "🎨"
  },
  {
    title: "Sistema Notion Completo",
    description: "Acesso total ao banco organizado por categorias",
    icon: "📊"
  }
];

const CourseContent = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-darker-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Conteúdo Completo do Curso
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para dominar a edição de produtos com IA
          </p>
        </div>

        {/* Course Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {modules.map((module, index) => (
            <Card 
              key={index}
              className="bg-dark-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card-custom group"
            >
              <CardHeader className="pb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${module.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <module.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {module.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {module.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bonuses */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
            <Gift className="inline w-8 h-8 mr-3 text-primary" />
            Bônus Exclusivos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bonuses.map((bonus, index) => (
              <Card 
                key={index}
                className="bg-gradient-secondary border border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-glow group"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{bonus.icon}</div>
                  <h4 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {bonus.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {bonus.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Transformation Examples */}
        <div className="bg-dark-card border border-border rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">
            Exemplos de Transformações que Você Vai Aprender
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Antes → Depois
              </Badge>
              <h4 className="font-semibold text-foreground mb-2">Alterar Cenário</h4>
              <p className="text-sm text-muted-foreground">Foto com fundo branco → Ambiente de cervejaria</p>
            </div>
            
            <div className="text-center">
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Técnica Avançada
              </Badge>
              <h4 className="font-semibold text-foreground mb-2">Alterar Iluminação</h4>
              <p className="text-sm text-muted-foreground">Iluminação básica → Efeito neon dramático</p>
            </div>
            
            <div className="text-center">
              <Badge variant="outline" className="mb-4 border-primary text-primary">
                Composição
              </Badge>
              <h4 className="font-semibold text-foreground mb-2">Adicionar Elementos</h4>
              <p className="text-sm text-muted-foreground">Produto isolado → Combo completo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseContent;
