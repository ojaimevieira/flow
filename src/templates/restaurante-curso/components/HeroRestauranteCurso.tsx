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
            {/* Imagem Central */}
            <div className="relative w-80 h-80 mx-auto">
              {/* Imagem da marca */}
              <img 
                src={logoVendaoComida} 
                alt="Vendão Comida Instagram" 
                className="w-full h-full object-contain drop-shadow-2xl"
              />

              {/* Emojis animados por cima da imagem */}
              {/* Top */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
                <div className="text-4xl animate-bounce" style={{ animationDelay: '0s' }}>🍕</div>
              </div>
              
              {/* Top Right */}
              <div className="absolute top-12 right-8 transform">
                <div className="text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>🍟</div>
              </div>
              
              {/* Right */}
              <div className="absolute right-0 top-1/2 transform translate-x-4 -translate-y-1/2">
                <div className="text-4xl animate-bounce" style={{ animationDelay: '0.4s' }}>😘</div>
              </div>
              
              {/* Bottom Right */}
              <div className="absolute bottom-12 right-8 transform">
                <div className="text-4xl animate-bounce" style={{ animationDelay: '0.6s' }}>🍩</div>
              </div>
              
              {/* Bottom */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4">
                <div className="text-4xl animate-bounce" style={{ animationDelay: '0.8s' }}>💰</div>
              </div>
              
              {/* Bottom Left */}
              <div className="absolute bottom-12 left-8 transform">
                <div className="text-4xl animate-bounce" style={{ animationDelay: '1s' }}>🍦</div>
              </div>
              
              {/* Left */}
              <div className="absolute left-0 top-1/2 transform -translate-x-4 -translate-y-1/2">
                <div className="text-4xl animate-bounce" style={{ animationDelay: '1.2s' }}>🌮</div>
              </div>
              
              {/* Top Left */}
              <div className="absolute top-12 left-8 transform">
                <div className="text-4xl animate-bounce" style={{ animationDelay: '1.4s' }}>💰</div>
              </div>
              
              {/* Emojis adicionais em posições intermediárias */}
              <div className="absolute top-6 left-1/4 transform">
                <div className="text-3xl animate-bounce" style={{ animationDelay: '1.6s' }}>🍫</div>
              </div>
              <div className="absolute top-6 right-1/4 transform">
                <div className="text-3xl animate-bounce" style={{ animationDelay: '1.8s' }}>🍷</div>
              </div>
              <div className="absolute bottom-6 left-1/4 transform">
                <div className="text-3xl animate-bounce" style={{ animationDelay: '2s' }}>😍</div>
              </div>
              <div className="absolute bottom-6 right-1/4 transform">
                <div className="text-3xl animate-bounce" style={{ animationDelay: '2.2s' }}>🍔</div>
              </div>
              <div className="absolute left-16 top-20 transform">
                <div className="text-3xl animate-bounce" style={{ animationDelay: '2.4s' }}>☕</div>
              </div>
              <div className="absolute right-16 top-20 transform">
                <div className="text-3xl animate-bounce" style={{ animationDelay: '2.6s' }}>🍺</div>
              </div>
              <div className="absolute left-16 bottom-20 transform">
                <div className="text-3xl animate-bounce" style={{ animationDelay: '2.8s' }}>🍝</div>
              </div>
              <div className="absolute right-16 bottom-20 transform">
                <div className="text-3xl animate-bounce" style={{ animationDelay: '3s' }}>🥤</div>
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
