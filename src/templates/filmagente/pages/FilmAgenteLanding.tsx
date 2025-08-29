import HeroFilm from "../components/HeroFilm";
import FilmFeatures from "../components/FilmFeatures";
import FilmPricing from "../components/FilmPricing";
import Footer from "@/shared/Footer";

const FilmAgenteLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroFilm />
      <FilmFeatures />
      <FilmPricing />
      <Footer />
    </div>
  );
};

export default FilmAgenteLanding;
