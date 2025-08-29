import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Por que meu restaurante CRESCE todos os meses enquanto outros FECHAM as portas?",
    answer: "Aplicamos estratégias específicas de marketing digital para restaurantes, otimização de cardápio, gestão de custos e fidelização de clientes que foram testadas e aprovadas em centenas de estabelecimentos."
  },
  {
    question: "Funciona para qualquer tipo de restaurante?",
    answer: "Sim! Seja pizzaria, hamburgueria, comida caseira, japonês, delivery ou balcão - as estratégias se adaptam a qualquer modelo de negócio gastronômico."
  },
  {
    question: "Preciso ter conhecimento em marketing digital?",
    answer: "Não! Ensinamos tudo do zero: desde configurar o Instagram do seu restaurante até criar campanhas que realmente vendem. Tudo explicado de forma simples e prática."
  },
  {
    question: "Em quanto tempo vou ver resultados?",
    answer: "Nossos alunos relatam aumento no movimento já na primeira semana aplicando as estratégias. Em 30 dias, você terá implementado todo o sistema completo."
  },
  {
    question: "E se eu não conseguir aplicar ou não der certo comigo?",
    answer: "Oferecemos 7 dias de garantia total. Se por qualquer motivo não funcionar para você, devolvemos 100% do investimento."
  },
  {
    question: "O método funciona para delivery e balcão?",
    answer: "Sim! Temos estratégias específicas para ambos os modelos. Muitos alunos conseguiram dobrar as vendas no delivery e triplicar o movimento no balcão."
  },
  {
    question: "Vou ter acesso por quanto tempo?",
    answer: "Acesso vitalício! Você paga uma vez e tem acesso para sempre, incluindo todas as atualizações e novos conteúdos que adicionarmos."
  },
  {
    question: "Preciso pagar mensalidade?",
    answer: "Não! É um pagamento único. Sem mensalidades, sem taxas escondidas. Você investe uma vez e aplica para sempre."
  },
  {
    question: "Como funciona o suporte?",
    answer: "Você terá acesso direto ao nosso grupo VIP no WhatsApp, onde eu e minha equipe tiramos dúvidas e ajudamos na implementação das estratégias."
  },
  {
    question: "Por que está tão barato? Não é pegadinha?",
    answer: "É uma oferta promocional por tempo limitado. Queremos ajudar o máximo de restaurantes possível a crescer. Logo o valor vai aumentar significativamente."
  }
];

const FAQRestaurante = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-darker-bg to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            DÚVIDAS FREQUENTES
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja as principais dúvidas de outros donos de restaurantes:
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-dark-card border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-6 text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <div className="bg-gradient-secondary border border-primary/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                Fale diretamente comigo! Estou aqui para ajudar seu restaurante a crescer
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/5511999999999?text=Olá! Tenho interesse no curso e gostaria de tirar algumas dúvidas" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-lg font-semibold"
                >
                  💬 Falar no WhatsApp
                </a>
                <a 
                  href="mailto:suporte@restaurantecurso.com" 
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/80 text-white rounded-lg transition-colors text-lg font-semibold"
                >
                  ✉️ Enviar Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQRestaurante;
