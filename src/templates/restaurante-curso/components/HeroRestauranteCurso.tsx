import { Button } from "@/components/ui/button";

// Import da imagem
import logoVendaoComida from "@/assets/marca_venda-mais-comida-insta-nc.png";

const HeroRestauranteCurso = () => {
  // Distribuição dos emojis em anel, em graus (0° = direita; -90° = topo)
  const ringEmojis: { emoji: string; deg: number; size: string; delay: string }[] = [
    // Removidos: ☕ (xícara), � (chopp), 🥤 (copo), 🍕 (sobreposto ao 😘)
    { emoji: "🍟", deg: -60, size: "text-5xl", delay: "0.1s" },
    { emoji: "😘", deg: -30, size: "text-5xl", delay: "0.2s" },
    { emoji: "🍩", deg: 0, size: "text-5xl", delay: "0.3s" },
    { emoji: "💰", deg: 30, size: "text-5xl", delay: "0.4s" },
    { emoji: "🍦", deg: 60, size: "text-5xl", delay: "0.5s" },
    { emoji: "🌮", deg: 90, size: "text-5xl", delay: "0.6s" },
    { emoji: "💰", deg: 120, size: "text-5xl", delay: "0.7s" },
    { emoji: "🍫", deg: 150, size: "text-4xl", delay: "0.8s" },
    { emoji: "🍷", deg: 180, size: "text-4xl", delay: "0.9s" },
    { emoji: "😍", deg: 210, size: "text-4xl", delay: "1.0s" },
    { emoji: "🍔", deg: 240, size: "text-4xl", delay: "1.1s" },
  // Pizza recolocada entre 🍔 (240°) e 🍟 (300°)
  { emoji: "🍕", deg: 270, size: "text-5xl", delay: "1.25s" },
    { emoji: "", deg: 330, size: "text-4xl", delay: "1.4s" },
  ];
  // Raio do anel (garante folga em relação ao logo, sem encostar)
  const radius = 170; // px
  return (
  <section className="relative min-h-screen bg-hero-radial overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-orange-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-yellow-300/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline - Menor */}
          <h1 className="text-[2.5rem] leading-[1.2] max-w-[37.5rem] mx-auto font-bold text-purple-600 mb-12">
            AUMENTE SEU FATURAMENTO <span className="text-purple-800">EM ATÉ 30%</span> ATRAINDO MAIS CLIENTES{" "}
            <span className="text-purple-800">TODOS OS DIAS!</span>
          </h1>

          {/* Logo da Imagem com Emojis Animados */}
          <div className="relative inline-block mb-16">
            {/* Container para imagem e emojis circulares */}
            <div className="relative mx-auto flex items-center justify-center" style={{ width: 440, height: 440 }}>
              {/* Emojis em anel calculado, sempre fora do logo */}
              {ringEmojis.map(({ emoji, deg, size, delay }, i) => {
                // Converter graus para radianos e calcular posição polar
                const rad = (deg * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;
                return (
                  <div
                    key={i}
                    className="absolute select-none"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    <div className={`${size} animate-bounce`} style={{ animationDelay: delay }}>{emoji}</div>
                  </div>
                );
              })}

              {/* Imagem Central - fica acima do plano de fundo e abaixo dos emojis */}
              <img
                src={logoVendaoComida}
                alt="Vendão Comida Instagram"
                className="max-w-none w-auto h-auto drop-shadow-2xl relative"
                style={{ maxHeight: 300, width: "auto", zIndex: 5 }}
              />
            </div>
          </div>

          {/* Subtitle */}
          <div className="mb-12">
            <p className="text-[2.5rem] leading-[2.6rem] max-w-[28.125rem] mx-auto text-gray-700 mb-4">
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
