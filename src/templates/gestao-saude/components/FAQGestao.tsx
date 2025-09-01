import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";
import { Button } from "@/shared/ui/button";

const FAQGestao = () => {
  const faqs = [
    {
      pergunta: "Para quem é indicado este curso?",
      resposta: "O curso é ideal para médicos, enfermeiros, administradores hospitalares, gestores de clínicas, coordenadores de qualidade e profissionais que desejam atuar na gestão em saúde. Não é necessário ter experiência prévia em gestão."
    },
    {
      pergunta: "Qual é a carga horária e duração do curso?",
      resposta: "O curso possui 48 horas de conteúdo distribuídas em 6 módulos, com 72 aulas práticas e teóricas. Você pode estudar no seu ritmo, com acesso vitalício ao material. A duração recomendada é de 3 a 6 meses."
    },
    {
      pergunta: "O certificado é reconhecido pelo MEC?",
      resposta: "Sim, nosso certificado é reconhecido e aceito em todo território nacional. É válido para horas complementares, processos seletivos, concursos públicos e progressão na carreira, conforme legislação vigente."
    },
    {
      pergunta: "Como funciona o acesso às aulas?",
      resposta: "Após a confirmação do pagamento, você recebe imediatamente o acesso à plataforma online. As aulas ficam disponíveis 24h por dia, 7 dias por semana, e você pode assistir quantas vezes quiser, inclusive offline pelo app mobile."
    },
    {
      pergunta: "Há algum material físico ou é tudo online?",
      resposta: "Todo o conteúdo é digital e acessível pela nossa plataforma online e app mobile. Isso inclui videoaulas, materiais complementares, templates, e-books e exercícios práticos. Você pode baixar os materiais para estudar offline."
    },
    {
      pergunta: "Posso tirar dúvidas durante o curso?",
      resposta: "Absolutamente! Oferecemos suporte completo através da área de comentários nas aulas, fórum exclusivo da comunidade de alunos e suporte direto com os instrutores. Seu sucesso é nossa prioridade."
    },
    {
      pergunta: "Como funciona a garantia de 7 dias?",
      resposta: "Se por qualquer motivo você não ficar satisfeito com o curso nos primeiros 7 dias após a compra, devolvemos 100% do valor pago. É só entrar em contato conosco que processamos o reembolso imediatamente."
    },
    {
      pergunta: "Preciso de algum software específico?",
      resposta: "Não é necessário nenhum software pago. Durante o curso, apresentamos ferramentas gratuitas e acessíveis para gestão. Você só precisa de um computador, tablet ou smartphone com acesso à internet."
    },
    {
      pergunta: "O curso é atualizado regularmente?",
      resposta: "Sim! O conteúdo é atualizado constantemente para refletir as melhores práticas e novidades do mercado de gestão em saúde. Todos os alunos recebem as atualizações gratuitamente, sem custo adicional."
    },
    {
      pergunta: "Posso fazer o curso mesmo trabalhando em tempo integral?",
      resposta: "Claro! O curso foi desenvolvido pensando em profissionais ocupados. Com acesso vitalício e flexibilidade total de horários, você pode estudar nos momentos que tem disponível, seja durante a semana ou fins de semana."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            Dúvidas Frequentes
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Perguntas
            <span className="block text-blue-600"> Frequentes</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre o curso. 
            Se não encontrar sua resposta aqui, entre em contato conosco.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300"
              >
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-600 font-bold text-lg">Q{index + 1}.</span>
                    <span className="font-semibold text-gray-900">{faq.pergunta}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                  {faq.resposta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                Nossa equipe está pronta para ajudar você a tomar a melhor decisão 
                para sua carreira na gestão em saúde.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  💬 Falar no WhatsApp
                </Button>
                <Button 
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  📞 Agendar Ligação
                </Button>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-blue-100">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Respondemos em até 5 minutos
                </span>
                <span className="hidden sm:block">•</span>
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Atendimento humanizado
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Não perca esta oportunidade!
            </h4>
            <p className="text-gray-600 mb-6">
              Milhares de profissionais já transformaram suas carreiras. 
              Agora é a sua vez de ser um especialista em gestão em saúde.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-xl font-bold px-12 py-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              🚀 GARANTIR MINHA VAGA AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQGestao;
