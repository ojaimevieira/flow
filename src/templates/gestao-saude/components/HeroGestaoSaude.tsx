import { Button } from "@/shared/ui/button";

const HeroGestaoSaude = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-cyan-200/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-blue-300/25 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6 hover:bg-blue-200 transition-colors duration-300">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              Gestão em Saúde
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforme sua
              <span className="block text-blue-600 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Gestão em Saúde
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Domine as melhores práticas de gestão hospitalar e clínica com 
              <span className="font-semibold text-gray-800"> metodologias comprovadas</span> 
              e cases reais do mercado.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "🏥 Gestão Hospitalar Eficiente",
                "📊 Análise de Indicadores",
                "💰 Controle Financeiro",
                "👥 Liderança em Saúde"
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg hover:bg-white/80 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <span className="text-2xl">{feature.split(' ')[0]}</span>
                  <span className="text-gray-700 font-medium">{feature.substring(3)}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                🚀 Começar Agora
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              >
                📋 Ver Programa
              </Button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Alunos Formados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">4.9★</div>
                <div className="text-sm text-gray-600">Avaliação</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">24h</div>
                <div className="text-sm text-gray-600">Acesso Total</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="flex-1 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Profissionais de saúde em reunião"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">Online Agora</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">95%</div>
                  <div className="text-xs text-gray-600">Taxa de Sucesso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroGestaoSaude;
