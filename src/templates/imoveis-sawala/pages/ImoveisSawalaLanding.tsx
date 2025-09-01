import { Footer } from "@/shared";
import { 
  HeroSection,
  DiferenciaisSection,
  PlantasSection,
  LocalizacaoSection,
  TestemunhosSection,
  ContatoSection
} from "../components";

const ImoveisSawalaLanding = () => {
  return (
    <div className="theme-imoveis-sawala min-h-screen bg-background text-foreground">
      <HeroSection />
      <DiferenciaisSection />
      <PlantasSection />
      <LocalizacaoSection />
      <TestemunhosSection />
      <ContatoSection />
      <Footer />
    </div>
  );
};

export default ImoveisSawalaLanding;
