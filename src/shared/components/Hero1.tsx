import { Card, CardContent } from "@/shared/ui/card";
import { Instagram, Facebook } from "lucide-react";

interface Hero1Props {
  domain: string;
  handle: string;
  instagramUrl?: string;
  facebookUrl?: string;
  backgroundColor?: string;
}

export const Hero1 = ({ 
  domain, 
  handle, 
  instagramUrl, 
  facebookUrl,
  backgroundColor = "bg-black"
}: Hero1Props) => {
  return (
    <div className={`min-h-screen ${backgroundColor} flex items-center justify-center p-6`}>
      <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50 shadow-2xl">
        <CardContent className="p-12 text-center">
          {/* Domínio */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-wide">
            {domain}
          </h1>
          
          {/* Redes Sociais */}
          <div className="flex justify-center items-center gap-6 mb-6">
            {instagramUrl && (
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors duration-300"
              >
                <Instagram size={36} />
              </a>
            )}
            {facebookUrl && (
              <a 
                href={facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors duration-300"
              >
                <Facebook size={36} />
              </a>
            )}
          </div>
          
          {/* Handle */}
          <p className="text-xl text-gray-300 font-medium">
            {handle}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
