import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { ExternalLink, Eye, Code, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { TEMPLATES } from "@/data/templates";

const Showcase = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-darker-bg via-background to-dark-card">
      {/* Header */}
      <header className="relative overflow-hidden py-20">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <Badge variant="outline" className="mb-6 border-primary text-primary text-lg px-6 py-2">
            <Palette className="w-4 h-4 mr-2" />
            Template Showcase
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-accent to-neon-pink bg-clip-text text-transparent">
              Landing Pages
            </span>
            <br />
            <span className="text-foreground">Collection</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore nossa coleção de templates de landing pages criados com React, TypeScript e Tailwind CSS. 
            Cada template é único e otimizado para diferentes nichos e objetivos.
          </p>

          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Code className="w-4 h-4 text-primary" />
              <span>React + TypeScript</span>
            </div>
            <div className="flex items-center space-x-2">
              <Palette className="w-4 h-4 text-accent" />
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="w-4 h-4 text-neon-pink" />
              <span>Responsivo</span>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {TEMPLATES.map((template) => (
              <Card 
                key={template.id} 
                className="bg-dark-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group overflow-hidden"
              >
                <div className="relative">
                  {/* Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                    <img 
                      src={template.thumb}
                      alt={`Preview de ${template.name}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        // Fallback para gradiente se imagem não carregar
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="absolute inset-0 bg-gradient-to-r ${template.color} opacity-20"></div>
                            <div class="absolute inset-0 flex items-center justify-center">
                              <div class="text-center space-y-2">
                                <svg class="w-12 h-12 text-white/80 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                </svg>
                                <p class="text-white/60 text-sm">Preview em breve</p>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${template.color} opacity-20`} />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 right-4">
                      <Badge 
                        variant={template.status === 'Novo' ? 'default' : 'secondary'}
                        className={template.status === 'Novo' ? 'bg-green-500 hover:bg-green-600' : ''}
                      >
                        {template.status}
                      </Badge>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button 
                      size="lg" 
                      className="bg-gradient-primary hover:shadow-neon"
                      onClick={() => window.open(template.href, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Página
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {template.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {template.name}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {template.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {template.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="text-xs bg-primary/10 text-primary border-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/30 text-primary hover:bg-primary/10 hover:shadow-glow transition-all duration-300 group"
                    onClick={() => window.open(template.href, '_blank')}
                  >
                    <Eye className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Visualizar Template
                  </Button>
                </CardContent>
              </Card>
            ))}

            {/* Add New Card */}
            <Card className="bg-dark-card/50 border-2 border-dashed border-primary/30 hover:border-primary/50 transition-all duration-300 hover:bg-dark-card/70 group cursor-pointer">
              <CardContent className="h-full flex items-center justify-center py-16">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Próximo Template
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Em desenvolvimento...
                  </p>
                  <Badge variant="outline" className="border-primary/50 text-primary">
                    Em breve
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">{TEMPLATES.length}</div>
              <div className="text-muted-foreground">Templates Ativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <div className="text-muted-foreground">Responsivos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neon-pink mb-2">React</div>
              <div className="text-muted-foreground">Tecnologia</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">∞</div>
              <div className="text-muted-foreground">Possibilidades</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
