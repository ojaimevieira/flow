import { Button } from "@/shared/ui/button";
import { AlertTriangle, Users, Clock, Star } from "lucide-react";

const InscricoesEncerradas = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Message */}
          <div className="bg-red-500 text-white rounded-2xl p-8 mb-12">
            <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">
              INSCRIÇÕES ENCERRADAS!
            </h2>
            <p className="text-xl">
              Infelizmente não consegui criar uma turma para todos os interessados.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-red-500 mb-2">15.247</div>
              <p className="text-gray-600">Pessoas se inscreveram</p>
            </div>
            
            <div className="text-center">
              <Clock className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-red-500 mb-2">48h</div>
              <p className="text-gray-600">Para esgotar as vagas</p>
            </div>
            
            <div className="text-center">
              <Star className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-red-500 mb-2">5.000</div>
              <p className="text-gray-600">Vagas disponíveis</p>
            </div>
          </div>

          {/* Next Opportunity */}
          <div className="bg-gray-50 rounded-2xl p-8 mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              MAS AINDA TEM UMA OPORTUNIDADE!
            </h3>
            
            <p className="text-xl text-gray-600 mb-8">
              Deixe seu e-mail abaixo e seja o primeiro a saber quando abrirmos uma nova turma. 
              Quem se cadastrar terá <strong>desconto exclusivo de 50%</strong>.
            </p>

            {/* Email Form */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex gap-4">
                <input 
                  type="email" 
                  placeholder="Seu melhor e-mail..." 
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-red-500"
                />
                <Button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold">
                  AVISAR-ME
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 text-green-600 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold">2.847 pessoas já se cadastraram para a próxima turma</span>
            </div>
          </div>

          {/* Final Message */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              OBRIGADO PELO INTERESSE!
            </h3>
            <p className="text-lg mb-6">
              Fico muito feliz com a receptividade do curso. Prometo que a próxima turma 
              será ainda melhor, com mais conteúdo e bônus exclusivos.
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <div className="text-4xl">👨‍🍳</div>
              <div className="text-left">
                <p className="font-bold">Eric Egea</p>
                <p className="text-gray-300 text-sm">Criador da metodologia VendãoComida</p>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12">
            <p className="text-gray-500 mb-4">Acompanhe nas redes sociais:</p>
            <div className="flex justify-center gap-6">
              <div className="text-2xl">📱</div>
              <div className="text-2xl">📧</div>
              <div className="text-2xl">💬</div>
              <div className="text-2xl">📺</div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-12 pt-8 border-t text-gray-500 text-sm">
            <p>
              Curso Prático: Como Aumentar as Vendas do seu Restaurante em 19 dias
              <br />
              <strong>Eric Egea • contato@vendaocomida.com.br</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InscricoesEncerradas;
