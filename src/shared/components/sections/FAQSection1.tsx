import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { themeConfigs, type ThemeConfig } from "../themes/themeConfigs";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSection1Props {
  title?: string;
  subtitle?: string;
  badge?: string;
  faqs: FAQItem[];
  theme?: keyof typeof themeConfigs;
  customTheme?: Partial<ThemeConfig>;
}

export const FAQSection1 = ({ 
  title = "Dúvidas Frequentes",
  subtitle = "Respostas para as perguntas mais comuns",
  badge = "❓ Dúvidas Frequentes",
  faqs,
  theme = "default",
  customTheme
}: FAQSection1Props) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const themeConfig = customTheme ? { ...themeConfigs[theme], ...customTheme } : themeConfigs[theme];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className={`py-24 ${themeConfig.background} relative overflow-hidden`}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 bg-${themeConfig.primary}/5 rounded-full blur-3xl`} />
        <div className={`absolute bottom-1/4 right-1/4 w-64 h-64 bg-${themeConfig.accent}/5 rounded-full blur-2xl`} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className={`mb-6 border-${themeConfig.primary} text-${themeConfig.primary} text-lg px-6 py-2`}>
            {badge}
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className={`bg-gradient-to-r from-${themeConfig.primary} to-${themeConfig.secondary} bg-clip-text text-transparent`}>
              {title}
            </span>
          </h2>
          
          <p className={`text-xl text-${themeConfig.muted} max-w-3xl mx-auto`}>
            {subtitle}
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className={`${themeConfig.card}/50 backdrop-blur-sm border-${themeConfig.border}/50 hover:border-${themeConfig.primary}/50 transition-all duration-300`}
            >
              <CardContent className="p-0">
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full p-6 text-left flex items-center justify-between group hover:bg-${themeConfig.primary}/10 transition-colors rounded-lg`}
                >
                  <span className={`text-lg font-semibold pr-4 group-hover:text-${themeConfig.primary} transition-colors text-${themeConfig.text}`}>
                    {faq.question}
                  </span>
                  
                  <div className={`w-8 h-8 bg-${themeConfig.primary}/20 rounded-full flex items-center justify-center transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                    {openFaq === index ? (
                      <Minus className={`w-4 h-4 text-${themeConfig.primary}`} />
                    ) : (
                      <Plus className={`w-4 h-4 text-${themeConfig.primary}`} />
                    )}
                  </div>
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className={`bg-${themeConfig.primary}/5 rounded-lg p-6`}>
                      <p className={`text-${themeConfig.muted} leading-relaxed`}>
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
          <p className={`text-${themeConfig.muted} mb-4`}>
            Ainda tem dúvidas? Entre em contato conosco!
          </p>
          <div className="flex justify-center">
            <Badge className={`bg-${themeConfig.primary}/20 text-${themeConfig.primary} border-${themeConfig.primary}/50`}>
              💬 Suporte disponível 24/7
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
