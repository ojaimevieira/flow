import { Card, CardContent } from "@/shared/ui/card";
import { Avatar, AvatarFallback } from "@/shared/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marina Santos",
    role: "Confeiteira",
    content: "Transformei completamente meu Instagram! Antes gastava R$ 800 por sessão fotográfica, agora faço tudo sozinha com qualidade profissional.",
    rating: 5,
    avatar: "MS"
  },
  {
    name: "Carlos Mendes",
    role: "E-commerce de Bebidas",
    content: "O método funciona perfeitamente! Criei 50+ fotos profissionais em uma tarde. Minhas vendas aumentaram 200%.",
    rating: 5,
    avatar: "CM"
  },
  {
    name: "Ana Patricia",
    role: "Joalheria Online",
    content: "Incrível como uma foto simples vira uma obra de arte. Meus produtos nunca ficaram tão bonitos!",
    rating: 5,
    avatar: "AP"
  },
  {
    name: "Roberto Silva",
    role: "Restaurante",
    content: "Economizei mais de R$ 5.000 em fotografia. O curso se pagou na primeira semana de uso.",
    rating: 5,
    avatar: "RS"
  },
  {
    name: "Juliana Costa",
    role: "Produtos de Beleza",
    content: "Templates funcionam perfeitamente! Consigo criar cenários que antes só via em marcas famosas.",
    rating: 5,
    avatar: "JC"
  },
  {
    name: "Pedro Oliveira",
    role: "Calçados Online",
    content: "Método revolucionário! Transformei meu catálogo inteiro usando apenas as fotos que já tinha.",
    rating: 5,
    avatar: "PO"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-darker-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Resultados Reais de Quem Já Aplicou
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja como nossos alunos transformaram seus negócios
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-dark-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card-custom group"
            >
              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4 border-2 border-primary/20">
                    <AvatarFallback className="bg-gradient-primary text-white font-medium">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div>
                    <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-16 text-center">
          <div className="bg-dark-card border border-primary/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-8">Resultados Comprovados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">R$ 5.000+</div>
                <div className="text-muted-foreground">Economia média em fotografia</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">200%</div>
                <div className="text-muted-foreground">Aumento médio em vendas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">1 Dia</div>
                <div className="text-muted-foreground">Para ver primeiros resultados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
