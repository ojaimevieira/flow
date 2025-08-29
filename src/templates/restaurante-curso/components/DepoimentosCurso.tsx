import { Star, Quote, TrendingUp, MapPin } from "lucide-react";

const DepoimentosCurso = () => {
  const depoimentos = [
    {
      nome: "Carlos Silva",
      local: "São Paulo, SP",
      foto: "👨‍🍳",
      negocio: "Hamburgeria do Carlos",
      texto: "Aplicando as técnicas do Eric, consegui sair de 30 pedidos por dia para mais de 120! O método funciona mesmo, agora não paro de receber pedidos.",
      resultado: "300% mais vendas",
      rating: 5
    },
    {
      nome: "Maria Santos",
      local: "Rio de Janeiro, RJ", 
      foto: "👩‍🍳",
      negocio: "Pizzaria da Maria",
      texto: "Estava quase fechando na pandemia, mas com as estratégias do curso consegui não só sobreviver como triplicar meu faturamento!",
      resultado: "Triplicou faturamento",
      rating: 5
    },
    {
      nome: "João Oliveira",
      local: "Belo Horizonte, MG",
      foto: "👨‍🍳", 
      negocio: "Açaí do João",
      texto: "O WhatsApp vendedor mudou tudo! Agora tenho uma lista de mais de 2000 clientes fiéis que compram toda semana.",
      resultado: "2000+ clientes fiéis",
      rating: 5
    },
    {
      nome: "Ana Costa",
      local: "Brasília, DF",
      foto: "👩‍🍳",
      negocio: "Comida Caseira da Ana", 
      texto: "Com as técnicas de fotografia, meus pratos ficaram irresistíveis! As vendas aumentaram 250% só mudando as fotos.",
      resultado: "250% mais pedidos",
      rating: 5
    },
    {
      nome: "Paulo Mendes",
      local: "Salvador, BA",
      foto: "👨‍🍳",
      negocio: "Espetinho do Paulo",
      texto: "O módulo de precificação me salvou! Descobri que estava perdendo dinheiro e agora tenho 40% de lucro real em cada venda.",
      resultado: "40% de lucro",
      rating: 5
    },
    {
      nome: "Carla Lima", 
      local: "Fortaleza, CE",
      foto: "👩‍🍳",
      negocio: "Doces da Carla",
      texto: "Em 3 meses aplicando o método, abri uma segunda loja! O curso se pagou na primeira semana de implementação.",
      resultado: "Abriu 2ª loja",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-template-accent mb-6">
              POR QUE EU CRIEI ESTE CURSO?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Depois de ajudar mais de 500.000 restaurantes a aumentarem suas vendas, 
              decidi reunir tudo em um método completo e acessível para todos.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {depoimentos.map((depoimento, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{depoimento.foto}</div>
                  <div>
                    <h4 className="font-bold text-gray-800">{depoimento.nome}</h4>
                    <p className="text-template-primary font-medium text-sm">{depoimento.negocio}</p>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <MapPin className="w-3 h-3" />
                      {depoimento.local}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-template-primary/30 absolute -top-2 -left-2" />
                  <p className="text-gray-600 text-sm pl-4 italic">
                    "{depoimento.texto}"
                  </p>
                </div>

                {/* Result */}
                <div className="bg-template-primary/5 rounded-lg p-3 text-center">
                  <TrendingUp className="w-5 h-5 text-template-primary mx-auto mb-1" />
                  <div className="text-template-primary font-bold text-sm">
                    {depoimento.resultado}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-template-accent rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-8">
              QUEM É ERIC EGEA?
            </h3>
            
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-template-secondary mb-2">500k+</div>
                <div className="text-sm opacity-90">Restaurantes Atendidos</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-template-secondary mb-2">15+</div>
                <div className="text-sm opacity-90">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-template-secondary mb-2">300%</div>
                <div className="text-sm opacity-90">Aumento Médio de Vendas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-template-secondary mb-2">98%</div>
                <div className="text-sm opacity-90">Satisfação dos Clientes</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6 max-w-4xl mx-auto">
              <p className="text-lg font-medium mb-4">
                "Comecei como garçom e hoje ajudo milhares de restaurantes a prosperarem. 
                Minha missão é democratizar o conhecimento do marketing gastronômico."
              </p>
              <p className="text-template-secondary font-bold">
                - Eric Egea, Fundador da metodologia VendãoComida
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepoimentosCurso;
