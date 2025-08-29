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
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Garanta seu acesso com valor</span>
            <br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">promocional de lançamento</span>
          </h2>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-dark-card to-darker-bg border-2 border-primary shadow-2xl shadow-primary/10 relative overflow-hidden">
            <CardHeader className="text-center pt-8 pb-6">
              {/* Main Price */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-8xl font-bold text-primary mb-2">R$19,70*</div>
                  <div className="text-muted-foreground text-lg">
                    *valor da primeira parcela de <span className="text-primary font-bold">12x de R$19,70</span>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="px-8 pb-8">
              {/* Payment Options */}
              <div className="text-center mb-8">
                <div className="bg-darker-bg/50 rounded-xl p-6 border border-primary/20">
                  <div className="grid md:grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary mb-2">12x R$ 19,70</div>
                      <div className="text-muted-foreground text-sm">no cartão de crédito</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-400 mb-2">R$ 197</div>
                      <div className="text-muted-foreground text-sm">à vista no PIX/boleto</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guarantee Section */}
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl p-8 mb-8 border border-green-500/30">
                <div className="text-center">
                  <div className="w-20 h-20 bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-10 h-10 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Garantia Sem Letras
                  </h3>
                  <div className="text-6xl font-bold text-green-400 mb-4">7 DIAS</div>
                  <p className="text-muted-foreground mb-6">
                    Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro. 
                    Sem perguntas, sem burocracia.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-muted-foreground">Reembolso total</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-muted-foreground">Sem burocracia</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-muted-foreground">Processo rápido</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-muted-foreground">Total transparência</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center space-y-6">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-neon transition-all duration-300 text-xl px-16 py-6 rounded-full group animate-glow-pulse w-full md:w-auto"
                >
                  QUERO GARANTIR MINHA VAGA AGORA
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span>Compra 100% segura</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    <span>Acesso imediato</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Satisfação garantida</span>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="text-center pt-4 border-t border-border">
                  <p className="text-muted-foreground text-sm mb-4">
                    Aceitamos os principais cartões de crédito e PIX
                  </p>
                  <div className="flex justify-center space-x-6 opacity-60">
                    <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded text-white text-xs flex items-center justify-center font-bold">VISA</div>
                    <div className="w-12 h-8 bg-gradient-to-r from-red-600 to-orange-600 rounded text-white text-xs flex items-center justify-center font-bold">MASTER</div>
                    <div className="w-12 h-8 bg-gradient-to-r from-purple-600 to-purple-700 rounded text-white text-xs flex items-center justify-center font-bold">ELO</div>
                    <div className="w-12 h-8 bg-gradient-to-r from-green-600 to-green-700 rounded text-white text-xs flex items-center justify-center font-bold">PIX</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-lg">
            <span className="text-primary font-semibold">Quer ter ainda mais certeza?</span> Role para baixo e veja as dúvidas mais frequentes
          </p>
        </div>
      </div>
    </section>
  );
};

export default FilmPricing;
