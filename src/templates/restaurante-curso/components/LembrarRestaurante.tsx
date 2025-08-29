import { AlertTriangle, TrendingDown, Users, Target } from "lucide-react";

const LembrarRestaurante = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-template-accent mb-12 leading-tight">
            O QUE VOCÊ ESTÁ FAZENDO PARA LEMBRAR-SE DO SEU 
            <span className="text-template-primary"> RESTAURANTE NA HORA DA DECISÃO?</span>
          </h2>

          {/* Icons and Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <AlertTriangle className="w-8 h-8 text-template-primary" />
              </div>
              <h3 className="font-bold text-template-accent text-lg mb-2">ATENÇÃO</h3>
              <p className="text-template-accent text-sm">Restaurante esquecido = Cliente perdido</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingDown className="w-8 h-8 text-template-primary" />
              </div>
              <h3 className="font-bold text-template-accent text-lg mb-2">QUEDAS</h3>
              <p className="text-template-accent text-sm">Vendas em declínio constante</p>
            </div>
            
            <div className="text-center md:col-span-1 col-span-2">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-template-primary" />
              </div>
              <h3 className="font-bold text-template-accent text-lg mb-2">CONCORRÊNCIA</h3>
              <p className="text-template-accent text-sm">200mil restaurantes no iFood</p>
            </div>
          </div>

          {/* Main Question */}
          <div className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-template-accent mb-6">
              PRA QUEM É ESTE CURSO?
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-template-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-template-accent mb-2">PROPRIETÁRIOS</h4>
                  <p className="text-gray-600 text-sm">Donos de restaurantes, lanchonetes, hamburguerias, pizzarias</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-template-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-template-accent mb-2">EMPREENDEDORES</h4>
                  <p className="text-gray-600 text-sm">Quem quer começar no ramo alimentício</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Target className="w-6 h-6 text-template-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-template-accent mb-2">GESTORES</h4>
                  <p className="text-gray-600 text-sm">Gerentes que querem aumentar as vendas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Message */}
          <div className="bg-template-primary rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Por que na pandemia meus restaurantes cresceram 40% enquanto 60% fecharam as portas?
            </h3>
            <p className="text-xl mb-6">
              Não é sorte, são estratégias que qualquer restaurante pode aplicar!
            </p>
            <div className="bg-white/20 rounded-lg p-4">
              <p className="text-lg font-medium">
                "O segredo está em fazer os clientes lembrarem do seu restaurante na hora da fome"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LembrarRestaurante;
