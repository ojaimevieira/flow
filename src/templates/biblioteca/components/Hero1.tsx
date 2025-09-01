import { Card, CardContent } from "@/shared/ui/card";
import { Instagram, Facebook } from "lucide-react";

interface Hero1Props {
  domain: string;
  handle: string;
  instagramUrl?: string;
  facebookUrl?: string;
}

export const Hero1 = ({ 
  domain, 
  handle, 
  instagramUrl, 
  facebookUrl
}: Hero1Props) => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl">
        <CardContent className="p-12 text-center">
          {/* Domínio */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 tracking-wide">
            <span className="bg-gradient-to-r from-[hsl(var(--template-primary))] to-[hsl(var(--template-secondary))] bg-clip-text text-transparent">
              {domain}
            </span>
          </h1>
          
          {/* Redes Sociais */}
          <div className="flex justify-center items-center gap-6 mb-6">
            {instagramUrl && (
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[hsl(var(--template-primary))] transition-colors duration-300"
              >
                <Instagram size={36} />
              </a>
            )}
            {facebookUrl && (
              <a 
                href={facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[hsl(var(--template-secondary))] transition-colors duration-300"
              >
                <Facebook size={36} />
              </a>
            )}
          </div>
          
          {/* Handle */}
          <p className="text-xl text-muted-foreground font-medium">
            {handle}
          </p>
          
          {/* Badge de identificação */}
          <div className="mt-6">
            <span className="bg-[hsl(var(--template-primary))]/20 text-[hsl(var(--template-primary))] px-3 py-1 rounded-full text-sm font-mono border border-[hsl(var(--template-primary))]/30">
              📄 Hero1.tsx
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
