import HeroFilm from "@/components/HeroFilm";
import FilmFeatures from "@/components/FilmFeatures";
import FilmPricing from "@/components/FilmPricing";
import Footer from "@/components/Footer";

const FilmExample = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroFilm />
      <FilmFeatures />
      <FilmPricing />
      <Footer />
    </div>
  );
};

export default FilmExample;
