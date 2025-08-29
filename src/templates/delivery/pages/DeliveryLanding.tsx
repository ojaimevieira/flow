import HeroDelivery from "../components/HeroDelivery";
import ProblemsDelivery from "../components/ProblemsDelivery";
import SolutionDelivery from "../components/SolutionDelivery";
import TestimonialsDelivery from "../components/TestimonialsDelivery";
import PricingDelivery from "../components/PricingDelivery";
import FAQDelivery from "../components/FAQDelivery";
import Footer from "@/shared/Footer";

const DeliveryLanding = () => {
  return (
    <div className="theme-delivery min-h-screen bg-background">
      <HeroDelivery />
      <ProblemsDelivery />
      <SolutionDelivery />
      <TestimonialsDelivery />
      <PricingDelivery />
      <FAQDelivery />
      <Footer />
    </div>
  );
};

export default DeliveryLanding;
