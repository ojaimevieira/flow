import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/ui/accordion";

const faqs = [
  {
    question: "Preciso ter experiência com IA?",
    answer: "Não! O curso é feito para iniciantes. Você vai aprender desde a configuração até técnicas avançadas, tudo explicado passo a passo."
  },
  {
    question: "Funciona para qualquer tipo de produto?",
    answer: "Sim! Embora os exemplos sejam com alimentos, as técnicas funcionam para bijuterias, calçados, cosméticos, eletrônicos, decoração e qualquer produto físico."
  },
  {
    question: "Quanto tempo para ver resultados?",
    answer: "Você vai criar suas primeiras edições no mesmo dia do curso. É totalmente prático e focado em resultados imediatos."
  },
  {
    question: "Tem garantia?",
    answer: "Sim! 7 dias para testar todo o conteúdo. Não gostou ou não funcionou? Devolvemos 100% do valor, sem perguntas."
  },
  {
    question: "Preciso de equipamentos caros?",
    answer: "Não! Você só precisa de um smartphone ou câmera simples para tirar a foto inicial com fundo branco. O resto é feito pela IA."
  },
  {
    question: "Os templates funcionam para meu nicho?",
    answer: "Sim! Os templates são adaptáveis e ensinamos como personalizar cada um para seu tipo específico de produto e estilo de marca."
  },
  {
    question: "Quanto tempo tenho de acesso?",
    answer: "Acesso vitalício! Você compra uma vez e tem acesso para sempre, incluindo todas as atualizações futuras sem custo adicional."
  },
  {
    question: "Vai funcionar no meu computador?",
    answer: "Sim! As ferramentas funcionam em qualquer navegador moderno, tanto Windows quanto Mac. Não precisa instalar nada complexo."
  }
];

const FAQ = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-darker-bg to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Dúvidas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Respostas para as principais dúvidas sobre o curso
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-dark-card border border-border rounded-lg px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <div className="bg-gradient-secondary border border-primary/30 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-4">
                Ainda tem dúvidas?
              </h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe está pronta para ajudar você a tomar a melhor decisão
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://wa.me/5511999999999" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
                >
                  💬 Falar no WhatsApp
                </a>
                <a 
                  href="mailto:suporte@exemplo.com" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-lg transition-colors"
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

export default FAQ;
