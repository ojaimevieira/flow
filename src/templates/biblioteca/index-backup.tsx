import { Hero1 } from './components/Hero1';
import { FAQ1 } from './components/FAQ1';

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            📚 Biblioteca de Componentes
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Componentes reutilizáveis e organizados para criar templates incríveis
          </p>
        </div>
      </div>

      {/* Demonstração Hero1 */}
      <div className="py-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-lg p-4 mb-6 shadow-md border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              🎯 Hero1
            </h3>
            <div className="flex items-center gap-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-mono">
                📄 Hero1.tsx
              </span>
              <span className="text-gray-600">Componente para marca pessoal - design minimalista</span>
            </div>
          </div>
        </div>
      </div>

      <Hero1 
        domain="biblioteca.dev"
        handle="@biblioteca"
        instagramUrl="https://instagram.com/exemplo"
        facebookUrl="https://facebook.com/exemplo"
      />

      {/* Demonstração FAQ1 */}
      <div className="py-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-lg p-4 mb-6 shadow-md border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              ❓ FAQ1
            </h3>
            <div className="flex items-center gap-4">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-mono">
                📄 FAQ1.tsx
              </span>
              <span className="text-gray-600">FAQ com accordion expansível e animações</span>
            </div>
          </div>
        </div>
      </div>

      <FAQ1 
        faqs={exemploFaqs}
        title="FAQ1 - Accordion"
        subtitle="Exemplo do componente FAQ numerado"
        badge="📋 Teste"
      />

      {/* Status dos Componentes Copiados */}
      <div className="py-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">
              🚧 Componentes em Análise
            </h3>
            <p className="text-yellow-700 mb-4">
              Os seguintes componentes foram copiados da pasta shared/components para análise:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white p-3 rounded border">📂 Categories.tsx</div>
              <div className="bg-white p-3 rounded border">📚 CourseContent.tsx</div>
              <div className="bg-white p-3 rounded border">📢 CTA.tsx</div>
              <div className="bg-white p-3 rounded border">⭐ Features.tsx</div>
              <div className="bg-white p-3 rounded border">❗ Problems.tsx</div>
              <div className="bg-white p-3 rounded border">💰 Pricing.tsx</div>
              <div className="bg-white p-3 rounded border">💬 Testimonials.tsx</div>
              <div className="bg-white p-3 rounded border">🎬 HeroFilm.tsx</div>
            </div>
            <p className="text-yellow-700 mt-4 text-sm">
              💡 Estes componentes estão salvos localmente na biblioteca. 
              Você pode revisá-los individualmente e decidir quais manter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BibliotecaTemplate;
