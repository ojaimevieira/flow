import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Separator } from "@/shared/ui/separator";
import { useEffect, useMemo, useRef, useState } from "react";
import { 
  Camera, 
  Sparkles, 
  Zap, 
  Target, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  TrendingUp,
  Palette,
  Image,
  Wand2,
  DollarSign,
  Timer,
  UserCheck,
  AlertTriangle,
  Gift
} from "lucide-react";

// Import components
import HeroSection from "../components/HeroSection";
import PainsSection from "../components/PainsSection";
import SolutionSection from "../components/SolutionSection";
import GallerySection from "../components/GallerySection";

const EdicaoImagensIALanding = () => {
  const sections = useMemo(
    () => [
      { id: "hero", label: "Hero" },
      { id: "pains", label: "Pains" },
      { id: "solution", label: "Solution" },
      { id: "gallery", label: "Gallery" },
      { id: "curriculum", label: "Curriculum" },
      { id: "offer", label: "Offer" },
      { id: "timeline", label: "Timeline" },
      { id: "audience", label: "Audience" },
      { id: "cta", label: "CTA" },
    ],
    []
  );

  const [activeId, setActiveId] = useState<string>("hero");
  const [visible, setVisible] = useState<Record<string, boolean>>({});
  const heroParallaxRef = useRef<HTMLDivElement | null>(null);
  const heroBlobARef = useRef<HTMLDivElement | null>(null);
  const heroBlobBRef = useRef<HTMLDivElement | null>(null);

  // Scrollspy + reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (!id) return;
          if (entry.isIntersecting) {
            setActiveId(id);
            setVisible((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { root: null, threshold: 0.35 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  // Hero parallax (motion-safe)
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const a = heroBlobARef.current;
        const b = heroBlobBRef.current;
        // small offsets
        if (a) a.style.transform = `translateY(${y * 0.06}px)`;
        if (b) b.style.transform = `translateY(${y * -0.04}px)`;
        raf = 0;
      });
    };

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!media.matches) {
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-darker-bg via-background to-dark-card text-foreground scroll-smooth">
      {/* Sticky section nav */}
      <div className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-background/50 bg-background/80 border-b border-border">
        <nav className="container mx-auto px-6 py-3 overflow-x-auto">
          <ul className="flex items-center gap-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={
                    "px-3 py-1.5 rounded-full text-sm transition-colors border " +
                    (activeId === s.id
                      ? "bg-gradient-to-r from-primary/20 to-accent/20 border-primary/40 text-primary"
                      : "bg-dark-card/40 hover:bg-dark-card/60 border-border text-muted-foreground hover:text-foreground")
                  }
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="container mx-auto px-6 py-12 space-y-16">
        {/* Hero */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-darker-bg via-background to-dark-card">
            <div ref={heroBlobARef} className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl will-change-transform motion-safe:animate-pulse" />
            <div ref={heroBlobBRef} className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-2xl will-change-transform motion-safe:animate-pulse" />
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-neon-pink/10 rounded-full blur-xl motion-safe:animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative z-10 container mx-auto px-6 text-center space-y-8">
            <Badge variant="outline" className="mb-6 border-primary text-primary text-lg px-6 py-2 motion-safe:animate-bounce">
              <Sparkles className="w-4 h-4 mr-2" />
              Hero
            </Badge>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-primary via-accent to-neon-pink bg-clip-text text-transparent">
                Edição de Produtos
              </span>
            </h1>
            
            <h2 className="text-xl md:text-3xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Transforme uma simples foto com fundo branco em cenários profissionais
            </h2>

            <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground mt-8">
              <div className="flex items-center space-x-2">
                <Camera className="w-4 h-4 text-primary" />
                <span>Sem Fotógrafo</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wand2 className="w-4 h-4 text-accent" />
                <span>Powered by IA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-neon-pink" />
                <span>Resultados Instantâneos</span>
              </div>
            </div>

            {/* Promessa Principal - Card destacado */}
            <div className="max-w-3xl mx-auto mt-12">
              <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                    <Target className="w-6 h-6 text-primary" />
                    <Badge variant="outline" className="border-primary/40 text-primary text-lg px-4 py-1">
                      Promessa Principal
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg leading-relaxed">
                    Aprenda a criar cenários profissionais para seus produtos usando apenas uma foto com fundo branco e IA. Sem fotógrafo, sem estúdio, sem cenários físicos.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Hero */}
            <div className="pt-8">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 text-lg shadow-2xl hover:shadow-neon transition-all duration-300 hover:scale-105">
                <ArrowRight className="w-5 h-5 mr-2" />
                Começar Agora
              </Button>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 motion-safe:animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 motion-safe:animate-pulse"></div>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* Pains */}
        <section id="pains" className="py-20" data-animate>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 border-red-500/40 text-red-400 text-lg px-6 py-2">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Pains
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  Problemas Que Você Enfrenta
                </span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-red-500/60 to-red-300/60 rounded-full mx-auto" />
            </div>

            <div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700"
              style={{
                opacity: visible["pains"] ? 1 : 0,
                transform: visible["pains"] ? "translateY(0px)" : "translateY(40px)",
              }}
            >
              {[
                { icon: DollarSign, text: "Gastar fortunas com fotógrafos e estúdios" },
                { icon: Clock, text: "Perder tempo organizando sessões fotográficas" },
                { icon: TrendingUp, text: "Ter fotos amadoras que não convertem em vendas" },
                { icon: Target, text: "Depender de espaços e equipamentos caros" },
                { icon: Zap, text: "Limitações criativas por falta de recursos" },
                { icon: Star, text: "Ver seus produtos não renderem como merecem" },
              ].map((item, i) => (
                <Card key={i} className="bg-dark-card/60 border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:shadow-2xl group">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-8 h-8 text-red-400" />
                    </div>
                    <p className="text-foreground leading-relaxed">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* Solution */}
        <section id="solution" className="py-20 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5" data-animate>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 border-emerald-500/40 text-emerald-400 text-lg px-6 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Solution
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  A Solução Definitiva
                </span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-emerald-500/60 to-cyan-400/60 rounded-full mx-auto" />
            </div>

            <div 
              className="max-w-4xl mx-auto transition-all duration-700"
              style={{
                opacity: visible["solution"] ? 1 : 0,
                transform: visible["solution"] ? "translateY(0px)" : "translateY(40px)",
              }}
            >
              <Card className="bg-dark-card/60 border-emerald-500/30 shadow-2xl mb-12">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                        <p className="text-lg">Método: Foto com fundo branco + IA = cenários profissionais</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                        <p className="text-lg">Tecnologia: Nano Banana (Google) + Flux Context</p>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div className="w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full flex items-center justify-center">
                        <Wand2 className="w-16 h-16 text-emerald-400" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4">Resultados comprovados</h3>
                <p className="text-lg text-muted-foreground">Veja as transformações reais feitas no curso.</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* Gallery */}
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
              {[
                { 
                  title: "Exemplo 1: Alteração de Cenário — Template \"Balcão Heineken\"",
                  gradient: "from-blue-500/20 to-blue-700/20",
                  icon: Palette,
                  color: "blue"
                },
                { 
                  title: "Exemplo 2: Efeito de Iluminação — Template \"Neon Dramático\"",
                  gradient: "from-purple-500/20 to-pink-500/20",
                  icon: Zap,
                  color: "purple"
                },
                { 
                  title: "Exemplo 3: Adição de Elementos — Template \"Combo Hambúrguer Rústico\"",
                  gradient: "from-orange-500/20 to-red-500/20",
                  icon: Target,
                  color: "orange"
                },
                { 
                  title: "Exemplo 4: Mudança de Superfície — Template \"Superfície Granito\"",
                  gradient: "from-gray-500/20 to-zinc-500/20",
                  icon: Image,
                  color: "gray"
                },
              ].map((item, i) => (
                <Card key={i} className="bg-dark-card/60 border-primary/30 overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:scale-105">
                  <div className={`aspect-video bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                    {/* Before/After effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    
                    {/* Icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                        <item.icon className="w-10 h-10 text-white/80" />
                      </div>
                    </div>

                    {/* Corner badge */}
                    <div className="absolute top-4 right-4">
                      <Badge className={`bg-${item.color}-500/80 text-white border-none`}>
                        Antes → Depois
                      </Badge>
                    </div>
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

        <hr className="border-border" />

        {/* Curriculum */}
        <section id="curriculum" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5" data-animate>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 border-primary text-primary text-lg px-6 py-2">
                <CheckCircle className="w-4 h-4 mr-2" />
                Curriculum
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Conteúdo Completo do Curso
                </span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-primary/60 to-accent/60 rounded-full mx-auto" />
            </div>

            <div 
              className="space-y-16 transition-all duration-700"
              style={{ 
                opacity: visible["curriculum"] ? 1 : 0, 
                transform: visible["curriculum"] ? "translateY(0px)" : "translateY(40px)" 
              }}
            >
              {/* Tabela de conteúdo destacada */}
              <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-semibold mb-8 text-center">Conteúdo do curso</h3>
                <Card className="bg-dark-card/60 border-primary/20 shadow-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gradient-to-r from-primary/20 to-accent/20">
                          <tr>
                            <th className="px-6 py-4 text-left font-semibold">Antes</th>
                            <th className="px-6 py-4 text-left font-semibold">Depois</th>
                            <th className="px-6 py-4 text-left font-semibold">Técnica</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          <tr className="hover:bg-primary/5 transition-colors">
                            <td className="px-6 py-4">Foto com fundo branco</td>
                            <td className="px-6 py-4">Ambiente de cervejaria</td>
                            <td className="px-6 py-4">
                              <Badge className="bg-blue-500/20 text-blue-400 border-blue-400/30">
                                Alterar Cenário
                              </Badge>
                            </td>
                          </tr>
                          <tr className="hover:bg-primary/5 transition-colors">
                            <td className="px-6 py-4">Iluminação básica</td>
                            <td className="px-6 py-4">Neon dramático</td>
                            <td className="px-6 py-4">
                              <Badge className="bg-purple-500/20 text-purple-400 border-purple-400/30">
                                Alterar Iluminação
                              </Badge>
                            </td>
                          </tr>
                          <tr className="hover:bg-primary/5 transition-colors">
                            <td className="px-6 py-4">Produto isolado</td>
                            <td className="px-6 py-4">Combo completo</td>
                            <td className="px-6 py-4">
                              <Badge className="bg-green-500/20 text-green-400 border-green-400/30">
                                Adicionar Elementos
                              </Badge>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Módulos em grid */}
              <div className="grid md:grid-cols-3 gap-8">
                {/* Módulo Introdutório */}
                <Card className="bg-dark-card/60 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      Módulo introdutório
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Foto perfeita com fundo branco</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Configuração das ferramentas de IA</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>Primeiros passos com Nano Banana e Flux Context</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Técnicas */}
                <Card className="bg-dark-card/60 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-neon-pink/20 rounded-full flex items-center justify-center">
                        <span className="text-accent font-bold">2</span>
                      </div>
                      Técnicas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      {[
                        "Superfícies e texturas", "Cores e paredes", "Bases para produtos",
                        "Efeitos dramáticos", "Tons quentes vs frios", "Iluminação neon",
                        "Ambientes gastronômicos", "Contextos comerciais", "Cenários temáticos",
                        "Adicionar e remover elementos", "Expandir imagens"
                      ].map((technique, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span>{technique}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Bônus */}
                <Card className="bg-dark-card/60 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <div className="w-10 h-10 bg-gradient-to-br from-neon-pink/20 to-primary/20 rounded-full flex items-center justify-center">
                        <Gift className="w-5 h-5 text-neon-pink" />
                      </div>
                      Bônus
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span>Guia de Templates: 20+ prompts com variáveis</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span>Banco de 50+ Fundos</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <Star className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <span>Sistema Notion completo</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-border" />

        {/* Offer */}
        <section id="offer" className="py-20" data-animate>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 border-yellow-500/40 text-yellow-400 text-lg px-6 py-2">
                <DollarSign className="w-4 h-4 mr-2" />
                Offer
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  Oferta Especial
                </span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-yellow-500/60 to-orange-500/60 rounded-full mx-auto" />
            </div>

            <div 
              className="max-w-4xl mx-auto transition-all duration-700"
              style={{ 
                opacity: visible["offer"] ? 1 : 0, 
                transform: visible["offer"] ? "translateY(0px)" : "translateY(40px)" 
              }}
            >
              {/* Preço principal em destaque */}
              <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/30 shadow-2xl mb-12 overflow-hidden relative">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-red-500 to-red-600 text-white px-6 py-2 rounded-bl-lg">
                  <span className="font-bold text-sm">ECONOMIA R$ 250</span>
                </div>
                <CardContent className="p-8 text-center">
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">De</p>
                        <p className="text-2xl line-through text-muted-foreground">R$ 297,00</p>
                      </div>
                      <div className="text-6xl font-bold">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                          R$ 47
                        </span>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Valor atual</p>
                        <Badge className="bg-green-500 text-white">84% OFF</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {[
                      { icon: CheckCircle, text: "Acesso vitalício completo" },
                      { icon: Star, text: "Todos os módulos + bônus" },
                      { icon: Users, text: "Suporte incluído" },
                      { icon: TrendingUp, text: "Updates gratuitos" },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <item.icon className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* ROI Arguments */}
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-semibold">Por que vale a pena</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { 
                      icon: DollarSign, 
                      title: "R$ 500–1500", 
                      subtitle: "Uma sessão fotográfica custa em média" 
                    },
                    { 
                      icon: Zap, 
                      title: "1ª foto editada", 
                      subtitle: "O curso se paga com a primeira foto editada" 
                    },
                    { 
                      icon: TrendingUp, 
                      title: "ROI imediato", 
                      subtitle: "ROI imediato para qualquer produto" 
                    },
                  ].map((item, i) => (
                    <Card key={i} className="bg-dark-card/40 border-primary/20 p-6 text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-lg text-primary mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>        <hr className="border-border" />

        {/* Timeline */}
        <section id="timeline" className="py-20 bg-gradient-to-br from-blue-500/5 to-indigo-500/5" data-animate>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 border-blue-500/40 text-blue-400 text-lg px-6 py-2">
                <Clock className="w-4 h-4 mr-2" />
                Timeline
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Cronograma do Dia
                </span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500/60 to-indigo-500/60 rounded-full mx-auto" />
            </div>

            <div 
              className="max-w-4xl mx-auto transition-all duration-700"
              style={{ 
                opacity: visible["timeline"] ? 1 : 0, 
                transform: visible["timeline"] ? "translateY(0px)" : "translateY(40px)" 
              }}
            >
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    period: "Manhã",
                    activity: "Gravação das aulas + materiais",
                    duration: "4h",
                    icon: Camera,
                    color: "from-yellow-400 to-orange-400",
                    time: "08:00 - 12:00"
                  },
                  {
                    period: "Tarde",
                    activity: "Landing page + plataforma",
                    duration: "4h",
                    icon: Target,
                    color: "from-blue-400 to-cyan-400",
                    time: "13:00 - 17:00"
                  },
                  {
                    period: "Noite",
                    activity: "Testes + lançamento",
                    duration: "2h",
                    icon: Zap,
                    color: "from-purple-400 to-pink-400",
                    time: "19:00 - 21:00"
                  },
                ].map((item, i) => (
                  <Card key={i} className="bg-dark-card/60 border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl relative overflow-hidden">
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`} />
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${item.color} bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.period}</h3>
                      <p className="text-sm text-blue-400 mb-4">{item.time}</p>
                      <p className="text-foreground mb-4">{item.activity}</p>
                      <Badge className={`bg-gradient-to-r ${item.color} text-white border-none`}>
                        {item.duration}
                      </Badge>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Audience */}
        <section id="audience" className="py-20" data-animate>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 border-green-500/40 text-green-400 text-lg px-6 py-2">
                <UserCheck className="w-4 h-4 mr-2" />
                Audience
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  É Para Você?
                </span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-500/60 to-emerald-500/60 rounded-full mx-auto" />
            </div>

            <div 
              className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto transition-all duration-700"
              style={{ 
                opacity: visible["audience"] ? 1 : 0, 
                transform: visible["audience"] ? "translateY(0px)" : "translateY(40px)" 
              }}
            >
              {/* Perfeito para você */}
              <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-green-400">
                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                    </div>
                    Perfeito para você se
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      "Vende produtos físicos",
                      "Quer fotos profissionais gastando pouco",
                      "Precisa de vários cenários",
                      "Quer autonomia",
                      "Busca resultados rápidos"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Não é para você */}
              <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-2xl text-red-400">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-6 h-6 text-red-400" />
                    </div>
                    Não é para você se
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      "Tem orçamento ilimitado para fotografia",
                      "Não trabalha com produtos visuais",
                      "Quer apenas teoria",
                      "Não quer usar IA"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <AlertTriangle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Urgency */}
        <section id="urgency" className="py-20 bg-gradient-to-br from-red-500/10 to-orange-500/10" data-animate>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-6 border-red-500/40 text-red-400 text-lg px-6 py-2">
                <Timer className="w-4 h-4 mr-2" />
                Urgency
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Últimas Horas!
                </span>
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-red-500/60 to-orange-500/60 rounded-full mx-auto" />
            </div>

            <Card 
              className="max-w-3xl mx-auto bg-gradient-to-br from-red-500/20 to-orange-500/20 border-red-500/30 shadow-2xl transition-all duration-700"
              style={{ 
                opacity: visible["urgency"] ? 1 : 0, 
                transform: visible["urgency"] ? "translateY(0px)" : "translateY(40px)" 
              }}
            >
              <CardContent className="p-8 text-center">
                <div className="space-y-6">
                  <div className="flex items-center justify-center space-x-4 text-xl">
                    <Timer className="w-8 h-8 text-red-400 motion-safe:animate-pulse" />
                    <span className="font-bold">Últimas horas</span>
                    <Timer className="w-8 h-8 text-red-400 motion-safe:animate-pulse" />
                  </div>
                  
                  <div className="text-2xl font-bold">
                    <span className="text-red-400">Primeiros 100 alunos</span>
                    <span className="text-foreground"> por </span>
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">R$ 47</span>
                  </div>
                  
                  <div className="text-lg text-muted-foreground">
                    Depois volta para <span className="line-through">R$ 297</span>
                  </div>

                  <div className="flex items-center justify-center space-x-2 mt-6">
                    <div className="w-3 h-3 bg-red-400 rounded-full motion-safe:animate-pulse"></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full motion-safe:animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="w-3 h-3 bg-red-400 rounded-full motion-safe:animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <hr className="border-border" />

        {/* CTA */}
        <section id="cta" className="py-20 bg-gradient-to-br from-primary/10 to-accent/10" data-animate>
          <div className="container mx-auto px-6 text-center">
            <Badge variant="outline" className="mb-6 border-primary text-primary text-lg px-6 py-2">
              <Gift className="w-4 h-4 mr-2" />
              CTA
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Hora de Transformar Seus Produtos
              </span>
            </h2>

            <Card 
              className="max-w-2xl mx-auto bg-dark-card/60 border-primary/20 shadow-2xl transition-all duration-700"
              style={{ 
                opacity: visible["cta"] ? 1 : 0, 
                transform: visible["cta"] ? "translateY(0px)" : "translateY(40px)" 
              }}
            >
              <CardContent className="p-8 space-y-6">
                <p className="text-xl">Garanta sua vaga agora</p>
                
                <div className="space-y-4">
                  <a 
                    href="https://seu-link-de-checkout.com" 
                    className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-md w-full"
                  >
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-primary to-accent text-white px-8 py-6 text-xl shadow-2xl hover:shadow-neon transition-all duration-300 hover:scale-105"
                    >
                      <ArrowRight className="w-6 h-6 mr-3" />
                      Comprar agora
                      <Sparkles className="w-6 h-6 ml-3" />
                    </Button>
                  </a>
                  
                  <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Acesso Imediato</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Garantia 30 dias</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>Suporte incluído</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
};

export default EdicaoImagensIALanding;
