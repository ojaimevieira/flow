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
      answer: "Identifique padrões similares, crie a próxima versão numerada"
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
          <p className="text-xl text-center text-gray-600">
            Componentes salvos para curadoria
          </p>
        </div>
      </div>

      {/* Hero1 Ativo */}
      <div className="py-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-lg p-4 mb-6 shadow-md border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              🎯 Hero1 (ATIVO)
            </h3>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-mono">
              📄 Hero1.tsx
            </span>
          </div>
        </div>
      </div>

      <Hero1 
        domain="biblioteca.dev"
        handle="@biblioteca"
        instagramUrl="https://instagram.com/exemplo"
        facebookUrl="https://facebook.com/exemplo"
      />

      {/* FAQ1 Ativo */}
      <div className="py-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-lg p-4 mb-6 shadow-md border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              ❓ FAQ1 (ATIVO)
            </h3>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-mono">
              📄 FAQ1.tsx
            </span>
          </div>
        </div>
      </div>

      <FAQ1 
        faqs={exemploFaqs}
        title="FAQ1 - Accordion"
        subtitle="Exemplo do componente FAQ numerado"
        badge="📋 Teste"
      />

      {/* Componentes Salvos para Análise */}
      <div className="py-8 bg-yellow-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">
              🚧 Componentes Salvos (Para Curadoria)
            </h3>
            <p className="text-gray-700 mb-4">
              Estes componentes foram salvos em <code>biblioteca/components/</code> para você analisar:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div className="bg-gray-100 p-3 rounded border">📂 Categories.tsx</div>
              <div className="bg-gray-100 p-3 rounded border">📚 CourseContent.tsx</div>
              <div className="bg-gray-100 p-3 rounded border">📢 CTA.tsx</div>
              <div className="bg-gray-100 p-3 rounded border">⭐ Features.tsx</div>
              <div className="bg-gray-100 p-3 rounded border">❗ Problems.tsx</div>
              <div className="bg-gray-100 p-3 rounded border">💰 Pricing.tsx</div>
              <div className="bg-gray-100 p-3 rounded border">💬 Testimonials.tsx</div>
              <div className="bg-gray-100 p-3 rounded border">🎬 HeroFilm.tsx</div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 rounded">
              <h4 className="font-bold text-blue-800 mb-2">📋 Próximos Passos:</h4>
              <ol className="list-decimal list-inside text-blue-700 space-y-1 text-sm">
                <li>Abra os arquivos em VS Code para analisar</li>
                <li>Me diga quais manter: "Manter: Categories, Pricing"</li>
                <li>Me diga quais remover: "Remover: HeroFilm, CTA"</li>
                <li>Eu implemento sua decisão</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BibliotecaTemplate;
