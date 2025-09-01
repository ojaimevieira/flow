import { Hero1 } from './components/Hero1';

const BibliotecaTemplate = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
            📚 Biblioteca de Componentes
          </h1>
          <p className="text-xl text-center text-gray-600">
            Hero1 - Componente principal para personal branding
          </p>
        </div>
      </div>

      {/* Hero1 Component */}
      <div className="py-8 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-lg p-4 mb-6 shadow-md border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              🎯 Hero1 - Personal Brand Hero
            </h3>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-mono">
              📄 Hero1.tsx
            </span>
            <p className="text-gray-600 mt-3">
              Seção principal para apresentação pessoal com domain, handle e redes sociais
            </p>
          </div>
        </div>
      </div>

      <Hero1 
        domain="biblioteca.dev"
        handle="@biblioteca"
        instagramUrl="https://instagram.com/exemplo"
        facebookUrl="https://facebook.com/exemplo"
      />

      {/* Status */}
      <div className="py-8 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-lg p-6 shadow-md text-center">
            <h3 className="text-xl font-bold text-green-800 mb-2">
              ✅ Biblioteca Limpa
            </h3>
            <p className="text-gray-700">
              Componentes desnecessários removidos. Apenas o Hero1 permanece como exemplo.
            </p>
            <div className="mt-4 p-4 bg-blue-50 rounded">
              <h4 className="font-bold text-blue-800 mb-2">� Como usar:</h4>
              <p className="text-blue-700 text-sm">
                Copie o Hero1.tsx para qualquer template e customize as props conforme necessário
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BibliotecaTemplate;
