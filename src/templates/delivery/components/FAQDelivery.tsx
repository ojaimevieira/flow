import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQDelivery = () => {
  const faqs = [
    {
      question: "Por que meu restaurante CRESCE todos os meses enquanto outros FECHAM as portas?",
      answer: "A diferença está na aplicação de estratégias comprovadas de marketing digital específicas para restaurantes. Enquanto a maioria compete apenas por preço, nosso método ensina como criar um posicionamento único que faz seu restaurante ser lembrado na hora da fome. Mais de 500.000 estabelecimentos já aplicaram essas técnicas."
    },
    {
      question: "Funciona para qualquer tipo de restaurante?",
      answer: "Sim! O método já foi testado e aprovado em pizzarias, hamburgueria, comida caseira, açaí, doces, espetinhos, sushi, e todos os outros tipos de estabelecimentos. Os princípios são universais e se adaptam a qualquer nicho gastronômico."
    },
    {
      question: "Preciso ter conhecimento em marketing digital?",
      answer: "Não! O curso foi desenvolvido especificamente para donos de restaurantes que não entendem nada de marketing. Tudo é explicado do zero, com linguagem simples e exemplos práticos. Se você sabe usar o celular, consegue aplicar o método."
    },
    {
      question: "Em quanto tempo vou ver resultados?",
      answer: "A maioria dos nossos alunos começam a ver aumento nas vendas já na primeira semana. Em 19 dias, seguindo o método corretamente, você já terá resultados significativos. Alguns casos reportaram crescimento de 250% em apenas 3 semanas."
    },
    {
      question: "E se eu não conseguir aplicar ou não der certo comigo?",
      answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo não gostar do conteúdo ou achar que não é para você, devolvemos 100% do seu dinheiro, sem perguntas. Além disso, oferecemos suporte direto para tirar todas as suas dúvidas."
    },
    {
      question: "O método funciona para delivery e balcão?",
      answer: "Sim! O método abrange estratégias completas para delivery (iFood, Uber Eats, Rappi) e também para vendas no balcão. Você vai aprender a dominar os dois canais e maximizar suas vendas em todas as frentes."
    },
    {
      question: "Vou ter acesso por quanto tempo?",
      answer: "Você terá acesso por 1 ano completo a todo o conteúdo, incluindo atualizações que adicionarmos. Isso significa que pode assistir quantas vezes quiser e no seu próprio ritmo, sem pressa."
    },
    {
      question: "Preciso pagar mensalidade?",
      answer: "Não! É um pagamento único de R$ 19,00 e você tem acesso a todo o conteúdo. Sem mensalidades, sem taxas extras, sem pegadinhas. Paga uma vez e tem acesso para sempre (durante 1 ano)."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Você entrará automaticamente no nosso grupo VIP no Telegram, onde poderá tirar dúvidas diretamente comigo e com outros donos de restaurantes que também estão aplicando o método. Além disso, fazemos aulas ao vivo mensais para resolver dúvidas."
    },
    {
      question: "Por que está tão barato? Não é pegadinha?",
      answer: "Esta é uma promoção especial por tempo limitado. Normalmente o curso custa R$ 197,00, mas queremos ajudar o máximo de restaurantes possível a se recuperar pós-pandemia. Por isso oferecemos por apenas R$ 19,00 - menos que o preço de uma pizza!"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            DÚVIDAS 
            <span className="text-template-primary"> FREQUENTES</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Veja as principais dúvidas de outros donos de restaurantes:
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-100">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-template-surface transition-colors">
                  <span className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions */}
        <div className="bg-gradient-yellow-purple rounded-2xl p-8 text-center text-white mt-12">
          <h3 className="text-2xl font-bold mb-4">
            AINDA TEM ALGUMA DÚVIDA?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Fale comigo direto no WhatsApp e tire todas as suas dúvidas antes de decidir!
          </p>
          
          <Button 
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            💬 FALAR NO WHATSAPP
          </Button>
          
          <p className="text-sm opacity-75 mt-4">
            Respondo pessoalmente em até 5 minutos!
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            NÃO PERCA MAIS TEMPO!
          </h3>
          <p className="text-xl text-muted-foreground mb-8">
            Cada dia que passa sem aplicar essas estratégias, você está perdendo dinheiro para a concorrência.
          </p>
          
          <Button 
            size="lg" 
            className="bg-template-primary hover:bg-template-accent text-white px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            🚀 SIM! QUERO COMEÇAR AGORA
          </Button>
          
          <p className="text-sm text-muted-foreground mt-4">
            ⚡ Acesso imediato • 💳 Pagamento seguro • 🛡️ 7 dias de garantia
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQDelivery;
