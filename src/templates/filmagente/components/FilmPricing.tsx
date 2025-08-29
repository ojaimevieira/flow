import { Button } from "@/shared/ui/button";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent, CardHeader } from "@/shared/ui/card";
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  Star, 
  Zap,
  Crown,
  Gift,
  ArrowRight,
  Timer
} from "lucide-react";

const FilmPricing = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-darker-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Timer Section */}
        <div className="text-center mb-12">
          <Badge variant="destructive" className="mb-4 text-lg px-6 py-2 animate-pulse">
            <Timer className="w-4 h-4 mr-2" />
            Oferta por tempo limitado!
          </Badge>
          <div className="bg-dark-card border border-red-500/30 rounded-2xl p-6 max-w-md mx-auto">
            <div className="text-red-400 font-medium mb-2">Esta oferta expira em:</div>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-white">23</div>
                <div className="text-xs text-muted-foreground">HORAS</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">45</div>
                <div className="text-xs text-muted-foreground">MIN</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">12</div>
                <div className="text-xs text-muted-foreground">SEG</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-400">⚡</div>
                <div className="text-xs text-muted-foreground">URGENTE</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-dark-card to-darker-bg border-2 border-primary shadow-2xl shadow-primary/10 relative overflow-hidden">
            {/* Highlight Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Badge className="bg-gradient-primary text-white px-6 py-2 text-sm font-bold">
                <Crown className="w-4 h-4 mr-1" />
                MELHOR OFERTA
              </Badge>
            </div>

            <CardHeader className="text-center pt-12 pb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  FilmAgente Completo
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Tudo que você precisa para dominar a criação de vídeos com IA
              </p>

              {/* Pricing */}
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-2xl text-muted-foreground line-through">R$ 997,00</span>
                  <Badge variant="destructive" className="text-lg px-3 py-1">
                    84% OFF
                  </Badge>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-primary mb-2">R$ 159</div>
                  <div className="text-muted-foreground text-lg">
                    ou 12x de <span className="text-primary font-bold">R$ 19,70</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="px-8 pb-8">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Left Column - What's Included */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                    <Gift className="w-5 h-5 mr-2 text-primary" />
                    O que está incluso:
                  </h3>
                  <div className="space-y-3">
                    {[
                      "Curso completo de criação com IA (20h)",
                      "Templates de roteiros profissionais",
                      "Banco de prompts otimizados",
                      "Comunidade exclusiva de alunos",
                      "Certificado de conclusão",
                      "Atualizações gratuitas vitalícias",
                      "Suporte direto por 90 dias"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Bonuses */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                    <Star className="w-5 h-5 mr-2 text-accent" />
                    Bônus exclusivos:
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "Masterclass de Storytelling", value: "R$ 297" },
                      { name: "Kit de Ferramentas IA Premium", value: "R$ 197" },
                      { name: "Workshop ao vivo mensal", value: "R$ 97" },
                      { name: "Scripts de venda para vídeos", value: "R$ 147" }
                    ].map((bonus, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-darker-bg/50 rounded-lg border border-primary/10">
                        <div className="flex items-center space-x-3">
                          <Zap className="w-4 h-4 text-accent" />
                          <span className="text-foreground text-sm">{bonus.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {bonus.value}
                        </Badge>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Valor total dos bônus:</div>
                      <div className="text-lg font-bold text-primary">R$ 738,00</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center space-y-6">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-neon transition-all duration-300 text-xl px-12 py-6 rounded-full group animate-glow-pulse w-full md:w-auto"
                >
                  GARANTIR MINHA VAGA AGORA
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Guarantees */}
                <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>7 dias de garantia</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>Acesso imediato</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Pagamento seguro</span>
                  </div>
                </div>

                {/* Payment Options */}
                <div className="text-center pt-4 border-t border-border">
                  <p className="text-muted-foreground text-sm mb-2">
                    Aceitamos todos os cartões de crédito e PIX
                  </p>
                  <div className="flex justify-center space-x-4 opacity-60">
                    <div className="w-8 h-5 bg-gradient-to-r from-blue-600 to-blue-700 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                    <div className="w-8 h-5 bg-gradient-to-r from-red-600 to-orange-600 rounded text-white text-xs flex items-center justify-center font-bold">MC</div>
                    <div className="w-8 h-5 bg-gradient-to-r from-green-600 to-green-700 rounded text-white text-xs flex items-center justify-center font-bold">PIX</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Mais de 2.500 pessoas já transformaram seus vídeos</p>
          <div className="flex justify-center items-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-foreground font-medium">4.9/5.0 (847 avaliações)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilmPricing;
