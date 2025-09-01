import { Card, CardContent } from "@/shared/ui/card";
import { Badge } from "@/shared/ui/badge";
import { Button } from "@/shared/ui/button";
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  Clock,
  MapPin,
  Calendar,
  User,
  Building2
} from "lucide-react";

const ContatoSection = () => {
  const horarios = [
    { dia: "Segunda a Sexta", horario: "9h às 18h" },
    { dia: "Sábados", horario: "9h às 16h" },
    { dia: "Domingos", horario: "10h às 14h" }
  ];

  const formasContato = [
    {
      icon: Phone,
      titulo: "Ligue Agora",
      subtitulo: "Fale com especialista",
      contato: "(21) 97884-3534",
      acao: "Ligar",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: MessageCircle,
      titulo: "WhatsApp", 
      subtitulo: "Atendimento imediato",
      contato: "Plantão 24h",
      acao: "Chamar",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Mail,
      titulo: "Email",
      subtitulo: "Receba material completo",
      contato: "vendas@sawala.com.br",
      acao: "Enviar",
      color: "from-amber-500 to-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-amber-600/20 text-amber-400 border-amber-500/30 mb-6 text-lg px-6 py-2">
            <Building2 className="w-5 h-5 mr-2" />
            FALE COM A SAWALA
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Agende Sua Visita e
            <span className="block bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Realize Seu Sonho
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Nossa equipe está pronta para apresentar todos os detalhes do empreendimento. 
            Atendimento personalizado e condições especiais.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Formulário */}
          <div className="bg-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">
              Solicite Atendimento Personalizado
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Nome Completo
                </label>
                <div className="relative">
                  <User className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text"
                    placeholder="Seu nome completo"
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-slate-400"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Telefone/WhatsApp
                  </label>
                  <div className="relative">
                    <Phone className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input 
                      type="tel"
                      placeholder="(21) 99999-9999"
                      className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-slate-400"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input 
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-slate-400"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Interesse
                </label>
                <select className="w-full px-4 py-3 bg-slate-800/50 border border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white">
                  <option>Selecione sua preferência</option>
                  <option>Studio (35m²)</option>
                  <option>1 Quarto (52m²)</option>
                  <option>2 Quartos (75m²)</option>
                  <option>3 Quartos (95m²)</option>
                  <option>Investimento/Locação</option>
                  <option>Apenas informações</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Melhor horário para contato
                </label>
                <div className="relative">
                  <Clock className="w-5 h-5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white">
                    <option>Manhã (9h-12h)</option>
                    <option>Tarde (12h-18h)</option>
                    <option>Noite (18h-20h)</option>
                    <option>Fins de semana</option>
                  </select>
                </div>
              </div>

              <Button 
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-amber-600 hover:from-blue-700 hover:to-amber-700 text-white font-bold py-4 text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Visita Agora
              </Button>
            </div>

            <p className="text-xs text-slate-400 mt-4 text-center">
              Seus dados estão seguros. Não fazemos spam.
            </p>
          </div>

          {/* Informações de Contato */}
          <div className="space-y-8">
            
            {/* Formas de Contato */}
            <div className="space-y-4">
              {formasContato.map((contato, index) => (
                <Card 
                  key={index}
                  className="bg-slate-700/50 border-slate-600 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-br ${contato.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <contato.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">{contato.titulo}</h4>
                          <p className="text-slate-300 text-sm">{contato.subtitulo}</p>
                          <p className="text-amber-400 font-semibold">{contato.contato}</p>
                        </div>
                      </div>
                      
                      <Button 
                        variant="outline"
                        className="border-slate-500 text-slate-300 hover:bg-slate-600 hover:text-white"
                      >
                        {contato.acao}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Horários de Atendimento */}
            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Clock className="w-6 h-6 text-amber-400" />
                  <h3 className="text-xl font-bold text-white">Horários de Atendimento</h3>
                </div>
                
                <div className="space-y-2">
                  {horarios.map((horario, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <span className="text-slate-300">{horario.dia}</span>
                      <Badge className="bg-blue-600/20 text-blue-400 border-blue-500/30">
                        {horario.horario}
                      </Badge>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-slate-600">
                  <p className="text-sm text-slate-400">
                    <strong className="text-amber-400">Plantão de Vendas:</strong> Finais de semana no local da obra
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Endereço do Stand */}
            <Card className="bg-amber-600/10 border-amber-500/30">
              <CardContent className="p-6 text-center">
                <MapPin className="w-8 h-8 text-amber-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Stand de Vendas</h4>
                <p className="text-slate-300 mb-4">
                  Rua Moura Brasil, 44 - Laranjeiras<br />
                  (Em frente ao empreendimento)
                </p>
                <Button 
                  variant="outline" 
                  className="border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900"
                >
                  Como Chegar
                </Button>
              </CardContent>
            </Card>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContatoSection;
