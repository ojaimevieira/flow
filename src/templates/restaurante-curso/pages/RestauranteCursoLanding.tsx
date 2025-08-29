import HeroRestauranteCurso from "../components/HeroRestauranteCurso";
import PorqueCresce from "../components/PorqueCresce";
import LembrarRestaurante from "../components/LembrarRestaurante";
import ModulosCurso from "../components/ModulosCurso";
import DepoimentosCurso from "../components/DepoimentosCurso";
import OfertaCurso from "../components/OfertaCurso";
import InscricoesEncerradas from "../components/InscricoesEncerradas";
import FAQRestaurante from "../components/FAQRestaurante";
import Footer from "@/shared/Footer";

const RestauranteCursoLanding = () => {
  return (
    <div className="theme-restaurante-curso min-h-screen bg-background">
      <HeroRestauranteCurso />
      <PorqueCresce />
      <LembrarRestaurante />
      <ModulosCurso />
      <DepoimentosCurso />
      <OfertaCurso />
      <InscricoesEncerradas />
      <FAQRestaurante />
      <Footer />
    </div>
  );
};

export default RestauranteCursoLanding;
