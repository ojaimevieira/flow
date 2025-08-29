import { Star, Quote, TrendingUp } from "lucide-react";

const TestimonialsDelivery = () => {
  const testimonials = [
    {
      name: "Ana Maria Silva",
      restaurant: "Pizzaria da Ana",
      location: "São Paulo, SP",
      result: "Aumentou 250% as vendas",
      image: "👩‍🍳",
      text: "Em apenas 3 semanas aplicando as estratégias do curso, minha pizzaria saiu de 50 pedidos por dia para mais de 180! O método funciona mesmo, agora tenho fila de espera nos fins de semana.",
      beforeAfter: {
        before: "50 pedidos/dia",
        after: "180 pedidos/dia"
      }
    },
    {
      name: "João Carlos Santos",
      restaurant: "Burguer House",
      location: "Rio de Janeiro, RJ", 
      result: "Dobrou o faturamento",
      image: "👨‍🍳",
      text: "Estava quase fechando o restaurante por causa da pandemia. Com as técnicas do Eric consegui não só sobreviver como dobrar meu faturamento mensal. Hoje tenho 3 funcionários a mais!",
      beforeAfter: {
        before: "R$ 8.000/mês",
        after: "R$ 18.000/mês"
      }
    },
    {
      name: "Mariana Costa",
      restaurant: "Comida Caseira da Mari",
      location: "Belo Horizonte, MG",
      result: "Virou referência na região",
      image: "👩‍🍳",
      text: "Aplicando o posicionamento que aprendi no curso, hoje sou a comida caseira mais pedida da região. Meus pratos aparecem sempre em primeiro lugar no iFood e não preciso mais competir por preço.",
      beforeAfter: {
        before: "Posição 15-20",
        after: "Sempre Top 3"
      }
    },
    {
      name: "Ricardo Oliveira",  
      restaurant: "Açaí do Rick",
      location: "Fortaleza, CE",
      result: "Expandiu para 2 lojas",
      image: "👨‍🍳",
      text: "Com o que aprendi sobre fotografia e anúncios, consegui aumentar tanto as vendas que abri uma segunda loja em apenas 6 meses. O investimento no curso se pagou na primeira semana!",
      beforeAfter: {
        before: "1 loja",
        after: "2 lojas"
      }
    },
    {
      name: "Carla Mendes",
      restaurant: "Doces da Carla", 
      location: "Brasília, DF",
      result: "Saiu do vermelho",
      image: "👩‍🍳",
      text: "Estava no vermelho há meses, sem saber como calcular meu preço direito. Com a planilha de custos do curso, organizei tudo e agora tenho lucro real de 35% em cada venda.",
      beforeAfter: {
        before: "Prejuízo de R$ 2.000",
        after: "Lucro de R$ 5.500"
      }
    },
    {
      name: "Paulo Roberto",
      restaurant: "Espetinho do Paulo",
      location: "Salvador, BA", 
      result: "Dominou o delivery",
      image: "👨‍🍳",
      text: "Antes eu vendia só no balcão. Aplicando as estratégias digitais do curso, hoje 80% das minhas vendas vêm do delivery. Trabalho menos e ganho mais, era isso que eu queria!",
      beforeAfter: {
        before: "0% delivery", 
        after: "80% delivery"
      }
    }
  ];

  return (
    <section className="py-20 bg-template-surface">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            VEJA OS RESULTADOS DE QUEM 
            <span className="text-template-primary"> JÁ APLICOU O MÉTODO</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mais de 500.000 restaurantes já transformaram seus negócios. 
            Veja alguns casos reais de sucesso:
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-template-primary font-medium">{testimonial.restaurant}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-template-secondary text-template-secondary" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-4">
                <Quote className="w-6 h-6 text-template-primary/30 absolute -top-2 -left-2" />
                <p className="text-sm text-muted-foreground pl-4">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Result */}
              <div className="bg-template-primary/5 rounded-lg p-4">
                <div className="text-center">
                  <TrendingUp className="w-6 h-6 text-template-primary mx-auto mb-2" />
                  <div className="text-template-primary font-bold text-lg mb-2">
                    {testimonial.result}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <span className="line-through">{testimonial.beforeAfter.before}</span>
                    {" → "}
                    <span className="font-bold text-template-primary">{testimonial.beforeAfter.after}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="bg-gradient-to-r from-template-primary to-template-accent rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">
            RESULTADOS COMPROVADOS EM TODO O BRASIL
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500k+</div>
              <div className="text-sm opacity-90">Restaurantes atendidos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">89%</div>
              <div className="text-sm opacity-90">Aumentaram as vendas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">19</div>
              <div className="text-sm opacity-90">Dias para ver resultados</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200%</div>
              <div className="text-sm opacity-90">Aumento médio nas vendas</div>
            </div>
          </div>

          <div className="mt-8 bg-white/20 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-lg font-medium">
              "Não importa o tipo do seu restaurante, o método funciona para todos!"
            </p>
            <p className="text-sm opacity-90 mt-2">- Eric Egea, criador do método</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsDelivery;
