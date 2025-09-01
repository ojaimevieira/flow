import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  faqs: FAQItem[];
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
}

export const FAQSection = ({ 
  title = "Dúvidas Frequentes",
  subtitle = "Respostas para as perguntas mais comuns",
  badge = "❓ Dúvidas Frequentes",
  faqs,
  primaryColor = "template-primary",
  secondaryColor = "template-secondary", 
  backgroundColor = "bg-gradient-to-b from-darker-bg to-background"
}: FAQSectionProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className={`py-24 ${backgroundColor} relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className={`mb-6 border-${primaryColor} text-${primaryColor} text-lg px-6 py-2`}>
            {badge}
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className={`bg-gradient-to-r from-${primaryColor} to-${secondaryColor} bg-clip-text text-transparent`}>
              {title}
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between group hover:bg-muted/50 transition-colors rounded-lg"
                >
                  <span className="text-lg font-semibold pr-4 group-hover:text-primary transition-colors">
                    {faq.question}
                  </span>
                  
                  <div className={`w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                    {openFaq === index ? (
                      <Minus className="w-4 h-4 text-primary" />
                    ) : (
                      <Plus className="w-4 h-4 text-primary" />
                    )}
                  </div>
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="bg-muted/30 rounded-lg p-6">
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
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <div className="flex justify-center">
            <Badge className={`bg-${primaryColor}/20 text-${primaryColor} border-${primaryColor}/50`}>
              💬 Suporte disponível 24/7
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
