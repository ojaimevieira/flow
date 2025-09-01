import { Button } from "@/shared/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { Check, Star, Clock, Users } from "lucide-react";

const Pricing = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-darker-bg to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Oferta Especial de Lançamento
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Acesso vitalício por um preço especial - Apenas hoje!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="relative bg-dark-card border-primary shadow-neon scale-105">
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-gradient-primary px-6 py-2 rounded-full flex items-center text-sm font-medium animate-pulse">
                <Star className="w-4 h-4 mr-2" />
                Oferta Limitada - Hoje Apenas
              </div>
            </div>

            <CardHeader className="text-center pb-8 pt-12">
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                Curso Completo de Edição de Produtos
              </CardTitle>
              
              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-center justify-center gap-4 mb-2">
                  <span className="text-2xl text-muted-foreground line-through">R$ 297,00</span>
                  <span className="text-5xl font-bold text-primary">R$ 47,00</span>
                </div>
                <p className="text-primary font-semibold">Economia de R$ 250,00</p>
              </div>

              {/* Urgency */}
              <div className="flex items-center justify-center gap-2 text-orange-400 mb-6">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Restam apenas algumas vagas</span>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-primary p-1 mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-muted-foreground">Acesso vitalício completo</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-primary p-1 mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-muted-foreground">Todos os módulos + 3 bônus exclusivos</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-primary p-1 mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-muted-foreground">20+ templates testados e aprovados</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-primary p-1 mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-muted-foreground">Banco com 50+ fundos profissionais</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-primary p-1 mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-muted-foreground">Suporte completo incluído</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-primary p-1 mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-muted-foreground">Updates gratuitos para sempre</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-gradient-primary p-1 mr-3 flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-muted-foreground">7 dias de garantia total</span>
                </div>
              </div>

              <Button 
                size="lg"
                className="w-full bg-gradient-primary hover:shadow-neon animate-glow-pulse text-lg py-4 mb-6"
              >
                🚀 Garantir Minha Vaga Agora - R$ 47,00
              </Button>

              {/* Value Proposition */}
              <div className="bg-gradient-secondary border border-primary/30 rounded-lg p-4 text-center">
                <h4 className="font-bold text-primary mb-2">Por que vale a pena?</h4>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>• Uma sessão fotográfica = <span className="text-primary font-semibold">R$ 500-1500</span></p>
                  <p>• O curso <span className="text-primary font-semibold">se paga com a primeira foto</span> editada</p>
                  <p>• <span className="text-primary font-semibold">ROI imediato</span> para qualquer produto</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-12">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
            <Users className="w-5 h-5" />
            <span>Apenas os primeiros 100 alunos terão acesso por este preço</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Depois volta ao preço normal: R$ 297,00
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
