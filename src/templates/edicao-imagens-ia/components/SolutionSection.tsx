import { Badge } from "@/shared/ui/badge";
import { Card, CardContent } from "@/shared/ui/card";
import { CheckCircle, Wand2, ArrowRight } from "lucide-react";

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
            <p className="text-lg text-muted-foreground mb-8">Veja as transformações reais feitas no curso.</p>
            
            {/* Galeria de exemplos em miniatura */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {
                  before: "https://picsum.photos/200/200?random=300",
                  after: "https://picsum.photos/200/200?random=400",
                  label: "Cervejaria"
                },
                {
                  before: "https://picsum.photos/200/200?random=301",
                  after: "https://picsum.photos/200/200?random=401",
                  label: "Neon"
                },
                {
                  before: "https://picsum.photos/200/200?random=302",
                  after: "https://picsum.photos/200/200?random=402",
                  label: "Rústico"
                },
                {
                  before: "https://picsum.photos/200/200?random=303",
                  after: "https://picsum.photos/200/200?random=403",
                  label: "Granito"
                }
              ].map((item, i) => (
                <div key={i} className="relative group cursor-pointer">
                  <div className="aspect-square rounded-lg overflow-hidden bg-dark-card border border-emerald-500/30">
                    <img 
                      src={item.before} 
                      alt={`Exemplo ${i + 1} - antes`}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/200x200/666666/ffffff?text=Ex+${i + 1}`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-2 left-2 right-2 text-center">
                        <Badge className="bg-emerald-500 text-white text-xs">
                          {item.label}
                        </Badge>
                      </div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
