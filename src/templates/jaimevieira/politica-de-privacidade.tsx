import { Card, CardContent } from "@/shared/ui/card";

const PoliticaDePrivacidade = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50 shadow-2xl max-w-4xl w-full">
        <CardContent className="p-8 md:p-12">
          {/* Título */}
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Política de Privacidade
          </h1>
          
          {/* Descrição Principal */}
          <div className="text-gray-300 space-y-6">
            <p className="text-lg leading-relaxed">
              Este aplicativo é para uso pessoal/empresarial para automação de publicações no Instagram.
            </p>
            
            {/* Funcionalidades */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">FUNCIONALIDADES:</h2>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Conecta com banco de dados Notion para ler posts agendados
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Faz upload automático de imagens e vídeos para Instagram Business
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Publica conteúdo pré-aprovado em horários agendados
                </li>
              </ul>
            </div>
            
            {/* Uso Pretendido */}
            <div>
              <h2 className="text-xl font-semibold text-white mb-4">USO PRETENDIDO:</h2>
              <ul className="space-y-2 pl-4">
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Apenas para minha própria conta Instagram Business
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Não acessa dados de terceiros
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Não é um produto comercial público
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-2">•</span>
                  Automação de workflow pessoal/empresarial
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PoliticaDePrivacidade;
