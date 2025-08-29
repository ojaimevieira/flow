import { Badge } from "@/shared/ui/badge";
import { Card, CardContent } from "@/shared/ui/card";
import { 
  DollarSign,
  Clock,
  TrendingUp,
  Target,
  Zap,
  Star,
  AlertTriangle
} from "lucide-react";

interface PainsSectionProps {
  visible: Record<string, boolean>;
}

const PainsSection = ({ visible }: PainsSectionProps) => {
  const painPoints = [
    { icon: DollarSign, text: "Gastar fortunas com fotógrafos e estúdios" },
    { icon: Clock, text: "Perder tempo organizando sessões fotográficas" },
    { icon: TrendingUp, text: "Ter fotos amadoras que não convertem em vendas" },
    { icon: Target, text: "Depender de espaços e equipamentos caros" },
    { icon: Zap, text: "Limitações criativas por falta de recursos" },
    { icon: Star, text: "Ver seus produtos não renderem como merecem" },
  ];

  return (
    <section id="pains" className="py-20" data-animate>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-red-500/40 text-red-400 text-lg px-6 py-2">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Pains
          </Badge>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
              Problemas Que Você Enfrenta
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-red-500/60 to-red-300/60 rounded-full mx-auto" />
        </div>

        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-700"
          style={{
            opacity: visible["pains"] ? 1 : 0,
            transform: visible["pains"] ? "translateY(0px)" : "translateY(40px)",
          }}
        >
          {painPoints.map((item, i) => (
            <Card key={i} className="bg-dark-card/60 border-red-500/30 hover:border-red-400/50 transition-all duration-300 hover:shadow-2xl group">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-red-400" />
                </div>
                <p className="text-foreground leading-relaxed">{item.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainsSection;
