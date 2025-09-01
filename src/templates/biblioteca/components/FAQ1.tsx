import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQ1Props {
  title?: string;
  subtitle?: string;
  badge?: string;
  faqs: FAQItem[];
}

export const FAQ1 = ({ 
  title = "Dúvidas Frequentes",
  subtitle = "Respostas para as perguntas mais comuns",
  badge = "❓ Dúvidas Frequentes",
  faqs
}: FAQ1Props) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-blue-500 text-blue-500 text-lg px-6 py-2">
            {badge}
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="bg-white/50 backdrop-blur-sm border-gray-200/50 hover:border-blue-500/50 transition-all duration-300"
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between group hover:bg-blue-500/10 transition-colors rounded-lg"
                >
                  <span className="text-lg font-semibold pr-4 group-hover:text-blue-600 transition-colors text-gray-800">
                    {faq.question}
                  </span>
                  
                  <div className={`w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                    {openFaq === index ? (
                      <Minus className="w-4 h-4 text-blue-600" />
                    ) : (
                      <Plus className="w-4 h-4 text-blue-600" />
                    )}
                  </div>
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="bg-blue-500/5 rounded-lg p-6">
                      <p className="text-gray-600 leading-relaxed">
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
          <p className="text-gray-600 mb-4">
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <div className="flex justify-center">
            <Badge className="bg-blue-500/20 text-blue-600 border-blue-500/50">
              💬 Suporte disponível 24/7
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
