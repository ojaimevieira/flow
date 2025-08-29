import { Button } from "@/components/ui/button";

// Import da imagem
import logoVendaoComida from "@/assets/marca_venda-mais-comida-insta-nc.png";

const HeroRestauranteCurso = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-400 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-orange-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-yellow-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline - Menor */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-purple-600 mb-12 leading-tight">
            AUMENTE SEU FATURAMENTO <span className="text-purple-800">EM ATÉ 30%</span> ATRAINDO MAIS CLIENTES{" "}
            <span className="text-purple-800">TODOS OS DIAS!</span>
          </h1>

          {/* Logo da Imagem com Emojis Animados */}
          <div className="relative inline-block mb-16">
            {/* Container para imagem e emojis circulares */}
            <div className="relative mx-auto flex items-center justify-center" style={{ width: '420px', height: '420px' }}>
              {/* Imagem Central - Tamanho Original */}
              <img 
                src={logoVendaoComida} 
                alt="Vendão Comida Instagram" 
                className="max-w-none w-auto h-auto drop-shadow-2xl relative z-10"
                style={{ maxHeight: '280px', width: 'auto' }}
              />

              {/* Emojis em círculo perfeito - Mais próximos do centro */}
              {/* 0° - Top */}
              <div className="absolute transform -translate-x-1/2" style={{ top: '8%', left: '50%' }}>
                <div className="text-5xl animate-bounce" style={{ animationDelay: '0s' }}>🍕</div>
              </div>
              
              {/* 45° - Top Right */}
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ top: '20%', right: '20%' }}>
                <div className="text-5xl animate-bounce" style={{ animationDelay: '0.2s' }}>🍟</div>
              </div>
              
              {/* 90° - Right */}
              <div className="absolute transform -translate-y-1/2" style={{ top: '50%', right: '8%' }}>
                <div className="text-5xl animate-bounce" style={{ animationDelay: '0.4s' }}>😘</div>
              </div>
              
              {/* 135° - Bottom Right */}
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ bottom: '20%', right: '20%' }}>
                <div className="text-5xl animate-bounce" style={{ animationDelay: '0.6s' }}>🍩</div>
              </div>
              
              {/* 180° - Bottom */}
              <div className="absolute transform -translate-x-1/2" style={{ bottom: '8%', left: '50%' }}>
                <div className="text-5xl animate-bounce" style={{ animationDelay: '0.8s' }}>💰</div>
              </div>
              
              {/* 225° - Bottom Left */}
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ bottom: '20%', left: '20%' }}>
                <div className="text-5xl animate-bounce" style={{ animationDelay: '1s' }}>🍦</div>
              </div>
              
              {/* 270° - Left */}
              <div className="absolute transform -translate-y-1/2" style={{ top: '50%', left: '8%' }}>
                <div className="text-5xl animate-bounce" style={{ animationDelay: '1.2s' }}>🌮</div>
              </div>
              
              {/* 315° - Top Left */}
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ top: '20%', left: '20%' }}>
                <div className="text-5xl animate-bounce" style={{ animationDelay: '1.4s' }}>💰</div>
              </div>

              {/* Emojis adicionais em círculo intermediário */}
              {/* 22.5° */}
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ top: '15%', right: '30%' }}>
                <div className="text-4xl animate-bounce" style={{ animationDelay: '0.1s' }}>🍫</div>
              </div>
              
              {/* 67.5° */}
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ top: '30%', right: '15%' }}>
                <div className="text-4xl animate-bounce" style={{ animationDelay: '0.3s' }}>🍷</div>
              </div>
              
              {/* 112.5° */}
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ bottom: '30%', right: '15%' }}>
                <div className="text-4xl animate-bounce" style={{ animationDelay: '0.5s' }}>😍</div>
              </div>
              
              {/* 157.5° */}
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ bottom: '15%', right: '30%' }}>
                <div className="text-4xl animate-bounce" style={{ animationDelay: '0.7s' }}>🍔</div>
              </div>
              
              {/* 202.5° */}
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ bottom: '15%', left: '30%' }}>
                <div className="text-4xl animate-bounce" style={{ animationDelay: '0.9s' }}>☕</div>
              </div>
              
              {/* 247.5° */}
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ bottom: '30%', left: '15%' }}>
                <div className="text-4xl animate-bounce" style={{ animationDelay: '1.1s' }}>🍺</div>
              </div>
              
              {/* 292.5° */}
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ top: '30%', left: '15%' }}>
                <div className="text-4xl animate-bounce" style={{ animationDelay: '1.3s' }}>🍝</div>
              </div>
              
              {/* 337.5° */}
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2" style={{ top: '15%', left: '30%' }}>
                <div className="text-4xl animate-bounce" style={{ animationDelay: '1.5s' }}>🥤</div>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <div className="mb-12">
            <p className="text-2xl md:text-3xl text-gray-700 mb-4">
              Descubra como você pode{" "}
              <span className="text-purple-600 font-bold">até duplicar suas vendas</span>{" "}
              investindo no{" "}
              <span className="font-bold text-gray-800">Instagram.</span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="space-y-6">
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              🚀 QUERO APRENDER AGORA!
            </Button>
            
            <p className="text-gray-600 text-lg">
              Transforme seu Instagram em uma máquina de vendas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroRestauranteCurso;
