import { useState } from 'react';

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Funciona para qualquer tipo de produto?",
      answer: "Sim! O método funciona para todos os tipos de produtos: alimentação, roupas, bijuterias, eletrônicos, artesanato, etc. Temos casos de sucesso em mais de 50 nichos diferentes. As técnicas de IA são universais e se adaptam a qualquer categoria de produto."
    },
    {
      question: "Preciso ter conhecimento técnico para usar?",
      answer: "Não! O método foi criado especificamente para empreendedores sem conhecimento técnico. Ensino tudo do zero, passo a passo, de forma simples. Se você sabe usar WhatsApp, consegue aplicar o método. Todas as ferramentas são intuitivas e fáceis de usar."
    },
    {
      question: "Em quanto tempo vejo os primeiros resultados?",
      answer: "A maioria dos alunos consegue criar suas primeiras fotos profissionais em 24-48 horas. O aumento nas vendas geralmente acontece na primeira semana, com resultados consistentes a partir do 15º dia. Alguns alunos relataram aumento de 200% nas vendas já no primeiro fim de semana."
    },
    {
      question: "Quanto vou economizar comparado a um fotógrafo?",
      answer: "Uma sessão de fotos profissional custa entre R$ 500-2.000. Com o método IA, você cria fotos ilimitadas por cerca de R$ 50/mês em ferramentas. Isso significa economia de 95%+ nos custos de produção visual, sem contar modelos, estúdio e edição."
    },
    {
      question: "As fotos ficam realmente profissionais?",
      answer: "Sim! As IAs atuais criam imagens com qualidade igual ou superior a fotógrafos profissionais. Muitos clientes não conseguem distinguir entre uma foto feita por IA e uma foto tradicional. Temos centenas de exemplos de antes/depois que comprovam a qualidade."
    },
    {
      question: "Funciona só no computador ou também no celular?",
      answer: "Funciona em ambos! Ensino como usar as ferramentas tanto no computador quanto no celular. Algumas ferramentas funcionam melhor no PC, outras são otimizadas para mobile. Você terá flexibilidade total para criar onde estiver."
    },
    {
      question: "E se eu não conseguir usar as ferramentas?",
      answer: "Você terá suporte completo! Além das aulas passo a passo, oferecemos suporte direto via WhatsApp por 30 dias, grupo VIP no Telegram e garantia de 30 dias. Se mesmo assim não conseguir, devolvemos 100% do seu dinheiro."
    },
    {
      question: "As ferramentas de IA são pagas?",
      answer: "Algumas sim, outras são gratuitas. Ensino tanto ferramentas gratuitas quanto pagas, para você escolher conforme seu orçamento. As ferramentas pagas custam entre R$ 10-50/mês, que se paga com apenas 1-2 vendas extras que você fará com as fotos melhores."
    },
    {
      question: "Posso usar as fotos para fins comerciais?",
      answer: "Sim! Todas as técnicas ensinadas geram fotos com licença comercial completa. Você pode usar para vender seus produtos, fazer anúncios, postar nas redes sociais, criar catálogos, etc. Sem restrições ou problemas de direitos autorais."
    },
    {
      question: "O curso tem atualizações?",
      answer: "Sim! O mundo da IA evolui rapidamente, então o curso recebe atualizações constantes com novas ferramentas e técnicas. Todas as atualizações são incluídas no seu acesso vitalício, sem custo adicional. Você sempre terá acesso às técnicas mais avançadas."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-6 py-3 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-lg font-medium">
              ❓ DÚVIDAS FREQUENTES
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white">
              PERGUNTAS
              <span className="block text-emerald-400">FREQUENTES</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tire todas as suas dúvidas antes de começar sua transformação
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-all duration-300"
              >
                <button
                  className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <h3 className="text-lg font-bold text-white pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center transition-transform duration-300 ${openFAQ === index ? 'rotate-45' : ''}`}>
                      <span className="text-emerald-400 text-xl font-bold">+</span>
                    </div>
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-700 pt-6">
                      <p className="text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="text-center space-y-8">
            <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">
                AINDA TEM DÚVIDAS?
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                Nossa equipe está pronta para ajudar você a tomar a melhor decisão
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                  <div className="text-3xl mb-3">💬</div>
                  <h4 className="text-white font-bold mb-2">WhatsApp</h4>
                  <p className="text-gray-300 text-sm mb-4">Resposta em até 30 minutos</p>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                    Falar no WhatsApp
                  </button>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-6 text-center">
                  <div className="text-3xl mb-3">📧</div>
                  <h4 className="text-white font-bold mb-2">Email</h4>
                  <p className="text-gray-300 text-sm mb-4">Resposta em até 2 horas</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                    Enviar Email
                  </button>
                </div>
              </div>
            </div>

            {/* Final Encouragement */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                NÃO DEIXE AS DÚVIDAS TE PARALISAREM
              </h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Lembre-se: você tem <span className="text-emerald-400 font-bold">30 dias de garantia total</span>. 
                Se não funcionar para você, devolvemos todo o seu investimento. O risco é zero!
              </p>
              
              <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold text-xl px-12 py-6 rounded-full transform transition-all duration-300 hover:scale-105 shadow-2xl shadow-emerald-500/25">
                QUERO COMEÇAR AGORA
              </button>
              
              <p className="text-gray-400 text-sm">
                🔒 Garantia total • ⭐ Suporte completo • 🚀 Resultados em 24h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
