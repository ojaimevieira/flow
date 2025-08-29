import HeroFilm from "../components/HeroFilm";
import VideoExpertise from "../components/VideoExpertise";
import VideoModules from "../components/VideoModules";
import VideoShowcase from "../components/VideoShowcase";
import TargetAudience from "../components/TargetAudience";
import Methodology from "../components/Methodology";
import StudentsInAction from "../components/StudentsInAction";
import FilmPricing from "../components/FilmPricing";
import FAQ from "../components/FAQ";
import Footer from "@/shared/Footer";

const FilmAgenteLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroFilm />
      <VideoExpertise />
      <VideoModules />
      <VideoShowcase />
      <TargetAudience />
      <Methodology />
      <StudentsInAction />
      <FilmPricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default FilmAgenteLanding;
