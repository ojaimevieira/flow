import HeroGestaoSaude from "../components/HeroGestaoSaude";
import BeneficiosGestao from "../components/BeneficiosGestao";
import EstatisticasGestao from "../components/EstatisticasGestao";
import ModulosCurso from "../components/ModulosCurso";
import DepoimentosGestao from "../components/DepoimentosGestao";
import OfertaGestao from "../components/OfertaGestao";
import FAQGestao from "../components/FAQGestao";
import Footer from "@/shared/Footer";

const GestaoSaudeLanding = () => {
  return (
    <div className="theme-gestao-saude min-h-screen bg-background">
      <HeroGestaoSaude />
      <BeneficiosGestao />
      <ModulosCurso />
      <DepoimentosGestao />
      <OfertaGestao />
      <FAQGestao />
      <Footer />
    </div>
  );
};

export default GestaoSaudeLanding;
