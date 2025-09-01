import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Facebook } from "lucide-react";

export const Hero = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <Card className="bg-gray-900/80 backdrop-blur-sm border-gray-700/50 shadow-2xl">
        <CardContent className="p-12 text-center">
          {/* Domínio */}
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-wide">
            jaimevieira.com
          </h1>
          
          {/* Redes Sociais */}
          <div className="flex justify-center items-center gap-6 mb-6">
            <a 
              href="https://instagram.com/ojaimevieira" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-pink-400 transition-colors duration-300"
            >
              <Instagram size={36} />
            </a>
            <a 
              href="https://facebook.com/ojaimevieira" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <Facebook size={36} />
            </a>
          </div>
          
          {/* Handle */}
          <p className="text-xl text-gray-300 font-medium">
            @ojaimevieira
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
