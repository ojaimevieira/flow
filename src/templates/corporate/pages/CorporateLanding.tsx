import HeroCorporate from "../components/HeroCorporate";
import Footer from "@/shared/Footer";

const CorporateLanding = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroCorporate />
      {/* Outras seções podem ser adicionadas aqui */}
      <Footer />
    </div>
  );
};

export default CorporateLanding;
