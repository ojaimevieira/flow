import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Upload, Wand2, Download, Share, CheckCircle } from "lucide-react";

const MethodSection = () => {
  const steps = [
    {
      number: "01",
      title: "Upload do Vídeo",
      description: "Faça upload do seu vídeo bruto ou grave direto na plataforma",
      icon: Upload,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02", 
      title: "IA Analisa",
      description: "Nossa IA analisa e identifica as melhores oportunidades de edição",
      icon: Wand2,
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      title: "Edição Automática", 
      description: "A IA aplica cortes, transições, efeitos e trilha sonora automaticamente",
      icon: CheckCircle,
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "04",
      title: "Resultado Final",
      description: "Baixe seu vídeo profissional ou publique direto nas redes sociais",
      icon: Download,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-purple-600/20 text-purple-400 border-purple-500/30 mb-6">
            Metodologia Exclusiva
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Como Funciona o <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Método IA</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Em apenas 4 passos simples, transforme qualquer vídeo em uma produção profissional
          </p>
        </div>

        {/* Steps Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-purple-500/50 to-transparent z-0" />
                )}
                
                <Card className="relative bg-gray-800/50 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 group h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col">
                    {/* Step Number */}
                    <div className="mb-6">
                      <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {step.number}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      <div className="w-12 h-12 mx-auto bg-gray-700/50 rounded-xl flex items-center justify-center group-hover:bg-gray-600/50 transition-colors duration-300">
                        <step.icon className="w-6 h-6 text-purple-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{step.description}</p>
                      </div>

                      {/* Time indicator */}
                      <div className="mt-6 pt-4 border-t border-gray-700">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                          <span className="text-sm text-gray-500">
                            {index === 0 ? "30s" : index === 1 ? "2min" : index === 2 ? "5min" : "10s"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-3xl p-8 border border-purple-500/30">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Tempo Total: <span className="text-purple-400">Menos de 10 minutos</span>
              </h3>
              <p className="text-gray-400 mb-6">
                O que antes levava horas de edição manual, agora você faz em minutos com nossa IA
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">95%</div>
                  <div className="text-gray-400">Menos tempo editando</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">10x</div>
                  <div className="text-gray-400">Mais produtivo</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-gray-400">Resultado profissional</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
