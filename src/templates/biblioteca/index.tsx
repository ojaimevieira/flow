import { Hero3 } from '@/shared/components/Hero3';
import { FAQ1 } from '@/shared/components/FAQ1';

const BibliotecaTemplate = () => {
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

      {/* Lista de Componentes Atuais */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            🧩 Componentes Disponíveis
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                🎯 PersonalBrandHero
              </h3>
              <p className="text-gray-600 mb-4">
                Componente Hero para marca pessoal com links sociais
              </p>
              <div className="bg-blue-100 p-3 rounded text-sm">
                <strong>Usado em:</strong> jaimevieira
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                ❓ FAQSection
              </h3>
              <p className="text-gray-600 mb-4">
                Componente FAQ com accordion expansível
              </p>
              <div className="bg-blue-100 p-3 rounded text-sm">
                <strong>Usado em:</strong> filmagente, jaimevieira
              </div>
            </div>
          </div>

          {/* Plano de Numeração */}
          <div className="mt-16 bg-yellow-50 border-2 border-yellow-200 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              📋 Plano de Numeração
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-700 mb-2">🔄 Próximas Alterações:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• PersonalBrandHero → <strong>Hero1</strong></li>
                  <li>• FAQSection → <strong>FAQ1</strong></li>
                  <li>• Identificar novos padrões → Hero2, Hero3, etc.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-700 mb-2">✅ Benefícios:</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Organização clara por versões</li>
                  <li>• Fácil adição de novos padrões</li>
                  <li>• Controle centralizado</li>
                  <li>• Sistema de temas integrado</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BibliotecaTemplate;
