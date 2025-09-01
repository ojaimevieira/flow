import { Card, CardContent } from "@/shared/ui/card";
import { Instagram, Facebook } from "lucide-react";
import { themeConfigs, type ThemeConfig } from "./themes/themeConfigs";

interface Hero3Props {
  domain: string;
  handle: string;
  instagramUrl?: string;
  facebookUrl?: string;
  theme?: keyof typeof themeConfigs;
  customTheme?: Partial<ThemeConfig>;
}

export const Hero3 = ({ 
  domain, 
  handle, 
  instagramUrl, 
  facebookUrl,
  theme = "personal",
  customTheme
}: Hero3Props) => {
  const themeConfig = customTheme ? { ...themeConfigs[theme], ...customTheme } : themeConfigs[theme];

  return (
    <div className={`min-h-screen ${themeConfig.background} flex items-center justify-center p-6`}>
      <Card className={`${themeConfig.card} backdrop-blur-sm border-${themeConfig.border} shadow-2xl`}>
        <CardContent className="p-12 text-center">
          {/* Domínio */}
          <h1 className={`text-4xl md:text-6xl font-bold text-${themeConfig.text} mb-8 tracking-wide`}>
            {domain}
          </h1>
          
          {/* Redes Sociais */}
          <div className="flex justify-center items-center gap-6 mb-6">
            {instagramUrl && (
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`text-${themeConfig.text} hover:text-pink-400 transition-colors duration-300`}
              >
                <Instagram size={36} />
              </a>
            )}
            {facebookUrl && (
              <a 
                href={facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`text-${themeConfig.text} hover:text-blue-400 transition-colors duration-300`}
              >
                <Facebook size={36} />
              </a>
            )}
          </div>
          
          {/* Handle */}
          <p className={`text-xl text-${themeConfig.muted} font-medium`}>
            {handle}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
