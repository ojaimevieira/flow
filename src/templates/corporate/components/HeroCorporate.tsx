import { Button } from "@/shared/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const HeroCorporate = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Modern office background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Corporate Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/90 backdrop-blur-sm border border-blue-200/50 rounded-full mb-8 shadow-lg">
            <span className="text-sm font-medium text-blue-800">Solução Empresarial</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
            Transforme Seu
            <br />
            <span className="text-blue-400">Negócio Digital</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-blue-50 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Soluções profissionais para empresas que querem crescer no ambiente digital 
            com segurança, eficiência e resultados comprovados.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-12 py-4 rounded-md group shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Solicitar Demonstração
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Implementação em 30 dias",
              "Suporte 24/7 especializado", 
              "ROI garantido em 6 meses"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <CheckCircle className="w-5 h-5 text-green-400 drop-shadow-sm" />
                <span className="text-white font-medium drop-shadow-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCorporate;
