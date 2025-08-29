import { Button } from "@/components/ui/button";
import { Clock, Users, Award } from "lucide-react";

const HeroRestauranteCurso = () => {
  return (
    <section className="relative min-h-screen bg-gradient-yellow overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-template-primary/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-template-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-template-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge/Circle */}
          <div className="inline-flex items-center justify-center w-40 h-40 bg-white rounded-full shadow-lg mb-8 mx-auto">
            <div className="text-center">
              <div className="text-template-primary font-bold text-lg mb-1">VENDÃO</div>
              <div className="text-template-primary font-bold text-lg mb-1">COMIDA</div>
              <div className="w-16 h-16 bg-template-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl">🍽️</span>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-template-accent mb-6 leading-tight">
            AUMENTE SEU FATURAMENTO EM ATÉ{" "}
            <span className="text-6xl md:text-8xl">30%</span>{" "}
            ATRAINDO MAIS CLIENTES TODOS OS DIAS!
          </h1>

          <p className="text-xl text-template-accent mb-8">
            Descubra como você pode saber <strong>duplicar suas vendas</strong> no delivery em{" "}
            <span className="bg-template-primary text-white px-2 py-1 rounded font-bold">19 dias!</span>
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-8 max-w-2xl mx-auto">
            <div className="text-center">
              <Clock className="w-8 h-8 text-template-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-template-accent">19</div>
              <div className="text-sm text-template-accent">DIAS</div>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-template-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-template-accent">500k+</div>
              <div className="text-sm text-template-accent">CLIENTES</div>
            </div>
            <div className="text-center">
              <Award className="w-8 h-8 text-template-accent mx-auto mb-2" />
              <div className="text-2xl font-bold text-template-accent">30%</div>
              <div className="text-sm text-template-accent">AUMENTO</div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            size="lg" 
            className="bg-template-primary hover:bg-template-primary/90 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-8"
          >
            🔥 QUERO COMEÇAR AGORA!
          </Button>

          <p className="text-template-accent text-lg font-semibold">
            Mais de <span className="text-template-primary font-bold">500.000 clientes</span> já foram atendidos!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroRestauranteCurso;
