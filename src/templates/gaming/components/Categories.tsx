import { Palette, Zap, Megaphone } from "lucide-react";

const Categories = () => {
  const categories = [
    {
      id: 1,
      icon: <Palette className="w-8 h-8" />,
      title: "Design",
      description: "Os melhores sites e aplicativos para você dominar o Design para o seu negócio.",
      gradient: "from-pink-500 to-rose-500",
      borderGradient: "border-pink-500/30",
      shadowColor: "shadow-pink-500/20"
    },
    {
      id: 2,
      icon: <Zap className="w-8 h-8" />,
      title: "Produtividade",
      description: "Tenha uma rotina muito mais produtiva. Não perca mais tempo no seu dia.",
      gradient: "from-purple-500 to-violet-500",
      borderGradient: "border-purple-500/30",
      shadowColor: "shadow-purple-500/20"
    },
    {
      id: 3,
      icon: <Megaphone className="w-8 h-8" />,
      title: "Marketing Digital",
      description: "Os melhores sites e aplicativos para você dominar o Design para o seu negócio.",
      gradient: "from-pink-500 to-rose-500",
      borderGradient: "border-pink-500/30",
      shadowColor: "shadow-pink-500/20"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-darker-bg to-dark-card relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-10 w-32 h-32 bg-gradient-primary rounded-full blur-3xl opacity-10 animate-float" />
        <div className="absolute bottom-1/3 right-10 w-24 h-24 bg-gradient-primary rounded-full blur-2xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-gradient-primary rounded-full text-sm font-medium text-white mb-6 shadow-glow">
            CATEGORIAS
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Você terá acesso às seguintes</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              categorias de ferramentas
            </span>
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`group relative bg-dark-card border ${category.borderGradient} rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-2xl ${category.shadowColor} overflow-hidden cursor-pointer`}
            >
              {/* Card Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              
              {/* Icon Container */}
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {category.description}
                </p>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-dark-card via-card to-dark-card border border-border rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Todas as ferramentas em <span className="text-primary">um só lugar</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-6">
              Economize tempo e dinheiro tendo acesso a centenas de ferramentas organizadas por categoria para impulsionar seu negócio.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Atualizações constantes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span>Suporte especializado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
