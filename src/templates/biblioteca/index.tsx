import { Hero1, FAQ1 } from '@/shared';

const BibliotecaTemplate = () => {
  const exemploFaqs = [
    {
      question: "Como funciona este sistema de componentes?",
      answer: "Cada componente tem uma versão numerada (Hero1, FAQ1) que pode ser reutilizada em qualquer template."
    },
    {
      question: "Como adicionar um novo componente?",
      answer: "Identifique padrões similares, crie a próxima versão numerada e adicione aos exports do shared/index.ts"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header da Biblioteca */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            📚 Biblioteca de Componentes
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Centro de controle para visualizar e gerenciar todos os componentes versionados
          </p>
        </div>
      </div>

      {/* Demonstração Hero1 */}
      <div className="py-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">
            🎯 Hero1 - Marca Pessoal
          </h3>
        </div>
      </div>

      <Hero1 
        domain="biblioteca.dev"
        handle="@biblioteca"
        instagramUrl="https://instagram.com/exemplo"
        facebookUrl="https://facebook.com/exemplo"
      />

      {/* Demonstração FAQ1 */}
      <FAQ1 
        faqs={exemploFaqs}
        title="FAQ1 - Accordion"
        subtitle="Exemplo do componente FAQ numerado"
        badge="📋 Teste"
      />

      {/* Status dos Componentes */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            📊 Status dos Componentes
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-6 border-2 border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-3">
                ✅ Hero1
              </h3>
              <p className="text-gray-600 mb-4">
                Componente para marca pessoal - design minimalista
              </p>
              <div className="bg-green-100 p-3 rounded text-sm">
                <strong>Status:</strong> Ativo | <strong>Usado em:</strong> jaimevieira
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-3">
                ✅ FAQ1
              </h3>
              <p className="text-gray-600 mb-4">
                FAQ com accordion expansível
              </p>
              <div className="bg-green-100 p-3 rounded text-sm">
                <strong>Status:</strong> Ativo | <strong>Usado em:</strong> múltiplos templates
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BibliotecaTemplate;
