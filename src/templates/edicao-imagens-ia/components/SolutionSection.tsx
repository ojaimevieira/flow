import { Badge } from "@/shared/ui/badge";
import { Card, CardContent } from "@/shared/ui/card";
import { CheckCircle, Wand2 } from "lucide-react";

interface SolutionSectionProps {
  visible: Record<string, boolean>;
}

const SolutionSection = ({ visible }: SolutionSectionProps) => {
  return (
    <section id="solution" className="py-20 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5" data-animate>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-emerald-500/40 text-emerald-400 text-lg px-6 py-2">
            <CheckCircle className="w-4 h-4 mr-2" />
            Solution
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              A Solução Definitiva
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-500/60 to-cyan-400/60 rounded-full mx-auto" />
        </div>

        <div 
          className="max-w-4xl mx-auto transition-all duration-700"
          style={{
            opacity: visible["solution"] ? 1 : 0,
            transform: visible["solution"] ? "translateY(0px)" : "translateY(40px)",
          }}
        >
          <Card className="bg-dark-card/60 border-emerald-500/30 shadow-2xl mb-12">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                    <p className="text-lg">Método: Foto com fundo branco + IA = cenários profissionais</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    <p className="text-lg">Tecnologia: Nano Banana (Google) + Flux Context</p>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full flex items-center justify-center">
                    <Wand2 className="w-16 h-16 text-emerald-400" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">Resultados comprovados</h3>
            <p className="text-lg text-muted-foreground">Veja as transformações reais feitas no curso.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
