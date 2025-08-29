import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { Star, Play, Quote, ThumbsUp, TrendingUp, Users, MessageCircle, Heart } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Eduardo",
      role: "YouTuber",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      content: "Incrível! Em apenas 30 dias consegui criar vídeos que pareciam de estúdio. Meu canal cresceu 500% em 3 meses!",
      stats: {
        before: "2.3K subs",
        after: "47K subs",
        growth: "+1950%"
      },
      video: true,
      platform: "YouTube"
    },
    {
      name: "Marina Silva",
      role: "Empreendedora",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      content: "Revolucionou meu negócio! Agora crio conteúdo profissional sozinha. Economizei R$ 15.000 por mês em produção.",
      stats: {
        before: "R$ 8K/mês",
        after: "R$ 45K/mês", 
        growth: "+462%"
      },
      video: false,
      platform: "Instagram"
    },
    {
      name: "Lucas Gaming",
      role: "Streamer",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      content: "Meus clipes viraram tendência! A IA me ajudou a criar edições épicas que nunca conseguiria fazer sozinho.",
      stats: {
        before: "15K views",
        after: "2.8M views",
        growth: "+1866%"
      },
      video: true,
      platform: "TikTok"
    },
    {
      name: "Ana Beatriz",
      role: "Influencer",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      content: "Método simples e eficaz! Transformei meu conteúdo de básico para cinematográfico. Marcas me procuram agora!",
      stats: {
        before: "892 followers",
        after: "156K followers",
        growth: "+17400%"
      },
      video: false,
      platform: "Instagram"
    },
    {
      name: "Roberto Santos",
      role: "Professor Online",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      content: "Meus cursos ficaram profissionais! Estudantes elogiam a qualidade. Vendi 3x mais depois do curso.",
      stats: {
        before: "R$ 12K/mês",
        after: "R$ 38K/mês",
        growth: "+216%"
      },
      video: true,
      platform: "Udemy"
    },
    {
      name: "Patrícia Costa",
      role: "Designer",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
      rating: 5,
      content: "Fantástico! Agora ofereço serviços de vídeo também. Triplicou minha renda e abriu novos mercados.",
      stats: {
        before: "R$ 4K/mês",
        after: "R$ 14K/mês",
        growth: "+250%"
      },
      video: false,
      platform: "LinkedIn"
    }
  ];

  const socialProof = [
    {
      platform: "YouTube",
      icon: "🎥",
      metric: "2.4M+",
      description: "Visualizações geradas",
      color: "red"
    },
    {
      platform: "Instagram",
      icon: "📸",
      metric: "850K+",
      description: "Seguidores conquistados",
      color: "pink"
    },
    {
      platform: "TikTok",
      icon: "🎵",
      metric: "5.7M+",
      description: "Views nos vídeos",
      color: "purple"
    },
    {
      platform: "LinkedIn",
      icon: "💼",
      metric: "340K+",
      description: "Engajamento profissional",
      color: "blue"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-950 to-purple-950/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-green-600/20 text-green-400 border-green-500/30 mb-6">
            Casos de Sucesso
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            O Que Nossos <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Alunos Dizem</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Histórias reais de pessoas que transformaram seus resultados
          </p>
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {socialProof.map((item, index) => (
            <Card key={index} className="bg-gray-800/50 border border-purple-500/30 text-center p-6 hover:border-purple-400/50 transition-colors">
              <CardContent className="p-0">
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-2xl font-bold text-white mb-1">{item.metric}</div>
                <div className="text-sm text-gray-400">{item.description}</div>
                <div className="text-xs text-purple-400 mt-2 uppercase tracking-wide">{item.platform}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800/50 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 group">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img 
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = `https://picsum.photos/80/80?random=${3000 + index}`;
                        }}
                      />
                      {testimonial.video && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                          <Play className="w-3 h-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 text-xs">
                    {testimonial.platform}
                  </Badge>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-gray-400 ml-2">({testimonial.rating}.0)</span>
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-purple-400/30 absolute -top-2 -left-2" />
                  <p className="text-gray-300 italic pl-4">
                    "{testimonial.content}"
                  </p>
                </div>

                {/* Stats */}
                <div className="bg-gray-900/50 rounded-lg p-4 border border-purple-500/20">
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-xs text-gray-400 mb-1">ANTES</div>
                      <div className="text-sm font-bold text-red-400">{testimonial.stats.before}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">DEPOIS</div>
                      <div className="text-sm font-bold text-green-400">{testimonial.stats.after}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-1">CRESCIMENTO</div>
                      <div className="text-sm font-bold text-purple-400 flex items-center justify-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {testimonial.stats.growth}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between mt-4">
                  {testimonial.video ? (
                    <Button size="sm" variant="outline" className="border-purple-500/30 text-purple-400 hover:bg-purple-600/20">
                      <Play className="w-3 h-3 mr-1" />
                      Ver vídeo
                    </Button>
                  ) : (
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Heart className="w-4 h-4" />
                      <span>247 curtidas</span>
                    </div>
                  )}
                  
                  <div className="flex items-center space-x-3 text-gray-400">
                    <ThumbsUp className="w-4 h-4" />
                    <MessageCircle className="w-4 h-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Junte-se a Mais de <span className="text-purple-400">12.847</span> Criadores de Sucesso
            </h3>
            <p className="text-gray-400 mb-6">
              Seja o próximo caso de sucesso! Comece sua transformação hoje mesmo.
            </p>
            
            {/* Trust indicators */}
            <div className="flex items-center justify-center space-x-8 mb-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-green-400" />
                <span>12.847+ alunos ativos</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span>4.9/5 avaliação média</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-purple-400" />
                <span>94% taxa de sucesso</span>
              </div>
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 hover:from-purple-700 hover:to-pink-700">
              Quero Ser o Próximo Caso de Sucesso
              <TrendingUp className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
