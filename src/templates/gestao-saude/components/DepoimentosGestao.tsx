import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";

const DepoimentosGestao = () => {
  const depoimentos = [
    {
      nome: "Dr. Ana Paula Silva",
      cargo: "Diretora Médica",
      empresa: "Hospital São Lucas",
      foto: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      depoimento: "O curso transformou completamente minha visão sobre gestão hospitalar. As metodologias apresentadas me permitiram otimizar processos e reduzir custos em 30% no primeiro ano.",
      avaliacao: 5,
      destaque: "Redução de 30% nos custos"
    },
    {
      nome: "Carlos Eduardo Santos",
      cargo: "Coordenador de Qualidade",
      empresa: "Clínica Saúde Total",
      foto: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      depoimento: "Excelente abordagem prática! Os cases reais e as ferramentas de gestão me ajudaram a implementar um sistema de qualidade que resultou na nossa acreditação ONA.",
      avaliacao: 5,
      destaque: "Acreditação ONA conquistada"
    },
    {
      nome: "Maria Fernanda Costa",
      cargo: "Gerente Administrativa",
      empresa: "Centro Médico Vida",
      foto: "https://images.unsplash.com/photo-1594824475480-b6c2dceaed73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      depoimento: "O módulo de gestão financeira foi transformador. Aprendi a fazer análises mais precisas e consegui renegociar contratos, gerando uma economia de R$ 200mil anuais.",
      avaliacao: 5,
      destaque: "R$ 200k de economia anual"
    },
    {
      nome: "Dr. Roberto Oliveira",
      cargo: "Diretor Clínico",
      empresa: "Hospital Regional",
      foto: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      depoimento: "As estratégias de liderança me tornaram um gestor mais eficaz. Minha equipe está mais engajada e produtiva, resultando em melhor atendimento aos pacientes.",
      avaliacao: 5,
      destaque: "Equipe 40% mais produtiva"
    },
    {
      nome: "Juliana Ribeiro",
      cargo: "Administradora Hospitalar",
      empresa: "Clínica Especializada",
      foto: "https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      depoimento: "Curso completo e atualizado! A parte de transformação digital me ajudou a implementar sistemas que modernizaram toda nossa operação e melhoraram a experiência do paciente.",
      avaliacao: 5,
      destaque: "Transformação digital completa"
    },
    {
      nome: "Dr. Paulo Henrique",
      cargo: "CEO",
      empresa: "Rede Saúde Premium",
      foto: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
      depoimento: "Investimento que se paga sozinho! As estratégias aprendidas me permitiram expandir nossa rede de forma sustentável, passando de 2 para 8 unidades em dois anos.",
      avaliacao: 5,
      destaque: "Expansão de 2 para 8 unidades"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
            Histórias de Sucesso
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que nossos
            <span className="block text-blue-600"> Alunos Dizem</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Mais de 500 profissionais já transformaram suas carreiras. 
            Veja os resultados reais alcançados por nossos alunos.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">4.9/5</div>
              <div className="text-gray-600">Avaliação Média</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="text-gray-600">Recomendariam</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">85%</div>
              <div className="text-gray-600">Promoção em 1 ano</div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {depoimentos.map((depoimento, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:transform hover:scale-105 overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <img 
                    src={depoimento.foto} 
                    alt={depoimento.nome}
                    className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{depoimento.nome}</h4>
                    <p className="text-sm text-blue-600 font-medium">{depoimento.cargo}</p>
                    <p className="text-xs text-gray-500">{depoimento.empresa}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {renderStars(depoimento.avaliacao)}
                </div>

                {/* Testimonial */}
                <blockquote className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                  "{depoimento.depoimento}"
                </blockquote>

                {/* Highlight Badge */}
                <div className="text-center">
                  <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 px-4 py-2">
                    ✨ {depoimento.destaque}
                  </Badge>
                </div>

                {/* Hover Effect */}
                <div className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Seja o Próximo Caso de Sucesso!
              </h3>
              <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                Junte-se a centenas de profissionais que já transformaram 
                suas carreiras na gestão em saúde
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  🚀 Garantir Minha Vaga
                </button>
                <div className="flex items-center space-x-2 text-blue-100">
                  <span className="text-sm">✅ Certificação reconhecida</span>
                  <span className="text-sm">•</span>
                  <span className="text-sm">✅ Acesso vitalício</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepoimentosGestao;
