import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "Preciso ter experiência prévia com edição de vídeos?",
      answer: "Não! O FilmAgente foi desenvolvido especificamente para iniciantes. Começamos do zero e te guiamos passo a passo até você dominar todas as técnicas avançadas. Mesmo se você nunca abriu um editor de vídeo na vida, vai conseguir acompanhar tranquilamente."
    },
    {
      question: "Que tipo de vídeos posso criar com essas técnicas?",
      answer: "Você pode criar praticamente qualquer tipo de vídeo: comerciais para produtos, vídeos explicativos, conteúdo para redes sociais, apresentações empresariais, tutoriais educacionais, vídeos de vendas e muito mais. As técnicas de IA são versáteis e se adaptam a qualquer nicho."
    },
    {
      question: "Preciso de equipamentos caros para começar?",
      answer: "Absolutamente não! Uma das grandes vantagens da IA é que você pode criar vídeos incríveis usando apenas um smartphone e as ferramentas que ensinamos no curso. Você não precisa de câmeras profissionais, estúdios ou equipamentos caros."
    },
    {
      question: "Quanto tempo demora para aprender e ver resultados?",
      answer: "A maioria dos nossos alunos consegue criar seus primeiros vídeos profissionais já na primeira semana. O curso está estruturado para que você veja resultados rápidos, mas continue evoluindo ao longo dos módulos. Em 30 dias, você já estará criando conteúdo de nível avançado."
    },
    {
      question: "As ferramentas de IA que vocês ensinam são pagas?",
      answer: "Ensinamos tanto ferramentas gratuitas quanto pagas. Começamos sempre com as opções gratuitas para que você possa testar e aprender sem custos adicionais. Conforme você evolui, apresentamos as ferramentas premium que podem acelerar ainda mais seus resultados."
    },
    {
      question: "E se eu não ficar satisfeito com o curso?",
      answer: "Oferecemos 7 dias de garantia incondicional. Se por qualquer motivo você não gostar do conteúdo, basta solicitar o reembolso e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia. Queremos que você tenha total confiança na sua compra."
    },
    {
      question: "O acesso ao curso é vitalício?",
      answer: "Sim! Você terá acesso vitalício a todo o conteúdo, incluindo futuras atualizações. O mundo da IA evolui rapidamente, e nós mantemos o curso sempre atualizado com as mais novas técnicas e ferramentas do mercado."
    },
    {
      question: "Vocês oferecem suporte aos alunos?",
      answer: "Claro! Além do conteúdo do curso, você terá acesso à nossa comunidade exclusiva de alunos e suporte direto conosco. Estamos aqui para ajudar você a tirar todas as suas dúvidas e garantir que tenha sucesso com o FilmAgente."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-darker-bg to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-primary text-primary text-lg px-6 py-2">
            ❓ Dúvidas Frequentes
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Dúvidas Frequentes
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Respostas para as perguntas mais comuns sobre o FilmAgente
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="bg-dark-card border-primary/20 hover:border-primary/40 transition-all duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-primary/10 pt-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-dark-card border border-primary/30 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-muted-foreground mb-6">
              Nossa equipe está pronta para te ajudar! Entre em contato conosco através do WhatsApp.
            </p>
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200"
            >
              💬 Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
